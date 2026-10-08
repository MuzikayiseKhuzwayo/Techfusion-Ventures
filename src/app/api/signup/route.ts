import { google } from "googleapis";
import { NextResponse } from "next/server";
import { sendLeadNotificationEmails } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email address is required" },
        { status: 400 }
      );
    }

    const leadName = name?.trim() || email.split("@")[0];
    const leadSubject = subject?.trim() || "New Website Sign-up";
    const leadMessage = message?.trim() || "Signed up to receive updates and collaborate.";

    // 1. Record to Google Sheets (if configured)
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
            values: [
              [new Date().toISOString(), leadName, email, leadSubject, leadMessage],
            ],
          },
        });
        sheetAppended = true;
      } catch (sheetError) {
        console.error("Failed to append sign-up to Google Sheets:", sheetError);
      }
    }

    // 2. Dispatch Email Notifications
    // - User notification: We will be in contact soon
    // - Admin notification to muzikhuzwayo@techfusion-ventures.xyz: Someone signed up and deserves a reply
    const emailResult = await sendLeadNotificationEmails({
      name: leadName,
      email,
      subject: leadSubject,
      message: leadMessage,
      submittedAt: new Date().toUTCString(),
    });

    return NextResponse.json({
      success: true,
      sheetAppended,
      emailNotification: emailResult,
    });
  } catch (error) {
    console.error("Error submitting sign-up:", error);
    return NextResponse.json(
      { error: "Failed to process sign-up" },
      { status: 500 }
    );
  }
}
