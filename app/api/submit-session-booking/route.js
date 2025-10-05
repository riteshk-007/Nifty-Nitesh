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
    const {
      name,
      phone,
      email,
      whatsapp,
      occupation,
      experience,
      courseType,
      courseTitle,
      coursePrice,
      submittedAt
    } = formData;

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

    // Append data to Google Sheets (Sheet3 for sessions) - safe-guarded
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const range = "Sheet3!A:L"; // Updated range for more columns

    const values = [
      [
        submittedAt || new Date().toISOString(), // Timestamp
        bookingId, // Booking ID
        name, // Name
        phone, // Phone
        email, // Email
        whatsapp || phone, // WhatsApp
        occupation || "Not specified", // Occupation
        experience || "Not specified", // Trading Experience
        courseTitle || "1-on-1 Trading Session", // Service Type
        coursePrice || "₹199", // Price
        "Form Submitted - Pending Contact", // Status
        courseType || "session", // Course Type
      ],
    ];

    if (spreadsheetId) {
      try {
        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range,
          valueInputOption: "RAW",
          resource: { values },
        });
      } catch (sheetErr) {
        console.warn("Session: Google Sheets append failed:", sheetErr?.message || sheetErr);
      }
    } else {
      console.warn("GOOGLE_SHEETS_SPREADSHEET_ID not set. Skipping session rows append.");
    }

    // Send confirmation email to user
    if (email) {
      const mailOptions = {
        from: emailConfig.fromEmail,
        to: email,
        subject: "1-on-1 Trading Session - Form Submission Confirmation",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #10b981;">Thank you for your interest in 1-on-1 Trading Session!</h2>
            
            <p>Dear ${name},</p>
            
            <p>We have received your form submission for <strong>1-on-1 Trading Session</strong>. Our team will contact you soon to schedule your session.</p>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Your Details</h3>
              <p><strong>Booking ID:</strong> ${bookingId}</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>WhatsApp:</strong> ${whatsapp || phone}</p>
              <p><strong>Trading Experience:</strong> ${experience || "Not specified"}</p>
              <p><strong>Session Price:</strong> ${coursePrice || "₹199"}</p>
            </div>
            
            <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
              <h3 style="color: #065f46; margin-top: 0;">What's Next?</h3>
              <p>• Our team will call you within 24 hours</p>
              <p>• We'll schedule your 1-on-1 session at a convenient time</p>
              <p>• You'll receive session details and meeting link</p>
              <p>• Get ready for personalized trading guidance!</p>
            </div>
            
            <p>If you have any immediate questions, please contact us at <a href="mailto:niftynitesh000@gmail.com">niftynitesh000@gmail.com</a></p>
            
            <p>Best regards,<br>Nifty Nitesh Trading Team</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    // Send notification to admin
    const adminMailOptions = {
      from: emailConfig.fromEmail,
      to: "niftynitesh000@gmail.com",
      subject: `New 1-on-1 Session Request - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">New 1-on-1 Trading Session Request</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Student Details</h3>
            <p><strong>Booking ID:</strong> ${bookingId}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>WhatsApp:</strong> ${whatsapp || phone}</p>
            <p><strong>Occupation:</strong> ${occupation || "Not specified"}</p>
            <p><strong>Trading Experience:</strong> ${experience || "Not specified"}</p>
            <p><strong>Session Price:</strong> ${coursePrice || "₹199"}</p>
            <p><strong>Request Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p><strong>Action Required:</strong> Please call the student to schedule their 1-on-1 trading session.</p>
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
