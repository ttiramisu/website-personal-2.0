import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/ProjectsSection";
import Timeline from "./components/Timeline";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

import "./App.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        const navHeight = document.querySelector("nav")?.clientHeight || 0;
        const sectionTop =
          section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: sectionTop - navHeight - 10,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
