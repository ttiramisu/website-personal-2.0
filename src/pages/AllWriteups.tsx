import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { writeupRoutes } from "../data/writeupsData";

export default function AllWriteups() {
  const location = useLocation();
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  const tags = ["All", "Web", "Forensics", "RE", "Auth", "SQLi", "Archive", "Stego", "Binary", "IDA"];
  const filteredWriteups =
    filter === "All"
      ? writeupRoutes
      : writeupRoutes.filter((writeup) => writeup.tags.includes(filter));

  const sortedWriteups = filteredWriteups.slice().sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section id="all-writeups" className="section-shell">
      <div className="section-inner">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-kicker"
        >
          Writeups
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="section-title max-w-2xl"
        >
          Markdown CTF writeups
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="section-copy"
        >
          A home for polished, readable walkthroughs and challenge notes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                filter === tag
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white/70 text-slate-600 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {sortedWriteups.map((writeup) => (
            <motion.article
              key={writeup.slug}
              id={writeup.slug}
              className="soft-card flex flex-col overflow-hidden rounded-[1.75rem]"
            >
              <div className="border-b border-slate-200/70 bg-gradient-to-r from-slate-50 to-white px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {writeup.date}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                  {writeup.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-7 text-slate-600">
                  {writeup.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {writeup.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/writeups/${writeup.slug}`}
                  className="secondary-button mt-6 w-fit"
                >
                  Read writeup
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
          <Link to="/#writeups" className="secondary-button">
            Back to preview
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
