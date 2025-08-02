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
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.95
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
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold text-white mb-6 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            A journey through my professional growth, showcasing the projects, technologies, and achievements that have shaped my career.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full mt-8"></div>
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
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-12 top-24 w-1 h-20 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 opacity-60"></div>
              )}
              
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group-hover:bg-white/15"
              >
                <div className="flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-500">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                      </div>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8">
                      <div className="mb-4 lg:mb-0">
                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-blue-200 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-blue-100 font-semibold bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="flex items-start gap-4 text-gray-200 leading-relaxed"
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                          <span className="text-lg">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.4 }}
                          className="px-5 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 rounded-full text-sm font-medium border border-blue-400/30 hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
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