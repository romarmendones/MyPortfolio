import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: '💻',
      description: 'Building responsive and interactive web applications using modern frameworks and libraries.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS','JavaScript'],
      features: [
        'Responsive Web Design',
        'Single Page Applications',
        'Progressive Web Apps',
        'Cross-browser Compatibility'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Backend Development',
      icon: '⚙️',
      description: 'Creating robust and scalable server-side solutions with modern technologies.',
      technologies: ['Node.js', 'Supabase', 'Express', 'MongoDB'],
      features: [
        'RESTful APIs',
        'Database Design',
        'Authentication & Authorization',
        'Server Optimization'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Mobile Development',
      icon: '🚀',
      description: 'Combining frontend and backend expertise to deliver complete web solutions.',
      technologies: ['React Native', 'Expo', 'Firebase', 'Tailwind CSS'],
      features: [
        'Cross-platform Development',
        'Performance Optimization',
        'User Interface Design',
        'User Experience Design'
      ],
      gradient: 'from-orange-500 to-red-500'
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen px-4 py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 sm:px-6 lg:px-8"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl"></div>
        <div className="absolute rounded-full -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div 
          className="mb-20 text-center"
          variants={itemVariants}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </motion.div>
          
          <h1 className="mb-8 text-5xl font-bold leading-tight text-transparent md:text-6xl lg:text-7xl bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text">
            My Services
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-slate-300">
            Crafting exceptional digital experiences with cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={{ ...itemVariants, ...cardHoverVariants }}
              whileHover="hover"
              className="relative group"
            >
              {/* Card background with gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              
              <div className="relative h-full p-8 transition-all duration-300 border bg-slate-800/60 backdrop-blur-xl rounded-2xl border-slate-700/50 group-hover:border-slate-600/50">
                {/* Service icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text">
                  {service.title}
                </h3>
                
                <p className="mb-8 leading-relaxed text-slate-300">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-slate-200">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * techIndex }}
                        className="px-4 py-2 text-sm transition-all duration-200 border rounded-lg bg-slate-700/50 backdrop-blur-sm text-slate-200 border-slate-600/30 hover:border-slate-500/50"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-slate-200">Features</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                        className="flex items-center text-sm text-slate-300 group/item"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 group-hover/item:scale-125 transition-transform duration-200`}></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg text-slate-400">
            Ready to bring your ideas to life?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-700 hover:to-pink-700 hover:shadow-xl"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;