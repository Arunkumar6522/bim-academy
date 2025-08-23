# 🚀 BimBytes Academy Lead Capture System - Setup Guide

## ✅ What's Already Done:
- ✅ CORS Proxy code created and optimized
- ✅ React forms updated to use local proxy
- ✅ Package.json scripts added
- ✅ Setup batch file created
- ✅ All code changes completed

## 🎯 What You Need to Do (3 Simple Steps):

### Step 1: Double-click `setup.bat`
- This will automatically install dependencies and start both servers
- **OR** manually run: `npm run start-all`

### Step 2: Wait for Success Messages
You should see:
```
🚀 CORS Proxy Server Started Successfully!
📍 Server running on http://localhost:3001
✅ Ready to handle form submissions!

Local:            http://localhost:3000
On Your Network:  http://192.168.x.x:3000
```

### Step 3: Test Your System
1. **Go to:** http://localhost:3000
2. **Fill out any form** on your website
3. **Submit the form**
4. **Check Google Sheets** - leads should appear!

## 🔍 Testing Your Setup:

### Test CORS Proxy:
- **Health Check:** http://localhost:3001/health
- **Test Endpoint:** http://localhost:3001/test
- **Root:** http://localhost:3001/

### Test React App:
- **Main App:** http://localhost:3000
- **Forms should submit** without CORS errors

## 🚨 If Something Goes Wrong:

### Check if servers are running:
```bash
# Check CORS Proxy
curl http://localhost:3001/health

# Check React App
curl http://localhost:3000
```

### Manual start commands:
```bash
# Terminal 1: Start CORS Proxy
npm run proxy

# Terminal 2: Start React App
npm start
```

## 📊 Expected Results:

- ✅ **CORS Proxy running** on port 3001
- ✅ **React App running** on port 3000
- ✅ **Forms submitting** without errors
- ✅ **Leads appearing** in Google Sheets
- ✅ **No more CORS issues**

## 🎉 Success Indicators:

1. **CORS Proxy terminal** shows: "✅ Ready to handle form submissions!"
2. **React terminal** shows: "Local: http://localhost:3000"
3. **Forms submit** without "ERR_CONNECTION_REFUSED"
4. **Google Sheets** receives new lead data

## 🆘 Need Help?

If you encounter issues:
1. **Check both terminals** for error messages
2. **Verify URLs** are accessible in browser
3. **Restart both servers** if needed
4. **Check Google Apps Script** is still deployed

## 🚀 Quick Start:

**Just double-click `setup.bat` and wait for success messages!**

Your lead capture system will work perfectly in 2 minutes! 🎯
