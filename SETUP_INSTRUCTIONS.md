# Trading Course Enrollment System - Setup Guide

## Overview

This application includes a complete trading course enrollment system with:

- Multi-step enrollment form
- Payment integration with QR code
- Screenshot upload functionality
- Google Sheets integration
- Email notifications
- Comprehensive tracking system

## Features

- **Step 1**: Student fills enrollment form with personal and course details
- **Step 2**: System generates QR code for payment
- **Step 3**: Student uploads payment screenshot
- **Step 4**: Success confirmation and email notifications
- **Admin Features**: Google Sheets tracking, email notifications

## Prerequisites

### 1. Google Cloud Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google Sheets API
4. Create a Service Account:
   - Go to APIs & Credentials > Create Credentials > Service Account
   - Download the JSON key file
   - Note down the `client_email` and `private_key`

### 2. Google Sheets Setup

1. Create a new Google Sheet or use existing one
2. Share the sheet with your service account email (client_email)
3. Give "Editor" access to the service account
4. Note down the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`

### 3. Email Provider Setup

The system uses Brevo (formerly Sendinblue) SMTP:

- Sign up at [Brevo](https://www.brevo.com/)
- Go to SMTP & API settings
- Get your SMTP credentials

## Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Email Configuration
FROM_EMAIL=bohraproperty360@gmail.com
SMTP_HOST=smtp-relay.brevo.com
SMTP_USER=8ff54e001@smtp-brevo.com
SMTP_PASSWORD=k4TVsrKBZWwH3Aa6

# Google Sheets Configuration
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----"
GOOGLE_SHEETS_ID=1RMJujUVs_zIoUxLPGyeSNsQz2GYgV7dSELnshP6apVM

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Google Sheets Structure

Your Google Sheet (Sheet1) should have these columns:

- **Column A**: Timestamp
- **Column B**: Submission ID
- **Column C**: Name
- **Column D**: Email
- **Column E**: Phone
- **Column F**: WhatsApp
- **Column G**: Occupation
- **Column H**: Trading Experience
- **Column I**: Payment Plan
- **Column J**: Amount to Pay
- **Column K**: Total Amount
- **Column L**: Status
- **Column M**: Screenshot URL

## Payment Configuration

The system currently uses UPI payment with QR code generation. Update the UPI ID in:

- `app/api/submit-enrollment/route.js` (line ~85)
- Current UPI: `niftynitesh@yesg`

## File Structure

```
app/
├── api/
│   ├── submit-enrollment/
│   │   └── route.js          # Main enrollment API
│   └── upload-screenshot/
│       └── route.js          # Screenshot upload API
├── components/
│   └── TradingCourseForm.jsx # Main form component
└── (pages)/
    └── enrollment/
        └── page.js           # Enrollment page

public/
└── screenshots/              # Payment screenshots storage
```

## Installation & Setup

1. **Clone and Install Dependencies**

```bash
npm install
```

2. **Configure Environment Variables**
   Create `.env.local` with your credentials (see above)

3. **Verify Google Sheets Access**

- Ensure the service account has access to your sheet
- Test the connection by running the application

4. **Test Email Configuration**

- Verify SMTP settings work
- Check spam folder for test emails

5. **Run the Application**

```bash
npm run dev
```

## Usage

1. **Access the Form**: Visit `/enrollment` on your website
2. **Fill Details**: Students fill the enrollment form
3. **Make Payment**: Students scan QR code and make payment
4. **Upload Screenshot**: Students upload payment confirmation
5. **Admin Verification**: Check Google Sheets for new enrollments
6. **Confirm Payment**: Update status in Google Sheets

## Customization

### Payment Plans

Edit payment plans in `app/api/submit-enrollment/route.js`:

```javascript
const paymentPlans = {
  "one-time": {
    name: "One-Time Payment",
    amount: 9999,
    installmentAmount: 9999,
    description: "Pay once, get lifetime access",
  },
  // Add more plans...
};
```

### Email Templates

Customize email templates in both API routes:

- `app/api/submit-enrollment/route.js` (enrollment confirmation)
- `app/api/upload-screenshot/route.js` (screenshot confirmation)

### Form Fields

Modify form fields in `app/components/TradingCourseForm.jsx`

## Security Considerations

1. **Environment Variables**: Never commit `.env.local` to version control
2. **File Uploads**: Screenshots are stored in `public/screenshots/`
3. **Google Sheets**: Only share with necessary accounts
4. **SMTP**: Use app-specific passwords for email

## Troubleshooting

### Common Issues

1. **Google Sheets Access Denied**

   - Verify service account email has access
   - Check private key format (must include \n characters)

2. **Email Not Sending**

   - Check SMTP credentials
   - Verify email provider settings
   - Check spam folder

3. **Screenshot Upload Failed**

   - Ensure `public/screenshots/` directory exists
   - Check file permissions

4. **QR Code Not Generating**
   - Verify `qrcode` package is installed
   - Check UPI string format

### Debug Mode

Add console.log statements in API routes to debug:

```javascript
console.log("Form data:", formData);
console.log("Google Sheets response:", response);
```

## Production Deployment

1. **Environment Variables**: Set all variables in your hosting platform
2. **File Storage**: Consider using cloud storage for screenshots
3. **Database**: Consider moving from Google Sheets to a proper database
4. **Security**: Add rate limiting and validation

## Support

For issues or questions:

- Check console for error messages
- Verify all environment variables are set
- Test individual components separately

## Admin Dashboard (Optional Enhancement)

Consider adding an admin dashboard to:

- View all enrollments
- Update payment status
- Send custom notifications
- Generate reports

This completes the setup guide for the trading course enrollment system!
