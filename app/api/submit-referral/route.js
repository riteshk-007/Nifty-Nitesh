import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import nodemailer from "nodemailer";

// Email configuration
const emailConfig = {
  fromEmail: process.env.FROM_EMAIL,
  smtpHost: process.env.SMTP_HOST,
  smtpUser: process.env.SMTP_USER,
  smtpPassword: process.env.SMTP_PASSWORD,
};

// Google Sheets configuration
const GOOGLE_SHEETS_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

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

// Google Sheets authentication
const serviceAccountAuth = new JWT({
  email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function POST(request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (
      !data.referrerName ||
      !data.referrerEmail ||
      !data.friendName ||
      !data.friendEmail ||
      !data.interestedIn
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    // Initialize Google Sheets
    const doc = new GoogleSpreadsheet(GOOGLE_SHEETS_ID, serviceAccountAuth);
    await doc.loadInfo();

    // Get or create Sheet3 for referrals
    let sheet = doc.sheetsByTitle["Sheet2"];
    if (!sheet) {
      sheet = await doc.addSheet({
        title: "Sheet2",
        headerValues: [
          "Timestamp",
          "Referrer Name",
          "Referrer Email",
          "Referrer Phone",
          "Relationship Type",
          "Friend Name",
          "Friend Email",
          "Friend Phone",
          "Interested In",
          "Message",
          "Status",
        ],
      });
    }

    // Add referral data to Google Sheets
    const referralData = {
      Timestamp: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
      "Referrer Name": data.referrerName,
      "Referrer Email": data.referrerEmail,
      "Referrer Phone": data.referrerPhone || "",
      "Relationship Type": data.relationshipType || "",
      "Friend Name": data.friendName,
      "Friend Email": data.friendEmail,
      "Friend Phone": data.friendPhone || "",
      "Interested In": data.interestedIn,
      Message: data.message || "",
      Status: "New Referral",
    };

    await sheet.addRow(referralData);

    // Send email to admin
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #000000; padding: 20px;">
        <div style="background-color: #111111; border-radius: 10px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); border: 1px solid #333333;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://niftynitesh.com/logo.png" alt="Nifty Nitesh" style="width: 120px; height: auto; margin-bottom: 20px;">
            <h1 style="color: #10b981; margin: 0; font-size: 28px;">🎁 New Friend Referral!</h1>
            <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 16px;">Someone has referred a friend to your trading course</p>
          </div>
          
          <div style="background-color: #1f2937; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #374151;">
            <h2 style="color: #f3f4f6; margin-top: 0; font-size: 20px;">👤 Referrer Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Name:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                data.referrerName
              }</td></tr>
              <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Email:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                data.referrerEmail
              }</td></tr>
              <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Phone:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                data.referrerPhone || "Not provided"
              }</td></tr>
              <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Relationship:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                data.relationshipType || "Not specified"
              }</td></tr>
            </table>
          </div>

          <div style="background-color: #064e3b; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #10b981;">
            <h2 style="color: #6ee7b7; margin-top: 0; font-size: 20px;">👥 Friend Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Name:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                data.friendName
              }</td></tr>
              <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Email:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                data.friendEmail
              }</td></tr>
              <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Phone:</td><td style="padding: 8px 0; color: #f3f4f6;">${
                data.friendPhone || "Not provided"
              }</td></tr>
              <tr><td style="padding: 8px 0; color: #9ca3af; font-weight: bold;">Interested In:</td><td style="padding: 8px 0; color: #10b981; font-weight: bold;">${
                data.interestedIn
              }</td></tr>
            </table>
            </div>

            ${
              data.message
                ? `
              <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #856404; margin-top: 0;">Personal Message</h3>
                <p style="margin: 0;">${data.message}</p>
              </div>
            `
                : ""
            }

            <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #155724; margin-top: 0;">Next Steps</h3>
              <ul style="margin: 0;">
                <li>Contact the friend within 24 hours</li>
                <li>Send them information about ${data.interestedIn}</li>
                <li>Follow up with the referrer about their friend's progress</li>
                <li>Consider referral rewards for successful conversions</li>
              </ul>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 14px;">
                This referral was submitted on ${new Date().toLocaleString(
                  "en-IN",
                  { timeZone: "Asia/Kolkata" }
                )}
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to friend
    const friendEmailContent = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
              🎁 Your Friend Referred You to Nifty Nitesh Trading!
            </h2>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #059669; margin-top: 0;">Hello ${
                data.friendName
              }!</h3>
              <p>Great news! Your friend <strong>${
                data.referrerName
              }</strong> has referred you to our trading course because they thought you'd be interested in learning about trading.</p>
              
              <p>They specifically mentioned that you might be interested in: <strong>${
                data.interestedIn
              }</strong></p>
              
              ${
                data.message
                  ? `
                <div style="background: #fff3cd; padding: 15px; border-radius: 6px; margin: 15px 0;">
                  <h4 style="color: #856404; margin-top: 0;">Message from ${data.referrerName}:</h4>
                  <p style="margin: 0; font-style: italic;">"${data.message}"</p>
                </div>
              `
                  : ""
              }
            </div>

            <div style="background: #e6f7ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #059669; margin-top: 0;">What We Offer</h3>
              
              ${
                data.interestedIn === "1-on-1 Session"
                  ? `
                <div style="border: 2px solid #059669; padding: 15px; border-radius: 8px; margin: 10px 0;">
                  <h4 style="color: #059669; margin-top: 0;">1-on-1 Trading Session</h4>
                  <ul>
                    <li><strong>Price:</strong> ₹250 (FREE for enrolled students)</li>
                    <li><strong>Duration:</strong> 30 minutes</li>
                    <li><strong>Schedule:</strong> Saturday sessions</li>
                    <li><strong>What you'll learn:</strong> Personalized trading guidance, portfolio review, and strategy discussion</li>
                  </ul>
                </div>
              `
                  : `
                <div style="border: 2px solid #059669; padding: 15px; border-radius: 8px; margin: 10px 0;">
                  <h4 style="color: #059669; margin-top: 0;">Complete Trading Course</h4>
                  <ul>
                    <li><strong>Price:</strong> ₹9,999 (Multiple payment options available)</li>
                    <li><strong>Duration:</strong> Comprehensive 8-week program</li>
                    <li><strong>What you'll learn:</strong> Complete trading concepts, technical analysis, risk management, and practical strategies</li>
                    <li><strong>Bonus:</strong> FREE 1-on-1 sessions included</li>
                  </ul>
                </div>
              `
              }
            </div>

            <div style="background: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #155724; margin-top: 0;">Next Steps</h3>
              <p>We'll be contacting you within 24 hours to discuss your interest and answer any questions you might have.</p>
              <p>In the meantime, feel free to:</p>
              <ul>
                <li>Visit our website: <a href="https://niftynitesh.com" style="color: #059669;">niftynitesh.com</a></li>
                <li>Call us: <a href="tel:+919876543210" style="color: #059669;">+91 98765 43210</a></li>
                <li>WhatsApp us: <a href="https://wa.me/919876543210" style="color: #059669;">+91 98765 43210</a></li>
              </ul>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 14px;">
                Thanks to ${data.referrerName} for the referral! 🙏
              </p>
              <p style="color: #666; font-size: 14px;">
                Best regards,<br>
                <strong>Nifty Nitesh Trading Team</strong>
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send emails
    await Promise.all([
      // Email to admin
      transporter.sendMail({
        from: emailConfig.fromEmail,
        to: emailConfig.fromEmail,
        subject: `🎁 New Friend Referral - ${data.friendName} (${data.interestedIn})`,
        html: adminEmailContent,
      }),

      // Email to friend
      transporter.sendMail({
        from: emailConfig.fromEmail,
        to: data.friendEmail,
        subject: `🎁 Your friend ${data.referrerName} referred you to Nifty Nitesh Trading!`,
        html: friendEmailContent,
      }),
    ]);

    return NextResponse.json({
      success: true,
      message: "Referral submitted successfully!",
    });
  } catch (error) {
    console.error("Error submitting referral:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit referral",
      },
      { status: 500 }
    );
  }
}
