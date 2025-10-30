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
      <Timeline />
      <Projects />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
