import React, { useState } from "react";
import Eduversity from "../assets/projectsImages/Edu.png";
import EduversityGallery1 from "../assets/projectsImages/edu1.png";
import EduversityGallery2 from "../assets/projectsImages/edu2.png";
import Missionsakti from "../assets/projectsImages/MissionSakti.png";
import MissionsaktiGallery1 from "../assets/projectsImages/missionSakti2.png";
import MissionsaktiGallery2 from "../assets/projectsImages/MissionSakti3.png";
import Upicon from "../assets/projectsImages/upicon.png";
import Upicon1 from "../assets/projectsImages/upicon1.png";
import Upicon2 from "../assets/projectsImages/upicon2.png";
import MSME from "../assets/projectsImages/msme1.png";
import MSME1 from "../assets/projectsImages/msme2.png";
import MSME2 from "../assets/projectsImages/msme3.png";
import Daylog from "../assets/projectsImages/daylog.png";
import Daylog1 from "../assets/projectsImages/daylog1.png";
import Daylog2 from "../assets/projectsImages/daylog2.png";


const projects = [
  {
    id: 1,
    title: "Eduversity Edutech",
    description:
      "Online education platform for MBA, BBA, MCA and professional courses with modern UI and responsive design.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    image:
      Eduversity,
    gallery: [
      EduversityGallery1,
      EduversityGallery2,
    ],
   
    link: "https://eduversityedutech.com/",
  },
    {
    id: 5,
    title: "UP Mission Shakti",
    description:
      "Awareness and government campaign website with user-friendly responsive interface.",
    tech: ["React", "CSS", "Responsive Design"],
    image:
      Missionsakti,
    gallery: [
      MissionsaktiGallery1,
      MissionsaktiGallery2,
    ],
    link: "https://upmissionshakti.in/",
  },
    {
    id: 4,
    title: "UPICON",
    description:
      "Corporate business website with modern sections, animations and service presentation.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image:
     Upicon,
    gallery: [
      Upicon1,
      Upicon2,
    ],
    link: "https://upicon.in/",
  },
    {
    id: 3,
    title: "MSME OSEM",
    description:
      "Government initiative website developed with professional layout and informative sections.",
    tech: ["React", "Bootstrap", "Responsive UI"],
    image:
      MSME,
    gallery: [
      MSME1,
      MSME2,
    ],
    link: "https://msmeosem.in/",
  },
  {
    id: 2,
    title: "Daylogs",
    description:
      "Business and employee management platform with clean dashboard and responsive workflow system.",
    tech: ["React", "Tailwind CSS", "MySQL"],
    image:
      Daylog,
    gallery: [
      Daylog1,
      Daylog2,
    ],
    link: "https://daylogs.in/",
  },



  {
    id: 6,
    title: "Get Tech Go",
    description:
      "Technology and digital solutions company website with modern creative design.",
    tech: ["React", "Tailwind CSS", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    ],
    link: "https://gettechgo.co.in/",
  },
];

const FeaturedProject = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section  id="projects" className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>

          <p className="text-gray-600 mt-3 text-lg">
            Recent projects crafted with creativity and modern technology.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg bg-white"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 px-5 text-center">
                
                <h3 className="text-white text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <div className="flex gap-4 mt-4">
                  
                  {/* Details Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-pink-700 hover:text-white transition"
                  >
                    Details
                  </button>

                  {/* Live Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-full bg-pink-700 text-white font-semibold hover:bg-pink-700 transition"
                  >
                    Go Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          
          <div className="bg-white max-w-4xl w-full rounded-3xl overflow-hidden relative max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-3xl font-bold text-gray-700"
            >
              ×
            </button>

            {/* Banner */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-80 object-cover"
            />

            <div className="p-8">
              
              <h2 className="text-3xl font-bold mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-gray-600 leading-7 mb-6">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">
                  Technologies Used
                </h3>

                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Project Preview
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {selectedProject.gallery.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="preview"
                      className="rounded-2xl shadow-md h-60 w-full object-cover"
                    />
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-black text-white rounded-full hover:bg-yellow-500 hover:text-black transition"
                >
                  Visit Website
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProject;