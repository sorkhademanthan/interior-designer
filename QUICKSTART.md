# Quick Start Guide - Aurora Atelier

Get up and running in **5 minutes**! ⚡

## 📦 Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account
- A Gmail account (for development email testing)

---

## 🚀 Installation (2 minutes)

### 1. Clone & Install
```bash
# Clone the repository
git clone https://github.com/yourusername/aurora-atelier-mern.git
cd aurora-atelier-mern

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

---

## ⚙️ Configuration (2 minutes)

### 2. Setup Backend Environment

```bash
# In the server/ directory
cd server
cp .env.example .env
```

Edit `server/.env` with your details:

```env
PORT=5001
NODE_ENV=development

# MongoDB (choose one)
# Local: 
MONGODB_URI=mongodb://localhost:27017/aurora-atelier
# Or Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.xxxxx.mongodb.net/aurora-atelier

# Gmail Setup (for testing)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password  # See note below
NOTIFICATION_EMAIL=your-email@gmail.com

# Frontend URL
CLIENT_URL=http://localhost:3001
```

**📧 Gmail App Password Setup:**
1. Go to [Google Account](https://myaccount.google.com/)
2. Security → 2-Step Verification → Enable it
3. Security → App passwords → Generate new
4. Use the 16-character password in `EMAIL_PASSWORD`

---

## ▶️ Run the App (1 minute)

### 3. Start Backend
```bash
cd server
npm run dev
```
✅ Server running at http://localhost:5001

### 4. Start Frontend (New Terminal)
```bash
cd client
npm start
```
✅ App running at http://localhost:3001

---

## ✅ Verify Everything Works

### Check Backend
Open: http://localhost:5001/api/health

Should see:
```json
{"status":"Server is running","timestamp":"..."}
```

### Check Frontend
Open: http://localhost:3001

You should see the Aurora Atelier homepage!

---

## 🎯 Quick Test

### Test Consultation Form
1. Click "Request a private consult" button
2. Fill out the form
3. Submit
4. Check your email (both inbox and spam) for 2 emails:
   - Admin notification
   - Client confirmation

### Test Project Form
1. Go to "Pricing" page
2. Click any "Start your project" button
3. Complete the 5-step form
4. Submit
5. Check emails

---

## 🐛 Troubleshooting

### Port 5000 already in use?
Change `PORT=5001` in `server/.env`

### MongoDB connection error?
**Local MongoDB:**
```bash
# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongodb
```

**Atlas:**
- Check connection string
- Verify IP whitelist (use 0.0.0.0/0 for development)
- Check username/password

### Emails not sending?
- Verify Gmail app password (not regular password)
- Check spam folder
- Look at server terminal for error messages

### Frontend not loading?
```bash
# Clear cache and reinstall
cd client
rm -rf node_modules package-lock.json
npm install
npm start
```

---

## 📚 Next Steps

Once everything is running:

1. **Explore the App**
   - Browse portfolio
   - Try consultation form
   - Test project request form

2. **Read Full Documentation**
   - [README.md](README.md) - Complete documentation
   - [API Documentation](README.md#api-documentation)
   - [Responsive Design](RESPONSIVE-CHECK.md)

3. **Customize**
   - Update portfolio data in `client/src/data/portfolioData.js`
   - Modify pricing tiers in `client/src/pages/PricingPage.jsx`
   - Update contact info in footer

---

## 🎨 Features to Try

### Homepage
- ✅ Responsive navigation with hamburger menu
- ✅ Hero section with CTAs
- ✅ Portfolio showcase
- ✅ Testimonials
- ✅ Process timeline
- ✅ FAQ accordion

### Forms
- ✅ **Book Consultation** - Simple consultation booking
- ✅ **Start Project** - Comprehensive 5-step project intake

### Pages
- ✅ **Features** - Service details
- ✅ **Pricing** - Three-tier pricing
- ✅ **Project Detail** - Full portfolio case studies
- ✅ **Privacy & Terms** - Legal pages

---

## 💡 Development Tips

### Hot Reload
Both frontend and backend have hot reload:
- Frontend: Changes reflect immediately
- Backend: Nodemon auto-restarts on file changes

### Testing API
Use cURL or Postman:
```bash
# Health check
curl http://localhost:5001/api/health

# Create consultation
curl -X POST http://localhost:5001/api/consultations \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"1234567890","preferredDate":"2024-12-25"}'
```

### Viewing Database
```bash
# MongoDB Shell
mongosh

# Select database
use aurora-atelier

# View collections
show collections

# View consultations
db.consultations.find().pretty()

# View projects
db.projects.find().pretty()
```

---

## 📱 Test Responsive Design

### Chrome DevTools
1. Press `F12` to open DevTools
2. Click device toolbar icon (or `Ctrl+Shift+M`)
3. Select device:
   - iPhone SE (375px) - Small mobile
   - iPhone 12 Pro (390px) - Standard mobile
   - iPad (768px) - Tablet
   - Desktop (1920px) - Large screen

### What to Check
- ✅ Hamburger menu on mobile
- ✅ Forms stack vertically
- ✅ Images scale properly
- ✅ Text is readable
- ✅ Buttons are easy to tap
- ✅ No horizontal scroll

---

## 🎓 Project Structure Quick Reference

```
aurora-atelier-mern/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── data/           # Static data
│   │   ├── App.js          # Main app
│   │   └── App.css         # Styles
│   └── package.json
│
├── server/                 # Express backend
│   ├── models/             # MongoDB schemas
│   ├── controllers/        # Business logic
│   ├── routes/             # API routes
│   ├── config/             # Configuration
│   ├── server.js           # Entry point
│   └── .env                # Environment vars
│
└── README.md               # Full documentation
```

---

## ✅ Checklist

Before deploying or sharing:

- [ ] Backend server runs without errors
- [ ] Frontend loads correctly
- [ ] MongoDB connection established
- [ ] Emails send successfully
- [ ] Consultation form works
- [ ] Project form works (all 5 steps)
- [ ] Portfolio pages load
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] All navigation links work

---

## 🆘 Need Help?

- **Full Documentation:** [README.md](README.md)
- **API Reference:** [README.md#api-documentation](README.md#api-documentation)
- **Troubleshooting:** [TESTING-CHECKLIST.md](TESTING-CHECKLIST.md)
- **Responsive Issues:** [RESPONSIVE-CHECK.md](RESPONSIVE-CHECK.md)

---

## 🎉 You're Ready!

Your Aurora Atelier development environment is set up and running!

**Happy Coding!** 🚀

---

*Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}*
