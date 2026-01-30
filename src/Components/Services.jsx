import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaJava,
  FaLaptop,
  FaGlobe,
  FaCode,
  FaServer,
  FaPaintBrush,
  FaMobileAlt
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiCplusplus, SiC } from "react-icons/si";

const Services = () => {
  const skills = [
    { name: "React", icon: <FaReact className="w-12 h-12" color="#61DBFB" />, category: "Frontend" },
    { name: "Node.js", icon: <FaNodeJs className="w-12 h-12" color="#68A063" />, category: "Backend" },
    { name: "MongoDB", icon: <FaDatabase className="w-12 h-12" color="#4DB33D" />, category: "Database" },
    { name: "HTML5", icon: <FaHtml5 className="w-12 h-12" color="#E34C26" />, category: "Frontend" },
    { name: "CSS3", icon: <FaCss3Alt className="w-12 h-12" color="#1572B6" />, category: "Frontend" },
    { name: "JavaScript", icon: <FaJsSquare className="w-12 h-12" color="#F7DF1E" />, category: "Frontend" },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="w-12 h-12" color="#38B2AC" />, category: "Frontend" },
    { name: "Bootstrap", icon: <FaBootstrap className="w-12 h-12" color="#7952B3" />, category: "Frontend" },
    { name: "C", icon: <SiC className="w-12 h-12" color="#A8B9CC" />, category: "Programming" },
    { name: "C++", icon: <SiCplusplus className="w-12 h-12" color="#00599C" />, category: "Programming" },
    { name: "Java", icon: <FaJava className="w-12 h-12" color="#007396" />, category: "Programming" },
    { name: "Express.js", icon: <SiExpress className="w-12 h-12" color="#000000" />, category: "Backend" },
  ];

  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive, interactive web interfaces using modern frameworks like React.js with clean, maintainable code.",
      icon: <FaCode className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Backend Development",
      description: "Developing robust server-side applications and RESTful APIs using Node.js, Express.js, and database integration.",
      icon: <FaServer className="w-8 h-8" />,
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful, user-friendly interfaces with modern design principles and responsive layouts.",
      icon: <FaPaintBrush className="w-8 h-8" />,
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Full-Stack Solutions",
      description: "End-to-end web application development from concept to deployment with scalable architecture.",
      icon: <FaLaptop className="w-8 h-8" />,
      color: "from-orange-500 to-red-400"
    },
    {
      title: "Web Applications",
      description: "Building dynamic, feature-rich web applications with modern frameworks and best practices.",
      icon: <FaGlobe className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-400"
    },
    {
      title: "Responsive Design",
      description: "Creating mobile-first, fully responsive websites that work seamlessly across all devices.",
      icon: <FaMobileAlt className="w-8 h-8" />,
      color: "from-teal-500 to-green-400"
    }
  ];

  const skillCategories = [
    { name: "Frontend", color: "bg-blue-100 text-blue-800" },
    { name: "Backend", color: "bg-green-100 text-green-800" },
    { name: "Database", color: "bg-emerald-100 text-emerald-800" },
    { name: "Programming", color: "bg-purple-100 text-purple-800" }
  ];

  return (
    <div id="skills" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-pink-600 to-[#E90E65] bg-clip-text text-transparent">Services</span> & <span className="bg-gradient-to-r from-pink-600 to-[#E90E65] bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I specialize in full-stack web development with expertise in modern technologies and frameworks.
            Delivering high-quality solutions with attention to detail and performance.
          </p>
        </div>

       

        {/* Skills Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 md:mb-0">
              Technical <span className="text-[#E90E65]">Expertise</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {skillCategories.map((category, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${category.color}`}
                >
                  {category.name}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-center mb-2">
                    {skill.name}
                  </h3>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    skill.category === "Frontend" ? "bg-blue-50 text-blue-600" :
                    skill.category === "Backend" ? "bg-green-50 text-[#E90E65]" :
                    skill.category === "Database" ? "bg-emerald-50 text-[#d31010]" :
                    "bg-purple-50 text-pink-600"
                  }`}>
                    {skill.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

       
      </div>
    </div>
  );
};

export default Services;