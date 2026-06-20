import { projects } from "../data/projectsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectSlug } from "../utils/projectSlug";

export default function Projects() {
  const topProjects = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="section-shell"
    >
      <div className="section-inner">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-kicker"
        >
          Selected work
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="section-title max-w-2xl"
        >
          A few featured projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="section-copy"
        >
          A small selection of work that shows how I approach frontend
          structure, visual polish, and practical functionality.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {topProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
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
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-8 flex justify-start"
        >
          <Link to="/projects#all-projects" className="primary-button">
            View all projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
