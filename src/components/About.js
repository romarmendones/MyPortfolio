// src/components/About.js
import React, { useMemo, useRef, useEffect, useState, useCallback } from 'react';
import Profile from '../image/Profile.jpg';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs } from 'react-icons/fa';
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
      icon: <FaNodeJs className="w-full h-full object-contain" />,
      delay: 0.1
    },
    {
      name: 'PHP',
      icon: <SiPhp className="w-full h-full object-contain" />,
      delay: 0.2
    },
    { 
      name: 'Python', 
      icon: <SiPython className="w-full h-full object-contain" />,
      delay: 0.3
    },
    { 
      name: 'Laravel', 
      icon: <SiLaravel className="w-full h-full object-contain" />,
      delay: 0.4
    },
    { 
      name: 'JavaScript', 
      icon: <FaJs className="w-full h-full object-contain" />,
      delay: 0.5
    },
    { 
      name: 'React', 
      icon: <FaReact className="w-full h-full object-contain" />,
      delay: 0.6
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="w-full h-full object-contain" />,
      delay: 0.7
    },
    {
      name: 'Supabase',
      icon: <SiSupabase className="w-full h-full object-contain" />,
      delay: 0.8
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="w-full h-full object-contain" />,
      delay: 0.9
    }
  ], []);

  // Calculate total slides based on container width and item width
  useEffect(() => {
    const calculateSlides = () => {
      if (scrollContainerRef.current) {
        const containerWidth = scrollContainerRef.current.clientWidth;
        const itemWidth = 112; // 100px min-width + 12px gap
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
      const itemWidth = 112;
      const current = Math.round(scrollLeft / itemWidth);
      setCurrentSlide(Math.min(current, totalSlides - 1));
    }
  }, [totalSlides]);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const itemWidth = 112;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = Math.max(0, currentScroll - itemWidth * 3);
      scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const itemWidth = 112;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      const targetScroll = Math.min(maxScroll, currentScroll + itemWidth * 3);
      scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  // Go to specific slide
  const goToSlide = useCallback((slideIndex) => {
    if (scrollContainerRef.current) {
      const itemWidth = 112;
      const targetScroll = slideIndex * itemWidth * 3;
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
      className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden min-h-screen flex items-center"
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
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            transition: { duration: 18, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/30 to-cyan-600/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
            transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-rose-600/20 rounded-full blur-3xl"
        ></motion.div>
      </motion.div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
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
              left: `${10 + i * 12}%`,
              top: `${20 + i * 10}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Enhanced Profile Image Section */}
          <motion.div 
            variants={profileVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            className="relative group flex-shrink-0"
          >
            <motion.div 
              className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden shadow-2xl relative"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={Profile}
                alt="Rodanto Mari N. Mendones"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'fallback-image-url.jpg';
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            
            {/* Enhanced floating badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180, y: 50 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-2xl border-2 border-white/20"
            >
              <motion.span
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-1"
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                Available for hire
              </motion.span>
            </motion.div>

            {/* Enhanced glow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 blur-2xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4],
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div 
            variants={staggerContainer}
            className="flex-1 max-w-xl"
          >
            <motion.div variants={textVariants} className="mb-6">
              {renderAnimatedText("Rodanto Mari N. Mendones", "text-3xl lg:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent")}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 font-light"
              >
           
              </motion.p>
            </motion.div>

            {/* Enhanced Skills Horizontal Scroll Section */}
            <motion.div variants={textVariants} className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="text-2xl lg:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                Technical Expertise
              </motion.h3>
              
              <motion.div 
                variants={staggerContainer}
                className="relative"
              >
                {/* Enhanced Horizontal Carousel Container */}
                <div className="relative bg-white rounded-3xl p-8 shadow-xl w-full max-w-6xl mx-auto">
                  {/* Left Navigation Arrow */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-5 z-10">
                    <motion.button
                      onClick={scrollLeft}
                      disabled={!canScrollLeft}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-full bg-gray-100 shadow-md border border-gray-200 flex items-center justify-center transition-all duration-300 ${
                        canScrollLeft 
                          ? 'text-gray-600 hover:bg-gray-200 hover:shadow-lg' 
                          : 'text-gray-400 cursor-not-allowed opacity-50'
                      }`}
                      aria-label="Previous slide"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Right Navigation Arrow */}
                  <div className="absolute top-1/2 -translate-y-1/2 -right-5 z-10">
                    <motion.button
                      onClick={scrollRight}
                      disabled={!canScrollRight}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-full bg-gray-100 shadow-md border border-gray-200 flex items-center justify-center transition-all duration-300 ${
                        canScrollRight 
                          ? 'text-gray-600 hover:bg-gray-200 hover:shadow-lg' 
                          : 'text-gray-400 cursor-not-allowed opacity-50'
                      }`}
                      aria-label="Next slide"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Carousel Container */}
                  <div 
                    ref={scrollContainerRef}
                    className="overflow-x-auto scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    <div className="flex space-x-12 min-w-max px-8 py-6">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: skill.delay, duration: 0.5 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="flex flex-col items-center space-y-3 min-w-[100px] group cursor-pointer"
                        >
                          <motion.div
                            animate={{ rotate: [0, 8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="text-gray-800 w-16 h-16 flex items-center justify-center bg-gray-50 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-gray-100"
                          >
                            <div className="w-full h-full flex items-center justify-center object-contain p-2">
                              {skill.icon}
                            </div>
                          </motion.div>
                          <span className="text-sm font-semibold text-gray-800 text-center group-hover:text-gray-900 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Pagination Dots */}
                  {totalSlides > 1 && (
                    <div className="flex justify-center items-center mt-8 space-x-3">
                      {Array.from({ length: totalSlides }, (_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => goToSlide(index)}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                              ? 'bg-gray-600 shadow-md'
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}


                </div>
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