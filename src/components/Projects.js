// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      name: 'Capstone Project', 
      description: 'SmartStocksManager: A Web Sales And Warehouse Management System', 
      link: 'https://smart-stocks-manager.vercel.app/',
      image: 'images/Logo.png',
      tech: ['React', 'Supabase', 'Tailwind CSS']
    },
    { 
      id: 2, 
      name: 'Project 2', 
      description: 'A brief description of Project 2.', 
      link: 'https://project2.com',
      image: 'https://via.placeholder.com/300x200',
      tech: ['HTML', 'CSS', 'JavaScript'] 
    },
    { 
      id: 3, 
      name: 'Project 3', 
      description: 'A brief description of Project 3.', 
      link: 'https://project3.com',
      image: 'https://via.placeholder.com/300x200',
      tech: ['React', 'Node.js', 'MongoDB']
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-gray-800"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">View Project</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;