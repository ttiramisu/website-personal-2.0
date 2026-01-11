import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projectsData";

export default function ProjectDetail() {
  const { projectName } = useParams<{ projectName: string }>();
  const project = projects.find(
    (p) => p.name === decodeURIComponent(projectName!)
  );

  if (!project)
    return (
      <section className="pt-30 min-h-screen flex justify-center items-center bg-black/90 text-gray-100">
        <p className="text-center text-xl font-mono">Project not found.</p>
      </section>
    );

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

  return (
    <section
      id={project.name.replace(/\s/g, "-")}
      className="pt-30 flex flex-col justify-center items-center text-center px-5 bg-gradient-to-b from-black/90 via-black/90 to-black/90 select-none"
    >
      {/* Terminal-style path */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base text-yellow-400 font-mono mb-3 tracking-tight"
      >
        ttiramisu@ttiramisu:/mnt/personal/projects/all-projects/{project.name}
      </motion.p>

      {/* Project heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-4 drop-shadow-[0_0_10px_rgba(255,255,0,0.4)] tracking-tight"
      >
        {project.name}
      </motion.h1>

      {/* Project description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl text-gray-300 max-w-3xl font-mono mb-6"
      >
        {project.desc}
      </motion.p>

      {/* Tech Pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-yellow-600/20 text-yellow-300 text-xs font-mono rounded-full backdrop-blur-sm"
          >
            {t}
          </span>
        ))}
      </motion.div>

      {/* Writeups */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-left space-y-8"
      >
        {project.w_overview && (
          <div>
            <h2 className="text-2xl text-yellow-400 font-bold mb-2">
              Overview
            </h2>
            <p className="text-gray-300 font-mono">{project.w_overview}</p>
          </div>
        )}

        {project.w_chall && (
          <div>
            <h2 className="text-2xl text-yellow-400 font-bold mb-2">
              Challenges
            </h2>
            <p className="text-gray-300 font-mono">{project.w_chall}</p>
          </div>
        )}

        {project.w_learn && (
          <div>
            <h2 className="text-2xl text-yellow-400 font-bold mb-2">
              Learnings & Outcomes
            </h2>
            <p className="text-gray-300 font-mono">{project.w_learn}</p>
          </div>
        )}
      </motion.div>

      {/* Visit project button */}
      {project.link && (
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-8 inline-block px-6 py-3 border border-yellow-600 text-yellow-400 font-mono rounded-xl hover:bg-yellow-400 hover:text-black transition-colors shadow-[0_0_15px_rgba(255,255,0,0.2)]"
        >
          Visit Project
        </motion.a>
      )}

      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-6"
      >
        <Link
          to={`/projects#${project.name.replace(/\s/g, "")}`}
          className="text-yellow-400 font-mono hover:underline"
        >
          ← Back to Projects
        </Link>
      </motion.div>

      {/* Accent underline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="mb-10 mt-10 w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full opacity-70"
      ></motion.div>
    </section>
  );
}
