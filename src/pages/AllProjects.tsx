import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projectsData";
import { projectSlug } from "../utils/projectSlug";

import "../App.css";


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
  }, [location.hash]);

  // Apply filter
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  const filters = ["All", "Python", "Applications", "Websites", "Publicity"];

  return (
    <section id="all-projects" className="section-shell">
      <div className="section-inner">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-kicker"
        >
          All projects
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="section-title max-w-2xl"
        >
          A complete view of my work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="section-copy"
        >
          Browse everything from web projects to design and publicity work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                filter === f
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white/70 text-slate-600 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.name}
              id={projectSlug(project.name)}
              className="soft-card flex flex-col overflow-hidden rounded-[1.75rem]"
            >
              <div className="border-b border-slate-200/70 bg-gradient-to-r from-slate-50 to-white px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Project
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                  {project.name}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-7 text-slate-600">
                  {project.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/projects/${encodeURIComponent(project.name)}#${projectSlug(project.name)}`}
                  className="secondary-button mt-6 w-fit"
                >
                  View project
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-10"
        >
          <Link to="/#projects" className="secondary-button">
            Back to featured projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
