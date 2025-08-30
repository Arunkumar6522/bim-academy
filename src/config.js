// Configuration file for the application
export const config = {
  // Google Apps Script API URL for enquiries and placements
  GOOGLE_APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbw-eWZoVNeZ64Xg8vd96dxEQNA4l-v7oWMeVcUag7oUhXhwDLw0ObIOy5H1MYDCnMY4Gg/exec',
  
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