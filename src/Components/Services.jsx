

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
  FaMobileAlt,
} from "react-icons/fa";

const skills = [
  { icon: <FaReact />, name: "React JS" },
  { icon: <FaNodeJs />, name: "Node JS" },
  { icon: <FaDatabase />, name: "MySQL" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaLaptop />, name: "Responsive UI" },
  { icon: <FaGlobe />, name: "Web Design" },
  { icon: <FaCode />, name: "Frontend Dev" },
  { icon: <FaServer />, name: "Backend Dev" },
  { icon: <FaPaintBrush />, name: "Graphic Design" },
  { icon: <FaMobileAlt />, name: "Mobile Friendly" },
];

const Services = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20"
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-[#E90E65]/10 blur-3xl"></div>

      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#E90E65]/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-4 shadow-2xl">
              
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
                alt="Skills"
                className="h-[450px] w-full rounded-[1.5rem] object-cover grayscale"
              />

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 rounded-2xl bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md">
                <h4 className="text-xl font-bold text-[#161514]">
                  14+ Skills
                </h4>

                <p className="text-sm text-gray-600">
                  Modern Web Technologies
                </p>
              </div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute -bottom-8 right-10 h-32 w-32 rounded-full bg-[#E90E65]/10 blur-2xl"></div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-7">
            
            {/* Heading */}
            <div className="space-y-4">
              <span className="inline-flex rounded-full bg-[#E90E65]/10 px-4 py-1.5 text-sm font-medium text-[#E90E65]">
                My Skills
              </span>

              <h2 className="text-3xl font-bold leading-snug text-[#161514] lg:text-4xl">
                Technologies & Tools I Work With
              </h2>

              <p className="max-w-xl text-base leading-relaxed text-gray-600">
                I build modern, responsive, and high-performance web
                applications with clean UI and smooth user experience.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="text-2xl text-[#E90E65]">
                    {skill.icon}
                  </span>

                  <span className="text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;