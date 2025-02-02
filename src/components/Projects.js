// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    { id: 1, name: 'Project 1', description: 'A brief description of Project 1.' },
    { id: 2, name: 'Project 2', description: 'A brief description of Project 2.' },
    { id: 3, name: 'Project 3', description: 'A brief description of Project 3.' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;