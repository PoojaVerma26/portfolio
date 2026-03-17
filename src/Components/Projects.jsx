import React, { useState } from "react";
import { FaEye, FaExternalLinkAlt, FaTimes, FaCode, FaLaptop, FaGlobe, FaReact, FaCss3Alt, FaJs } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "DAYLOGS",
      description: "Modern HRMS platform with employee management dashboard",
      shortDesc: "HRMS Platform",
      link: "https://daylogs.in/",
      type: "Live",
      tech: ["React", "Tailwind", "Node.js"],
      details: "Built a complete HR management system with employee tracking, leave management, and analytics dashboard. Implemented responsive design and real-time updates.",
      role: "Frontend Developer"
    },
    {
      id: 2,
      title: "MSME OSEM",
      description: "MSME organization website with business resources",
      shortDesc: "Business Portal",
      link: "https://msmeosem.in/",
      type: "Live",
      tech: ["React", "Bootstrap", "API"],
      details: "Developed official website for MSME organization providing resources, support, and information for small businesses. Integrated multiple services and responsive layouts.",
      role: "Frontend Developer"
    },
    {
      id: 3,
      title: "UPICON",
      description: "Industrial services and solutions platform",
      shortDesc: "Industrial Services",
      link: "https://upicon.in/",
      type: "Live",
      tech: ["React", "CSS", "JavaScript"],
      details: "Created professional website showcasing industrial services and solutions with portfolio gallery, service pages, and contact systems.",
      role: "Frontend Developer"
    },
    {
      id: 4,
      title: "Eduversity",
      description: "Educational technology learning platform",
      shortDesc: "EdTech Platform",
      link: "https://eduversityedutech.com/",
      type: "Live",
      tech: ["React", "EdTech", "Learning"],
      details: "Built educational technology platform offering courses, learning resources, and academic solutions with interactive features.",
      role: "Frontend Developer"
    },
    {
      id: 5,
      title: "TOMATO",
      description: "Food ordering and delivery platform",
      shortDesc: "Food Delivery",
      link: "https://food-del-lilac.vercel.app/",
      type: "Portfolio",
      tech: ["React", "CSS", "UI/UX"],
      details: "Designed and developed complete food ordering system with menu browsing, cart management, and checkout process.",
      role: "Full Stack Developer"
    },
    {
      id: 6,
      title: "Geek-Shop",
      description: "Authentication system with forms",
      shortDesc: "Login System",
      link: "https://react-form-eight-brown.vercel.app/",
      type: "Portfolio",
      tech: ["React", "Forms", "Validation"],
      details: "Created responsive login and registration forms with validation, animations, and secure authentication flow.",
      role: "Frontend Developer"
    },
    {
      id: 7,
      title: "Educity",
      description: "College information and resources portal",
      shortDesc: "Education Portal",
      link: "https://education-iota-fawn.vercel.app/",
      type: "Portfolio",
      tech: ["React", "Tailwind", "Education"],
      details: "Built comprehensive college website with course information, faculty details, events calendar, and student resources.",
      role: "Frontend Developer"
    },
    {
      id: 8,
      title: "Temperature Converter",
      description: "Temperature conversion tool",
      shortDesc: "Utility Tool",
      link: "https://sonikagithub.github.io/tempconverter/",
      type: "Portfolio",
      tech: ["JavaScript", "HTML", "CSS"],
      details: "Developed temperature conversion application with real-time calculations between Celsius, Fahrenheit, and Kelvin.",
      role: "Frontend Developer"
    }
  ];

  const techIcons = {
    "React": <FaReact className="text-blue-500" />,
    "Tailwind": <FaCss3Alt className="text-teal-500" />,
    "JavaScript": <FaJs className="text-yellow-500" />,
    "CSS": <FaCss3Alt className="text-blue-600" />,
    "Bootstrap": <FaCss3Alt className="text-purple-500" />,
    "Node.js": <FaCode className="text-green-500" />
  };

  return (
    <div id="projects" className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-transparent to-[#E90E65]"></div>
            <FaCode className="text-xl text-[#E90E65]" />
            <div className="w-8 h-1 bg-gradient-to-r from-[#E90E65] to-transparent"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Projects <span className="text-[#E90E65]">Portfolio</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Live client projects and portfolio work showcasing frontend expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-[#E90E65]/30 transition-all duration-300 hover:-translate-y-1 p-4 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Live Badge */}
              <div className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-semibold ${
                project.type === "Live" 
                  ? "bg-green-100 text-green-800 border border-green-200" 
                  : "bg-blue-100 text-blue-800 border border-blue-200"
              }`}>
                {project.type}
              </div>

              {/* Icon */}
              <div className="mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-[#E90E65]/10 group-hover:to-pink-100 flex items-center justify-center transition-all">
                  {project.type === "Live" ? (
                    <FaGlobe className="text-gray-600 group-hover:text-[#E90E65] transition-colors" />
                  ) : (
                    <FaLaptop className="text-gray-600 group-hover:text-[#E90E65] transition-colors" />
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-bold text-gray-900 group-hover:text-[#E90E65] transition-colors mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {project.shortDesc}
              </p>

              {/* Tech Stack */}
              <div className="flex gap-1.5 mb-4">
                {project.tech.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                    title={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="flex-1 py-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-[#E90E65]/10 hover:to-pink-100 text-gray-700 hover:text-[#E90E65] text-sm font-medium rounded-lg transition-all group/btn"
                >
                  <span className="flex items-center justify-center gap-1">
                    <FaEye className="text-xs" />
                    Details
                  </span>
                </button>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="py-2 px-3 bg-gradient-to-r from-[#E90E65] to-pink-600 text-white hover:shadow-lg text-sm font-medium rounded-lg transition-all hover:scale-105"
                >
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E90E65]/10 rounded-xl pointer-events-none transition-colors"></div>
            </div>
          ))}
        </div>

       

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div 
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        selectedProject.type === "Live" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {selectedProject.type} Project
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <FaTimes className="text-gray-500 hover:text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">PROJECT DESCRIPTION</h4>
                  <p className="text-gray-700">{selectedProject.details}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">MY ROLE</h4>
                  <p className="text-gray-700">{selectedProject.role}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">TECHNOLOGIES USED</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg flex items-center gap-2"
                      >
                        {techIcons[tech] || <FaCode />}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">PROJECT LINK</h4>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#E90E65] to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105"
                  >
                    <FaExternalLinkAlt />
                    Visit Live Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;