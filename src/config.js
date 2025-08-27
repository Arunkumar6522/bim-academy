// Configuration file for the application
export const config = {
  // API URL - Smart detection for both local and production
  GOOGLE_SHEETS_API_URL: (() => {
    // Check if we're running on localhost (development)
    if (typeof window !== 'undefined' && 
        (window.location.hostname === 'localhost' || 
         window.location.hostname === '127.0.0.1')) {
      return 'http://localhost:3000/api'; // Use local proxy
    }
    // Production (Netlify, GitHub Pages, etc.)
    return 'https://script.google.com/macros/s/AKfycbyp758cB6_U_t0qCD3rrf1c8yWz9lfAT9l0M55ajzNhcNUyj54QXq4yYZl29W7tZjIp/exec';
  })(),
  
  // Google Reviews (Places API via local proxy)
  GOOGLE_REVIEWS_API_BASE: (() => {
    if (typeof window !== 'undefined' && 
        (window.location.hostname === 'localhost' || 
         window.location.hostname === '127.0.0.1')) {
      return 'http://localhost:3001';
    }
    // In production you should host a secure proxy; adjust accordingly
    return 'https://your-domain-proxy.example.com';
  })(),
  GOOGLE_PLACE_ID: '',
  GOOGLE_PLACE_QUERY: 'BIM BYTES ACADEMY Chennai',

  // Optional: animated tech background gif for Hero (public URL or /path in public)
  TECH_GIF_URL: '',
  
  // Other configuration values can be added here
  COMPANY_NAME: 'BimBytes Academy',
  CONTACT_EMAIL: 'info@bimbytesacademy.com',
  PHONE: '+1-234-567-8900'
};