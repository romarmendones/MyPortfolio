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
        staggerChildren: 0.4,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -12,
      scale: 1.03,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden min-h-screen">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Professional Experience
          </h2>
          <p className="text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed font-light">
            
          </p>
          <div className="w-40 h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full mt-12 shadow-lg"></div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          className="space-y-20"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Enhanced timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-16 top-32 w-1.5 h-24 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 opacity-70 shadow-lg"></div>
              )}
              
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/12 backdrop-blur-2xl border border-white/25 p-12 rounded-4xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-600 group-hover:bg-white/18 relative overflow-hidden"
              >
                {/* Card background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                
                <div className="flex flex-col lg:flex-row items-start gap-12 relative z-10">
                  {/* Enhanced timeline dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/60 transition-all duration-600 p-1">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-inner"></div>
                      </div>
                    </div>
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-600"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start mb-10 gap-6">
                      <div className="flex-1">
                        <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-400 leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-2xl text-blue-200 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-blue-100 font-semibold bg-white/15 backdrop-blur-sm px-8 py-4 rounded-2xl text-base border border-white/25 hover:bg-white/25 transition-all duration-400 shadow-lg">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <ul className="space-y-6 mb-10">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.15, duration: 0.6 }}
                          className="flex items-start gap-5 text-gray-200 leading-relaxed"
                        >
                          <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                          <span className="text-xl font-light">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-4">
                      {exp.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="px-6 py-3 bg-gradient-to-r from-blue-500/25 to-purple-500/25 text-blue-200 rounded-2xl text-base font-medium border border-blue-400/40 hover:from-blue-500/35 hover:to-purple-500/35 hover:border-blue-400/60 transition-all duration-400 backdrop-blur-sm shadow-lg hover:shadow-blue-500/20"
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