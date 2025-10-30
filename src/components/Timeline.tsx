import { timelineData } from "../data/timelineData";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <section id="education"
      className="min-h-screen flex flex-col justify-center items-center text-left px-5 bg-gradient-to-b from-black/90 via-black/90 to-black/90 select-none"
    >
      {/* Terminal-style path */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base text-yellow-400 font-mono mb-3 tracking-tight"
      >
        ttiramisu@ttiramisu:/mnt/education
      </motion.p>

      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-8 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,0,0.4)]"
      >
        Education
      </motion.h2>

      {/* Terminal-style tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl font-mono mb-10"
      >
        <span className="text-yellow-400">~$</span> A chronological journey
        through my education.
        <span className="blinking-cursor text-yellow-400"> |</span>
      </motion.p>

      {/* Timeline */}
      <div className="relative w-full max-w-3xl flex flex-col space-y-10 pl-12">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 h-full border-l border-yellow-600/40"></div>

        {timelineData
          .slice()
          .reverse() // latest at the top
          .map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start relative"
            >
              {/* Marker */}
              <div className="absolute -left-6 w-4 h-4 bg-yellow-600 rounded-full border-2 border-yellow-400 mt-1"></div>

              {/* Content */}
              <div className="flex flex-col bg-black/80 p-6 rounded-2xl border border-yellow-600/20 shadow-[0_0_15px_rgba(255,255,0,0.1)] hover:shadow-[0_0_25px_rgba(255,255,0,0.3)] transition-all duration-300 w-full">
                <p className="text-yellow-400 font-mono text-sm">{item.year}</p>
                <h3 className="text-lg md:text-xl font-bold text-gray-100 mt-1">
                  {item.title}
                </h3>
                <p className="text-yellow-300 font-mono text-sm">{item.duration}</p>
                <p className="text-gray-300 font-mono mt-2">{item.school}</p>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Accent underline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-16 w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full opacity-70"
      ></motion.div>
    </section>
  );
}