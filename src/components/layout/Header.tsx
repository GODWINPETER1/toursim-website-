import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 w-full h-20 shadow-md z-50">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600">
          Travel <span className="text-yellow-400">Explorer</span>
        </Link>

        {/* Navigation Links Section */}
        <div className="flex gap-8 items-center">
          <Link
            to="/home"
            className="text-gray-700 hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-700 hover:text-yellow-400 transition duration-300"
          >
            Our Services 
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-yellow-400 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/destinations"
            className="text-gray-700 hover:text-yellow-400 transition duration-300"
          >
            Destinations
          </Link>
          <Link
            to="/packages"
            className="text-gray-700 hover:text-yellow-400 transition duration-300"
          >
            Packages
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-yellow-400 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Call-to-Action Button Section */}
        <div>
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