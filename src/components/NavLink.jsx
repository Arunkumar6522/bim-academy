// react-scroll
import { Link } from "react-scroll";

const NavLink = ({ 
  children, 
  to, 
  offset = -80, 
  mobileMenu = false, 
  onClick,
  className = ""
}) => {
  const baseClasses = "transition-all duration-300 ease-smooth font-medium";
  
  const mobileClasses = mobileMenu
    ? "block w-full text-left px-4 py-3 text-lg text-textPrimary hover:text-primary hover:bg-primary/5 rounded-lg"
    : "";
    
  const desktopClasses = !mobileMenu
    ? "text-lg lg:text-xl text-textPrimary hover:text-primary cursor-pointer hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent"
    : "";

  const combinedClasses = `${baseClasses} ${mobileClasses} ${desktopClasses} ${className}`;

  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={800}
      className={combinedClasses}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
