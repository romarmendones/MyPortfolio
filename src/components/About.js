// src/components/About.js
import React, { useMemo } from 'react';
import Profile from '../image/Profile.jpg';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaGitAlt, FaNode, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiSupabase, SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';

const About = () => {


  const staggerContainer = useMemo(() => ({
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }), []);





  const skills = useMemo(() => [
    { 
      name: 'React', 
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600', 
      textColor: 'text-white',
      icon: <FaReact className="w-6 h-6" />,
      description: 'Frontend Development',
      delay: 0.1
    },
    { 
      name: 'Express.js', 
      bgColor: 'bg-gradient-to-br from-gray-800 to-gray-900', 
      textColor: 'text-white',
      icon: <SiNextdotjs className="w-6 h-6" />,
      description: 'Backend Development',
      delay: 0.2
    },
    { 
      name: 'TypeScript', 
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-700', 
      textColor: 'text-white',
      icon: <SiTypescript className="w-6 h-6" />,
      description: 'Type Safety',
      delay: 0.3
    },
    { 
      name: 'Supabase', 
      bgColor: 'bg-gradient-to-br from-emerald-500 to-emerald-600', 
      textColor: 'text-white',
      icon: <SiSupabase className="w-6 h-6" />,
      description: 'Backend & Database',
      delay: 0.4
    },
    { 
      name: 'Tailwind CSS', 
      bgColor: 'bg-gradient-to-br from-cyan-500 to-cyan-600', 
      textColor: 'text-white',
      icon: <SiTailwindcss className="w-6 h-6" />,
      description: 'Styling Framework',
      delay: 0.5
    },
    { 
      name: 'JavaScript', 
      bgColor: 'bg-gradient-to-br from-yellow-500 to-yellow-600', 
      textColor: 'text-white',
      icon: <FaJs className="w-6 h-6" />,
      description: 'Programming Language',
      delay: 0.6
    },
    {
      name: 'Node.js',
      bgColor: 'bg-gradient-to-br from-green-500 to-green-600',
      textColor: 'text-white',
      icon: <FaNode className="w-6 h-6" />,
      description: 'Runtime Environment',
      delay: 0.7
    },
    {
      name: 'Git',
      bgColor: 'bg-gradient-to-br from-orange-500 to-orange-600',
      textColor: 'text-white',
      icon: <FaGitAlt className="w-6 h-6" />,
      description: 'Version Control',
      delay: 0.8
    }
  ], []);

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

  const skillVariants = useMemo(() => ({
    initial: { scale: 0.8, opacity: 0, y: 20, rotate: -5 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      y: 0, 
      rotate: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
    hover: { 
      scale: 1.08, 
      y: -10,
      rotate: 2,
      boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
      transition: { duration: 0.3, ease: "easeOut" }
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
            transition={{ delay: index * 0.05 }}
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
      className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
      role="region"
      aria-label="About section"
    >
      {/* Animated Background Elements */}
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
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            transition: { duration: 18, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"
        ></motion.div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              transition: {
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image Section */}
          <motion.div 
            variants={profileVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            className="relative group"
          >
            <motion.div 
              className="w-72 h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl relative"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={Profile}
                alt="Rodanto Mari N. Mendones"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'fallback-image-url.jpg';
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            
            {/* Floating badge with enhanced animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180, y: 50 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
            >
              <motion.span
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Available for hire
              </motion.span>
            </motion.div>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>

          {/* Content Section */}
          <motion.div 
            variants={staggerContainer}
            className="flex-1 max-w-2xl"
          >
            <motion.div variants={textVariants} className="mb-6">
              {renderAnimatedText("Rodanto Mari N. Mendones", "text-3xl lg:text-5xl font-bold text-slate-800 mb-6")}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8"
              >
                
              </motion.p>
            </motion.div>

            {/* Social Links with enhanced animations */}
            <motion.div 
              variants={textVariants}
              className="flex gap-4 mb-12"
            >
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  rotate: 5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors duration-300 shadow-lg relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
                <FaGithub className="w-5 h-5 relative z-10" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  rotate: -5,
                  boxShadow: "0 10px 25px rgba(59,130,246,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
                <FaLinkedin className="w-5 h-5 relative z-10" />
              </motion.a>
            </motion.div>

            {/* Skills Section with enhanced animations */}
            <motion.div variants={textVariants} className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6"
              >
                Technical Expertise
              </motion.h3>
              
              <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    transition={{ delay: skill.delay }}
                    className={`${skill.bgColor} ${skill.textColor} p-4 rounded-2xl flex flex-col items-center justify-center space-y-3 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group`}
                  >
                    {/* Skill card shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    />
                    
                    <motion.div
                      animate={{ rotate: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {skill.icon}
                    </motion.div>
                    
                    <div className="text-center relative z-10">
                      <span className="font-semibold text-sm block">{skill.name}</span>
                      <span className="text-xs opacity-80">{skill.description}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;