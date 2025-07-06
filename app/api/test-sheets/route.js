import { google } from "googleapis";
import { NextResponse } from "next/server";

// Test Google Sheets configuration
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email:
      "nifty-nitesh-trading-google-sh@gentle-mapper-457805-a2.iam.gserviceaccount.com",
    private_key: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7LM4YbeKpcQYG
hb17Psbmu/OvY/5HRKkR42vBsXVwThUVj0befsJvOW+hcZ0PLmAn6zzlZYQZ01sg
KyXcIbCdLnA7knrXdRkBJmy2kpQx+1B5/lcjq1lveZ7k/8H2v4FER5+n+h8kB8rf
+vZwIJiF83/pAJi+lI1GgjnVWzyxPvEFVaB66BddYrbEwZ3NVVt5tbsLrESE77Fe
AnRmH/ICEdeQNtXhA2eA4NealvS18k95FTolrvKgkzteUb6A+c3/1RZSS76rsLtG
ktURDR9eI8E7pGLODMRfLImHSt0qdZwx84fRYaVdW35d06+uMBAfbPZ+LhATwD4+
xI5L10C1AgMBAAECggEAKuyBPfJzNKrd+CBy/eC9YdwP6/SpM0RQZnEKPOLanPzX
EnjnRm543eNk0Xf5zemzdOwaLLw9UWPaJbQnbEZQl5c29z5mC+OHbq9WZn8SW6z3
vWZBqwUoTytrsDXj0BeGSDeJqk6ulgdwc7F8kuWyvKNE/dTccnYkONtz8lUIQ9gX
ogyAyGRH8jBS9CLB48hSMwqy3BdOVy0KjMpNGRb1rUycL7SbwWx9Va4Zqx2pOZiO
t4rh5fp4yHuXxZWATgJPLkPHsiIdpfZq9v7OExj+GuMKDmWYc4DaOedCAoEA00Pm
d/JkJ+u/r87ErXA3MwfcfVOQVvulTn80sJqw5OyDwQKBgQDy4BAX7V5j5N0Y2iR3
nXnmFuHPJ+FcQ3CqpUokd3N8V1d70DLN5ODm1cFDdc4eFpJlgFB11Zt4HFqJgab1
6hlLA5A5hAH1XHiWGa6hGsntPVHRTH4gsmXsCF7lubwjVyNh4OiR2EGZqb5fO2K4
AnJFOxAKXeBSDQW3p+oLDUCDwQKBgQDFSi9fGpC1db/Y+NzuNLDwaIGGF80qVDNw
02fIw+W+K22GZpSya8sbq4MQrQMwbVNYsRX96wTSM4K0fZpgwwRqOd3r6WVavnWb
ftWyoxu4uoTac6rH9Id8oYD2A8QpqIVUE/jFiIBqNfRZpSqUIbbKnK9wJtPmvgit
IXTwHs9p9QKBgB+Ywr86JEN+rLzk9EWTeR5T78CRgaINLAUnR8QCvkV432q+JT3f
/tpJCMGL++qyKQ2HafBKf9VaavTkpyHq+KtnpUW2RML06sMsSCmxYH+6sIA4IViD
nPreA+qDBVTbq0C6j8cZiT9Cc//Tq/4gY1laW7XdjKdgBlRkRfB2IuSBAoGAdkSV
h0aOjykqO7BcCLQvib6sPq1QAVr+h1lD8vd0Zv7zpkkiRJ8X39t+M2Xz7njrKNTn
oRLdDgFxDi/pdq4RnHhaD80XREG+kNuE0ZSzzpaJg8cpDrsI6W6Lt27kjjCG1LMw
Q4IjsQftFjxL/QcE5ArvpKSyDLXIz7ipuDRQFG0CgYEA3/lyxmVzSX2+mDkG94h4
MAIj7MKGzFfDX2y+Smm1J2DGNv53tT8zBcAjVi66UYPQO3gecvO08dCoY86gWGXj
Fb2ZdUkfvIFIKasJOHK4k0Q4Q2HQw4SWe6V/8aKtlWb9/omID4QTzSMa75KRWf7w
bR6cnPDMV+/x43awpa4d16U=
-----END PRIVATE KEY-----`.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

export async function GET() {
  try {
    const spreadsheetId = "1-UwaFATSvzvBqmMB49SWCJ77QfISCjpvQ_WXcFKtuFw";

    // Test 1: Get spreadsheet info
    const spreadsheetInfo = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    // Test 2: Read from Sheet1
    const readResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A1:Z1",
    });

    // Test 3: Try to append a test row
    const testData = [
      [
        new Date().toISOString(),
        "TEST-ENROLLMENT",
        "Test User",
        "test@example.com",
        "1234567890",
        "1234567890",
        "Test Occupation",
        "Beginner",
        "One-Time Payment",
        9999,
        9999,
        "Test Status",
        "",
      ],
    ];

    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:L",
      valueInputOption: "RAW",
      resource: { values: testData },
    });

    return NextResponse.json({
      success: true,
      message: "Google Sheets connection successful!",
      spreadsheetInfo: {
        title: spreadsheetInfo.data.properties.title,
        sheets: spreadsheetInfo.data.sheets.map((s) => s.properties.title),
      },
      readTest: {
        rowCount: readResponse.data.values?.length || 0,
        headers: readResponse.data.values?.[0] || [],
      },
      appendTest: {
        updatedRange: appendResponse.data.updates?.updatedRange,
        updatedRows: appendResponse.data.updates?.updatedRows,
      },
    });
  } catch (error) {
    console.error("Google Sheets Test Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        details: {
          code: error.code,
          status: error.status,
          statusText: error.statusText,
        },
        solution:
          "Please share the Google Sheets with the service account email: nifty-nitesh-trading-google-sh@gentle-mapper-457805-a2.iam.gserviceaccount.com",
      },
      { status: 500 }
    );
  }
}
