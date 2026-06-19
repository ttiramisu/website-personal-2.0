import { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projectsData";
import { projectSlug } from "../utils/projectSlug";

export default function ProjectDetail() {
  const { projectName } = useParams<{ projectName: string }>();
  const location = useLocation();
  const project = projects.find(
    (p) => p.name === decodeURIComponent(projectName!)
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
  }, [location.hash]);

  if (!project)
    return (
      <section className="section-shell min-h-screen">
        <div className="section-inner flex min-h-[50vh] items-center justify-center">
          <p className="text-center text-lg text-slate-600">Project not found.</p>
        </div>
      </section>
    );

  return (
    <section id={projectSlug(project.name)} className="section-shell">
      <div className="section-inner">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-kicker"
        >
          Project detail
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="section-title max-w-3xl"
        >
          {project.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="section-copy"
        >
          {project.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {project.w_overview && (
            <div className="soft-card rounded-[1.75rem] p-7 lg:col-span-3">
              <h2 className="subtle-heading text-lg">Overview</h2>
              <p className="section-copy mt-3 max-w-none">{project.w_overview}</p>
            </div>
          )}

          {project.w_chall && (
            <div className="soft-card rounded-[1.75rem] p-7 lg:col-span-1">
              <h2 className="subtle-heading text-lg">Challenges</h2>
              <p className="section-copy mt-3 max-w-none">{project.w_chall}</p>
            </div>
          )}

          {project.w_learn && (
            <div className="soft-card rounded-[1.75rem] p-7 lg:col-span-2">
              <h2 className="subtle-heading text-lg">Learnings and outcomes</h2>
              <p className="section-copy mt-3 max-w-none">{project.w_learn}</p>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Visit project
            </a>
          )}
          <Link to={`/projects#${projectSlug(project.name)}`} className="secondary-button">
            Back to projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
