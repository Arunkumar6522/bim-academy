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
    return 'https://script.google.com/macros/s/AKfycbyLx_QEyyMlPWnNMEBZzyYIjmAcCeURkJci7D8OoUDRvfUnjVhGTb0NsnjvvHycD56i_w/exec';
  })(),
  
  // Other configuration values can be added here
  COMPANY_NAME: 'BimBytes Academy',
  CONTACT_EMAIL: 'info@bimbytesacademy.com',
  PHONE: '+1-234-567-8900'
};