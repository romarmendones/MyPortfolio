// src/components/Header.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Contact', href: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-4 shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold tracking-tight hover:text-blue-200 transition duration-300 cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          My Portfolio
        </motion.h1>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              onClick={() => handleNavigation(item.href)}
              whileHover={{ scale: 1.1 }}
              className="text-lg font-medium hover:text-blue-200 transition duration-300 relative group cursor-pointer"
            >
              {item.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-blue-700 shadow-lg"
            >
              {navItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleNavigation(item.href)}
                  className="block px-4 py-3 text-lg hover:bg-blue-800 transition duration-300 cursor-pointer"
                >
                  {item.title}
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;