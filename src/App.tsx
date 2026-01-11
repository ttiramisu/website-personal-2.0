
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/ProjectsSection";
import Timeline from "./components/Timeline";
import Resume from "./components/Resume";

import "./App.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "") || "home";
    const el = document.getElementById(id);
    if (!el) return;

    // Delay ensures DOM is ready
    requestAnimationFrame(() => {
      const navHeight =
        document.querySelector("nav")?.clientHeight || 0;

      const y =
        el.getBoundingClientRect().top +
        window.scrollY -
        navHeight;

      window.scrollTo({ top: y, behavior: "smooth" });
    });
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Resume />
    </>
  );
}

export default App;
