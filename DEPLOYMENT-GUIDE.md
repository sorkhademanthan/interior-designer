# 🚀 Deployment Guide - Aurora Atelier

Complete step-by-step guide to deploy your application to production.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] Application runs locally without errors
- [ ] All tests pass
- [ ] Environment variables are documented
- [ ] MongoDB Atlas is set up
- [ ] Email service is configured
- [ ] Git repository is clean
- [ ] No sensitive data in code

---

## 🗺️ Deployment Overview

We'll deploy in this order:

1. **MongoDB Atlas** (Database) - Already set up ✅
2. **Backend API** → Render (Free tier)
3. **Frontend** → Vercel (Free tier)
4. **Connect everything** → Update URLs
5. **Test production** → Verify all features

**Total Time:** 30-45 minutes

---

## 📊 Deployment Architecture

```
┌─────────────────┐
│   Users/Clients │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Vercel         │  ← Frontend (React)
│  aurora-atelier │     (Static site)
└────────┬────────┘
         │ API Calls
         ▼
┌─────────────────┐
│  Render         │  ← Backend (Node.js)
│  API Server     │     (REST API)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  MongoDB Atlas  │  ← Database
│  Cloud Database │     (Hosted MongoDB)
└─────────────────┘
```

---

## 1️⃣ MongoDB Atlas Setup (5 minutes)

### If Already Set Up
Skip to [Step 2](#2️⃣-backend-deployment-render)

### If Not Set Up Yet

#### 1.1 Create MongoDB Atlas Account
1. Go to [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
2. Sign up (free account)
3. Verify your email

#### 1.2 Create a Cluster
1. Click **"Build a Database"**
2. Choose **"Shared"** (Free tier)
3. Select **AWS** as provider
4. Choose region closest to you
5. Cluster Name: `aurora-atelier`
6. Click **"Create Cluster"** (takes 3-5 minutes)

#### 1.3 Create Database User
1. Click **"Database Access"** (left sidebar)
2. Click **"Add New Database User"**
3. Authentication Method: **Password**
4. Username: `aurora_admin`
5. Password: Click **"Autogenerate Secure Password"** and **COPY IT**
6. User Privileges: **Atlas admin**
7. Click **"Add User"**

#### 1.4 Whitelist IP Address
1. Click **"Network Access"** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for now)
4. IP: `0.0.0.0/0` (will be pre-filled)
5. Click **"Confirm"**

#### 1.5 Get Connection String
1. Click **"Database"** (left sidebar)
2. Click **"Connect"** on your cluster
3. Click **"Connect your application"**
4. Copy the connection string:
   ```
   mongodb+srv://aurora_admin:<password>@aurora.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password
6. Add database name: `...mongodb.net/aurora-atelier?retryWrites...`

**Save this connection string securely!** You'll need it for the backend.

---

## 2️⃣ Backend Deployment (Render) (15 minutes)

### 2.1 Prepare Backend for Deployment

#### Check package.json
```bash
cd server
cat package.json
```

Ensure it has:
```json
{
  "name": "aurora-atelier-server",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "engines": {
    "node": ">=14.0.0"
  }
}
```

#### Test locally one more time
```bash
cd server
npm start
```

Visit: http://localhost:5001/api/health

Should see: `{"status":"Server is running"}`

Press `Ctrl+C` to stop.

### 2.2 Create Render Account

1. Go to [https://render.com](https://render.com)
2. Click **"Get Started for Free"**
3. Sign up with GitHub (recommended) or email
4. Verify your email

### 2.3 Create New Web Service

1. Click **"New +"** → **"Web Service"**
2. Choose **"Build and deploy from a Git repository"**
3. Click **"Connect a repository"**
4. If using GitHub: **"Connect GitHub"** and authorize
5. Find your repository: `aurora-atelier-mern`
6. Click **"Connect"**

### 2.4 Configure Web Service

**Basic Settings:**
- **Name:** `aurora-atelier-api` (or your choice)
- **Region:** Choose closest to you
- **Branch:** `main` (or your default branch)
- **Root Directory:** `server`
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`

**Instance Type:**
- Select **"Free"** tier

### 2.5 Add Environment Variables

Scroll down to **"Environment Variables"**

Click **"Add Environment Variable"** for each:

```
NODE_ENV = production

MONGODB_URI = mongodb+srv://aurora_admin:YOUR_PASSWORD@aurora.xxxxx.mongodb.net/aurora-atelier?retryWrites=true&w=majority

EMAIL_SERVICE = gmail
EMAIL_USER = your-email@gmail.com
EMAIL_PASSWORD = your-app-password
NOTIFICATION_EMAIL = your-email@gmail.com

PORT = 10000
CLIENT_URL = https://YOUR-APP.vercel.app
```

**Important Notes:**
- Use your **actual MongoDB connection string**
- Use your **Gmail App Password** (not regular password)
- `CLIENT_URL` - We'll update this after frontend deployment
- `PORT` - Render uses 10000 by default, leave it

### 2.6 Deploy Backend

1. Click **"Create Web Service"**
2. Wait for deployment (5-10 minutes)
3. Watch the logs in real-time

**Deployment Process:**
```
Cloning repository...
Installing dependencies...
Starting server...
==> Your service is live 🎉
```

### 2.7 Get Backend URL

Once deployed, you'll see:
```
https://aurora-atelier-api.onrender.com
```

**Copy this URL!** You'll need it for frontend.

### 2.8 Test Backend

Visit in browser:
```
https://aurora-atelier-api.onrender.com/api/health
```

Should see:
```json
{
  "status": "Server is running",
  "timestamp": "..."
}
```

✅ **Backend deployed successfully!**

---

## 3️⃣ Frontend Deployment (Vercel) (10 minutes)

### 3.1 Update API URL in Frontend

Before deploying, update the API URL:

```bash
cd client/src
```

Find all instances of `http://localhost:5001` and note them.

**Files to check:**
- `pages/BookConsultationPage.jsx`
- `pages/StartProjectPage.jsx`

#### Option A: Create Environment Variable (Recommended)

Create `client/.env.production`:
```bash
cd client
cat > .env.production << 'EOF'
REACT_APP_API_URL=https://aurora-atelier-api.onrender.com
EOF
```

Then update your fetch calls:
```javascript
// Instead of:
fetch('http://localhost:5001/api/consultations', ...)

// Use:
fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5001'}/api/consultations`, ...)
```

#### Option B: Direct Update (Quick method)

Update the files directly:

**BookConsultationPage.jsx:**
```javascript
// Find line ~50:
const response = await fetch('https://aurora-atelier-api.onrender.com/api/consultations', {
```

**StartProjectPage.jsx:**
```javascript
// Find line ~100:
const response = await fetch('https://aurora-atelier-api.onrender.com/api/projects', {
```

### 3.2 Test Build Locally

```bash
cd client
npm run build
```

Should complete without errors and create a `build/` folder.

### 3.3 Commit Changes

```bash
cd ../  # Back to root
git add .
git commit -m "Update API URLs for production deployment"
git push origin main
```

### 3.4 Create Vercel Account

1. Go to [https://vercel.com/signup](https://vercel.com/signup)
2. Sign up with GitHub (recommended)
3. Authorize Vercel

### 3.5 Deploy Frontend

#### Method 1: Through Vercel Dashboard

1. Click **"Add New..."** → **"Project"**
2. **Import Git Repository**
3. Find `aurora-atelier-mern`
4. Click **"Import"**

**Configure Project:**
- **Framework Preset:** `Create React App`
- **Root Directory:** `client`
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Install Command:** `npm install`

**Environment Variables:**
(If you used Option A above)
- Add: `REACT_APP_API_URL = https://aurora-atelier-api.onrender.com`

5. Click **"Deploy"**

#### Method 2: Vercel CLI (Alternative)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd client
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? aurora-atelier
# - Directory? ./
# - Override settings? No

# Production deployment
vercel --prod
```

### 3.6 Get Frontend URL

After deployment (2-3 minutes), you'll get:
```
https://aurora-atelier-xxxxx.vercel.app
```

**Copy this URL!**

### 3.7 Update Backend CORS

Go back to Render:
1. Open your backend service
2. Go to **"Environment"**
3. Update `CLIENT_URL`:
   ```
   CLIENT_URL = https://aurora-atelier-xxxxx.vercel.app
   ```
4. Click **"Save Changes"**
5. Wait for automatic redeploy (~2 minutes)

✅ **Frontend deployed successfully!**

---

## 4️⃣ Final Configuration (5 minutes)

### 4.1 Update MongoDB IP Whitelist (Optional - More Secure)

If you want to restrict database access:

1. Go to MongoDB Atlas
2. **Network Access** → **Edit** the 0.0.0.0/0 entry
3. Remove it
4. Add Render's IP ranges or keep it open for now

### 4.2 Configure Custom Domain (Optional)

#### For Frontend (Vercel):
1. Go to project settings
2. Click **"Domains"**
3. Add your domain (e.g., `auroraatelier.com`)
4. Follow DNS configuration steps

#### For Backend (Render):
1. Go to service settings
2. Click **"Custom Domains"**
3. Add subdomain (e.g., `api.auroraatelier.com`)
4. Update DNS records

### 4.3 Set Up Environment-Specific Configs

Create `client/.env.development`:
```env
REACT_APP_API_URL=http://localhost:5001
```

Create `client/.env.production`:
```env
REACT_APP_API_URL=https://aurora-atelier-api.onrender.com
```

Update fetch calls to use:
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';
fetch(`${API_URL}/api/consultations`, ...)
```

---

## 5️⃣ Testing Production (10 minutes)

### 5.1 Test Backend API

```bash
# Health check
curl https://aurora-atelier-api.onrender.com/api/health

# Create consultation
curl -X POST https://aurora-atelier-api.onrender.com/api/consultations \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "preferredDate": "2024-12-25"
  }'
```

Should receive success response and emails.

### 5.2 Test Frontend

Visit: `https://aurora-atelier-xxxxx.vercel.app`

**Test Checklist:**
- [ ] Homepage loads properly
- [ ] Images load
- [ ] Navigation works
- [ ] Portfolio pages load
- [ ] Pricing page displays
- [ ] Features page displays
- [ ] Footer links work

**Test Forms:**
- [ ] Book Consultation form
  - Fill out form
  - Submit
  - Check for success message
  - Verify emails received

- [ ] Start Project form
  - Complete all 5 steps
  - Submit
  - Check for success message
  - Verify emails received

### 5.3 Test Responsive Design

Test on:
- [ ] Desktop (1920px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

Use Chrome DevTools:
1. Press F12
2. Toggle device toolbar
3. Test each device size

### 5.4 Check Browser Console

1. Open browser console (F12)
2. Look for errors (red text)
3. Fix any CORS or API errors

Common issues:
- **CORS error:** Check `CLIENT_URL` in backend env
- **404 errors:** Verify API URL in frontend
- **500 errors:** Check backend logs on Render

---

## 6️⃣ Monitoring & Maintenance

### 6.1 Monitor Backend Logs

Render Dashboard:
1. Go to your service
2. Click **"Logs"** tab
3. Monitor for errors

### 6.2 Monitor Frontend

Vercel Dashboard:
1. Go to your project
2. Click **"Deployments"**
3. Check deployment status

### 6.3 Database Monitoring

MongoDB Atlas:
1. Dashboard → Clusters
2. Click **"Metrics"**
3. Monitor connections, operations, storage

### 6.4 Set Up Alerts (Optional)

**Render:**
- Configure email notifications for deployment failures

**MongoDB Atlas:**
- Set up alerts for high connections, storage

**Vercel:**
- Enable deployment notifications

---

## 🔧 Troubleshooting

### Backend Issues

**Deployment fails:**
```bash
# Check build command
npm install

# Check start command  
npm start

# Verify Node version
node --version  # Should be >=14
```

**Server crashes:**
- Check Render logs
- Verify MongoDB connection string
- Check environment variables

**CORS errors:**
```javascript
// Verify CLIENT_URL in backend .env
CLIENT_URL=https://your-frontend.vercel.app
```

### Frontend Issues

**Build fails:**
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

**API calls fail:**
- Check API URL in code
- Verify backend is running
- Check CORS configuration

**404 on refresh:**
- Vercel handles this automatically
- For other hosts, add `_redirects` or `.htaccess`

### Database Issues

**Connection timeout:**
- Check IP whitelist (0.0.0.0/0)
- Verify connection string
- Check username/password

**Authentication failed:**
- Re-generate password
- Update in backend env variables
- Redeploy backend

---

## 🚀 Post-Deployment

### Update Documentation

1. Update README.md with production URLs
2. Add deployment date
3. Document any changes

### Share Your Work

Your app is now live at:
- **Frontend:** https://aurora-atelier-xxxxx.vercel.app
- **Backend:** https://aurora-atelier-api.onrender.com

### Next Steps

1. **Custom Domain** - Add your own domain
2. **Analytics** - Add Google Analytics or Vercel Analytics
3. **SEO** - Add meta tags, sitemap
4. **Performance** - Enable CDN, optimize images
5. **Security** - Add rate limiting, input sanitization
6. **Monitoring** - Set up uptime monitoring (UptimeRobot)

---

## 📊 Deployment Summary

### Free Tier Limits

**Render (Backend):**
- ✅ 750 hours/month
- ✅ Spins down after 15 min inactivity
- ⚠️ First request after sleep takes 30-60 seconds

**Vercel (Frontend):**
- ✅ Unlimited bandwidth
- ✅ 100 GB-hours compute
- ✅ Always on, no sleep

**MongoDB Atlas:**
- ✅ 512 MB storage
- ✅ Shared cluster
- ✅ Always on

### Upgrade Recommendations

When to upgrade:
- More than 1000 users/month → Paid plans
- Need faster response times → Paid backend
- Need > 512 MB database → Upgrade Atlas

---

## ✅ Final Checklist

Deployment complete when:

- [ ] Backend deployed on Render
- [ ] Frontend deployed on Vercel  
- [ ] MongoDB Atlas connected
- [ ] Environment variables set
- [ ] CORS configured
- [ ] All forms working
- [ ] Emails sending
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] SSL/HTTPS working
- [ ] Production tested

---

## 🎉 Congratulations!

Your Aurora Atelier application is now **LIVE** on the internet! 🚀

**Share your work:**
- Add to portfolio
- Share on LinkedIn
- Tweet about it
- Show to friends/clients

---

## 📞 Support

If you encounter issues:
1. Check [TROUBLESHOOTING.md](README.md#troubleshooting)
2. Review deployment logs
3. Search error messages
4. Check service status pages

---

*Deployment guide last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}*
