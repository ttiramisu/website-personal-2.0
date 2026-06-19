import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const contactLinks = [
    { href: "mailto:ttiramisu10@gmail.com", icon: Mail, label: "Email" },
    {
      href: "https://www.linkedin.com/in/jin-zijie",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "https://github.com/ttiramisu", icon: Github, label: "GitHub" },
    {
      href: "https://www.instagram.com/caketoll",
      icon: Instagram,
      label: "Instagram",
    },
  ];

  return (
    <section
      id="about"
      className="section-shell"
    >
      <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="soft-panel rounded-[2rem] p-8 md:p-10"
        >
          <span className="section-kicker">About me</span>
          <h2 className="section-title">Thoughtful design, practical execution</h2>
          <p className="section-copy">
            I enjoy building polished web experiences that feel calm, readable,
            and deliberate. My work sits at the intersection of frontend
            development, visual design, and clear communication.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Responsive layouts",
              "Modern frontend tools",
              "Friendly micro-interactions",
              "Detail-oriented execution",
            ].map((item) => (
              <div key={item} className="chip justify-start">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="soft-card rounded-[2rem] p-8"
          >
            <h3 className="subtle-heading">What I care about</h3>
            <p className="section-copy mt-3">
              Turning complexity into something visually calm and easy to use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="soft-card rounded-[2rem] p-8"
          >
            <h3 className="subtle-heading">Reach me</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={item.label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-950"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
