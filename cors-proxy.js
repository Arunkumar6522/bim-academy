const express = require('express');
const cors = require('cors');
require('dotenv').config();

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
// Preflight is handled by global CORS middleware above; explicit options route removed to avoid Express 5 path issues.

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

// New: Google Reviews proxy using Places Details API
app.get('/google-reviews', async (req, res) => {
  try {
    const { placeId, query, location } = req.query;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ success: false, error: 'Missing GOOGLE_PLACES_API_KEY on server' });
    }

    const fetchImpl = globalThis.fetch || require('node-fetch');

    let effectivePlaceId = placeId;

    // If no placeId but we have a query, resolve placeId via Text Search
    if (!effectivePlaceId && query) {
      const params = new URLSearchParams({
        query,
        key: apiKey,
      });
      if (location) {
        params.set('location', location); // format: "lat,lng"
        params.set('radius', '5000');
      }
      const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?${params.toString()}`;
      const searchResp = await fetchImpl(searchUrl);
      const searchJson = await searchResp.json();
      if (searchJson.status !== 'OK' || !searchJson.results?.length) {
        return res.status(404).json({ success: false, error: searchJson.error_message || 'Place not found' });
      }
      effectivePlaceId = searchJson.results[0].place_id;
    }

    if (!effectivePlaceId) {
      return res.status(400).json({ success: false, error: 'Provide placeId or query parameter' });
    }

    const fields = 'name,rating,user_ratings_total,reviews';
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(effectivePlaceId)}&fields=${encodeURIComponent(fields)}&key=${encodeURIComponent(apiKey)}`;

    const resp = await fetchImpl(detailsUrl);
    const json = await resp.json();

    if (json.status !== 'OK') {
      return res.status(502).json({ success: false, error: json.error_message || json.status || 'Places API error' });
    }

    const details = json.result || {};
    const payload = {
      success: true,
      name: details.name || '',
      placeId: effectivePlaceId,
      rating: details.rating || 0,
      totalReviews: details.user_ratings_total || 0,
      reviews: (details.reviews || []).map(r => ({
        author_name: r.author_name,
        profile_photo_url: r.profile_photo_url,
        rating: r.rating,
        relative_time_description: r.relative_time_description,
        text: r.text,
        time: r.time,
        author_url: r.author_url
      }))
    };

    res.json(payload);
  } catch (error) {
    console.error('❌ Google Reviews proxy error:', error);
    res.status(500).json({ success: false, error: error.message });
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
      proxy: '/proxy',
      googleReviews: '/google-reviews?placeId=YOUR_PLACE_ID'
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
      proxy: '/proxy',
      googleReviews: '/google-reviews?placeId=YOUR_PLACE_ID'
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
app.use((req, res) => {
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
  console.log('⭐ Google reviews: http://localhost:3001/google-reviews?placeId=YOUR_PLACE_ID');
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