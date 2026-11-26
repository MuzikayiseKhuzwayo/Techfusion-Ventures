import { google } from "googleapis";
import { NextResponse } from "next/server";
import {
  BLUEPRINT_EMAIL_SEQUENCES,
  getBlueprintByKeyword,
  interpolateTemplate,
} from "@/lib/blueprints-catalog";
import { sendBlueprintInstantEmail } from "@/lib/email";

const DEFAULT_BOOKING_URL =
  process.env.BOOKING_URL ||
  "https://calendly.com/muzikhuzwayo-techfusion-ventures/30min";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const keyword = typeof body.keyword === "string" ? body.keyword.trim().toUpperCase() : "";
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const role = typeof body.role === "string" ? body.role.trim() : "";
    const currentStack =
      typeof body.currentStack === "string" ? body.currentStack.trim() : "Current Stack";
    const qualAnswer =
      typeof body.qualAnswer === "string" ? body.qualAnswer.trim() : "";

    if (!keyword || !name || !email || !company) {
      return NextResponse.json(
        { error: "Name, work email, and company name are required." },
        { status: 400 }
      );
    }

    const blueprint = getBlueprintByKeyword(keyword);
    if (!blueprint) {
      return NextResponse.json({ error: "Blueprint not found." }, { status: 404 });
    }

    const firstName = name.split(/\s+/)[0] || name;
    const sequence =
      BLUEPRINT_EMAIL_SEQUENCES[blueprint.cluster] ||
      BLUEPRINT_EMAIL_SEQUENCES["exec_ops"];

    const templateVars: Record<string, string> = {
      first_name: firstName,
      company_name: company,
      keyword: blueprint.keyword,
      blueprint_title: blueprint.title,
      cluster_name: blueprint.clusterLabel,
      current_stack: currentStack || "your current stack",
      qual_answer: qualAnswer || "manual operational bottlenecks",
      download_url: blueprint.pdfUrl,
      booking_url: DEFAULT_BOOKING_URL,
    };

    // 1. Append to Google Sheets (if configured)
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (clientEmail && privateKey && sheetId) {
      try {
        const auth = new google.auth.GoogleAuth({
          credentials: { client_email: clientEmail, private_key: privateKey },
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });
        const sheets = google.sheets({ version: "v4", auth });
        await sheets.spreadsheets.values.append({
          spreadsheetId: sheetId,
          range: "Techfusion-Ventures-Leads!A1:E1",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [
              [
                new Date().toISOString(),
                name,
                email,
                `Blueprint [${blueprint.keyword}]: ${company}`,
                [
                  role ? `Role: ${role}` : null,
                  `Stack: ${currentStack}`,
                  qualAnswer ? `${blueprint.qualQuestion}: ${qualAnswer}` : null,
                ]
                  .filter(Boolean)
                  .join(" | "),
              ],
            ],
          },
        });
      } catch (err) {
        console.error("[BlueprintAPI] Sheets append failed:", err);
      }
    }

    // 2. Persist lead + enqueue 7 problem-specific follow-ups in Supabase (if configured)
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SECRET_KEY;
    let followUpsQueued = 0;

    if (supabaseUrl && supabaseKey) {
      try {
        const sbHeaders = {
          Authorization: `Bearer ${supabaseKey}`,
          apikey: supabaseKey,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        };
        const leadRes = await fetch(`${supabaseUrl}/rest/v1/blueprint_leads`, {
          method: "POST",
          headers: sbHeaders,
          body: JSON.stringify({
            keyword: blueprint.keyword,
            problem_cluster: blueprint.cluster,
            full_name: name,
            work_email: email,
            company_name: company,
            role_title: role || null,
            current_stack: currentStack || null,
            qual_answer: qualAnswer || null,
          }),
        });
        if (leadRes.ok) {
          const inserted = (await leadRes.json()) as Array<{ id: string }>;
          const leadId = inserted?.[0]?.id;
          if (leadId && sequence?.emails) {
            const nowMs = Date.now();
            const queueRows = sequence.emails
              .filter((e) => e.step >= 1 && e.step <= 7)
              .map((e) => ({
                lead_id: leadId,
                keyword: blueprint.keyword,
                problem_cluster: blueprint.cluster,
                step_number: e.step,
                subject: interpolateTemplate(e.subject, templateVars),
                body_markdown: interpolateTemplate(e.body, templateVars),
                send_at: new Date(
                  nowMs + e.delay_days * 24 * 60 * 60 * 1000
                ).toISOString(),
                status: "pending",
              }));

            const qRes = await fetch(
              `${supabaseUrl}/rest/v1/email_sequence_queue`,
              {
                method: "POST",
                headers: sbHeaders,
                body: JSON.stringify(queueRows),
              }
            );
            if (qRes.ok) {
              followUpsQueued = queueRows.length;
            }
          }
        }
      } catch (sbErr) {
        console.error("[BlueprintAPI] Supabase persistence error:", sbErr);
      }
    }

    // 3. Send Email #0 immediately (PDF link + booking link) + Admin Lead Alert
    const step0 = sequence?.emails?.find((e) => e.step === 0);
    const email0Subject = step0
      ? interpolateTemplate(step0.subject, templateVars)
      : `Your ${blueprint.keyword} Architecture Blueprint is ready`;
    const email0Body = step0
      ? interpolateTemplate(step0.body, templateVars)
      : `Hi ${firstName},\n\nHere is your ${blueprint.title} blueprint: ${blueprint.pdfUrl}\n\nBook a 15-minute Architecture Scoping Call here: ${DEFAULT_BOOKING_URL}`;

    const emailResult = await sendBlueprintInstantEmail({
      name,
      email,
      company,
      role,
      currentStack,
      qualQuestion: blueprint.qualQuestion,
      qualAnswer,
      keyword: blueprint.keyword,
      blueprintTitle: blueprint.title,
      clusterLabel: blueprint.clusterLabel,
      pdfUrl: blueprint.pdfUrl,
      bookingUrl: DEFAULT_BOOKING_URL,
      subject: email0Subject,
      bodyText: email0Body,
    });

    return NextResponse.json({
      success: true,
      keyword: blueprint.keyword,
      pdfUrl: blueprint.pdfUrl,
      bookingUrl: DEFAULT_BOOKING_URL,
      followUpsQueued,
      emailResult,
    });
  } catch (err) {
    console.error("[BlueprintAPI] Unexpected error:", err);
    return NextResponse.json(
      { error: "Unable to process blueprint request." },
      { status: 500 }
    );
  }
}
