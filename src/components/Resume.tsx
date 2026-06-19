import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section
      id="resume"
      className="section-shell"
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="soft-card rounded-[2rem] p-8 md:p-12"
        >
          <span className="section-kicker">Resume</span>
          <h2 className="section-title max-w-2xl">A quick look at my background</h2>
          <p className="section-copy">
            You can download my resume below for a concise view of my skills,
            experience, and selected work.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/resume.pdf" download className="primary-button">
              Download resume
            </a>
            <a href="#projects" className="secondary-button">
              See projects first
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
