// src/components/About.js
import React from 'react';
import Profile from '../image/Profile.jpg';

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl transition-transform hover:scale-105">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
            <p className="text-xl text-gray-600 mb-6">
              Hi, I'm a web developer passionate about building modern web applications. 
              I specialize in creating responsive, user-friendly experiences using 
              cutting-edge technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">React</div>
              <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full">Node.js</div>
              <div className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">Tailwind CSS</div>
              <div className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full">JavaScript</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;