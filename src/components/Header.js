// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { title: 'About', href: '/about', icon: '👤' },
    { title: 'Projects', href: '/projects', icon: '💼' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md text-white shadow-lg py-2' 
          : 'bg-transparent text-white py-3'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-6">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl md:text-2xl font-bold tracking-tight cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </motion.h1>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              onClick={() => handleNavigation(item.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-sm font-medium transition-all duration-300 relative group cursor-pointer flex items-center gap-1
                ${location.pathname === item.href ? 'text-purple-400' : 'hover:text-purple-400'}`}
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {item.icon}
              </span>
              {item.title}
            </motion.a>
          ))}
        </nav>

        <div className="md:hidden">
          <motion.button 
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            className="focus:outline-none p-1.5 rounded-lg hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="absolute top-full left-0 right-0 bg-transparent backdrop-blur-sm shadow-lg"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavigation(item.href)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm text-white transition-all duration-300 cursor-pointer
                      ${location.pathname === item.href 
                        ? 'bg-white/10 text-purple-400' 
                        : 'hover:bg-white/10 hover:text-purple-400'}`}
                  >
                    <span className="text-base opacity-70">{item.icon}</span>
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