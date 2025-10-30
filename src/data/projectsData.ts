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
    tech: ["Electron", "HTML", "CSS", "JS"],
    link: "https://github.com/ttiramisu/hw-tracker",
  },
  {
    name: "Music Player",
    desc: "A simple music player that plays local music files",
    tech: ["Expo", "React Native"],
    link: "https://github.com/ttiramisu/music-player",
  },
  {
    name: "Website 2023",
    desc: "A multi-paged website that shows the history of the silkroad",
    tech: ["Python", "Flask", "Bootstrap"],
    link: "https://github.com/ttiramisu/website-2023",
  },
];
