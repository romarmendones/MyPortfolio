// src/components/About.js
import React, { useMemo } from 'react';
import Profile from '../image/Profile.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaJs, FaGitAlt, FaNode } from 'react-icons/fa';
import { SiSupabase, SiTailwindcss, SiTypescript } from 'react-icons/si';



const About = () => {
  const fadeInUp = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }), []);

  const skills = useMemo(() => [
    { 
      name: 'React', 
      bgColor: 'bg-blue-50', 
      textColor: 'text-blue-700',
      icon: <FaReact className="w-5 h-5" />,
     
    },
    { 
      name: 'TypeScript', 
      bgColor: 'bg-indigo-50', 
      textColor: 'text-indigo-700',
      icon: <SiTypescript className="w-5 h-5" />,
      
    },
    { 
      name: 'Supabase', 
      bgColor: 'bg-emerald-50', 
      textColor: 'text-emerald-700',
      icon: <SiSupabase className="w-5 h-5" />,
      
    },
    { 
      name: 'Tailwind CSS', 
      bgColor: 'bg-violet-50', 
      textColor: 'text-violet-700',
      icon: <SiTailwindcss className="w-5 h-5" />,
     
    },
    { 
      name: 'JavaScript', 
      bgColor: 'bg-amber-50', 
      textColor: 'text-amber-700',
      icon: <FaJs className="w-5 h-5" />,
      
    },
    {
      name: 'Node.js',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-700',
      icon: <FaNode className="w-5 h-5" />,
      
    },
    {
      name: 'Git',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      icon: <FaGitAlt className="w-5 h-5" />,
      
    }
  ], []);

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
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl sm:text-6xl font-bold text-slate-800 mb-4"  

                ></motion.h2>

                <motion.p 
                  variants={fadeInUp}
                  className="text-2xl sm:text-3xl md:text-4xl text-slate-600 mb-10 leading-relaxed font-bold uppercase"
                >
                  Rodanto Mari N. Mendones
                </motion.p>

                {/* Skills Section */}
            <div className="mt-12">
              <motion.h3 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800"
              >
                Technical Skills
              </motion.h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {memoizedSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover="hover"
                    className={`${skill.bgColor} ${skill.textColor} p-4 rounded-lg flex flex-col items-center justify-center space-y-2 cursor-pointer transition-colors duration-300`}
                  >
                    {skill.icon}
                    <span className="font-medium text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;