// local imports
import {
  footerLinksColumnOne,
  footerLinksColumnTwo,
  newsletter,
} from "../data";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-dark via-secondary to-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-width py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
          {/* Newsletter Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {newsletter}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Stay updated with our latest BIM training programs, industry insights, and career opportunities.
            </p>
            
            <div className="space-y-4">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-400 
                           rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
                           transition-all duration-300 ease-smooth backdrop-blur-sm
                           group-hover:bg-white/15 group-hover:border-white/30"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 
                                 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90
                                 text-white font-semibold rounded-lg transition-all duration-300 ease-smooth
                                 transform hover:scale-105 shadow-lg hover:shadow-glow">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Column One */}
            <div className="space-y-8">
              {footerLinksColumnOne.map((item, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-semibold text-white relative">
                    {item.title}
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  </h3>
                  <ul className="space-y-3">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <button 
                          type="button"
                          className="text-gray-300 hover:text-primary transition-all duration-300 ease-smooth text-sm
                                   relative group text-left w-full"
                        >
                          <span className="relative">
                            {link}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-smooth group-hover:w-full"></span>
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Column Two */}
            <div className="space-y-8">
              {footerLinksColumnTwo.map((item, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-semibold text-white relative">
                    {item.title}
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  </h3>
                  <ul className="space-y-3">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        {index !== 1 ? (
                          <button 
                            type="button"
                            className="text-gray-300 hover:text-primary transition-all duration-300 ease-smooth text-sm
                                     relative group text-left w-full"
                          >
                            <span className="relative">
                              {link}
                              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-smooth group-hover:w-full"></span>
                            </span>
                          </button>
                        ) : (
                          <span className="text-gray-300 text-sm">
                            {link}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="relative mb-12">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; 2025 <span className="text-primary font-semibold">BimBytes Academy</span> - All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Transforming careers through BIM excellence.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-5">
            <a href="https://www.linkedin.com/company/bim-bytes-solutions/" aria-label="LinkedIn" className="group text-gray-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4v-7.1c0-1.7 0-3.8-2.3-3.8-2.3 0-2.7 1.8-2.7 3.6V24h-4V8z"/>
              </svg>
            </a>
            <a href="https://wa.me/919876543210" aria-label="WhatsApp" className="group text-gray-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="group text-gray-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 00.5 6.2 31.2 31.2 0 000 12a31.2 31.2 0 00.5 5.8 3 3 0 002.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 002.1-2.1A31.2 31.2 0 0024 12a31.2 31.2 0 00-.5-5.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z"/>
              </svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="group text-gray-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6zM17.8 6.2a1 1 0 100 2 1 1 0 000-2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
    </footer>
  );
};

export default Footer;
