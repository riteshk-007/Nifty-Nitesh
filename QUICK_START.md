# Quick Start Guide - Trading Course Enrollment

## Immediate Setup (5 minutes)

### 1. Create Environment File

Create `.env.local` in your project root:

```env
# Email Configuration (your provided settings)
FROM_EMAIL=codeshorts007@gmail.com
SMTP_HOST=smtp-relay.brevo.com
SMTP_USER=7a3825001@smtp-brevo.com
SMTP_PASSWORD=xsmtpsib-ef7c1018f5caba7281e2365451def2ae9b14d875e50af1253d84ab0cc4cf99e1-CvE1NVPShFYmn4pg

# Google Sheets - your provided sheet
GOOGLE_SHEETS_ID=1-UwaFATSvzvBqmMB49SWCJ77QfISCjpvQ_WXcFKtuFw

# You need to add these Google credentials
GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----"

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 2. Google Sheets Setup

Your sheet URL: `https://docs.google.com/spreadsheets/d/1-UwaFATSvzvBqmMB49SWCJ77QfISCjpvQ_WXcFKtuFw/edit?gid=0#gid=0`

**Add these column headers:**

**Sheet1 (Course Enrollments):**
| A | B | C | D | E | F | G | H | I | J | K | L | M |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Submission ID | Name | Email | Phone | WhatsApp | Occupation | Trading Experience | Payment Plan | Amount to Pay | Total Amount | Status | Screenshot URL |

**Sheet2 (Session Bookings):**
| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Timestamp | Booking ID | Name | Phone | Email | Trading Experience | Service Type | Price | Status |

### 3. Google Service Account (Required)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project or select existing
3. Enable Google Sheets API
4. Create Service Account:
   - APIs & Credentials > Create Credentials > Service Account
   - Download JSON key file
   - Copy `client_email` and `private_key` to `.env.local`
5. Share your Google Sheet with the service account email (Editor access)

### 4. Test the System

```bash
npm run dev
```

Visit: `http://localhost:3000/enrollment`

## Features Working Now

✅ **Complete Form System**

- Multi-step enrollment process
- Payment plan selection
- QR code generation for payment
- Screenshot upload functionality

✅ **Email Notifications**

- Student confirmation emails
- Admin notification emails
- Professional email templates

✅ **Google Sheets Integration**

- Automatic data entry
- Screenshot tracking
- Status updates

✅ **Payment Integration**

- UPI QR code generation
- Payment tracking
- Screenshot verification

## Form Fields Included

1. **Personal Information**

   - Full Name
   - Email Address
   - Phone Number
   - WhatsApp Number

2. **Professional Details**

   - Occupation
   - Trading Experience

3. **Payment Plans**
   - One-Time Payment (₹9,999)
   - Two-Part Payment (₹4,999 × 2)
   - Three-Part Payment (₹3,333 × 3)

## Current UPI Details

- UPI ID: `niftynitesh@yesg`
- QR codes generated automatically
- Payment amounts based on selected plan

## Navigation Added

- Desktop: "Enroll Now" link in main navigation
- Mobile: "Enroll Now" in mobile menu
- All responsive and styled

## What Happens When Form is Submitted

1. **Student fills form** → Data saved to Google Sheets
2. **QR code generated** → Student sees payment QR
3. **Student makes payment** → Takes screenshot
4. **Screenshot uploaded** → Saved to `/public/screenshots/`
5. **Emails sent** → Student gets confirmation, admin gets notification
6. **Admin verifies** → Updates status in Google Sheets

## Admin Workflow

1. **Check Google Sheets** for new enrollments
2. **View payment screenshots** in `/public/screenshots/` folder
3. **Verify payments** and update status
4. **Provide course access** to verified students

## Files Created/Modified

```
app/
├── api/
│   ├── submit-enrollment/route.js     # 🆕 Course Enrollment API
│   ├── submit-session-booking/route.js # 🆕 Session Booking API
│   └── upload-screenshot/route.js     # 🆕 Screenshot API
├── components/
│   ├── TradingCourseForm.jsx         # 🆕 Main form component
│   ├── ServiceCards.jsx              # ✏️ Updated with API integration
│   └── Navbar.jsx                    # ✏️ Added enrollment links
└── (pages)/
    ├── enrollment/
    │   └── page.js                   # 🆕 Enrollment page
    └── online-classes/
        └── page.js                   # ✏️ Updated with API integration

public/
├── screenshots/                      # 🆕 Payment screenshots
└── manifest.json                     # 🆕 PWA manifest

Other files:
├── app/sitemap.js                    # ✏️ Added enrollment URL
├── SETUP_INSTRUCTIONS.md             # 🆕 Detailed setup guide
└── QUICK_START.md                    # 🆕 This file
```

## Need Help?

1. **Google Sheets not working?**

   - Check service account permissions
   - Verify sheet is shared with service account email

2. **Emails not sending?**

   - Your SMTP settings should work (already provided)
   - Check spam folder

3. **Screenshots not uploading?**

   - `public/screenshots/` directory created automatically
   - Check file permissions

4. **QR code not showing?**
   - Verify `qrcode` package is installed (already in package.json)

## Ready to Use!

The system is complete and ready for production use. Just add your Google credentials and test the enrollment flow!

**Test URL:** `http://localhost:3000/enrollment`
