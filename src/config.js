// Configuration file for the application
export const config = {
  // API URL - automatically switches between development and production
  GOOGLE_SHEETS_API_URL: process.env.NODE_ENV === 'production' 
    ? 'https://script.google.com/macros/s/AKfycbyLx_QEyyMlPWnNMEBZzyYIjmAcCeURkJci7D8OoUDRvfUnjVhGTb0NsnjvvHycD56i_w/exec'
    : 'http://localhost:3000/api',
  
  // Other configuration values can be added here
  COMPANY_NAME: 'BimBytes Academy',
  CONTACT_EMAIL: 'info@bimbytesacademy.com',
  PHONE: '+1-234-567-8900'
};