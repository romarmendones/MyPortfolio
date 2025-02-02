// src/components/About.js
import React from 'react';
import Profile from '../image/Profile.jpg';

const About = () => {
  const skills = [
    { name: 'ReactJS', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
    { name: 'Supabase', bgColor: 'bg-green-100', textColor: 'text-green-800' },
    { name: 'Tailwind CSS', bgColor: 'bg-purple-100', textColor: 'text-purple-800' },
    { name: 'HTML5', bgColor: 'bg-red-100', textColor: 'text-red-800' },
    { name: 'CSS3', bgColor: 'bg-indigo-100', textColor: 'text-indigo-800' },
   
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-200">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover transform hover:rotate-3 transition-transform"
            />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 relative">
              About Me
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-blue-600"></span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Hi, I'm Rodanto Mari N. Mendones, a web developer focused on building modern applications. I create responsive, user-friendly experiences with clean code and cutting-edge technologies. I aim to deliver solutions that combine technical excellence with great user experience.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Technical Skills</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`px-4 py-2 ${skill.bgColor} ${skill.textColor} rounded-full font-medium transition-transform hover:scale-110 cursor-pointer`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;