import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <div id="education" className="bg-gradient-to-b from-black/90 via-black/90 to-black/90"></div>
      <Timeline />
      <Projects />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
