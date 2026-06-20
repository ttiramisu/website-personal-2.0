import { timelineData } from "../data/timelineData";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <section id="education" className="section-shell">
      <div className="section-inner">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-kicker"
        >
          Education
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="section-title max-w-2xl"
        >
          A steady path of growth
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="section-copy"
        >
          My education has shaped how I think about structure, patience, and
          improving over time.
        </motion.p>

        <div className="relative mt-12 space-y-6 pl-6 md:pl-10">
          <div className="absolute left-4 top-0 h-full w-px bg-slate-200 md:left-8" />

          {timelineData
            .slice()
            .reverse()
            .map((item, idx) => (
              <motion.div
                key={item.year + item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative grid gap-4 md:grid-cols-[160px_1fr] md:items-start"
              >
                <div className="relative">
                  <div className="absolute -left-[1.9rem] top-3 h-3 w-3 rounded-full bg-slate-900 ring-8 ring-slate-100" />
                  <span className="chip">{item.year}</span>
                </div>

                <div className="soft-card rounded-[1.75rem] p-6 md:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="subtle-heading text-lg">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-500">
                        {item.school}
                      </p>
                    </div>
                    <span className="chip">{item.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}