// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      name: 'SmartStocksManager', 
      description: 'A comprehensive web-based sales and warehouse management system designed to streamline inventory tracking, order processing, and business analytics.',
      link: 'https://smart-stocks-manager.vercel.app/',
      image: 'images/Logo.png',
      tech: ['React', 'Supabase', 'Tailwind CSS', 'JavaScript'],
      features: ['Real-time inventory tracking', 'Sales analytics', 'User management', 'Automated reports']
    },
    { 
      id: 2, 
      name: 'Portfolio Website', 
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and a clean design.',
      link: 'https://your-portfolio-url.com',
      image: '/images/portfolio.png',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      features: ['Responsive design', 'Dark mode', 'Contact form']
    },
    { 
      id: 3, 
      name: 'Task Management App', 
      description: 'A full-stack task management application with real-time updates, user authentication, and collaborative features.',
      link: 'https://task-manager-demo.com',
      image: '/images/task-manager.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      features: ['Real-time updates', 'Team collaboration', 'Task analytics']
    },


    {
      id: 4,
      name: 'Coffee Shop',
      description: 'A simple coffee shop website.',
      link: '',
      image: 'images/Logo.png',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      features: ['Fantastic', 'Great', 'Awesome'],
    }
  ];
  

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center text-gray-800"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-xl"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative group">
                  <div className="w-full h-56 bg-gray-200">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/Logo.png';
                      }}
                      style={{ opacity: 0 }}
                      onLoad={(e) => {
                        e.target.style.opacity = 1;
                        e.target.style.transition = 'opacity 0.3s ease-in';
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-semibold px-6 py-3 rounded-lg border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 hover:line-clamp-none transition-all duration-300">{project.description}</p>
                  <div className="mb-4">
                    {project.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="inline-block mr-2 mb-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full hover:bg-green-200 hover:text-green-800 transition-colors duration-300"
                      >
                        • {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-200 hover:scale-105 transform transition-all duration-300"
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