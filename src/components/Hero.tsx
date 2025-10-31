import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-5 bg-gradient-to-b from-black via-black/90 to-black/90 select-none"
    >
      {/* Terminal-style path line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base text-yellow-400 font-mono mb-3 tracking-tight"
      >
        ttiramisu@ttiramisu:/mnt/home
      </motion.p>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold text-gray-100 mb-4 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,0,0.4)]"
      >
        Jin&nbsp;Zijie
      </motion.h1>

      {/* Terminal-style tagline */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl font-mono"
      >
        <span className="text-yellow-400">~$</span>{" "}
        <span className="inline-block">
          Web Developer | Tech Enthusiast | Lifelong Learner
        </span>
        <span className="blinking-cursor text-yellow-400"> |</span>
      </motion.p>

      {/* Accent underline */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full opacity-70 origin-left"
      ></motion.div>
    </section>
  );
}