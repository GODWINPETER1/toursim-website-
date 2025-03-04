import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // For mobile menu icons

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 w-full h-20 shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600">
          Travel <span className="text-yellow-400">Explorer</span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
            {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Links Section */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-8 absolute md:static bg-white w-full md:w-auto left-0 top-20 md:top-0 shadow-md md:shadow-none p-4 md:p-0`}
        >
          <Link
            to="#home"
            className="block text-gray-700 hover:text-yellow-400 transition duration-300 py-2 md:py-0"
          >
            Home
          </Link>
          <Link
            to="#services"
            className="block text-gray-700 hover:text-yellow-400 transition duration-300 py-2 md:py-0"
          >
            Our Services
          </Link>
          <Link
            to="#about"
            className="block text-gray-700 hover:text-yellow-400 transition duration-300 py-2 md:py-0"
          >
            About
          </Link>
          <Link
            to="#destinations"
            className="block text-gray-700 hover:text-yellow-400 transition duration-300 py-2 md:py-0"
          >
            Destinations
          </Link>
          <Link
            to="#packages"
            className="block text-gray-700 hover:text-yellow-400 transition duration-300 py-2 md:py-0"
          >
            Packages
          </Link>
          <Link
            to="#contact"
            className="block text-gray-700 hover:text-yellow-400 transition duration-300 py-2 md:py-0"
          >
            Contact
          </Link>
        </div>

        {/* Call-to-Action Button Section */}
        <div className="hidden md:block">
          <Link
            to="/tour"
            className="bg-yellow-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
          >
            Take a Tour
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;