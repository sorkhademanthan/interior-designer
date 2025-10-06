# Book a Consultation Feature

## Overview
Complete consultation booking system with frontend form and backend API integration, including email notifications.

## What Was Built

### Backend (Server)
- **MongoDB Model**: Consultation schema with validation
- **REST API Endpoints**:
  - `POST /api/consultations` - Create new consultation
  - `GET /api/consultations` - List all consultations (with pagination)
  - `GET /api/consultations/:id` - Get single consultation
  - `PATCH /api/consultations/:id/status` - Update status
  - `DELETE /api/consultations/:id` - Delete consultation
  - `GET /api/health` - Health check
- **Email Service**: Automated notifications via Nodemailer
  - Admin notification email
  - Client confirmation email
- **Validation**: Express-validator for input validation
- **Security**: Helmet, CORS, error handling

### Frontend (Client)
- **Book Consultation Page** (`/book-consultation`)
  - Form with all required fields
  - Real-time validation
  - Success/error messaging
  - Responsive design matching site aesthetic
- **Navigation Updates**:
  - Navbar "Book consultation" button
  - Features page CTA
  - Pricing page CTA

## File Structure

```
server/
├── server.js                           # Main server file
├── package.json                        # Dependencies
├── .env                                # Environment variables (you created)
├── .env.example                        # Environment template
├── .gitignore                          # Git ignore rules
├── SETUP.md                            # Setup instructions
├── models/
│   └── Consultation.js                 # MongoDB schema
├── controllers/
│   └── consultationController.js       # Business logic
├── routes/
│   └── consultationRoutes.js           # API routes
└── config/
    └── emailService.js                 # Email notifications

client/src/
├── pages/
│   └── BookConsultationPage.jsx        # Consultation form page
├── App.js                              # Updated with route
└── App.css                             # Updated with styles
```

## How to Test

### 1. Start Backend Server
```bash
cd server
npm run dev
```
Server runs on: http://localhost:5001

### 2. Start Frontend
```bash
cd client
npm start
```
Client runs on: http://localhost:3000

### 3. Test the Feature
1. Navigate to http://localhost:3000
2. Click "Book consultation" in navbar
3. Fill out the form with:
   - Name (required)
   - Email (required)
   - Phone (required)
   - Preferred Date (required)
   - Preferred Time (optional)
   - Service Type (optional)
   - Message (optional)
4. Submit the form
5. Check for success message
6. Check your email (NOTIFICATION_EMAIL) for admin notification
7. Check the customer email for confirmation

### 4. Test API Directly (Optional)
```bash
# Create consultation
curl -X POST http://localhost:5001/api/consultations \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "preferredDate": "2024-12-20",
    "message": "Looking for interior design consultation"
  }'

# Get all consultations
curl http://localhost:5001/api/consultations

# Health check
curl http://localhost:5001/api/health
```

## Environment Variables Required

Create `server/.env` with:
```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
NOTIFICATION_EMAIL=admin@example.com
CLIENT_URL=http://localhost:3000
```

## Email Setup

### Gmail (Development)
1. Enable 2-Factor Authentication
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use app password in EMAIL_PASSWORD

### SendGrid (Production)
1. Sign up at sendgrid.com
2. Create API key
3. Set SENDGRID_API_KEY in .env

## Features Included

✅ Form validation (client + server)
✅ Error handling and user feedback
✅ Responsive design
✅ Email notifications (admin + client)
✅ MongoDB persistence
✅ RESTful API
✅ CORS configuration
✅ Security headers (Helmet)
✅ Loading states
✅ Success/error messages
✅ Date validation (no past dates)
✅ Character limits with counters
✅ Pagination support
✅ Status management

## Next Steps (Optional Enhancements)

- [ ] Add admin dashboard to view consultations
- [ ] Add calendar integration (Google Calendar)
- [ ] Add SMS notifications (Twilio)
- [ ] Add reCAPTCHA to prevent spam
- [ ] Add consultation status tracking for clients
- [ ] Add file upload for inspiration images
- [ ] Add time slot availability checking
- [ ] Add confirmation/cancellation functionality
- [ ] Add consultation history for returning clients

## Troubleshooting

**Port 5000 already in use?**
- Change PORT in .env to 5001 (already done)

**MongoDB connection error?**
- Check MONGODB_URI in .env
- Verify MongoDB Atlas IP whitelist
- Test connection string

**Email not sending?**
- Verify EMAIL_USER and EMAIL_PASSWORD
- Check Gmail app password settings
- Review server logs for error details

**Form not submitting?**
- Check browser console for errors
- Verify backend is running on port 5001
- Check CORS configuration

## API Response Examples

### Success Response
```json
{
  "success": true,
  "message": "Consultation request submitted successfully",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "status": "pending",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email"
    }
  ]
}
```
