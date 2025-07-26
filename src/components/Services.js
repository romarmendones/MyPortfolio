import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: '💻',
      description: 'Building responsive and interactive web applications using modern frameworks and libraries.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      features: [
        'Responsive Web Design',
        'Single Page Applications',
        'Progressive Web Apps',
        'Cross-browser Compatibility'
      ]
    },
    {
      id: 2,
      title: 'Backend Development',
      icon: '⚙️',
      description: 'Creating robust and scalable server-side solutions with modern technologies.',
      technologies: ['Node.js, Supabase',],
      features: [
        'RESTful APIs',
        'Database Design',
        'Authentication & Authorization',
        'Server Optimization'
      ]
    },
    {
      id: 3,
      title: 'Mobile Development',
      icon: '📱',
      description: 'Combining frontend and backend expertise to deliver complete web solutions.',
      technologies: ['React', 'Node.js', 'Supabase', 'Tailwind CSS'],
      features: [
        'End-to-end Development',
        'Real-time Applications',
        'Deployment & Hosting',
        'Performance Optimization'
      ]
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            My Services
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Delivering high-quality solutions with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{service.icon}</span>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-700/50 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-400 text-sm"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-teal-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;