// src/components/Header.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-4 shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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
              whileTap={{ scale: 0.95 }}
              className={`text-lg font-medium transition duration-300 relative group cursor-pointer
                ${location.pathname === item.href ? 'text-blue-200' : 'hover:text-blue-200'}`}
            >
              {item.title}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-200 transition-all duration-300
                ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </motion.a>
          ))}
        </nav>

        <div className="md:hidden">
          <motion.button 
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
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
          </motion.button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 bg-blue-700 shadow-lg overflow-hidden"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavigation(item.href)}
                    className={`block px-4 py-3 text-lg transition duration-300 cursor-pointer
                      ${location.pathname === item.href ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                  >
                    {item.title}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;