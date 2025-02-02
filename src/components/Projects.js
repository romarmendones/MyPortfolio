// src/components/Projects.js
import React from 'react';


const Projects = () => {
  const projects = [
    { 
      id: 1, 
      name: 'Capstone Project', 
      description: 'SmartStocksManager: A Web Sales And Warehouse Management System', 
      link: 'https://smart-stocks-manager.vercel.app/',
      image: 'images/Logo.png'
    },
    { 
      id: 2, 
      name: 'Project 2', 
      description: 'A brief description of Project 2.', 
      link: 'https://project2.com',
      image: 'https://via.placeholder.com/300x200'
    },
    { 
      id: 3, 
      name: 'Project 3', 
      description: 'A brief description of Project 3.', 
      link: 'https://project3.com',
      image: 'https://via.placeholder.com/300x200'
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-700">{project.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;