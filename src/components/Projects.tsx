import { projects } from "../data/projectsData";
import { motion } from "framer-motion";

export default function Projects() {
  const topProjects = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="pt-6 min-h-screen flex flex-col justify-center items-center text-center px-5 bg-gradient-to-b from-black/90 via-black/90 to-black/90 select-none"
    >
      {/* Terminal-style path */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base text-yellow-400 font-mono mb-3 tracking-tight"
      >
        ttiramisu@ttiramisu:/mnt/projects
      </motion.p>

      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-8 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,0,0.4)]"
      >
        Projects
      </motion.h2>

      {/* Terminal-style tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl font-mono mb-10"
      >
        <span className="text-yellow-400">~$</span> Top most projects
        <span className="blinking-cursor text-yellow-400"> |</span>
      </motion.p>

      {/* Projects grid */}
      <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl">
        {topProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative bg-black/80 p-6 rounded-2xl border border-yellow-600/20 shadow-[0_0_15px_rgba(255,255,0,0.1)] hover:shadow-[0_0_25px_rgba(255,255,0,0.4)] transform transition-all duration-300 flex flex-col justify-between"
          >
            {/* Neon glowing tab */}
            <div className="absolute top-0 left-0 bg-yellow-600/20 text-yellow-400 font-mono px-4 py-1 rounded-br-2xl text-sm tracking-tight">
              {project.name}
            </div>

            {/* Project description */}
            <div className="mt-6 flex-1">
              <p className="text-gray-300 mb-4 font-mono">{project.desc}</p>

              {/* Tech pills */}
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

            {/* View Project button */}
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
      </div>

      {/* Accent underline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full opacity-70"
      ></motion.div>
    </section>
  );
}
