import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

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
    const data = await request.json();

    // Validate required fields
    const errors = {};

    // Referrer validation
    if (!data.referrerName?.trim()) {
      errors.referrerName = "Referrer name is required";
    }
    if (!data.referrerEmail?.trim()) {
      errors.referrerEmail = "Referrer email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.referrerEmail)) {
      errors.referrerEmail = "Please enter a valid email";
    }
    if (!data.referrerPhone?.trim()) {
      errors.referrerPhone = "Referrer phone is required";
    } else if (!/^\d{10}$/.test(data.referrerPhone)) {
      errors.referrerPhone = "Please enter a valid 10-digit phone number";
    }

    // Friend validation
    if (!data.friendName?.trim()) {
      errors.friendName = "Friend's name is required";
    }
    if (!data.friendEmail?.trim()) {
      errors.friendEmail = "Friend's email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.friendEmail)) {
      errors.friendEmail = "Please enter a valid email";
    }
    if (!data.friendPhone?.trim()) {
      errors.friendPhone = "Friend's phone is required";
    } else if (!/^\d{10}$/.test(data.friendPhone)) {
      errors.friendPhone = "Please enter a valid 10-digit phone number";
    }

    // Other validations
    if (!data.interestedIn) {
      errors.interestedIn = "Interest type is required";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: errors,
        },
        { status: 400 }
      );
    }

    // Generate unique referral ID
    const referralId = `REF-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    // Append data to Google Sheets
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const range = "Sheet3!A:L"; // Adjusted range for all columns

    const values = [
      [
        new Date().toISOString(), // Timestamp
        referralId, // Referral ID
        data.referrerName, // Referrer Name
        data.referrerEmail, // Referrer Email
        data.referrerPhone, // Referrer Phone
        data.friendName, // Friend Name
        data.friendEmail, // Friend Email
        data.friendPhone, // Friend Phone
        data.interestedIn, // Interested In
        data.relationshipType || "Not specified", // Relationship Type
        data.message || "", // Personal Message
        "New Referral", // Status
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource: { values },
    });

    // Send confirmation email to referrer
    const referrerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #000000; padding: 20px;">
        <div style="background-color: #111111; border-radius: 10px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); border: 1px solid #333333;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://niftynitesh.com/logo.png" alt="Nifty Nitesh" style="width: 120px; height: auto; margin-bottom: 20px;">
            <h1 style="color: #10b981; margin: 0; font-size: 28px;">🎁 Thanks for Your Referral!</h1>
            <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 16px;">We've received your referral for ${
              data.friendName
            }</p>
          </div>
          
          <div style="background-color: #1f2937; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #374151;">
            <h2 style="color: #f3f4f6; margin-top: 0; font-size: 20px;">📋 Referral Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Referral ID:</td><td style="padding: 8px 0; color: #f3f4f6;">${referralId}</td></tr>
              <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Friend's Name:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                data.friendName
              }</td></tr>
              <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Interested In:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                data.interestedIn === "course"
                  ? "Complete Trading Course"
                  : "1-on-1 Trading Session"
              }</td></tr>
            </table>
          </div>

          <div style="background-color: #064e3b; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
            <h2 style="color: #6ee7b7; margin-top: 0; font-size: 18px;">📞 What's Next?</h2>
            <ol style="color: #d1fae5; margin: 10px 0; padding-left: 20px;">
              <li style="margin: 8px 0;">We'll contact your friend within 24 hours</li>
              <li style="margin: 8px 0;">You'll be notified when they join</li>
              <li style="margin: 8px 0;">Keep referring more friends to earn rewards</li>
            </ol>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #374151;">
            <p style="color: #9ca3af; margin: 0;">Questions? Contact us at:</p>
            <p style="color: #10b981; margin: 10px 0; font-weight: bold;">📧 niftynitesh000@gmail.com</p>
            <p style="color: #9ca3af; margin: 0; font-size: 14px;">Thank you for helping us grow! 🚀</p>
          </div>
        </div>
      </div>
    `;

    // Send confirmation email to friend
    const friendEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #000000; padding: 20px;">
        <div style="background-color: #111111; border-radius: 10px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); border: 1px solid #333333;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://niftynitesh.com/logo.png" alt="Nifty Nitesh" style="width: 120px; height: auto; margin-bottom: 20px;">
            <h1 style="color: #10b981; margin: 0; font-size: 28px;">👋 Welcome to Nifty Nitesh Trading!</h1>
            <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 16px;">Your friend ${
              data.referrerName
            } thought you'd be interested in learning trading</p>
          </div>
          
          <div style="background-color: #1f2937; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #374151;">
            <h2 style="color: #f3f4f6; margin-top: 0; font-size: 20px;">💡 Why Learn Trading?</h2>
            <ul style="color: #d1fae5; margin: 10px 0; padding-left: 20px;">
              <li style="margin: 8px 0;">Master market analysis techniques</li>
              <li style="margin: 8px 0;">Learn risk management strategies</li>
              <li style="margin: 8px 0;">Join a community of traders</li>
              <li style="margin: 8px 0;">Get personalized mentorship</li>
            </ul>
          </div>

          ${
            data.message
              ? `
            <div style="background-color: #064e3b; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
              <h2 style="color: #6ee7b7; margin-top: 0; font-size: 18px;">💌 Message from ${data.referrerName}</h2>
              <p style="color: #d1fae5; margin: 10px 0;">${data.message}</p>
            </div>
          `
              : ""
          }
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="https://niftynitesh.com/${
              data.interestedIn === "course" ? "course" : "session"
            }" style="display: inline-block; background: linear-gradient(to right, #059669, #10b981); color: white; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-weight: bold;">
              Learn More
            </a>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #374151;">
            <p style="color: #9ca3af; margin: 0;">Questions? Contact us at:</p>
            <p style="color: #10b981; margin: 10px 0; font-weight: bold;">📧 niftynitesh000@gmail.com</p>
            <p style="color: #9ca3af; margin: 0; font-size: 14px;">We're excited to help you start your trading journey! 🚀</p>
          </div>
        </div>
      </div>
    `;

    // Send emails
    await Promise.all([
      transporter.sendMail({
        from: emailConfig.fromEmail,
        to: data.referrerEmail,
        subject: "Thanks for Your Referral! - Nifty Nitesh",
        html: referrerEmailContent,
      }),
      transporter.sendMail({
        from: emailConfig.fromEmail,
        to: data.friendEmail,
        subject: `${data.referrerName} Invited You to Learn Trading! - Nifty Nitesh`,
        html: friendEmailContent,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing referral:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process referral. Please try again.",
      },
      { status: 500 }
    );
  }
}
