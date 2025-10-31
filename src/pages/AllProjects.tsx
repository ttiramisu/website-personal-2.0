import { projects } from "../data/projectsData";
import { motion } from "framer-motion";

export default function AllProjects() {
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

      {/* Terminal-style tagline */}
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

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative bg-black/70 p-6 rounded-2xl border border-yellow-600/30 shadow-[0_0_15px_rgba(255,255,0,0.1)] hover:shadow-[0_0_25px_rgba(255,255,0,0.4)] transform transition-all duration-300 flex flex-col justify-between"
          >
            {/* Title */}
            <div className="absolute top-0 left-0 bg-yellow-600/20 text-yellow-400 font-mono px-4 py-1 rounded-br-2xl text-sm tracking-tight">
              {project.name}
            </div>

            {/* Description */}
            <div className="mt-6 flex-1">
              <p className="text-gray-300 mb-4 font-mono">{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2">
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

            {/* View Project Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-4 py-2 border border-yellow-600 text-yellow-400 font-mono rounded-xl hover:bg-yellow-400 hover:text-black transition-colors"
            >
              View Project
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
            // Go back to home page
            window.location.href = "/#projects";

            // After navigating, wait for the DOM to render, then scroll smoothly
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
