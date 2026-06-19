import { useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getWriteupBySlug } from "../data/writeupsData";

const writeupModules = import.meta.glob("../content/writeups/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function getMarkdownBySlug(slug: string) {
  return (
    Object.entries(writeupModules).find(([path]) => path.endsWith(`${slug}.md`))?.[1] || ""
  );
}

export default function WriteupDetails() {
  const { writeupSlug } = useParams<{ writeupSlug: string }>();
  const location = useLocation();
  const writeup = writeupSlug ? getWriteupBySlug(writeupSlug) : undefined;
  const markdown = writeupSlug ? getMarkdownBySlug(writeupSlug) : "";

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  if (!writeup || !markdown) {
    return (
      <section className="section-shell min-h-screen">
        <div className="section-inner flex min-h-[50vh] items-center justify-center">
          <p className="text-center text-lg text-slate-600">Writeup not found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-shell">
      <div className="section-inner">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-kicker"
        >
          Markdown writeup
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="section-title max-w-3xl"
        >
          {writeup.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="section-copy"
        >
          {writeup.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {writeup.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="soft-card mt-12 rounded-[2rem] p-7 md:p-10"
        >
          <div className="markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link to="/writeups" className="secondary-button">
            Back to writeups
          </Link>
          <Link to="/#writeups" className="primary-button">
            Featured preview
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
