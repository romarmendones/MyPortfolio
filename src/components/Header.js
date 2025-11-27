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
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'bg-black/85 backdrop-blur-xl border-b border-white/20 shadow-2xl py-3' 
          : 'bg-gradient-to-r from-black/80 via-gray-900/70 to-black/80 backdrop-blur-lg py-5'
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-gray-800/20 to-gray-900/20 opacity-50"></div>
      
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-8 relative z-10">
        {/* Enhanced Logo */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer group"
          onClick={() => handleNavigation('/')}
        >
          <div className="relative">
            <motion.h1 
              className="text-2xl md:text-3xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:from-gray-100 group-hover:via-white group-hover:to-gray-100 transition-all duration-500">
                My Portfolio
              </span>
            </motion.h1>
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
        
        {/* Enhanced Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleNavigation(item.href)}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`relative group px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-black/50
                ${location.pathname === item.href 
                  ? 'bg-white/10 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
              role="link"
              aria-current={location.pathname === item.href ? 'page' : undefined}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
                <span className="font-medium text-sm">{item.title}</span>
              </div>
              
              {/* Active indicator */}
              {location.pathname === item.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-400/10 rounded-xl border border-white/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-gray-300/0 to-gray-400/0 rounded-xl group-hover:from-white/5 group-hover:via-gray-300/5 group-hover:to-gray-400/5 transition-all duration-500 opacity-0 group-hover:opacity-100" />
            </motion.button>
          ))}
        </nav>

        {/* Enhanced Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button 
            onClick={toggleMenu}
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <motion.div
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="absolute w-6 h-0.5 bg-white rounded-full origin-center"
              />
              <motion.div
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute w-6 h-0.5 bg-white rounded-full top-2"
              />
              <motion.div
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="absolute w-6 h-0.5 bg-white rounded-full top-4 origin-center"
              />
            </div>
          </motion.button>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full left-0 right-0 mt-3 mx-4 rounded-2xl bg-black/95 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden"
              >
                <div className="p-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      onClick={() => handleNavigation(item.href)}
                      className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-sm transition-all duration-300 cursor-pointer
                        focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-inset
                        ${location.pathname === item.href 
                          ? 'bg-gradient-to-r from-cyan-400/20 to-purple-600/20 text-white border border-cyan-400/30' 
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}
                      role="link"
                      aria-current={location.pathname === item.href ? 'page' : undefined}
                    >
                      <span className="text-2xl opacity-80">{item.icon}</span>
                      <span className="font-medium">{item.title}</span>
                      {location.pathname === item.href && (
                      <motion.div
                        layoutId="mobileActiveTab"
                        className="ml-auto w-2 h-2 bg-gradient-to-r from-white to-gray-300 rounded-full"
                      />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;