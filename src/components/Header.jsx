// import React from "react";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="fixed w-full bg-opacity-95 bg-white backdrop-blur-md z-50 border-b border-[#2098b2]/30">
//       <nav className="container mx-auto px-6 py-3">
//         <div className="flex justify-between items-center">
//           <div className="relative group">
//             <img src="logo.png" alt="logo" className="h-15" />
//             <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-[#2098b2] via-[#32b561] to-[#1faee2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>
//           <ul className="hidden md:flex space-x-12">
//             {["HOME", "ABOUT", "PRODUCTS", "CONTACT"].map((item) => (
//               <li key={item}>
//                 <a
//                   href="#"
//                   className="font-perandory text-xl text-[#15457f] hover:text-[#1faee2] transition-all duration-300 relative group"
//                 >
//                   {item}
//                   <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[#32b561] to-[#1faee2] transition-all duration-500 group-hover:w-full"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <button className="md:hidden text-[#d1e8ff]">
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
//             </svg>
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import "./Header.css";

const LuxuryHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="luxury-header">
      {/* Decorative top border */}
      <div className="header-accent-bar"></div>
      
      <nav className="luxury-nav-container">
        {/* Logo with animated shine effect */}
        <div className="luxury-logo-container">
          <img 
            src="logo.png" 
            alt="RELIDENT" 
            className="luxury-logo"
          />
          <div className="logo-shine"></div>
        </div>

        {/* Desktop Navigation */}
        <ul className="luxury-nav-links">
          {["HOME", "ABOUT", "PRODUCTS", "JOURNAL", "CONTACT"].map((item) => (
            <li key={item} className="nav-item">
              <a
                href="#"
                className="nav-link"
              >
                <span className="link-text">{item}</span>
                <span className="link-underline"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            {["HOME", "ABOUT", "PRODUCTS", "JOURNAL", "CONTACT"].map((item) => (
              <a
                key={item}
                href="#"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LuxuryHeader;