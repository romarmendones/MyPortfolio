// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRegFolder, FaStar } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      name: 'SmartStocksManager', 
      description: 'A comprehensive web-based sales and warehouse management system designed to streamline inventory tracking, order processing, and business analytics.',
      link: 'https://smart-stocks-manager-web.vercel.app/',
      github: 'https://github.com/romarmendones/SmartStocksManager-Web', 
      image: 'image/SmartStocks.png',
      tech: ['React', 'Supabase', 'Tailwind CSS', 'JavaScript'],
      features: ['Real-time inventory tracking', 'Sales analytics', 'User management', 'Automated reports'],
      status: 'Live'
    },
    
    
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-32 bg-white border-t border-gray-100"
      aria-label="Featured Projects Section"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-20 text-center text-gray-900 tracking-tight"
          id="featured-projects"
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          role="list"
          aria-labelledby="featured-projects"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 border border-gray-100/50"
              role="listitem"
            >
              <div className="relative group">
                <div className="w-full h-72 bg-gray-50">
                  <img 
                    src={project.image} 
                    alt={`Screenshot of ${project.name} project`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/Logo.png';
                    }}
                    style={{ opacity: 0 }}
                    onLoad={(e) => {
                      e.target.style.opacity = 1;
                      e.target.style.transition = 'opacity 0.4s ease-in';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="flex gap-6">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white px-6 py-3 rounded-full border-2 border-white/90 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group/link"
                        aria-label={`View source code for ${project.name} on GitHub`}
                      >
                        <FaGithub className="w-5 h-5" aria-hidden="true" />
                        <span className="hidden group-hover/link:inline-block transition-all duration-300">
                          Code
                        </span>
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white px-6 py-3 rounded-full border-2 border-white/90 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group/link"
                        aria-label={`Visit live demo of ${project.name}`}
                      >
                        <FaExternalLinkAlt className="w-5 h-5" aria-hidden="true" />
                        <span className="hidden group-hover/link:inline-block transition-all duration-300">
                          Live
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-8 bg-white">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <FaRegFolder className="w-6 h-6 text-blue-500" aria-hidden="true" />
                    <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                      {project.name}
                    </h3>
                  </div>
                  <span className={`flex items-center gap-2 text-sm px-4 py-1.5 rounded-full font-semibold ${
                    project.status === 'Live' 
                      ? 'bg-green-50 text-green-700 ring-1 ring-green-100' 
                      : project.status === 'In Development' 
                      ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-100' 
                      : 'bg-blue-50 text-blue-700 ring-1 ring-blue-100'
                  }`}
                  role="status"
                  aria-label={`Project status: ${project.status}`}
                  >
                    <FaStar className={`w-4 h-4 ${
                      project.status === 'Live' 
                        ? 'text-green-700' 
                        : project.status === 'In Development' 
                        ? 'text-amber-700' 
                        : 'text-blue-700'
                    }`} 
                    aria-hidden="true" 
                    />
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 line-clamp-3 hover:line-clamp-none transition-all duration-300 leading-relaxed text-base">
                  {project.description}
                </p>
                <div className="mb-8" role="list" aria-label="Project features">
                  {project.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center gap-1.5 mr-2 mb-2 text-sm bg-green-50 text-green-700 px-4 py-1.5 rounded-full hover:bg-green-100 transition-all duration-300 ring-1 ring-green-100 hover:shadow-md"
                      role="listitem"
                    >
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" aria-hidden="true"></span>
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold hover:bg-blue-100 hover:scale-105 transform transition-all duration-300 ring-1 ring-blue-100"
                      role="listitem"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;