import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const RANGE = "Sheet1!A:F";

async function getAuthClient() {
  const keyBase64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64;
  if (!keyBase64) return null;

  const credentials = JSON.parse(Buffer.from(keyBase64, "base64").toString("utf-8"));
  const auth = new google.auth.GoogleAuth({ credentials, scopes: SCOPES });
  return auth;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message, budget } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const sheetId = process.env.GOOGLE_SHEET_ID;
    const auth = await getAuthClient();

    if (!sheetId || !auth) {
      return NextResponse.json(
        { error: "Contact form not configured. Email smitkapadiya.work@gmail.com directly." },
        { status: 503 }
      );
    }

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            name,
            email,
            company || "—",
            message,
            budget || "—",
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Sheets error:", err);
    return NextResponse.json({ error: "Failed to save. Try email directly." }, { status: 500 });
  }
}
