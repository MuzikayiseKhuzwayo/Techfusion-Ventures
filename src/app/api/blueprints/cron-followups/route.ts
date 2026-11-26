import { NextResponse } from "next/server";
import { sendBlueprintFollowUpEmail } from "@/lib/email";

interface DueEmailRow {
  id: string;
  keyword: string;
  subject: string;
  body_markdown: string;
  blueprint_leads: {
    work_email: string;
    call_booked: boolean;
    unsubscribed: boolean;
  } | null;
}

export async function GET(req: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({
      ok: true,
      processed: 0,
      note: "SUPABASE_URL / SUPABASE_SERVICE_KEY not configured yet.",
    });
  }

  const sbHeaders = {
    Authorization: `Bearer ${supabaseKey}`,
    apikey: supabaseKey,
    "Content-Type": "application/json",
  };

  const nowIso = new Date().toISOString();
  const queryUrl =
    `${supabaseUrl}/rest/v1/email_sequence_queue` +
    `?select=id,keyword,subject,body_markdown,blueprint_leads(work_email,call_booked,unsubscribed)` +
    `&status=eq.pending&send_at=lte.${encodeURIComponent(nowIso)}&limit=25`;

  const res = await fetch(queryUrl, { headers: sbHeaders, cache: "no-store" });
  if (!res.ok) {
    const detail = await res.text();
    return NextResponse.json(
      { error: "Failed to query email queue", detail },
      { status: 500 }
    );
  }

  const dueRows = (await res.json()) as DueEmailRow[];
  let sentCount = 0;
  let cancelledCount = 0;
  let failedCount = 0;

  for (const row of dueRows) {
    const lead = row.blueprint_leads;
    if (!lead || lead.call_booked || lead.unsubscribed) {
      await fetch(
        `${supabaseUrl}/rest/v1/email_sequence_queue?id=eq.${row.id}`,
        {
          method: "PATCH",
          headers: sbHeaders,
          body: JSON.stringify({ status: "cancelled" }),
        }
      );
      cancelledCount++;
      continue;
    }

    const result = await sendBlueprintFollowUpEmail({
      to: lead.work_email,
      keyword: row.keyword,
      subject: row.subject,
      bodyText: row.body_markdown,
    });

    await fetch(`${supabaseUrl}/rest/v1/email_sequence_queue?id=eq.${row.id}`, {
      method: "PATCH",
      headers: sbHeaders,
      body: JSON.stringify(
        result.sent
          ? { status: "sent", sent_at: new Date().toISOString() }
          : { status: "failed" }
      ),
    });

    if (result.sent) sentCount++;
    else failedCount++;
  }

  return NextResponse.json({
    ok: true,
    checked: dueRows.length,
    sent: sentCount,
    cancelled: cancelledCount,
    failed: failedCount,
  });
}
