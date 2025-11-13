import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projectsData";

export default function AllProjects() {
  const location = useLocation();
  const [filter, setFilter] = useState<string>("All");

  // Scroll to anchor if present
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Apply filter
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  const filters = ["All", "Python", "Application", "Web", "Publicity"];

  return (
    <section
      id="all-projects"
      className="pt-6 min-h-screen flex flex-col justify-center items-center text-center px-5 bg-gradient-to-b from-black/90 via-black/90 to-black/90 select-none"
    >
      {/* Terminal-style path */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base text-yellow-400 font-mono mb-3 tracking-tight"
      >
        ttiramisu@ttiramisu:/mnt/projects/all-projects
      </motion.p>

      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-8 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,0,0.4)]"
      >
        All Projects
      </motion.h2>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl font-mono mb-10"
      >
        <span className="text-yellow-400">~$</span> A comprehensive list of my
        projects
        <span className="blinking-cursor text-yellow-400"> |</span>
      </motion.p>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center gap-3 mb-8 flex-wrap"
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`cursor-pointer px-4 py-2 rounded-full border transition-colors duration-200 ${
              filter === f
                ? "bg-yellow-400 text-black border-yellow-400"
                : "bg-transparent text-yellow-400 border-yellow-600 hover:bg-yellow-400 hover:text-black"
            }`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.name}
            className="bg-black/80 pb-6 rounded-2xl border border-yellow-600/20 shadow-[0_0_15px_rgba(255,255,0,0.1)] hover:shadow-[0_0_25px_rgba(255,255,0,0.4)] transform transition-all duration-300 flex flex-col justify-between"
          >
            {/* Neon glowing tab */}
            <div className="bg-yellow-600/30 text-yellow-400 font-mono px-4 py-1 rounded-tl-2xl rounded-tr-2xl text-md tracking-tight">
              {project.name}
            </div>

            {/* Description */}
            <div className="mx-6 mt-6 flex-1">
              <p className="text-gray-300 mb-4 font-mono">{project.desc}</p>

              {/* Tech pills */}
              <div className="mx-6 flex flex-wrap justify-center gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-yellow-600/20 text-yellow-300 text-xs font-mono rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* View Project button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 mt-6 inline-block px-4 py-2 border border-yellow-600 text-yellow-400 font-mono rounded-xl hover:bg-yellow-400 hover:text-black transition-colors"
            >
              View Project &rarr;
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
        className="mt-8"
      >
        <a
          onClick={() => {
            window.location.href = "/#projects";
            setTimeout(() => {
              const section = document.querySelector("#projects");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }, 300);
          }}
          className="px-6 py-3 border border-yellow-600 text-yellow-400 font-mono rounded-xl hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer"
        >
          ← Back to Projects
        </a>
      </motion.div>

      {/* Accent underline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-16 mb-12 w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full opacity-70"
      ></motion.div>
    </section>
  );
}
