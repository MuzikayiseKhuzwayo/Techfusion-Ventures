import { google } from "googleapis";
import { NextResponse } from "next/server";
import { sendOfferStackDossierEmails } from "@/lib/email";
import { getOfferStacksBySelection, OFFER_STACKS } from "@/lib/offer-stacks";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const organization =
      typeof body.organization === "string" ? body.organization.trim() : "";
    const stackId =
      typeof body.stackId === "string" ? body.stackId.trim() : "all";

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and work email are required." },
        { status: 400 }
      );
    }

    const stacks = getOfferStacksBySelection(stackId);
    const matchedSingle = OFFER_STACKS.find((s) => s.id === stackId);
    const selectionLabel = matchedSingle
      ? `${matchedSingle.code}: ${matchedSingle.title}`
      : "Complete 7-Stack Enterprise Dossier";

    const subject = `Offer Stack Dossier: ${selectionLabel}`;
    const message = [
      `Requested specification: ${selectionLabel}`,
      organization ? `Organization: ${organization}` : null,
      "Dispatched automatically via /architecture instant request desk.",
    ]
      .filter(Boolean)
      .join(" | ");

    // Record to Google Sheets if configured
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const sheetId = process.env.GOOGLE_SHEET_ID;

    let sheetAppended = false;
    if (clientEmail && privateKey && sheetId) {
      try {
        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: clientEmail,
            private_key: privateKey,
          },
          scopes: [
            "https://www.googleapis.com/auth/drive",
            "https://www.googleapis.com/auth/drive.file",
            "https://www.googleapis.com/auth/spreadsheets",
          ],
        });

        const sheets = google.sheets({ version: "v4", auth });
        await sheets.spreadsheets.values.append({
          spreadsheetId: sheetId,
          range: "Techfusion-Ventures-Leads!A1:E1",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [[new Date().toISOString(), name, email, subject, message]],
          },
        });
        sheetAppended = true;
      } catch (sheetError) {
        console.error("Failed to append dossier request to Sheets:", sheetError);
      }
    }

    const emailResult = await sendOfferStackDossierEmails({
      name,
      email,
      organization: organization || undefined,
      selectionLabel,
      stacks,
      submittedAt: new Date().toUTCString(),
    });

    return NextResponse.json({
      success: true,
      selectionLabel,
      dispatchedStacks: stacks.map((s) => s.code),
      sheetAppended,
      emailNotification: emailResult,
    });
  } catch (error) {
    console.error("Error processing offer stack dossier request:", error);
    return NextResponse.json(
      { error: "Failed to dispatch specification dossier." },
      { status: 500 }
    );
  }
}
