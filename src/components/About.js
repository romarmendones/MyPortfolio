// src/components/About.js
import React, { useMemo } from 'react';
import Profile from '../image/Profile.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaJs, FaGitAlt, FaNode } from 'react-icons/fa';
import { SiSupabase, SiTailwindcss, SiTypescript } from 'react-icons/si';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Moved skills array outside component for better performance
const skills = [
  { 
    name: 'React', 
    bgColor: 'bg-blue-50', 
    textColor: 'text-blue-700',
    icon: <FaReact className="w-5 h-5" />,
    level: 'Advanced'
  },
  
  { 
    name: 'TypeScript', 
    bgColor: 'bg-indigo-50', 
    textColor: 'text-indigo-700',
    icon: <SiTypescript className="w-5 h-5" />,
    level: 'Intermediate'
  },
  { 
    name: 'Supabase', 
    bgColor: 'bg-emerald-50', 
    textColor: 'text-emerald-700',
    icon: <SiSupabase className="w-5 h-5" />,
    level: 'Intermediate'
  },
  { 
    name: 'Tailwind CSS', 
    bgColor: 'bg-violet-50', 
    textColor: 'text-violet-700',
    icon: <SiTailwindcss className="w-5 h-5" />,
    level: 'Advanced'
  },
  { 
    name: 'JavaScript', 
    bgColor: 'bg-amber-50', 
    textColor: 'text-amber-700',
    icon: <FaJs className="w-5 h-5" />,
    level: 'Advanced'
  },
  {
    name: 'Node.js',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-700',
    icon: <FaNode className="w-5 h-5" />,
    level: 'Intermediate'
  },
  {
    name: 'Git',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    icon: <FaGitAlt className="w-5 h-5" />,
    level: 'Advanced'
  }
];

const About = () => {
  const profileVariants = useMemo(() => ({
    hover: { 
      scale: 1.05, 
      rotate: 3,
      transition: { duration: 0.3 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  }), []);

  const skillVariants = useMemo(() => ({
    hover: { 
      scale: 1.1, 
      y: -5,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.2 }
    }
  }), []);

  const memoizedSkills = useMemo(() => skills, []);

  return (
    <motion.section 
      {...fadeInUp}
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50"
      role="region"
      aria-label="About section"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          <AnimatePresence>
            <motion.div 
              variants={profileVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] relative group cursor-pointer"
              role="img"
              aria-label="Profile photo"
            >
              <img
                src={Profile}
                alt="Rodanto Mari N. Mendones"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'fallback-image-url.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          </AnimatePresence>

          <div className="max-w-3xl">
            <motion.h2 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-4xl sm:text-5xl font-bold mb-8 text-slate-800 relative inline-block tracking-tight"
            >
              About Me
              <motion.div 
                className="absolute -bottom-3 left-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </motion.h2>

            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium"
            >
              Hi, I'm Rodanto Mari N. Mendones, a Junior web developer passionate about creating modern web applications. 
              With expertise in React and related technologies, I specialize in building responsive, 
              user-friendly experiences with clean, maintainable code. My goal is to deliver solutions 
              that combine technical excellence with exceptional user experience.
            </motion.p>

            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl font-bold mb-6 text-slate-700"
            >
              Technical Skills
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {memoizedSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  variants={skillVariants}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover="hover"
                  className={`px-4 py-3 ${skill.bgColor} ${skill.textColor} rounded-lg font-semibold flex items-center gap-3 
                    shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/50 backdrop-blur-sm`}
                  role="listitem"
                  aria-label={`${skill.name} - ${skill.level}`}
                >
                  {skill.icon}
                  <span className="whitespace-nowrap text-sm">{skill.name}</span>
                  <span className="text-xs opacity-75 hidden md:inline ml-auto font-medium">• {skill.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;