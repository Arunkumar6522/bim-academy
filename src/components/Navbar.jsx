import { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import LeadCaptureModal from "./LeadCaptureModal";
import logo from "../assets/new logo.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setShowMobileMenu(false);
  }, []);

  const openLeadModal = useCallback(() => {
    setShowLeadModal(true);
  }, []);

  const closeLeadModal = useCallback(() => {
    setShowLeadModal(false);
  }, []);

  return (
    <>
      <div className="relative w-full max-w-7xl flex items-center justify-between py-4 md:py-6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="BimBytes Academy Logo" className="h-16 md:h-20 lg:h-24 w-auto" />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={isActive('/') ? 'nav-link-active' : 'nav-link'}>Home</Link>
          <Link to="/courses" className={isActive('/courses') ? 'nav-link-active' : 'nav-link'}>Courses</Link>
          <Link to="/about" className={isActive('/about') ? 'nav-link-active' : 'nav-link'}>About</Link>
          <Link to="/careers" className={isActive('/careers') ? 'nav-link-active' : 'nav-link'}>Careers</Link>
          <Link to="/blog" className={isActive('/blog') ? 'nav-link-active' : 'nav-link'}>Blog</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={openLeadModal} className="btn-primary">Enroll Now</button>
        </div>

        <button
          className="block lg:hidden p-2 rounded-lg bg-primary/20 backdrop-blur-sm hover:bg-primary/30 transition-all duration-300 ease-smooth"
          onClick={toggleMobileMenu}
          aria-label="Open Menu"
        >
          <HiMenuAlt3 size={24} className="text-primary" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-smooth ${
          showMobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu} />
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 ease-smooth ${
            showMobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-xl font-semibold text-textPrimary">Menu</h2>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close Menu"
            >
              <AiOutlineClose size={20} className="text-textSecondary" />
            </button>
          </div>

          <nav className="p-6">
            <ul className="space-y-4">
              <li><Link to="/" className={`${isActive('/') ? 'text-primary font-semibold' : 'text-textSecondary hover:text-primary'} transition-colors duration-300 ease-smooth block py-2`} onClick={closeMobileMenu}>Home</Link></li>
              <li><Link to="/courses" className={`${isActive('/courses') ? 'text-primary font-semibold' : 'text-textSecondary hover:text-primary'} transition-colors duration-300 ease-smooth block py-2`} onClick={closeMobileMenu}>Courses</Link></li>
              <li><Link to="/about" className={`${isActive('/about') ? 'text-primary font-semibold' : 'text-textSecondary hover:text-primary'} transition-colors duration-300 ease-smooth block py-2`} onClick={closeMobileMenu}>About</Link></li>
              <li><Link to="/careers" className={`${isActive('/careers') ? 'text-primary font-semibold' : 'text-textSecondary hover:text-primary'} transition-colors duration-300 ease-smooth block py-2`} onClick={closeMobileMenu}>Careers</Link></li>
              <li><Link to="/blog" className={`${isActive('/blog') ? 'text-primary font-semibold' : 'text-textSecondary hover:text-primary'} transition-colors duration-300 ease-smooth block py-2`} onClick={closeMobileMenu}>Blog</Link></li>
            </ul>
          </nav>

          <div className="absolute bottom-6 left-6 right-6">
            <button className="w-full btn-primary" onClick={() => { closeMobileMenu(); openLeadModal(); }}>
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      <LeadCaptureModal isOpen={showLeadModal} onClose={closeLeadModal} />
    </>
  );
};

export default Navbar;


