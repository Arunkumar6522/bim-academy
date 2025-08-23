const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Enable CORS for all origins
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// Handle preflight OPTIONS requests
app.options('*', cors());

// Main proxy endpoint
app.post('/proxy', async (req, res) => {
  try {
    console.log('📝 Received form submission:', req.body);
    
    // Use node-fetch or built-in fetch based on Node.js version
    let fetch;
    try {
      // Try to use built-in fetch (Node.js 18+)
      fetch = globalThis.fetch;
      console.log('✅ Using built-in fetch');
    } catch {
      // Fallback to node-fetch for older versions
      fetch = require('node-fetch');
      console.log('✅ Using node-fetch');
    }
    
    console.log('🚀 Sending data to Google Apps Script...');
    
    const response = await fetch('https://script.google.com/macros/s/AKfycbyhCIJ3Z7A-8MG4Ymibcm3N8j0d3Ey0Sgu4vb7fSO1DGvfAPHw1bzNl83U9Lc6aPxY8bQ/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'BimBytes-Academy-Form/1.0'
      },
      body: JSON.stringify(req.body)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ Google Apps Script response:', data);
    
    res.json(data);
  } catch (error) {
    console.error('❌ Proxy error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'CORS Proxy is running',
    version: '1.0.0'
  });
});

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ 
    message: 'CORS Proxy test successful',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/health',
      test: '/test',
      proxy: '/proxy'
    }
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'BimBytes Academy CORS Proxy',
    status: 'Running',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/health',
      test: '/test',
      proxy: '/proxy'
    }
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('❌ Unhandled error:', error);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log('🚀 CORS Proxy Server Started Successfully!');
  console.log('📍 Server running on http://localhost:3001');
  console.log('📝 Proxy endpoint: http://localhost:3001/proxy');
  console.log('❤️ Health check: http://localhost:3001/health');
  console.log('🧪 Test endpoint: http://localhost:3001/test');
  console.log('🌐 Root endpoint: http://localhost:3001/');
  console.log('⏰ Started at:', new Date().toISOString());
  console.log('✅ Ready to handle form submissions!');
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down CORS Proxy...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down CORS Proxy...');
  process.exit(0);
});