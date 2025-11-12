export interface Project {
  name: string;
  desc: string;
  tech: string[];
  link: string;
}

export const projects: Project[] = [
  {
    name: "sharky",
    desc: "A dynamic content-driven web project with customisable content",
    tech: ["Python", "YAML"],
    link: "https://github.com/ttiramisu/sharky",
  },
  {
    name: "67 interpreter",
    desc: "An esoteric programming language that is based on 6s and 7s",
    tech: ["Python"],
    link: "https://github.com/ttiramisu/67-interpreter",
  },
  {
    name: "Homework Tracker",
    desc: "A simple homework tracker to track homeworks and deadlines",
    tech: ["Electron", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/ttiramisu/hw-tracker",
  },
  {
    name: "Music Player",
    desc: "A simple music player that plays local music files",
    tech: ["Expo", "React Native", "TypeScript"],
    link: "https://github.com/ttiramisu/music-player",
  },
  {
    name: "AYCF Website 2025",
    desc: "Website for Asian Youth Chinese Forum 2025",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://github.com/Summerflake/AYCF-WEBSITE-2025",
  },
  {
    name: "Winterflake",
    desc: "Website for the Winterflake CTF team",
    tech: ["React", "Vite", "TypeScript"],
    link: "https://github.com/ttiramisu/winterflake",
  },
  {
    name: "Website 2023",
    desc: "A multi-paged website that shows the history of the silkroad",
    tech: ["Python", "Flask", "Bootstrap"],
    link: "https://github.com/ttiramisu/website-2023",
  },
  {
    name: "Fire Chat",
    desc: "A sketchy real-time chatting application (pls do not hack)",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    link: "https://github.com/ttiramisu/online-chat",
  },
  {
    name: "CNY 2025 Publicity",
    desc: "Posters for HCI CNY 2025 publicity",
    tech: ["Canva"],
    link: "/cny_compressed.pdf",
  },
  {
    name: "CLEP Council Logo",
    desc: "New HCI CLEP Council Logo",
    tech: ["Canva", "Concepts"],
    link: "/clepc_compressed.pdf",
  },
  {
    name: "Book Publicity",
    desc: "Publicity for story writing competition",
    tech: ["Canva"],
    link: "/HGWX_compressed.pdf",
  },
];
