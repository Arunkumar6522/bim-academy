const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://script.google.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/macros/s/AKfycbyLx_QEyyMlPWnNMEBZzyYIjmAcCeURkJci7D8OoUDRvfUnjVhGTb0NsnjvvHycD56i_w/exec',
      },
      onProxyReq: (proxyReq, req, res) => {
        // Add CORS headers
        proxyReq.setHeader('Origin', 'https://script.google.com');
        proxyReq.setHeader('User-Agent', 'BimBytes-Academy-Form/1.0');
      },
      onProxyRes: (proxyRes, req, res) => {
        // Add CORS headers to response
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type';
      },
    })
  );
};
