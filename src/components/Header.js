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
    { title: 'About Me', href: '/about', icon: '👤' },
    { title: 'Services', href: '/services', icon: '⚡' },
    { title: 'Experiences', href: '/experiences', icon: '🎯' },
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
    setIsMenuOpen(false);  // Closes mobile menu after navigation
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3' 
          : 'bg-black/70 py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-8">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl md:text-3xl font-bold tracking-tighter cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          <span className="bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-teal-300 hover:via-purple-400 hover:to-pink-400 transition-all duration-300">
            My Portfolio
          </span>
        </motion.h1>
        
        {/* Update the desktop navigation items */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleNavigation(item.href)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`text-sm font-medium transition-all duration-300 relative group cursor-pointer flex items-center gap-2
                focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg px-3 py-2
                ${location.pathname === item.href 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'}`}
              role="link"
              aria-current={location.pathname === item.href ? 'page' : undefined}
            >
              <span className="text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {item.icon}
              </span>
              {item.title}
              {location.pathname === item.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-purple-500"
                />
              )}
            </motion.button>
          ))}
        </nav>

        <div className="md:hidden">
          <motion.button 
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
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
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 mx-4 rounded-lg bg-gray-900/95 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden"
              >
                {/* Update the mobile navigation items */}
                {navItems.map((item, index) => (
                  <motion.button
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavigation(item.href)}
                    className={`w-full flex items-center gap-3 px-5 py-4 text-sm transition-all duration-300 cursor-pointer
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset
                      ${location.pathname === item.href 
                        ? 'bg-white/10 text-white' 
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                    role="link"
                    aria-current={location.pathname === item.href ? 'page' : undefined}
                  >
                    <span className="text-xl">{item.icon}</span>
                    {item.title}
                  </motion.button>
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