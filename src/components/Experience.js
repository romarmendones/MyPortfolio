import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "",
      company: "",
      duration: "",
      description: [
        
      ],
      skills: ['']
    },
    {
      title: "",
      company: "",
      duration: "",
      description: [
        
      ],
      skills: ['']
    },
    {
      title: "",
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
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-blue-400 to-purple-400"></div>
              )}
              
              <div className="bg-white/80 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group-hover:bg-white/90">
                <div className="flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-gray-600 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-gray-500 font-medium bg-gray-100 px-4 py-2 rounded-full text-sm mt-2 lg:mt-0">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;