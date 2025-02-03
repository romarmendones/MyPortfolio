// src/components/About.js
import React from 'react';
import Profile from '../image/Profile.jpg';
import { motion } from 'framer-motion';


const About = () => {
  const skills = [
    { name: 'ReactJS', bgColor: 'bg-blue-100', textColor: 'text-blue-800', icon: '/icons/react.svg',  },
    { name: 'Supabase', bgColor: 'bg-green-100', textColor: 'text-green-800', icon: '/icons/supabase.svg',  },
    { name: 'Tailwind CSS', bgColor: 'bg-purple-100', textColor: 'text-purple-800', icon: '/icons/tailwind.svg',  },
    { name: 'JavaScript', bgColor: 'bg-indigo-100', textColor: 'text-indigo-800', icon: '/icons/javascript.svg',  }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gradient-to-b from-blue-50 via-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl relative group"
          >
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </motion.div>
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="text-4xl font-bold mb-6 text-gray-800 relative"
            >
              About Me
              
            </motion.h2>
            <motion.p 
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Hi, I'm Rodanto Mari N. Mendones, a  Junior web developer focused on building modern applications. 
              I create responsive, user-friendly experiences with clean code and cutting-edge technologies. 
              I aim to deliver solutions that combine technical excellence with great user experience.
            </motion.p>
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-semibold mb-4 text-gray-700"
            >
              Technical Skills
            </motion.h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`px-4 py-2 ${skill.bgColor} ${skill.textColor} rounded-full font-medium flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  {skill.name}
                  <span className="text-sm opacity-75">• {skill.level}</span>
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