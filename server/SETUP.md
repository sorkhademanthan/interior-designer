# Server Setup Instructions

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)

## Manual Setup Steps

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Create Environment File
Copy `.env.example` to `.env` and configure the following:

#### Required Configuration:
- **MONGODB_URI**: Your MongoDB connection string
  - Local: `mongodb://localhost:27017/aurora-atelier`
  - Atlas: `mongodb+srv://<username>:<password>@cluster.xxxxx.mongodb.net/aurora-atelier`

- **EMAIL_USER**: Email address for sending notifications
- **EMAIL_PASSWORD**: Email password or app-specific password
- **NOTIFICATION_EMAIL**: Email where consultation requests are sent

#### Optional Configuration:
- **PORT**: Server port (default: 5000)
- **CLIENT_URL**: Frontend URL for CORS (default: http://localhost:3000)

### 3. Email Setup Options

#### Option A: Gmail (Easiest for Development)
1. Use your Gmail account
2. Enable 2-Factor Authentication
3. Generate an App Password: https://myaccount.google.com/apppasswords
4. Use the app password in `EMAIL_PASSWORD`

#### Option B: SendGrid (Recommended for Production)
1. Sign up at https://sendgrid.com/
2. Create an API key
3. Set `SENDGRID_API_KEY` in .env

#### Option C: Custom SMTP
Configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`

### 4. MongoDB Setup

#### Option A: Local MongoDB
```bash
# Install MongoDB locally and start the service
brew install mongodb-community  # macOS
sudo systemctl start mongodb     # Linux
```

#### Option B: MongoDB Atlas (Recommended)
1. Sign up at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Create a database user
4. Whitelist your IP address
5. Get the connection string and add it to .env

### 5. Start the Server
```bash
npm run dev  # Development with auto-reload
# or
npm start    # Production
```

Server will run on http://localhost:5000

## Testing the API
Once setup is complete, test the consultation endpoint:
```bash
curl -X POST http://localhost:5000/api/consultations \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","phone":"1234567890","preferredDate":"2024-01-15","message":"Test consultation"}'
```
