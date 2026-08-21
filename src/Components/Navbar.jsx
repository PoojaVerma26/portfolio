import  { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#home">Pooja Verma</a>
        </div>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex space-x-6 flex-1 justify-center font-semibold">
          {/* <a href="#home" className="hover:text-gray-400">
            Home
          </a> */}

          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-pink-500 text-white bg-opacity-80 z-50 md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            {[ "about", "projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)} // Close the menu after clicking a link
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
