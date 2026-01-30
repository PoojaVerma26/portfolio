import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-[#161514] overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-[#E90E65]/10 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-[#E90E65]/10 to-transparent rounded-full translate-x-1/3 translate-y-1/3"></div>

      {/* Content Section */}
      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#161514] mb-4">
            About <span className="text-[#E90E65]">Me</span>
          </h1>
          <div className="w-24 h-1 bg-[#E90E65] mx-auto rounded-full"></div>
        </div>

        {/* Card Section */}
        <div className="max-w-7xl w-full">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 border border-gray-200">
            {/* Introduction Section */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#161514] mb-6">
                Frontend Developer & UI Specialist
              </h2>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <span className="text-[#E90E65] font-semibold">Passionate • Creative • Detail-Oriented</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Professional Summary */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-[#E90E65]">
                  <h3 className="text-xl font-semibold text-[#161514] mb-3">
                    Professional Focus
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    I'm a dedicated front-end developer at Varion Advisor Analytics, 
                    specializing in creating intuitive and visually appealing user interfaces. 
                    My expertise spans modern frameworks and libraries with a strong focus 
                    on user experience and performance.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-[#161514] mb-3">
                    Technical Expertise
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#E90E65] rounded-full"></div>
                      <span>React.js & Modern JavaScript</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#E90E65] rounded-full"></div>
                      <span>Tailwind CSS & Bootstrap</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#E90E65] rounded-full"></div>
                      <span>Responsive Web Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#E90E65] rounded-full"></div>
                      <span>UI/UX Principles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#E90E65] rounded-full"></div>
                      <span>API Integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#E90E65] rounded-full"></div>
                      <span>Performance Optimization</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Projects & Philosophy */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-[#161514] mb-3">
                    Project Experience
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I've built diverse applications including food ordering platforms, 
                    interactive dashboards, and a full-featured MERN-based chat application 
                    with real-time communication and authentication systems.
                  </p>
                  <div className="inline-flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#E90E65]/10 text-[#E90E65] text-sm font-medium rounded-full">
                      Real-time Features
                    </span>
                    <span className="px-3 py-1 bg-[#E90E65]/10 text-[#E90E65] text-sm font-medium rounded-full">
                      API Integration
                    </span>
                    <span className="px-3 py-1 bg-[#E90E65]/10 text-[#E90E65] text-sm font-medium rounded-full">
                      Authentication
                    </span>
                    <span className="px-3 py-1 bg-[#E90E65]/10 text-[#E90E65] text-sm font-medium rounded-full">
                      Dashboard UI
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-[#161514] mb-3">
                    Development Philosophy
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    I believe in writing clean, maintainable code and thrive in 
                    collaborative environments. Continuous learning and staying 
                    updated with the latest web technologies are at the core of 
                    my professional growth.
                  </p>
                  <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                    <p className="text-gray-600 italic">
                      "Turning complex challenges into elegant solutions through clean code and thoughtful design."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            

            {/* Call to Action */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-700 mb-6 text-lg">
                Interested in collaborating or learning more about my work?
              </p>
              <a
                href="mailto:webmaster@example.com"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#E90E65] to-[#d00c59] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <span>Get in Touch</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;