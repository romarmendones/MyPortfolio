// src/components/About.js
import React, { useMemo, useRef, useEffect, useState, useCallback } from 'react';
import Profile from '../image/Profile.jpg';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiSupabase, SiTailwindcss, SiTypescript, SiPhp, SiPython, SiLaravel } from 'react-icons/si';

const About = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const staggerContainer = useMemo(() => ({
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }), []);

  const skills = useMemo(() => [
    { 
      name: 'Node.js', 
      icon: <FaNodeJs className="object-contain w-full h-full" />,
      delay: 0.1,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'PHP',
      icon: <SiPhp className="object-contain w-full h-full" />,
      delay: 0.2,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      name: 'Python', 
      icon: <SiPython className="object-contain w-full h-full" />,
      delay: 0.3,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      name: 'Laravel', 
      icon: <SiLaravel className="object-contain w-full h-full" />,
      delay: 0.4,
      color: 'from-red-500 to-red-600'
    },
    { 
      name: 'JavaScript', 
      icon: <FaJs className="object-contain w-full h-full" />,
      delay: 0.5,
      color: 'from-yellow-500 to-yellow-600'
    },
    { 
      name: 'React', 
      icon: <FaReact className="object-contain w-full h-full" />,
      delay: 0.6,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="object-contain w-full h-full" />,
      delay: 0.7,
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Supabase',
      icon: <SiSupabase className="object-contain w-full h-full" />,
      delay: 0.8,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="object-contain w-full h-full" />,
      delay: 0.9,
      color: 'from-teal-500 to-teal-600'
    }
  ], []);

  // Calculate total slides based on container width and item width
  useEffect(() => {
    const calculateSlides = () => {
      if (scrollContainerRef.current) {
        const containerWidth = scrollContainerRef.current.clientWidth;
        const itemWidth = 100; // Increased width for better spacing
        const itemsPerSlide = Math.floor(containerWidth / itemWidth);
        const total = Math.ceil(skills.length / itemsPerSlide);
        setTotalSlides(Math.max(1, total));
      }
    };

    calculateSlides();
    window.addEventListener('resize', calculateSlides);
    return () => window.removeEventListener('resize', calculateSlides);
  }, [skills.length]);

  // Check scroll position and update scroll indicators
  const checkScrollPosition = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      
      // Calculate current slide
      const itemWidth = 100;
      const current = Math.round(scrollLeft / itemWidth);
      setCurrentSlide(Math.min(current, totalSlides - 1));
    }
  }, [totalSlides]);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const itemWidth = 100;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = Math.max(0, currentScroll - itemWidth * 3);
      scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const itemWidth = 140;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      const targetScroll = Math.min(maxScroll, currentScroll + itemWidth * 3);
      scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  // Go to specific slide
  const goToSlide = useCallback((slideIndex) => {
    if (scrollContainerRef.current) {
      const itemWidth = 100;
      const targetScroll = slideIndex * itemWidth * 1;
      scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, [totalSlides, checkScrollPosition]);

  const profileVariants = useMemo(() => ({
    initial: { scale: 0.8, opacity: 0, rotate: -5 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
    hover: { 
      scale: 1.05, 
      rotate: 2,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  }), []);

  const textVariants = useMemo(() => ({
    initial: { opacity: 0, x: -50, y: 20 },
    animate: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 50
      }
    }
  }), []);

  const letterVariants = useMemo(() => ({
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }), []);

  const backgroundVariants = useMemo(() => ({
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }), []);

  const floatingVariants = useMemo(() => ({
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }), []);

  const pulseVariants = useMemo(() => ({
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }), []);

  const renderAnimatedText = (text, className) => {
    return (
      <motion.div className={className}>
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.03 }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <motion.section 
      initial="initial"
      animate="animate"
      className="relative flex items-center min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      role="region"
      aria-label="About section"
    >
      {/* Enhanced Animated Background Elements */}
      <motion.div 
        variants={backgroundVariants}
        animate="animate"
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            transition: { duration: 18, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute rounded-full -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-cyan-600/20 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
            transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute w-64 h-64 rounded-full top-1/2 left-1/2 bg-gradient-to-br from-pink-500/15 to-rose-600/15 blur-3xl"
        ></motion.div>
      </motion.div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            animate={{
              x: [0, 120, 0],
              y: [0, -120, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              transition: {
                duration: 10 + i * 1.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }
            }}
            style={{
              left: `${10 + i * 6}%`,
              top: `${20 + i * 6}%`
            }}
          />
        ))}
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 max-w-7xl">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Enhanced Profile Image Section */}
          <motion.div 
            variants={profileVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            className="relative flex-shrink-0 group"
          >
            <motion.div 
              className="relative overflow-hidden shadow-2xl w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={Profile}
                alt="Rodanto Mari N. Mendones"
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'fallback-image-url.jpg';
                }}
              />
              <motion.div 
                className="absolute inset-0 opacity-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            
            {/* Enhanced floating badge with pulse animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180, y: 50 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute px-6 py-3 text-sm font-bold text-white border-2 rounded-full shadow-2xl -top-4 -right-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 border-white/20"
            >
              <motion.span
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2"
              >
                <motion.div 
                  variants={pulseVariants}
                  animate="animate"
                  className="w-2 h-2 bg-white rounded-full"
                ></motion.div>
                Available for hire
              </motion.span>
            </motion.div>

            {/* Enhanced glow effect with animation */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-2xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Floating elements around profile */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                variants={floatingVariants}
                animate="animate"
                className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${10 + i * 20}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div 
            variants={staggerContainer}
            className="flex-1 max-w-2xl"
          >
            <motion.div variants={textVariants} className="mb-8">
              {renderAnimatedText("Rodanto Mari N. Mendones", "mb-6 text-4xl font-bold text-transparent text-white lg:text-5xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text")}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mb-8 text-xl font-light leading-relaxed text-gray-300 lg:text-2xl"
              >
             
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="mb-8 text-lg leading-relaxed text-gray-400"
              >
              
              </motion.p>

              {/* Social Links with enhanced animations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="flex mb-8 space-x-4"
              >
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-12 h-12 text-gray-300 transition-all duration-300 bg-gray-800 shadow-lg hover:bg-gray-700 rounded-xl hover:text-white hover:shadow-xl"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.div>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-12 h-12 text-gray-300 transition-all duration-300 bg-gray-800 shadow-lg hover:bg-gray-700 rounded-xl hover:text-white hover:shadow-xl"
                >
                  <FaLinkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="mailto:contact@example.com"
                  whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-12 h-12 text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-xl"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaEnvelope className="w-6 h-6" />
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Enhanced Skills Section */}
            <motion.div variants={textVariants} className="space-y-8">
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="mb-8 text-3xl font-bold text-transparent text-white lg:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text"
              >
                Technical Expertise
              </motion.h3>
              
              <motion.div 
                variants={staggerContainer}
                className="relative"
              >
                {/* Enhanced Skills Grid */}
                <motion.div 
                  className="p-8 border shadow-2xl bg-white/5 backdrop-blur-xl rounded-3xl border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Navigation Arrows */}
                  <div className="absolute z-10 -translate-y-1/2 top-1/2 -left-6">
                    <motion.button
                      onClick={scrollLeft}
                      disabled={!canScrollLeft}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm shadow-lg border border-white/20 flex items-center justify-center transition-all duration-300 ${
                        canScrollLeft 
                          ? 'text-white hover:bg-white/20 hover:shadow-xl' 
                          : 'text-gray-500 cursor-not-allowed opacity-50'
                      }`}
                      aria-label="Previous slide"
                    >
                      <motion.svg 
                        className="w-7 h-7" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: canScrollLeft ? [0, -2, 0] : [0, 0, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </motion.svg>
                    </motion.button>
                  </div>

                  <div className="absolute z-10 -translate-y-1/2 top-1/2 -right-6">
                    <motion.button
                      onClick={scrollRight}
                      disabled={!canScrollRight}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm shadow-lg border border-white/20 flex items-center justify-center transition-all duration-300 ${
                        canScrollRight 
                          ? 'text-white hover:bg-white/20 hover:shadow-xl' 
                          : 'text-gray-500 cursor-not-allowed opacity-50'
                      }`}
                      aria-label="Next slide"
                    >
                      <motion.svg 
                        className="w-7 h-7" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: canScrollRight ? [0, 2, 0] : [0, 0, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.button>
                  </div>

                  {/* Skills Carousel */}
                  <div 
                    ref={scrollContainerRef}
                    className="overflow-x-auto scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    <div className="flex px-8 py-8 space-x-8 min-w-max">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: skill.delay, duration: 0.5 }}
                          whileHover={{ scale: 1.05, y: -8, rotate: 2 }}
                          className="flex flex-col items-center space-y-4 min-w-[120px] group cursor-pointer"
                        >
                          <motion.div
                            animate={{ rotate: [0, 8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${skill.color} rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                          >
                            <motion.div 
                              className="flex items-center justify-center w-full h-full p-3 text-white"
                              whileHover={{ scale: 1.1 }}
                            >
                              {skill.icon}
                            </motion.div>
                          </motion.div>
                          <motion.span 
                            className="text-sm font-semibold text-center text-gray-300 transition-colors duration-300 group-hover:text-white"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {skill.name}
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enhanced Pagination Dots */}
                  {totalSlides > 1 && (
                    <div className="flex items-center justify-center mt-8 space-x-3">
                      {Array.from({ length: totalSlides }, (_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => goToSlide(index)}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md'
                              : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.section>
  );
};

export default About;