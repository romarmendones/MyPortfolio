// src/components/About.js
import React, { useMemo, useRef, useState } from 'react';
import Profile from '../image/Profile.jpg';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiSupabase, SiTailwindcss, SiTypescript, SiPhp, SiPython, SiLaravel } from 'react-icons/si';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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
  
  // Custom arrow components for accessibility and proper click handling
  const NextArrow = ({ className, style, onClick }) => (
    <motion.button
      aria-label="Next slide"
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="absolute right-0 z-10 flex items-center justify-center w-12 h-12 text-white transition-all duration-300 -translate-y-1/2 rounded-full shadow-lg slick-custom-arrow next-arrow top-1/2 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:shadow-xl"
      style={style}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </motion.button>
  );

  const PrevArrow = ({ className, style, onClick }) => (
    <motion.button
      aria-label="Previous slide"
      whileHover={{ scale: 1.05, rotate: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="absolute left-0 z-10 flex items-center justify-center w-12 h-12 text-white transition-all duration-300 -translate-y-1/2 rounded-full shadow-lg slick-custom-arrow prev-arrow top-1/2 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:shadow-xl"
      style={style}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </motion.button>
  );

  // Slick slider settings
  const sliderSettings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    customPaging: (i) => (
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === currentSlide
            ? 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md'
            : 'bg-gray-600 hover:bg-gray-500'
        }`}
      />
    ),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }), [currentSlide]);

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
      className="relative flex items-center min-h-screen py-12 overflow-hidden sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
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

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row lg:gap-16 xl:gap-20">
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
              className="relative w-48 h-48 overflow-hidden shadow-2xl sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-3xl"
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
              className="absolute px-4 py-2 text-xs font-bold text-white border-2 rounded-full shadow-2xl sm:px-6 sm:py-3 sm:text-sm -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 border-white/20"
            >
              <motion.span
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-1 sm:gap-2"
              >
                <motion.div 
                  variants={pulseVariants}
                  animate="animate"
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                ></motion.div>
                <span className="hidden sm:inline">Available for hire</span>
                <span className="sm:hidden">Hire me</span>
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
                className="absolute w-2 h-2 rounded-full bg-cyan-400 opacity-60"
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
            <motion.div variants={textVariants} className="mb-6 sm:mb-8">
              {renderAnimatedText("Rodanto Mari N. Mendones", "mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent text-white bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text")}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mb-6 text-lg font-light leading-relaxed text-gray-300 sm:mb-8 sm:text-xl lg:text-2xl"
              >
             
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="mb-6 text-base leading-relaxed text-gray-400 sm:mb-8 sm:text-lg"
              >
              
              </motion.p>

              {/* Social Links with enhanced animations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="flex mb-6 space-x-3 sm:mb-8 sm:space-x-4"
              >
                <motion.a
                  href="https://github.com"
                  target="https://github.com/romarmendones?tab=repositories"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 text-gray-300 transition-all duration-300 bg-gray-800 shadow-lg sm:w-12 sm:h-12 hover:bg-gray-700 rounded-xl hover:text-white hover:shadow-xl"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 text-gray-300 transition-all duration-300 bg-gray-800 shadow-lg sm:w-12 sm:h-12 hover:bg-gray-700 rounded-xl hover:text-white hover:shadow-xl"
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
                <motion.a
                  href="https://gmail.com"
                  target="https://romarmendones24@gmail.com"
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 shadow-lg sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-xl"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Enhanced Skills Section */}
            <motion.div variants={textVariants} className="space-y-6 sm:space-y-8">
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="mb-6 text-2xl font-bold text-transparent text-white sm:mb-8 sm:text-3xl lg:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text"
              >
                Technical Expertise
              </motion.h3>
              
              <motion.div 
                variants={staggerContainer}
                className="relative"
              >
                {/* Enhanced Skills Grid with React Slick */}
                <motion.div 
                  className="p-4 border shadow-2xl sm:p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-3xl border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Slider ref={sliderRef} {...sliderSettings}>
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: skill.delay, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -8, rotate: 2 }}
                        className="flex flex-col items-center px-2 space-y-3 cursor-pointer sm:space-y-4 sm:px-4 group"
                      >
                        <motion.div
                          animate={{ rotate: [0, 8, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gradient-to-br ${skill.color} rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                        >
                          <motion.div 
                            className="flex items-center justify-center w-full h-full p-2 text-white sm:p-3"
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill.icon}
                          </motion.div>
                        </motion.div>
                        <motion.span 
                          className="text-xs font-semibold text-center text-gray-300 transition-colors duration-300 sm:text-sm group-hover:text-white"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {skill.name}
                        </motion.span>
                      </motion.div>
                    ))}
                  </Slider>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for Slick Slider */}
      <style jsx>{`
        .slick-slider {
          margin: 0 -4px;
        }
        @media (min-width: 640px) {
          .slick-slider { margin: 0 -8px; }
        }

        .slick-slide {
          padding: 0 4px;
        }
        @media (min-width: 640px) {
          .slick-slide { padding: 0 8px; }
        }

        /* center slide inner content */
        .slick-slide > div { display: flex; justify-content: center; align-items: center; }

        .slick-dots {
          bottom: -30px;
          display: flex;
          gap: 8px;
          justify-content: center;
        }
        @media (min-width: 640px) {
          .slick-dots { bottom: -40px; }
        }

        .slick-dots li button:before {
          color: rgba(156, 163, 175, 0.5);
          font-size: 10px;
          opacity: 1;
        }
        @media (min-width: 640px) {
          .slick-dots li button:before { font-size: 12px; }
        }
        .slick-dots li.slick-active button:before {
          color: #06b6d4;
          transform: scale(1.15);
          box-shadow: 0 6px 18px rgba(6,182,212,0.12);
        }

        /* make custom arrows consistent and slightly offset outside the card */
        .slick-custom-arrow { border: none; background: transparent; }
        .prev-arrow { left: -18px; }
        .next-arrow { right: -18px; }
        @media (min-width: 640px) {
          .prev-arrow { left: -26px; }
          .next-arrow { right: -26px; }
        }

        .slick-prev:before, .slick-next:before { display: none; }
      `}</style>
    </motion.section>
  );
};

export default About;