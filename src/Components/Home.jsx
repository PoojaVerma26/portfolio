import React, { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import resume from "../assets/ResumePV.pdf";
import BackImage1 from "../assets/HomeBack.jpeg";

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

        {/* LEFT: NAME + SOCIAL */}
        <div className="flex flex-col">
          <div className="text-xl font-extrabold whitespace-nowrap">
            Pooja Verma
          </div>

          {/* SOCIAL ICONS BELOW NAME */}
          <div className="flex space-x-3 mt-2">
            <a
              href="https://www.linkedin.com/in/pooja-verma-9051a3232/"
              target="_blank"
              rel="noreferrer"
              className="p-2 border rounded-full hover:bg-white hover:text-black transition"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="https://github.com/sonikagithub"
              target="_blank"
              rel="noreferrer"
              className="p-2 border rounded-full hover:bg-white hover:text-black transition"
            >
              <FaGithub size={14} />
            </a>
          </div>
        </div>

        {/* RIGHT: MENU (DESKTOP) */}
        <div className="hidden md:flex space-x-6 font-semibold">
          {[ "about", "projects", "skills", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-pink-300 transition"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl font-bold"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 z-40 md:hidden">
          <div className="flex flex-col items-center space-y-5 py-6">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="text-white text-lg hover:text-pink-400"
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
          <h1 className="text-5xl font-bold mb-4">
            Hi, I’m Pooja Verma
          </h1>
          <p className="text-lg mb-6">
            Web Developer & Designer passionate about creating stunning web
            applications.
          </p>
          <a
            href={resume}
            download
            className="inline-block px-6 py-2 bg-white text-black rounded-full font-semibold hover:opacity-90 transition"
          >
            Download Resume
          </a>
        </div>
      </div>

    </div>
  );
};

export default Home;
