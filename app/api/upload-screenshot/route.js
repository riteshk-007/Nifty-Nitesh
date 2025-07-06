import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure for larger file uploads
export const dynamic = "force-dynamic";
export const maxDuration = 60;

// Email configuration
const emailConfig = {
  fromEmail: process.env.FROM_EMAIL || "codeshorts007@gmail.com",
  smtpHost: process.env.SMTP_HOST || "smtp-relay.brevo.com",
  smtpUser: process.env.SMTP_USER || "7a3825001@smtp-brevo.com",
  smtpPassword:
    process.env.SMTP_PASSWORD ||
    "xsmtpsib-ef7c1018f5caba7281e2365451def2ae9b14d875e50af1253d84ab0cc4cf99e1-CvE1NVPShFYmn4pg",
};

// Google Sheets configuration
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

// Email transporter
const transporter = nodemailer.createTransport({
  host: emailConfig.smtpHost,
  port: 587,
  secure: false,
  auth: {
    user: emailConfig.smtpUser,
    pass: emailConfig.smtpPassword,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    const screenshotUrl = formData.get("screenshotUrl");
    const submissionId = formData.get("submissionId");
    const amount = formData.get("amount");
    const name = formData.get("name");
    const paymentPlan = formData.get("paymentPlan");

    if (!screenshotUrl || !submissionId || !amount || !name || !paymentPlan) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Update Google Sheets with screenshot URL and mark as paid
    const spreadsheetId = "1-UwaFATSvzvBqmMB49SWCJ77QfISCjpvQ_WXcFKtuFw";
    const range = "Sheet1!A:L";
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    const values = response.data.values;
    let rowIndex = -1;
    for (let i = 0; i < values.length; i++) {
      if (values[i][1] === submissionId) {
        rowIndex = i + 1; // Google Sheets is 1-indexed
        break;
      }
    }
    if (rowIndex === -1) {
      return NextResponse.json(
        { error: "Submission not found" },
        { status: 404 }
      );
    }
    // Update the status and screenshot URL (as a link)
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Sheet1!L${rowIndex}`,
      valueInputOption: "RAW",
      resource: { values: [["Payment Verified"]] },
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Sheet1!M${rowIndex}`,
      valueInputOption: "RAW",
      resource: {
        values: [[`=HYPERLINK(\"${screenshotUrl}\", \"View Screenshot\")`]],
      },
    });
    return NextResponse.json({
      success: true,
      message: "Payment screenshot uploaded and verified successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to upload screenshot", details: error.message },
      { status: 500 }
    );
  }
}
