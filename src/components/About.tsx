import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const contactLinks = [
    { href: "mailto:ttiramisu10@gmail.com", icon: Mail },
    { href: "https://www.linkedin.com/in/jin-zijie", icon: Linkedin },
    { href: "https://github.com/ttiramisu", icon: Github },
    { href: "https://www.instagram.com/caketoll", icon: Instagram },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-5 bg-gradient-to-b from-black/90 via-black/90 to-black/90 select-none"
    >
      {/* Terminal-style path line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm md:text-base text-yellow-400 font-mono mb-3 tracking-tight"
      >
        ttiramisu@ttiramisu:/mnt/about
      </motion.p>

      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-6xl font-extrabold text-gray-100 mb-6 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,0,0.4)]"
      >
        About&nbsp;Me
      </motion.h2>

      {/* Terminal-style description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-md md:text-lg max-w-3xl text-gray-300 font-mono leading-relaxed"
      >
        <span className="text-yellow-400">~$</span>{" "}
        <span>
          Hi, I’m Jin Zijie — a passionate software developer with a love for
          building modern web applications and exploring new technologies. I
          enjoy solving complex problems, learning continuously, and creating
          projects that make a difference.
        </span>
        <span className="blinking-cursor text-yellow-400">|</span>
      </motion.p>

      {/* Contact / Reach Me with icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mt-10 flex flex-wrap justify-center gap-8"
      >
        {contactLinks.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transform transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            >
              <Icon size={28} />
            </a>
          );
        })}
      </motion.div>

      {/* Accent underline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full opacity-70"
      ></motion.div>
    </section>
  );
}
