import { google } from "googleapis";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

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
    const formData = await request.json();
    const { name, phone, experience, email, timestamp } = formData;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Generate unique booking ID
    const bookingId = `SESSION-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    // Append data to Google Sheets (Sheet2 for sessions)
    const spreadsheetId = "1-UwaFATSvzvBqmMB49SWCJ77QfISCjpvQ_WXcFKtuFw";
    const range = "Sheet2!A:I"; // Fixed range format

    const values = [
      [
        new Date().toISOString(), // Timestamp
        bookingId, // Booking ID
        name, // Name
        phone, // Phone
        email || "", // Email
        experience || "Not specified", // Trading Experience
        "1-on-1 Session", // Service Type
        "₹250 (FREE for students)", // Price
        "Pending Confirmation", // Status
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource: { values },
    });

    // Send confirmation email to user (if email provided)
    if (email) {
      const mailOptions = {
        from: emailConfig.fromEmail,
        to: email,
        subject: "Session Booking Confirmation - Nifty Nitesh",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #000000; padding: 20px;">
            <div style="background-color: #111111; border-radius: 10px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); border: 1px solid #333333;">
              <div style="text-align: center; margin-bottom: 30px;">
                <img src="https://niftynitesh.com/logo.png" alt="Nifty Nitesh" style="width: 120px; height: auto; margin-bottom: 20px;">
                <h1 style="color: #10b981; margin: 0; font-size: 28px;">📅 Session Booking Confirmed!</h1>
                <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 16px;">Your 1-on-1 trading session has been booked successfully</p>
              </div>
              
              <div style="background-color: #1f2937; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #374151;">
                <h2 style="color: #f3f4f6; margin-top: 0; font-size: 20px;">📋 Session Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Booking ID:</td><td style="padding: 8px 0; color: #f3f4f6; font-family: monospace;">${bookingId}</td></tr>
                  <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Name:</td><td style="padding: 8px 0; color: #f3f4f6;">${name}</td></tr>
                  <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Phone:</td><td style="padding: 8px 0; color: #f3f4f6;">${phone}</td></tr>
                  <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Experience:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                    experience || "Not specified"
                  }</td></tr>
                  <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Duration:</td><td style="padding: 8px 0; color: #f3f4f6;">30 minutes</td></tr>
                  <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Available:</td><td style="padding: 8px 0; color: #f3f4f6;">Saturdays</td></tr>
                  <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Price:</td><td style="padding: 8px 0; color: #10b981; font-weight: bold;">₹250 (FREE for students)</td></tr>
                </table>
              </div>
              
              <div style="background-color: #064e3b; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
                <h2 style="color: #6ee7b7; margin-top: 0; font-size: 18px;">📞 What's Next?</h2>
                <ol style="color: #d1fae5; margin: 10px 0; padding-left: 20px;">
                  <li style="margin: 8px 0;">Our team will contact you within 24 hours to confirm the session</li>
                  <li style="margin: 8px 0;">We'll schedule the session based on your availability</li>
                  <li style="margin: 8px 0;">You'll receive a WhatsApp message with session details</li>
                  <li style="margin: 8px 0;">Join the session at the scheduled time</li>
                </ol>
              </div>
              
              <div style="background-color: #451a03; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
                <h2 style="color: #fbbf24; margin-top: 0; font-size: 18px;">💡 Session Preparation</h2>
                <ul style="color: #fed7aa; margin: 10px 0; padding-left: 20px;">
                  <li style="margin: 8px 0;">Prepare your trading questions in advance</li>
                  <li style="margin: 8px 0;">Have your trading setup ready (if applicable)</li>
                  <li style="margin: 8px 0;">Keep a notepad for taking notes</li>
                  <li style="margin: 8px 0;">Ensure stable internet connection</li>
                </ul>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #374151;">
                <p style="color: #9ca3af; margin: 0;">Need help? Contact us at:</p>
                <p style="color: #10b981; margin: 10px 0; font-weight: bold;">📧 niftynitesh000@gmail.com</p>
                <p style="color: #9ca3af; margin: 0; font-size: 14px;">We're excited to help you on your trading journey! 🚀</p>
              </div>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    // Send notification to admin
    const adminMailOptions = {
      from: emailConfig.fromEmail,
      to: "niftynitesh000@gmail.com",
      subject: `📅 New Session Booking - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #000000; padding: 20px;">
          <div style="background-color: #111111; border-radius: 10px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); border: 1px solid #333333;">
            <div style="text-align: center; margin-bottom: 30px;">
              <img src="https://niftynitesh.com/logo.png" alt="Nifty Nitesh" style="width: 120px; height: auto; margin-bottom: 20px;">
              <h1 style="color: #10b981; margin: 0; font-size: 28px;">📅 New Session Booking!</h1>
              <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 16px;">A new student has booked a 1-on-1 trading session</p>
            </div>
            
            <div style="background-color: #1f2937; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #374151;">
              <h2 style="color: #f3f4f6; margin-top: 0; font-size: 20px;">👤 Student Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Booking ID:</td><td style="padding: 8px 0; color: #f3f4f6; font-family: monospace;">${bookingId}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Name:</td><td style="padding: 8px 0; color: #f3f4f6;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Phone:</td><td style="padding: 8px 0; color: #f3f4f6;">${phone}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Email:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                  email || "Not provided"
                }</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Experience:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                  experience || "Not specified"
                }</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Booking Time:</td><td style="padding: 8px 0; color: #f3f4f6;">${new Date().toLocaleString()}</td></tr>
              </table>
            </div>
            
            <div style="background-color: #451a03; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <h2 style="color: #fbbf24; margin-top: 0; font-size: 18px;">⏰ Action Required</h2>
              <p style="color: #fed7aa; margin: 10px 0;">Please contact the student within 24 hours to confirm the session schedule.</p>
              <p style="color: #fed7aa; margin: 10px 0;">Session details have been saved to Google Sheets (Sheet2).</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #374151;">
              <p style="color: #9ca3af; margin: 0; font-size: 14px;">Check your Google Sheets for complete booking details</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);

    return NextResponse.json({
      success: true,
      message: "Session booking submitted successfully",
      bookingId,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error submitting session booking:", error);
    return NextResponse.json(
      { error: "Failed to submit session booking", details: error.message },
      { status: 500 }
    );
  }
}
