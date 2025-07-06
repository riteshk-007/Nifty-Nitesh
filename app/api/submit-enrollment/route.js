import { google } from "googleapis";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import QRCode from "qrcode";

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
    const {
      name,
      email,
      phone,
      whatsapp,
      occupation,
      experience,
      paymentPlan,
      timestamp,
    } = formData;

    // Validate required fields
    if (
      !name ||
      !email ||
      !phone ||
      !occupation ||
      !experience ||
      !paymentPlan
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Generate unique submission ID
    const submissionId = `ENR-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    // Payment plans configuration
    const paymentPlans = {
      "one-time": {
        name: "One-Time Payment",
        amount: 9999,
        installmentAmount: 9999,
        description: "Pay once, get lifetime access",
      },
      "two-parts": {
        name: "Two-Part Payment",
        amount: 9999,
        installmentAmount: 4999,
        description: "Pay ₹4,999 now, ₹4,999 after 10 days",
      },
      "three-parts": {
        name: "Three-Part Payment",
        amount: 9999,
        installmentAmount: 3333,
        description:
          "Pay ₹3,333 now, ₹3,333 after 7 days, ₹3,333 after 14 days",
      },
    };

    const selectedPlan = paymentPlans[paymentPlan];
    if (!selectedPlan) {
      return NextResponse.json(
        { error: "Invalid payment plan selected" },
        { status: 400 }
      );
    }

    // Generate QR Code for payment
    const upiString = `upi://pay?pa=niftynitesh@yesg&pn=Nifty%20Nitesh&am=${selectedPlan.installmentAmount}&cu=INR&tn=Trading%20Course%20Payment`;
    const qrCodeDataURL = await QRCode.toDataURL(upiString, {
      width: 300,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    });

    // Append data to Google Sheets
    const spreadsheetId = "1-UwaFATSvzvBqmMB49SWCJ77QfISCjpvQ_WXcFKtuFw";
    const range = "Sheet1!A:L"; // Adjusted range for all columns

    const values = [
      [
        new Date().toISOString(), // Timestamp
        submissionId, // Submission ID
        name, // Name
        email, // Email
        phone, // Phone
        whatsapp || phone, // WhatsApp
        occupation, // Occupation
        experience, // Trading Experience
        selectedPlan.name, // Payment Plan
        selectedPlan.installmentAmount, // Amount to Pay
        selectedPlan.amount, // Total Amount
        "Pending Payment", // Status
        "", // Screenshot URL (will be updated later)
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource: { values },
    });

    // Send confirmation email to user
    const mailOptions = {
      from: emailConfig.fromEmail,
      to: email,
      subject: "Nifty Nitesh Trading Course - Enrollment Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #000000; padding: 20px;">
          <div style="background-color: #111111; border-radius: 10px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); border: 1px solid #333333;">
            <div style="text-align: center; margin-bottom: 30px;">
              <img src="https://nifty-nitesh.vercel.app/public/logo.png" alt="Nifty Nitesh" style="width: 120px; height: auto; margin-bottom: 20px;">
              <h1 style="color: #10b981; margin: 0; font-size: 28px;">Welcome to Nifty Nitesh Trading Course!</h1>
              <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 16px;">Your enrollment has been received successfully</p>
            </div>
            
            <div style="background-color: #1f2937; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #374151;">
              <h2 style="color: #f3f4f6; margin-top: 0; font-size: 20px;">📋 Enrollment Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Name:</td><td style="padding: 8px 0; color: #f3f4f6;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Email:</td><td style="padding: 8px 0; color: #f3f4f6;">${email}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Phone:</td><td style="padding: 8px 0; color: #f3f4f6;">${phone}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">WhatsApp:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                  whatsapp || phone
                }</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Occupation:</td><td style="padding: 8px 0; color: #f3f4f6;">${occupation}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Experience:</td><td style="padding: 8px 0; color: #f3f4f6;">${experience}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Payment Plan:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                  selectedPlan.name
                }</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Amount to Pay:</td><td style="padding: 8px 0; color: #10b981; font-weight: bold;">₹${selectedPlan.installmentAmount.toLocaleString()}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Total Amount:</td><td style="padding: 8px 0; color: #f3f4f6;">₹${selectedPlan.amount.toLocaleString()}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Status:</td><td style="padding: 8px 0; color: #fbbf24; font-weight: bold;">Pending Payment</td></tr>
              </table>
            </div>
            
            <div style="background-color: #064e3b; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
              <h2 style="color: #6ee7b7; margin-top: 0; font-size: 18px;">💳 Payment Instructions</h2>
              <ol style="color: #d1fae5; margin: 10px 0; padding-left: 20px;">
                <li style="margin: 8px 0;">Click the payment link below to proceed with payment</li>
                <li style="margin: 8px 0;">Complete the payment using UPI or any preferred method</li>
                <li style="margin: 8px 0;">Take a screenshot of the payment confirmation</li>
                <li style="margin: 8px 0;">Upload the screenshot for verification</li>
                <li style="margin: 8px 0;">You'll receive course access within 24 hours</li>
              </ol>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="${
                process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
              }/payment-verification?submissionId=${submissionId}&qrCode=${encodeURIComponent(
        qrCodeDataURL
      )}&amount=${selectedPlan.installmentAmount}&name=${encodeURIComponent(
        name
      )}&paymentPlan=${encodeURIComponent(
        selectedPlan.name
      )}" style="display: inline-block; background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);">
                💳 Proceed to Payment
              </a>
            </div>
            
            <div style="background-color: #451a03; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <h2 style="color: #fbbf24; margin-top: 0; font-size: 18px;">📞 Need Help?</h2>
              <p style="color: #fed7aa; margin: 10px 0;">If you have any questions or need assistance, please contact us:</p>
              <ul style="color: #fed7aa; margin: 10px 0; padding-left: 20px;">
                <li style="margin: 8px 0;">📧 Email: niftynitesh000@gmail.com</li>
                <li style="margin: 8px 0;">📱 WhatsApp: +91 8882304322</li>
                <li style="margin: 8px 0;">🌐 Website: nifty-nitesh.vercel.app</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #374151;">
              <p style="color: #9ca3af; margin: 0;">Thank you for choosing Nifty Nitesh Trading Course!</p>
              <p style="color: #9ca3af; margin: 10px 0; font-size: 14px;">We're excited to help you on your trading journey! 🚀</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send notification to admin
    const adminMailOptions = {
      from: emailConfig.fromEmail,
      to: "niftynitesh000@gmail.com",
      subject: `🎓 New Course Enrollment - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #000000; padding: 20px;">
          <div style="background-color: #111111; border-radius: 10px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); border: 1px solid #333333;">
            <div style="text-align: center; margin-bottom: 30px;">
              <img src="https://nifty-nitesh.vercel.app/public/logo.png" alt="Nifty Nitesh" style="width: 120px; height: auto; margin-bottom: 20px;">
              <h1 style="color: #10b981; margin: 0; font-size: 28px;">🎓 New Course Enrollment!</h1>
              <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 16px;">A new student has enrolled in your trading course</p>
            </div>
            
            <div style="background-color: #1f2937; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #374151;">
              <h2 style="color: #f3f4f6; margin-top: 0; font-size: 20px;">👤 Student Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Submission ID:</td><td style="padding: 8px 0; color: #f3f4f6; font-family: monospace;">${submissionId}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Name:</td><td style="padding: 8px 0; color: #f3f4f6;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Email:</td><td style="padding: 8px 0; color: #f3f4f6;">${email}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Phone:</td><td style="padding: 8px 0; color: #f3f4f6;">${phone}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">WhatsApp:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                  whatsapp || phone
                }</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Occupation:</td><td style="padding: 8px 0; color: #f3f4f6;">${occupation}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Experience:</td><td style="padding: 8px 0; color: #f3f4f6;">${experience}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Payment Plan:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                  selectedPlan.name
                }</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Amount to Pay:</td><td style="padding: 8px 0; color: #10b981; font-weight: bold;">₹${selectedPlan.installmentAmount.toLocaleString()}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Total Amount:</td><td style="padding: 8px 0; color: #f3f4f6;">₹${selectedPlan.amount.toLocaleString()}</td></tr>
                <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Enrollment Time:</td><td style="padding: 8px 0; color: #f3f4f6;">${new Date().toLocaleString()}</td></tr>
              </table>
            </div>
            
            <div style="background-color: #451a03; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <h2 style="color: #fbbf24; margin-top: 0; font-size: 18px;">⏰ Action Required</h2>
              <p style="color: #fed7aa; margin: 10px 0;">Please monitor the Google Sheets for payment screenshot upload and verify the payment once submitted.</p>
              <p style="color: #fed7aa; margin: 10px 0;">The student will upload their payment screenshot in the next step.</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #374151;">
              <p style="color: #9ca3af; margin: 0; font-size: 14px;">Check your Google Sheets for complete enrollment tracking</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);

    return NextResponse.json({
      success: true,
      message: "Enrollment form submitted successfully",
      submissionId,
      qrCode: qrCodeDataURL,
      paymentAmount: selectedPlan.installmentAmount,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error submitting enrollment form:", error);
    return NextResponse.json(
      { error: "Failed to submit enrollment form", details: error.message },
      { status: 500 }
    );
  }
}
