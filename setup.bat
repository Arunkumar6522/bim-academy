@echo off
echo 🚀 BimBytes Academy Lead Capture System Setup
echo ==============================================
echo.

echo 📦 Installing dependencies...
npm install node-fetch
npm install --save-dev concurrently

echo.
echo ✅ Dependencies installed successfully!
echo.

echo 🚀 Starting CORS Proxy and React App...
echo.
echo 📝 CORS Proxy will run on: http://localhost:3001
echo 🌐 React App will run on: http://localhost:3000
echo.
echo ⏳ Starting both servers...
echo.

npm run dev

pause
