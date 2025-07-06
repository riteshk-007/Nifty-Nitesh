import { google } from "googleapis";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Email configuration
const emailConfig = {
  fromEmail: process.env.FROM_EMAIL,
  smtpHost: process.env.SMTP_HOST,
  smtpUser: process.env.SMTP_USER,
  smtpPassword: process.env.SMTP_PASSWORD,
};

// Google Sheets configuration
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
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
    if (!name || !email || !phone || !paymentPlan) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Append data to Google Sheets
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    const range = "Sheet1!A:H"; // Adjust range as needed

    const values = [
      [
        new Date().toISOString(),
        name,
        email,
        phone,
        whatsapp || phone,
        occupation,
        experience,
        paymentPlan,
        "Pending Payment",
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource: { values },
    });

    // Send email notification
    const mailOptions = {
      from: emailConfig.fromEmail,
      to: email,
      subject: "Trading Course Enrollment - Payment Details",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">Welcome to Nifty Nitesh Trading Course!</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for enrolling in our trading course. Here are your enrollment details:</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Enrollment Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>WhatsApp:</strong> ${whatsapp || phone}</p>
            <p><strong>Occupation:</strong> ${occupation}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p><strong>Payment Plan:</strong> ${paymentPlan}</p>
          </div>
          
          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
            <h3 style="color: #065f46; margin-top: 0;">Next Steps</h3>
            <p>1. Complete your payment using the QR code provided</p>
            <p>2. Upload your payment screenshot</p>
            <p>3. Wait for confirmation from our team</p>
            <p>4. Receive course access details</p>
          </div>
          
          <p>If you have any questions, please contact us at <a href="mailto:niftynitesh000@gmail.com">niftynitesh000@gmail.com</a></p>
          
          <p>Best regards,<br>Nifty Nitesh Trading Team</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send notification to admin
    const adminMailOptions = {
      from: emailConfig.fromEmail,
      to: "niftynitesh000@gmail.com",
      subject: "New Course Enrollment",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">New Course Enrollment</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Student Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>WhatsApp:</strong> ${whatsapp || phone}</p>
            <p><strong>Occupation:</strong> ${occupation}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p><strong>Payment Plan:</strong> ${paymentPlan}</p>
            <p><strong>Enrollment Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p>Please follow up with the student for payment confirmation.</p>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Failed to submit form", details: error.message },
      { status: 500 }
    );
  }
}
