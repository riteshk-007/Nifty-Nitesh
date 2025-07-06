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
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
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
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!phone) errors.phone = "Phone number is required";
    if (!email) errors.email = "Email address is required";

    // Basic email validation
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    // Generate unique booking ID
    const bookingId = `SESSION-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    // Append data to Google Sheets (Sheet2 for sessions)
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const range = "Sheet3!A:I"; // Fixed range format

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
                  <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Available:</td><td style="padding: 8px 0; color: #f3f4f6;">Saturdays</td></tr>
                  <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Price:</td><td style="padding: 8px 0; color: #10b981; font-weight: bold;">₹250 (FREE for students)</td></tr>
                </table>
              </div>
              
              <div style="background-color: #064e3b; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
                <h2 style="color: #6ee7b7; margin-top: 0; font-size: 18px;">📞 What's Next?</h2>
                <ol style="color: #d1fae5; margin: 10px 0; padding-left: 20px;">
                  <li style="margin: 8px 0;">Our team will contact you within 24 hours to confirm the session</li>
                  <li style="margin: 8px 0;">We'll schedule the session based on your availability</li>
                 
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
