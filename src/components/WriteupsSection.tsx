import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { writeupRoutes } from "../data/writeupsData";

export default function WriteupsSection() {
  const featuredWriteups = writeupRoutes.filter((writeup) => writeup.featured).slice(0, 3);

  return (
    <section id="writeups" className="section-shell">
      <div className="section-inner">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-kicker"
        >
          Writeups
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="section-title max-w-2xl"
        >
          CTF notes in markdown
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="section-copy"
        >
          A dedicated space for challenge writeups, capture notes, and clean
          markdown-based walkthroughs.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredWriteups.map((writeup, idx) => (
            <motion.article
              key={writeup.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="soft-card flex flex-col overflow-hidden rounded-[1.75rem]"
            >
              <div className="border-b border-slate-200/70 bg-gradient-to-r from-slate-50 to-white px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Writeup
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

                <Link to={`/writeups/${writeup.slug}`} className="secondary-button mt-6 w-fit">
                  Read writeup
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-8 flex justify-start"
        >
          <Link to="/writeups" className="primary-button">
            View all writeups
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
