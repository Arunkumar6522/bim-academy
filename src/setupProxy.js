const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');

dotenv.config();

module.exports = function(app) {
  // Form submit proxy to Google Apps Script (kept)
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://script.google.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/macros/s/AKfycbyp758cB6_U_t0qCD3rrf1c8yWz9lfAT9l0M55ajzNhcNUyj54QXq4yYZl29W7tZjIp/exec',
      },
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Origin', 'https://script.google.com');
        proxyReq.setHeader('User-Agent', 'BimBytes-Academy-Form/1.0');
      },
      onProxyRes: (proxyRes, req, res) => {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type';
      },
    })
  );

  // Single-server Google Reviews endpoint (no separate port)
  app.get('/google-reviews', async (req, res) => {
    try {
      const apiKey = process.env.GOOGLE_PLACES_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ success: false, error: 'Missing GOOGLE_PLACES_API_KEY on server' });
      }

      const { placeId, query, location } = req.query;

      let fetchImpl = global.fetch;
      if (typeof fetchImpl !== 'function') {
        fetchImpl = (await import('node-fetch')).default;
      }

      let effectivePlaceId = placeId;

      if (!effectivePlaceId && query) {
        const params = new URLSearchParams({ query, key: apiKey });
        if (location) {
          params.set('location', location);
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
      return res.json({
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
          author_url: r.author_url,
        })),
      });
    } catch (err) {
      console.error('Google Reviews error:', err);
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // Proxy profile photo to avoid referrer/cross-origin issues
  app.get('/google-photo', async (req, res) => {
    try {
      const { url } = req.query;
      if (!url) return res.status(400).send('Missing url');

      let fetchImpl = global.fetch;
      if (typeof fetchImpl !== 'function') {
        fetchImpl = (await import('node-fetch')).default;
      }

      const upstream = await fetchImpl(url, { headers: { 'User-Agent': 'BimBytes-Academy/1.0' } });
      if (!upstream.ok) {
        return res.status(upstream.status).send('Failed to load image');
      }
      res.setHeader('Content-Type', upstream.headers.get('content-type') || 'image/jpeg');
      const buffer = Buffer.from(await upstream.arrayBuffer());
      res.send(buffer);
    } catch (e) {
      console.error('Photo proxy error:', e);
      res.status(500).send('Photo proxy error');
    }
  });
};
