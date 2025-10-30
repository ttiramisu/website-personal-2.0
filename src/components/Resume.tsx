import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col justify-center items-center text-center px-5 bg-gradient-to-b from-black/90 via-black/90 to-black/90 select-none"
    >
      {/* Terminal-style path */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base text-yellow-400 font-mono mb-3 tracking-tight"
      >
        ttiramisu@ttiramisu:/mnt/resume
      </motion.p>

      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-extrabold text-gray-100 mb-8 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,0,0.4)]"
      >
        Resume
      </motion.h2>

      {/* Terminal-style tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl font-mono mb-8"
      >
        <span className="text-yellow-400">~$</span> You can download my resume
        below.
        <span className="blinking-cursor text-yellow-400"> |</span>
      </motion.p>

      {/* Download Button */}
      <motion.a
        href="/resume.pdf"
        download
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 inline-block bg-black/80 border border-yellow-600/40 text-yellow-400 font-mono px-6 py-3 rounded-xl shadow-[0_0_10px_rgba(255,255,0,0.2)] hover:shadow-[0_0_20px_rgba(255,255,0,0.4)] hover:-translate-y-1 hover:scale-105 transition-all duration-300"
      >
        ~$ download resume
      </motion.a>

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
