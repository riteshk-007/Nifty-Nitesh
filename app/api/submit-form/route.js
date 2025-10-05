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
      courseType,
      courseTitle,
      coursePrice,
      submittedAt,
    } = formData;

    // Validate required fields
    if (!name || !email || !phone || !courseType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Append data to Google Sheets
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    let range, sheetName;

    // Determine sheet based on course type
    if (courseType === "complete") {
      range = "Sheet1!A:J"; // Complete course sheet
      sheetName = "Complete Course";
    } else if (courseType === "mentorship") {
      range = "Sheet4!A:J"; // Mentorship sheet
      sheetName = "Mentorship";
    } else {
      range = "Sheet1!A:J"; // Default sheet
      sheetName = "General";
    }

    const values = [
      [
        submittedAt || new Date().toISOString(),
        name,
        email,
        phone,
        whatsapp || phone,
        occupation || "Not specified",
        experience || "Not specified",
        courseType,
        courseTitle,
        coursePrice,
        paymentPlan || "Single",
        "Form Submitted - Pending Contact",
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
      subject: `${courseTitle} - Form Submission Confirmation`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">Thank you for your interest in ${courseTitle}!</h2>
          
          <p>Dear ${name},</p>
          
          <p>We have received your form submission for <strong>${courseTitle}</strong>. Our team will contact you soon on your provided phone number.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Your Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>WhatsApp:</strong> ${whatsapp || phone}</p>
            <p><strong>Course:</strong> ${courseTitle}</p>
            <p><strong>Price:</strong> ${coursePrice}</p>
            ${paymentPlan ? `<p><strong>Payment Plan:</strong> ${paymentPlan}</p>` : ''}
          </div>
          
          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
            <h3 style="color: #065f46; margin-top: 0;">What's Next?</h3>
            <p>• Our team will call you within 24 hours</p>
            <p>• We'll discuss the course details and answer your questions</p>
            <p>• Once everything is clear, we'll guide you through the simple enrollment process</p>
          </div>
          
          <p>If you have any immediate questions, please contact us at <a href="mailto:niftynitesh000@gmail.com">niftynitesh000@gmail.com</a></p>
          
          <p>Best regards,<br>Nifty Nitesh Trading Team</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send notification to admin
    const adminMailOptions = {
      from: emailConfig.fromEmail,
      to: "niftynitesh000@gmail.com",
      subject: `New ${courseTitle} Form Submission`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">New ${courseTitle} Form Submission</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Student Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>WhatsApp:</strong> ${whatsapp || phone}</p>
            <p><strong>Occupation:</strong> ${occupation || "Not specified"}</p>
            <p><strong>Experience:</strong> ${experience || "Not specified"}</p>
            <p><strong>Course:</strong> ${courseTitle}</p>
            <p><strong>Price:</strong> ${coursePrice}</p>
            ${paymentPlan ? `<p><strong>Payment Plan:</strong> ${paymentPlan}</p>` : ''}
            <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p><strong>Action Required:</strong> Please call the student to discuss the course and complete the enrollment process.</p>
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
