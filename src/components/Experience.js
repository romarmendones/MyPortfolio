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
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Professional Experience</h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-xl text-gray-600">{exp.company}</p>
                </div>
                <span className="text-gray-500">{exp.duration}</span>
              </div>
              
              <ul className="list-disc list-inside mb-4 text-gray-700">
                {exp.description.map((item, i) => (
                  <li key={i} className="mb-2">{item}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;