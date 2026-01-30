import React from "react";
import Navbar from "./Components/Navbar"; // Ensure the path is correct
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Projects";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
   
      <Home />
      <About />

      <Project />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
