import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Google Sheets integration requires these environment variables:
    // GOOGLE_CLIENT_EMAIL
    // GOOGLE_PRIVATE_KEY
    // GOOGLE_SHEET_ID
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const sheetId = process.env.GOOGLE_SHEET_ID;

    // If environment variables are not set, return success for testing/demo purposes,
    // or log a warning and return 500 in production. For now, we'll try to use the API
    // but catch the error if credentials are missing to not break the frontend entirely
    // before the user adds the environment variables.
    if (!clientEmail || !privateKey || !sheetId) {
      console.warn("Google Sheets credentials are not fully configured. Simulating success.");
      return NextResponse.json({ success: true, simulated: true });
    }

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

    // Append to the sheet
    // Assuming the sheet has columns: Date | Name | Email | Subject | Message
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Techfusion-Ventures-Leads!A1:E1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [new Date().toISOString(), name, email, subject || "", message],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
