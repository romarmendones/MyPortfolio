import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "",
      duration: "",
      description: [
        
      ],
      skills: ['']
    },
    {
      title: "Frontend Developer",
      company: "",
      duration: "",
      description: [
      
      ],
      skills: ['']
    },
    {
      title: "Junior Developer",
      company: "",
      duration: "",
      description: [
        
      ],
      skills: ['']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.98
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -8,
      scale: 1.01,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden min-h-screen">
      {/* Modern background with subtle patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-purple-500/3 to-pink-500/3"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Subtle animated elements */}
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/8 to-pink-500/8 rounded-full blur-2xl"
        ></motion.div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </motion.div>
          
          <h2 className="text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Professional Experience
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            My journey through the world of software development, where each role has shaped my expertise and passion for creating impactful solutions.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Modern timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-32 w-0.5 h-20 bg-gradient-to-b from-blue-400 to-purple-400 opacity-60"></div>
              )}
              
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-500 relative overflow-hidden"
              >
                {/* Subtle card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex flex-col lg:flex-row items-start gap-8 relative z-10">
                  {/* Modern timeline indicator */}
                  <div className="relative flex-shrink-0">
                    <motion.div 
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 5
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-500"
                    >
                      <div className="w-8 h-8 bg-white rounded-lg shadow-inner flex items-center justify-center">
                        <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md"></div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 gap-4">
                      <div className="flex-1">
                        <motion.h3 
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                          className="text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300"
                        >
                          {exp.title}
                        </motion.h3>
                        <p className="text-lg text-slate-300 font-medium">{exp.company}</p>
                      </div>
                      <motion.span 
                        whileHover={{ scale: 1.02 }}
                        className="text-slate-200 font-semibold bg-white/8 backdrop-blur-sm px-4 py-2 rounded-xl text-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                      >
                        {exp.duration}
                      </motion.span>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.6 }}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-4 text-slate-300 leading-relaxed group/item"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"
                          ></motion.div>
                          <span className="text-base font-light group-hover/item:text-blue-200 transition-colors duration-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -2
                          }}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500/15 to-purple-500/15 text-blue-200 rounded-lg text-sm font-medium border border-blue-400/20 hover:from-blue-500/25 hover:to-purple-500/25 hover:border-blue-400/30 transition-all duration-300 backdrop-blur-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;