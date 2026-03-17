import React, { useState } from "react";
import {
  FaEye,
  FaExternalLinkAlt,
  FaTimes,
  FaCode,
} from "react-icons/fa";

// 👉 Import your images here
import proj1 from "../assets/projects/daylogs.jpg";
import proj2 from "../assets/projects/msme.jpg";
import proj3 from "../assets/projects/upicon.jpg";
import proj4 from "../assets/projects/eduversity.jpg";
import proj5 from "../assets/projects/tomato.jpg";
import proj6 from "../assets/projects/geekshop.jpg";
import proj7 from "../assets/projects/educity.jpg";
import proj8 from "../assets/projects/temp.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "DAYLOGS",
      image: proj1,
      shortDesc: "HRMS Platform",
      link: "https://daylogs.in/",
      type: "Live",
      tech: ["React", "Tailwind", "Node.js"],
      details:
        "Built a complete HR management system with employee tracking, leave management, and analytics dashboard.",
      role: "Frontend Developer",
    },
    {
      id: 2,
      title: "MSME OSEM",
      image: proj2,
      shortDesc: "Business Portal",
      link: "https://msmeosem.in/",
      type: "Live",
      tech: ["React", "Bootstrap", "API"],
      details:
        "Developed official website for MSME organization providing resources and business support.",
      role: "Frontend Developer",
    },
    {
      id: 3,
      title: "UPICON",
      image: proj3,
      shortDesc: "Industrial Services",
      link: "https://upicon.in/",
      type: "Live",
      tech: ["React", "CSS", "JavaScript"],
      details:
        "Created professional website showcasing industrial services and solutions.",
      role: "Frontend Developer",
    },
    {
      id: 4,
      title: "Eduversity",
      image: proj4,
      shortDesc: "EdTech Platform",
      link: "https://eduversityedutech.com/",
      type: "Live",
      tech: ["React", "Learning"],
      details:
        "Built educational platform offering courses and academic resources.",
      role: "Frontend Developer",
    },
    {
      id: 5,
      title: "TOMATO",
      image: proj5,
      shortDesc: "Food Delivery",
      link: "https://food-del-lilac.vercel.app/",
      type: "Portfolio",
      tech: ["React", "UI/UX"],
      details:
        "Designed a food ordering system with cart and checkout functionality.",
      role: "Full Stack Developer",
    },
    {
      id: 6,
      title: "Geek-Shop",
      image: proj6,
      shortDesc: "Login System",
      link: "https://react-form-eight-brown.vercel.app/",
      type: "Portfolio",
      tech: ["React", "Forms"],
      details:
        "Created login/register system with validation and authentication.",
      role: "Frontend Developer",
    },
    {
      id: 7,
      title: "Educity",
      image: proj7,
      shortDesc: "Education Portal",
      link: "https://education-iota-fawn.vercel.app/",
      type: "Portfolio",
      tech: ["React", "Tailwind"],
      details:
        "Built college portal with course info, faculty, and resources.",
      role: "Frontend Developer",
    },
    {
      id: 8,
      title: "Temperature Tool",
      image: proj8,
      shortDesc: "Utility Tool",
      link: "https://sonikagithub.github.io/tempconverter/",
      type: "Portfolio",
      tech: ["JavaScript"],
      details:
        "Temperature converter with real-time calculation.",
      role: "Frontend Developer",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900">
            My <span className="text-[#E90E65]">Projects</span>
          </h1>
          <p className="text-gray-500 mt-2">
            A collection of my recent work & live projects
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm opacity-80">
                  {project.shortDesc}
                </p>

                <div className="flex gap-2 mt-2 flex-wrap">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-white/20 backdrop-blur rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Buttons */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="p-3 bg-white text-black rounded-full hover:scale-110"
                >
                  <FaEye />
                </button>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 bg-[#E90E65] text-white rounded-full hover:scale-110"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>

              {/* Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 text-xs bg-white/20 backdrop-blur text-white rounded-full">
                {project.type}
              </div>

              {/* Glow Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#E90E65]/40 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
          >
            {/* Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-52 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold">
                  {selectedProject.title}
                </h2>
                <FaTimes
                  onClick={() => setSelectedProject(null)}
                  className="cursor-pointer"
                />
              </div>

              <p className="text-gray-600 mt-3">
                {selectedProject.details}
              </p>

              <p className="mt-3 text-sm text-gray-500">
                Role: {selectedProject.role}
              </p>

              <div className="flex gap-2 mt-4 flex-wrap">
                {selectedProject.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-[#E90E65] text-white px-5 py-2 rounded-lg"
              >
                <FaExternalLinkAlt />
                Visit Project
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;