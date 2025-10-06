# Aurora Atelier - Interior Design Platform

<div align="center">

![Aurora Atelier](https://img.shields.io/badge/Aurora-Atelier-C6B896?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)

**A premium MERN stack web application for luxury interior design services**

[Features](#features) • [Tech Stack](#tech-stack) • [Installation](#installation) • [Documentation](#documentation)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Responsive Design](#responsive-design)
- [Email Configuration](#email-configuration)
- [Deployment](#deployment)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## 🎨 Overview

Aurora Atelier is a full-stack MERN (MongoDB, Express, React, Node.js) application designed for a luxury interior design firm. The platform enables potential clients to explore services, view portfolios, and submit detailed consultation or project requests. The application features a sophisticated UI with dark luxury aesthetics, responsive design, and comprehensive backend functionality.

### Live Demo
- **Frontend:** [http://localhost:3001](http://localhost:3001) (Development)
- **Backend API:** [http://localhost:5001](http://localhost:5001) (Development)

---

## ✨ Features

### Client-Facing Features

#### 🏠 **Home Page**
- Hero section with call-to-action buttons
- About section with company pillars
- Portfolio showcase with project cards
- Client testimonials carousel
- Process timeline visualization
- FAQ accordion section
- Professional footer with contact information

#### 📂 **Portfolio**
- Project grid with image previews
- Detailed project pages with:
  - Full image galleries
  - Project specifications
  - Timeline breakdown
  - Materials & sources
  - Client testimonials
  - Budget information

#### 💰 **Pricing**
- Three-tier pricing structure (Refresh, Signature, Bespoke)
- Detailed feature comparisons
- Add-on services
- FAQ section
- Direct booking CTA

#### 🎯 **Services**
- Four main service categories
- Detailed service descriptions
- Feature lists per service
- Visual service cards

#### 📝 **Book Consultation**
- Simple consultation request form
- Date picker with validation
- Email notifications (admin + client)
- Success/error feedback

#### 🚀 **Start Project**
- **5-Step Multi-Form Wizard:**
  1. Client Information
  2. Property Details
  3. Scope & Budget
  4. Design Preferences & Requirements
  5. Review & Submit
- Progress indicator
- Form validation
- Comprehensive data collection
- Email notifications

#### 📄 **Legal Pages**
- Privacy Policy
- Terms of Service
- Professional legal documentation

### Backend Features

#### 🔐 **API Endpoints**

**Consultations:**
- `POST /api/consultations` - Create consultation request
- `GET /api/consultations` - List all consultations (with pagination)
- `GET /api/consultations/:id` - Get single consultation
- `PATCH /api/consultations/:id/status` - Update status
- `DELETE /api/consultations/:id` - Delete consultation

**Projects:**
- `POST /api/projects` - Create project request
- `GET /api/projects` - List all projects (with pagination & filters)
- `GET /api/projects/:id` - Get single project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

**Health Check:**
- `GET /api/health` - Server health status

#### 📧 **Email Notifications**
- Admin notifications for new requests
- Client confirmation emails
- Professional HTML email templates
- Support for Gmail, SendGrid, and custom SMTP

#### 🛡️ **Security Features**
- Helmet.js for security headers
- CORS configuration
- Input validation (Express Validator)
- MongoDB injection prevention
- Environment variable protection

---

## 🛠️ Tech Stack

### Frontend
- **React** 19.2.0 - UI library
- **React Router DOM** 7.9.3 - Client-side routing
- **CSS3** - Custom styling with mobile-first approach
- **React Testing Library** - Component testing

### Backend
- **Node.js** - JavaScript runtime
- **Express** 4.18.2 - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** 8.0.3 - ODM for MongoDB

### Utilities & Libraries
- **Nodemailer** 6.9.7 - Email service
- **Express Validator** 7.0.1 - Input validation
- **Helmet** 7.1.0 - Security middleware
- **CORS** 2.8.5 - Cross-origin resource sharing
- **dotenv** 16.3.1 - Environment variables

### Development Tools
- **Nodemon** 3.0.2 - Auto-restart server
- **React Scripts** 5.0.1 - Build tooling

---

## 📁 Project Structure

```
aurora-atelier-mern/
├── client/                          # React frontend
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/              # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── PortfolioSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── ProcessSection.jsx
│   │   │   ├── FAQSection.jsx
│   │   │   ├── FooterSection.jsx
│   │   │   └── ProjectDetail.jsx
│   │   ├── pages/                   # Page components
│   │   │   ├── FeaturesPage.jsx
│   │   │   ├── PricingPage.jsx
│   │   │   ├── BookConsultationPage.jsx
│   │   │   ├── StartProjectPage.jsx
│   │   │   ├── PrivacyPage.jsx
│   │   │   └── TermsPage.jsx
│   │   ├── data/
│   │   │   └── portfolioData.js     # Portfolio project data
│   │   ├── App.js                   # Main app component
│   │   ├── App.css                  # Global styles
│   │   └── index.js                 # Entry point
│   ├── package.json
│   └── README.md
│
├── server/                          # Node.js backend
│   ├── models/                      # Mongoose schemas
│   │   ├── Consultation.js
│   │   └── Project.js
│   ├── controllers/                 # Business logic
│   │   ├── consultationController.js
│   │   └── projectController.js
│   ├── routes/                      # API routes
│   │   ├── consultationRoutes.js
│   │   └── projectRoutes.js
│   ├── config/                      # Configuration
│   │   └── emailService.js          # Email setup
│   ├── middleware/                  # Custom middleware
│   ├── server.js                    # Express server setup
│   ├── package.json
│   ├── .env.example                 # Environment template
│   ├── .env                         # Environment variables (not in git)
│   └── .gitignore
│
├── README.md                        # This file
├── RESPONSIVE-CHECK.md              # Responsive design documentation
├── TESTING-CHECKLIST.md             # Testing guide
├── MOBILE-IMPROVEMENTS.md           # Mobile enhancements
├── CONSULTATION-FEATURE.md          # Consultation feature docs
└── SETUP.md                         # Detailed setup guide
```

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)
- **MongoDB** (v4.4 or higher) - Local or MongoDB Atlas account
- **Git** (for cloning the repository)

### Clone Repository

```bash
git clone https://github.com/yourusername/aurora-atelier-mern.git
cd aurora-atelier-mern
```

### Install Dependencies

#### Frontend
```bash
cd client
npm install
```

#### Backend
```bash
cd ../server
npm install
```

---

## 🔧 Environment Setup

### Backend Environment Variables

Create a `.env` file in the `server/` directory:

```bash
cd server
cp .env.example .env
```

Configure the following variables:

```env
# Server Configuration
PORT=5001
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/aurora-atelier
# Or MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.xxxxx.mongodb.net/aurora-atelier

# Email Configuration (Choose one option)

# Option 1: Gmail (Development)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password  # Use App Password if 2FA enabled

# Option 2: SendGrid (Production)
# SENDGRID_API_KEY=your-sendgrid-api-key

# Option 3: Custom SMTP
# SMTP_HOST=smtp.example.com
# SMTP_PORT=587
# SMTP_USER=your-smtp-user
# SMTP_PASSWORD=your-smtp-password

# Notification Email (Where to receive consultation requests)
NOTIFICATION_EMAIL=admin@auroraatelier.com

# CORS Configuration
CLIENT_URL=http://localhost:3001

# JWT Secret (Optional - for future authentication)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### Email Setup Options

#### Option A: Gmail (Easiest for Development)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Use the 16-character app password in `EMAIL_PASSWORD`

#### Option B: SendGrid (Recommended for Production)
1. Sign up at [https://sendgrid.com/](https://sendgrid.com/)
2. Create an API key
3. Set `SENDGRID_API_KEY` in `.env`

#### Option C: Custom SMTP
Configure your SMTP server details in the environment variables

### MongoDB Setup

#### Option A: Local MongoDB
```bash
# macOS (using Homebrew)
brew install mongodb-community
brew services start mongodb-community

# Linux (Ubuntu)
sudo systemctl start mongodb

# Windows
# Download and install from https://www.mongodb.com/try/download/community
```

#### Option B: MongoDB Atlas (Recommended)
1. Sign up at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get connection string and add to `.env`

---

## 🏃 Running the Application

### Development Mode

#### Start Backend Server
```bash
cd server
npm run dev
```
Server will run on [http://localhost:5001](http://localhost:5001)

#### Start Frontend Development Server
```bash
cd client
npm start
```
Frontend will run on [http://localhost:3001](http://localhost:3001)

### Production Build

#### Build Frontend
```bash
cd client
npm run build
```

#### Serve Production Build
```bash
# Install serve globally
npm install -g serve

# Serve the build
serve -s build -l 3001
```

---

## 📚 API Documentation

### Base URL
```
http://localhost:5001/api
```

### Consultations API

#### Create Consultation
```http
POST /api/consultations
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "preferredDate": "2024-12-25",
  "preferredTime": "morning",
  "serviceType": "consultation",
  "message": "Looking for interior design consultation..."
}
```

**Response (201):**
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

#### Get All Consultations
```http
GET /api/consultations?status=pending&page=1&limit=10
```

**Response (200):**
```json
{
  "success": true,
  "data": [...],
  "totalPages": 5,
  "currentPage": 1,
  "total": 50
}
```

### Projects API

#### Create Project
```http
POST /api/projects
Content-Type: application/json

{
  "clientName": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1 (555) 987-6543",
  "propertyAddress": "123 Main St, New York, NY",
  "projectType": "residential",
  "propertyType": "house",
  "pricingTier": "signature",
  "desiredStartDate": "2024-12-01",
  "budgetRange": "50k-100k",
  "stylePreferences": ["Modern", "Minimalist"],
  "roomsAreas": ["Living Room", "Kitchen", "Master Bedroom"]
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Project request submitted successfully",
  "data": {
    "_id": "...",
    "clientName": "Jane Smith",
    "status": "pending",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

#### Get All Projects
```http
GET /api/projects?status=pending&priority=high&page=1&limit=10
```

### Health Check
```http
GET /api/health
```

**Response (200):**
```json
{
  "status": "Server is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

## 🗄️ Database Schema

### Consultation Schema
```javascript
{
  name: String (required, 2-100 chars),
  email: String (required, valid email),
  phone: String (required),
  preferredDate: Date (required),
  preferredTime: String (enum: morning|afternoon|evening),
  serviceType: String (enum: interior-design|consultation|renovation|other),
  message: String (max 1000 chars),
  status: String (enum: pending|confirmed|completed|cancelled),
  createdAt: Date,
  updatedAt: Date
}
```

### Project Schema
```javascript
{
  // Client Information
  clientName: String (required),
  email: String (required),
  phone: String (required),
  propertyAddress: String (required),
  bestTimeToContact: String (enum),
  
  // Project Details
  projectType: String (enum: residential|commercial),
  propertyType: String (enum),
  propertySize: String,
  roomsAreas: [String],
  propertyCondition: String (enum),
  
  // Scope & Timeline
  pricingTier: String (enum: refresh|signature|bespoke|not-sure),
  desiredStartDate: Date (required),
  projectDeadline: Date,
  timelineFlexibility: String (enum),
  
  // Budget
  budgetRange: String (enum, required),
  budgetFlexibility: String (enum),
  needsFinancing: Boolean,
  
  // Design Preferences
  stylePreferences: [String],
  colorPreferences: String,
  inspirationReferences: String,
  mustHaveFeatures: String,
  
  // Special Requirements
  accessibilityNeeds: Boolean,
  accessibilityDetails: String,
  sustainabilityPreference: String (enum),
  hasPets: Boolean,
  petDetails: String,
  storageNeeds: String (enum),
  
  // Additional Services
  needsArchitecture: Boolean,
  needsContractor: Boolean,
  needsProjectManagement: Boolean,
  
  // Additional Information
  additionalNotes: String (max 2000 chars),
  howDidYouHear: String,
  
  // Status & Tracking
  status: String (enum),
  priority: String (enum),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 📱 Responsive Design

Aurora Atelier is fully responsive across all device sizes:

### Breakpoints
- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px+

### Key Responsive Features
- ✅ Mobile-first CSS approach
- ✅ Hamburger navigation menu on mobile
- ✅ Fluid typography using `clamp()`
- ✅ Responsive grids (3 cols → 2 cols → 1 col)
- ✅ Touch-friendly buttons (44px+ touch targets)
- ✅ Optimized forms for mobile input
- ✅ Image optimization and lazy loading
- ✅ No horizontal scroll on any device

### Testing Responsive Design
```bash
# Open Chrome DevTools (F12)
# Toggle Device Toolbar (Ctrl+Shift+M)
# Test on: iPhone SE, iPhone 12, iPad, Desktop
```

For detailed responsive documentation, see [RESPONSIVE-CHECK.md](RESPONSIVE-CHECK.md)

---

## 📧 Email Configuration

### Email Templates

The application sends two types of emails:

#### Admin Notification Email
- Sent to: `NOTIFICATION_EMAIL`
- Contains: Full client and project/consultation details
- Format: Professional HTML email

#### Client Confirmation Email
- Sent to: Client's email address
- Contains: Confirmation message and next steps
- Format: Professional HTML email

### Email Service Setup

**Gmail:**
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

**SendGrid:**
```env
SENDGRID_API_KEY=your-api-key
```

**Custom SMTP:**
```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-user
SMTP_PASSWORD=your-password
```

### Testing Email
```bash
# Test consultation submission
curl -X POST http://localhost:5001/api/consultations \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"1234567890","preferredDate":"2024-12-25"}'
```

---

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

#### Vercel
```bash
cd client
npm install -g vercel
vercel
```

#### Netlify
```bash
cd client
npm run build
# Upload build/ folder to Netlify or connect Git repository
```

### Backend Deployment (Heroku/Railway/Render)

#### Heroku
```bash
cd server
heroku create aurora-atelier-api
git push heroku main
heroku config:set MONGODB_URI=your-atlas-uri
heroku config:set EMAIL_USER=your-email
# Set other environment variables
```

#### Railway
1. Connect GitHub repository
2. Select `server` as root directory
3. Add environment variables in Railway dashboard
4. Deploy

#### Render
1. Create new Web Service
2. Connect GitHub repository
3. Set root directory to `server`
4. Add environment variables
5. Deploy

### Environment Variables for Production

Ensure these are set in your deployment platform:
- `NODE_ENV=production`
- `MONGODB_URI` (MongoDB Atlas connection string)
- `EMAIL_USER` and `EMAIL_PASSWORD`
- `CLIENT_URL` (Your frontend URL)
- All other variables from `.env.example`

---

## 🧪 Testing

### Manual Testing

Use the testing checklist:
```bash
# See TESTING-CHECKLIST.md for comprehensive guide
```

### API Testing with cURL

**Health Check:**
```bash
curl http://localhost:5001/api/health
```

**Create Consultation:**
```bash
curl -X POST http://localhost:5001/api/consultations \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "preferredDate": "2024-12-25"
  }'
```

**Create Project:**
```bash
curl -X POST http://localhost:5001/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "clientName": "Test Client",
    "email": "client@example.com",
    "phone": "1234567890",
    "propertyAddress": "123 Main St",
    "projectType": "residential",
    "propertyType": "house",
    "pricingTier": "signature",
    "desiredStartDate": "2024-12-01",
    "budgetRange": "50k-100k"
  }'
```

### Frontend Testing
```bash
cd client
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style Guidelines
- Use ES6+ syntax
- Follow React best practices
- Write meaningful commit messages
- Add comments for complex logic
- Ensure responsive design on all new features
- Test on multiple browsers

---

## 📝 Additional Documentation

- **[SETUP.md](server/SETUP.md)** - Detailed backend setup instructions
- **[CONSULTATION-FEATURE.md](CONSULTATION-FEATURE.md)** - Consultation system documentation
- **[RESPONSIVE-CHECK.md](RESPONSIVE-CHECK.md)** - Responsive design verification
- **[MOBILE-IMPROVEMENTS.md](MOBILE-IMPROVEMENTS.md)** - Mobile enhancements details
- **[TESTING-CHECKLIST.md](TESTING-CHECKLIST.md)** - Comprehensive testing guide

---

## 🐛 Troubleshooting

### Common Issues

**Port 5000 already in use:**
```bash
# Change PORT in server/.env to 5001
PORT=5001
```

**MongoDB connection error:**
```bash
# Verify MongoDB is running
mongod --version

# Check connection string in .env
# Ensure IP whitelist in MongoDB Atlas
```

**Emails not sending:**
```bash
# Verify email credentials
# Check spam folder
# Review server logs for error details
```

**CORS errors:**
```bash
# Ensure CLIENT_URL in .env matches your frontend URL
CLIENT_URL=http://localhost:3001
```

**Module not found:**
```bash
# Reinstall dependencies
cd client && npm install
cd ../server && npm install
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Aurora Atelier Development Team**

- Website: [auroraatelier.com](https://auroraatelier.com)
- Email: concierge@auroraatelier.com
- Phone: +1 (212) 555-0194

---

## 🙏 Acknowledgments

- Design inspiration from luxury interior design firms
- Icons from Heroicons
- Images from Unsplash
- React community for excellent libraries
- MongoDB for robust database solution

---

## 📊 Project Status

✅ **Production Ready** - Fully functional and tested

### Version
**v1.0.0** - Initial Release

### Last Updated
${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

---

<div align="center">

**Built with ❤️ using the MERN Stack**

[⬆ Back to Top](#aurora-atelier---interior-design-platform)

</div>
