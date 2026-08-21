import Home from "./Components/Home";
import About from "./Components/About";

import Services from "./Components/Services";
import Contact from "./Components/Contact";
import FeaturedProject from "./Components/FeaturedProject";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <FeaturedProject />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
