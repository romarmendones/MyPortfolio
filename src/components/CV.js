import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CV.css';

const CV = () => {
  const [cvData, setCvData] = useState({
    personalInfo: {
      name: "Your Name",
      title: "Software Engineer",
      email: "your.email@example.com",
      phone: "+1 (555) 123-4567",
      location: "City, State",
      linkedin: "linkedin.com/in/yourprofile",
      github: "github.com/yourusername"
    },
    summary: "Experienced software engineer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Passionate about creating scalable solutions and leading development teams to deliver high-quality products.",
    experience: [
      {
        title: "Senior Software Engineer",
        company: "Tech Company Inc.",
        duration: "2022 - Present",
        location: "San Francisco, CA",
        description: [
          "Led development of microservices architecture serving 1M+ users",
          "Mentored 5 junior developers and conducted code reviews",
          "Implemented CI/CD pipelines reducing deployment time by 60%",
          "Collaborated with cross-functional teams to deliver features on time"
        ]
      },
      {
        title: "Software Engineer",
        company: "StartupXYZ",
        duration: "2020 - 2022",
        location: "New York, NY",
        description: [
          "Developed and maintained React-based web applications",
          "Optimized database queries improving performance by 40%",
          "Participated in agile development processes and sprint planning",
          "Contributed to open-source projects and technical documentation"
        ]
      },
      {
        title: "Junior Developer",
        company: "Digital Agency",
        duration: "2019 - 2020",
        location: "Austin, TX",
        description: [
          "Built responsive websites using HTML, CSS, and JavaScript",
          "Collaborated with designers to implement UI/UX designs",
          "Debugged and fixed issues in existing codebase",
          "Learned modern frameworks and development practices"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University of Technology",
        duration: "2015 - 2019",
        location: "Boston, MA",
        gpa: "3.8/4.0"
      }
    ],
    skills: {
      technical: ["JavaScript", "React", "Node.js", "Python", "SQL", "AWS", "Docker", "Git", "TypeScript", "MongoDB"],
      soft: ["Leadership", "Problem Solving", "Communication", "Team Collaboration", "Agile/Scrum", "Project Management"]
    },
    projects: [
      {
        name: "E-commerce Platform",
        description: "Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard",
        tech: ["React", "Node.js", "MongoDB", "Stripe API"]
      },
      {
        name: "Task Management App",
        description: "Real-time collaborative task management application with drag-and-drop functionality",
        tech: ["React", "Socket.io", "Express", "PostgreSQL"]
      },
      {
        name: "Weather Dashboard",
        description: "Interactive weather dashboard with location-based forecasts and historical data visualization",
        tech: ["React", "Chart.js", "OpenWeather API", "Geolocation API"]
      }
    ],
    certifications: [
      "AWS Certified Developer Associate",
      "Google Cloud Professional Developer",
      "Certified Scrum Master (CSM)"
    ],
    languages: ["English (Native)", "Spanish (Fluent)", "French (Intermediate)"]
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (section, field, value) => {
    if (!isEditing) return;
    
    setCvData(prev => {
      const newData = { ...prev };
      if (section === 'personalInfo') {
        newData.personalInfo = { ...newData.personalInfo, [field]: value };
      } else if (section === 'summary') {
        newData.summary = value;
      }
      return newData;
    });
  };

  // A4 dimensions in pixels at 300 DPI
  const a4Width = 8.27 * 300; // 2481px
  const a4Height = 11.69 * 300; // 3507px

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 print:py-0 print:px-0">
      <div className="max-w-4xl mx-auto">
        {/* Print Controls */}
        <div className="mb-8 print:hidden print-controls">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mr-4"
          >
            {isEditing ? 'Save' : 'Edit CV'}
          </button>
          <button
            onClick={() => window.print()}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Print CV
          </button>
        </div>

        {/* CV Container - A4 Size */}
        <div 
          className="bg-white shadow-2xl mx-auto print:shadow-none print:mx-0 cv-container"
          style={{
            width: `${a4Width}px`,
            height: `${a4Height}px`,
            maxWidth: '100%',
            maxHeight: '100vh',
            overflow: 'hidden'
          }}
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-12 print:p-8 cv-header">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <input
                  type="text"
                  value={cvData.personalInfo.name}
                  onChange={(e) => handleEdit('personalInfo', 'name', e.target.value)}
                  className={`text-5xl font-bold mb-4 bg-transparent border-none outline-none print:text-4xl ${
                    isEditing ? 'border-b-2 border-white/50' : ''
                  }`}
                  readOnly={!isEditing}
                />
                <input
                  type="text"
                  value={cvData.personalInfo.title}
                  onChange={(e) => handleEdit('personalInfo', 'title', e.target.value)}
                  className={`text-2xl text-blue-200 mb-6 bg-transparent border-none outline-none print:text-xl ${
                    isEditing ? 'border-b-2 border-white/50' : ''
                  }`}
                  readOnly={!isEditing}
                />
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-300">📧</span>
                    <input
                      type="text"
                      value={cvData.personalInfo.email}
                      onChange={(e) => handleEdit('personalInfo', 'email', e.target.value)}
                      className="bg-transparent border-none outline-none flex-1"
                      readOnly={!isEditing}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-300">📱</span>
                    <input
                      type="text"
                      value={cvData.personalInfo.phone}
                      onChange={(e) => handleEdit('personalInfo', 'phone', e.target.value)}
                      className="bg-transparent border-none outline-none flex-1"
                      readOnly={!isEditing}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-300">📍</span>
                    <input
                      type="text"
                      value={cvData.personalInfo.location}
                      onChange={(e) => handleEdit('personalInfo', 'location', e.target.value)}
                      className="bg-transparent border-none outline-none flex-1"
                      readOnly={!isEditing}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-300">🔗</span>
                    <input
                      type="text"
                      value={cvData.personalInfo.linkedin}
                      onChange={(e) => handleEdit('personalInfo', 'linkedin', e.target.value)}
                      className="bg-transparent border-none outline-none flex-1"
                      readOnly={!isEditing}
                    />
                  </div>
                </div>
              </div>
              
              {/* Profile Photo Placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white text-4xl font-bold print:w-24 print:h-24 print:text-2xl">
                {cvData.personalInfo.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-12 print:p-8 space-y-8">
            {/* Professional Summary */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 print:text-xl">
                Professional Summary
              </h2>
              <textarea
                value={cvData.summary}
                onChange={(e) => handleEdit('summary', '', e.target.value)}
                className="w-full text-gray-700 leading-relaxed bg-transparent border-none outline-none resize-none print:text-sm"
                rows={4}
                readOnly={!isEditing}
              />
            </section>

            {/* Professional Experience */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2 print:text-xl">
                Professional Experience
              </h2>
              <div className="space-y-6">
                {cvData.experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800 print:text-lg">
                        {exp.title}
                      </h3>
                      <span className="text-blue-600 font-medium print:text-sm">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium mb-2 print:text-sm">
                      {exp.company} • {exp.location}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 print:text-sm">
                      {exp.description.map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2 print:text-xl">
                Education
              </h2>
              {cvData.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 print:text-lg">
                      {edu.degree}
                    </h3>
                    <span className="text-blue-600 font-medium print:text-sm">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium mb-1 print:text-sm">
                    {edu.school} • {edu.location}
                  </p>
                  <p className="text-gray-700 print:text-sm">
                    GPA: {edu.gpa}
                  </p>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2 print:text-xl">
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3 print:text-base">
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cvData.skills.technical.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium print:text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3 print:text-base">
                    Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cvData.skills.soft.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium print:text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2 print:text-xl">
                Key Projects
              </h2>
              <div className="space-y-4">
                {cvData.projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 print:text-base">
                      {project.name}
                    </h3>
                    <p className="text-gray-700 mb-2 print:text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2 print:text-xl">
                Additional Information
              </h2>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3 print:text-base">
                    Certifications
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 print:text-sm">
                    {cvData.certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3 print:text-base">
                    Languages
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 print:text-sm">
                    {cvData.languages.map((lang, index) => (
                      <li key={index}>{lang}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV; 