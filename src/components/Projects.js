// src/components/Projects.js
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiSupabase, SiFirebase, SiMongodb, SiExpress } from 'react-icons/si';

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Define technology icons mapping
  const techIcons = {
    react: <FaReact className="text-cyan-400" />,
    node: <FaNodeJs className="text-green-500" />,
    tailwind: <SiTailwindcss className="text-teal-500" />,
    typescript: <SiTypescript className="text-blue-600" />,
    supabase: <SiSupabase className="text-emerald-500" />,
    firebase: <SiFirebase className="text-amber-500" />,
    mongodb: <SiMongodb className="text-green-600" />,
    express: <SiExpress className="text-gray-600" />
  };

  // Sample projects data
  const projects = useMemo(() => [
    {
      id: 1,
      title: 'SMARTSTOCKS',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and secure payment processing.',
      image: require('../image/Profile.jpg'),
      technologies: ['react', 'tailwind', 'supabase'],
      githubUrl: 'https://github.com/romar/smartstocks',
      liveUrl: 'https://smart-stacks-manager-web.vercel.app/',
      featured: true
    },
    
   
    
  ], []);

  // Load projects
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      setFilteredProjects(projects);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [projects]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12
      }
    },
    hover: {
      y: -15,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    },
    tap: { scale: 0.98 }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore my portfolio of projects showcasing my skills and experience in web development, 
          mobile applications, and UI/UX design.
        </p>
      </motion.div>

      {/* Projects Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : filteredProjects.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="inline-block p-6 rounded-2xl bg-gray-50 shadow-sm border border-gray-100 mb-6">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-700 mb-3">No projects found</h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">No projects are currently available.</p>
        </motion.div>
      ) : (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover="hover"
                whileTap="tap"
                layout
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      Featured
                    </div>
                  )}
                </div>
                
                {/* Project Content */}
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 hover:text-purple-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map(tech => (
                      <div 
                        key={tech} 
                        className="flex items-center gap-1.5 bg-gray-50 px-4 py-1.5 rounded-lg text-xs font-medium text-gray-700 border border-gray-100 hover:border-purple-200 transition-colors"
                      >
                        {techIcons[tech]}
                        <span>{tech.charAt(0).toUpperCase() + tech.slice(1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="px-8 pb-8 pt-0 mt-auto">
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors shadow-sm hover:shadow-md flex-1 justify-center"
                    >
                      <FaGithub className="text-lg" />
                      <span>Code</span>
                    </a>
                    {project.liveUrl ? (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-700 hover:to-pink-600 transition-colors shadow-sm hover:shadow-md flex-1 justify-center"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 px-5 py-2.5 bg-gray-200 text-gray-500 rounded-lg flex-1 justify-center cursor-not-allowed">
                        <FaExternalLinkAlt className="text-lg" />
                        <span>No Demo</span>
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;