import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaFigma, FaHackerrank } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import resume from "../assets/PoojaVerma.pdf";
import BackImage1 from "../assets/bg.jpg";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div id="home" className="relative h-screen text-white overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BackImage1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#E90E65] to-[#161514] opacity-75"></div>
      </div>

      {/* TOP BAR */}
      <div className="absolute top-0 left-0 w-full z-30 px-6 py-4 flex justify-between items-center">
        {/* LEFT: NAME */}
        <div className="flex flex-col">
          <div className="text-xl font-extrabold whitespace-nowrap">
            Pooja Verma
          </div>
        </div>

        {/* RIGHT: MENU (DESKTOP) */}
        <div className="hidden md:flex space-x-6 font-semibold">
          {[ "about", "projects", "skills", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-white transition text-sm"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl font-bold focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-95 z-40 md:hidden">
          <div className="flex flex-col items-center space-y-5 py-6">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="text-white text-sm hover:text-pink-400 transition"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* HERO CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Pooja Verma</h1>
          <p className="text-lg mb-6">
            Web Developer & Designer passionate about creating stunning web
            applications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
            <a
              href={resume}
              download
              className="inline-block px-6 py-2 bg-white text-black rounded-full font-semibold hover:opacity-90 transition"
            >
              Download Resume
            </a>

            <a
              href="https://drive.google.com/drive/folders/1UGJsObv00myQY7qbxbZ_Tn6hL6_8V_GM?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Work Life Gallery
            </a>
          </div>

          {/* SOCIAL ICONS */}
        <div className="flex space-x-3 justify-center md:justify-start">
  <a
    href="https://www.linkedin.com/in/pooja-verma-9051a3232/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 border rounded-full hover:bg-white hover:text-black transition duration-300"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn size={19} />
  </a>

  <a
    href="https://github.com/sonikagithub"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 border rounded-full hover:bg-white hover:text-black transition duration-300"
    aria-label="GitHub"
  >
    <FaGithub size={19} />
  </a>

  <a
    href="https://linktr.ee/poojaverma"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 border rounded-full hover:bg-white hover:text-black transition duration-300"
    aria-label="Linktree"
  >
    <SiLinktree size={19} />
  </a>

  <a
    href="https://www.figma.com/design/QdDHzJuf4fmgRbDwnk432x/Eduversity?node-id=0-1&p=f&t=8BjqnbBnxg9ecc21-0"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 border rounded-full hover:bg-white hover:text-black transition duration-300"
    aria-label="Figma"
  >
    <FaFigma size={19} />
  </a>

  <a
    href="https://www.hackerrank.com/profile/poojakverma1030"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 border rounded-full hover:bg-white hover:text-black transition duration-300"
    aria-label="HackerRank"
  >
    <FaHackerrank size={19} />
  </a>
</div>
        </div>
      </div>
    </div>
  );
};

export default Home;