import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="text-black flex justify-between py-2 px-5 mx-3 my-5 items-center border border-gray-400 rounded-full relative">
      {/* Logo */}
      <img src={Logo} alt="Logo" className="h-10 w-10 rounded-full"/>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-5">
        <Link to="/" className="hover:text-pink-500 transition-colors">Home</Link>
        <Link to="/shop" className="hover:text-pink-500 transition-colors">Shop</Link>
        <Link to="/about" className="hover:text-pink-500 transition-colors">About</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        aria-label="Toggle mobile menu"
      >
        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white border border-gray-400 rounded-xl shadow-lg z-50">
          <div className="flex flex-col py-4">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className="px-6 py-3 hover:bg-pink-50 hover:text-pink-500 transition-colors"
            >
              Home
            </Link>
            {/* <Link 
              to="/shop" 
              onClick={closeMobileMenu}
              className="px-6 py-3 hover:bg-pink-50 hover:text-pink-500 transition-colors"
            >
              Shop
            </Link> */}
            <Link 
              to="/about" 
              onClick={closeMobileMenu}
              className="px-6 py-3 hover:bg-pink-50 hover:text-pink-500 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      )}

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed bg-white  z-40"
          onClick={closeMobileMenu}
        ></div>
      )}
    </nav>  
  );
};

export default Navbar;
