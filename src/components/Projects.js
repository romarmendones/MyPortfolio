// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCode, FaRocket, FaLaptopCode } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      name: 'SmartStocksManager', 
      description: 'A comprehensive web and mobile sales and warehouse management system designed to streamline inventory tracking, order processing, and business analytics.',
      link: 'https://smart-stocks-manager-web.vercel.app/',
      github: 'https://github.com/romarmendones/SmartStocksManager-Web', 
      tech: ['React', 'Supabase', 'Tailwind CSS', 'JavaScript'],
      features: ['Real-time inventory tracking', 'Sales analytics', 'User management', 'Automated reports'],
      status: 'Live',
      category: 'Full-Stack'
    },
    // Add more projects here as needed
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
      aria-label="Featured Projects Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent tracking-tight"
            id="featured-projects"
          >
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my latest work showcasing modern web development, innovative solutions, and cutting-edge technologies.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          role="list"
          aria-labelledby="featured-projects"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
              role="listitem"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border border-white/20 relative"
              >
                {/* Card Header with Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                   {/* Overlay with action buttons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                    <div className="flex gap-4">
                      {project.github && (
                        <motion.a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`View source code for ${project.name} on GitHub`}
                        >
                          <FaCode className="w-4 h-4" aria-hidden="true" />
                          Code
                        </motion.a>
                      )}
                      {project.link && (
                        <motion.a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`Visit live demo of ${project.name}`}
                        >
                          <FaRocket className="w-4 h-4" aria-hidden="true" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                        <FaLaptopCode className="w-5 h-5 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {project.name}
                        </h3>
                        <span className="text-sm text-gray-500 font-medium">{project.category}</span>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <span className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-full font-semibold ${
                      project.status === 'Live' 
                        ? 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200' 
                        : project.status === 'In Development' 
                        ? 'bg-amber-100 text-amber-700 ring-1 ring-amber-200' 
                        : 'bg-blue-100 text-blue-700 ring-1 ring-blue-200'
                    }`}
                    role="status"
                    aria-label={`Project status: ${project.status}`}
                    >
                      <FaStar className={`w-3 h-3 ${
                        project.status === 'Live' 
                          ? 'text-emerald-600' 
                          : project.status === 'In Development' 
                          ? 'text-amber-600' 
                          : 'text-blue-600'
                      }`} 
                      aria-hidden="true" 
                      />
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed text-base line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6" role="list" aria-label="Project features">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="inline-flex items-center gap-1.5 text-xs bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 px-3 py-1.5 rounded-full font-medium ring-1 ring-emerald-200 hover:ring-2 hover:ring-emerald-300 transition-all duration-300"
                          role="listitem"
                        >
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" aria-hidden="true"></span>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div role="list" aria-label="Technologies used">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-xs font-semibold ring-1 ring-blue-200 hover:ring-2 hover:ring-blue-300 hover:scale-105 transform transition-all duration-300"
                          role="listitem"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a 
            href="https://github.com/romarmendones" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaGithub className="w-5 h-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;