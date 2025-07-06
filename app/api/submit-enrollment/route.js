import { google } from "googleapis";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import QRCode from "qrcode";

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
      email,
      phone,
      whatsapp,
      occupation,
      experience,
      paymentPlan,
      timestamp,
    } = formData;

    // Validate required fields
    const errors = {};

    if (!name?.trim()) {
      errors.name = "Name is required";
    }

    if (!email?.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email";
    }

    if (!phone?.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!occupation?.trim()) {
      errors.occupation = "Occupation is required";
    }

    if (!experience) {
      errors.experience = "Experience level is required";
    }

    if (!paymentPlan) {
      errors.paymentPlan = "Payment plan is required";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Missing or invalid fields", details: errors },
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
    const upiString = `upi://pay?pa=${
      process.env.NEXT_PUBLIC_UPI_ID
    }&pn=${encodeURIComponent(process.env.NEXT_PUBLIC_UPI_NAME)}&am=${
      selectedPlan.installmentAmount
    }&cu=INR&tn=Trading%20Course%20Payment`;
    const qrCodeDataURL = await QRCode.toDataURL(upiString, {
      width: 300,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    });

    // Append data to Google Sheets
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
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
              <img src="https://niftynitesh.com/logo.png" alt="Nifty Nitesh" style="width: 120px; height: auto; margin-bottom: 20px;">
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
                <li style="margin: 8px 0;">📧 Email: ${
                  process.env.NEXT_PUBLIC_CONTACT_EMAIL
                }</li>
                <li style="margin: 8px 0;">📱 WhatsApp: ${
                  process.env.NEXT_PUBLIC_CONTACT_WHATSAPP
                }</li>
                <li style="margin: 8px 0;">🌐 Website: ${
                  process.env.NEXT_PUBLIC_WEBSITE_URL
                }</li>
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
              <img src="https://niftynitesh.com/logo.png" alt="Nifty Nitesh" style="width: 120px; height: auto; margin-bottom: 20px;">
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
