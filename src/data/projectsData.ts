export interface Project {
  name: string;
  desc: string;
  tech: string[];
  link: string;
  type?: string;
  w_overview?: string;
  w_chall?: string;
  w_learn?: string;
}

export const projects: Project[] = [
  {
    name: "sharky",
    desc: "A dynamic content-driven web project with customisable content",
    tech: ["Python", "YAML"],
    link: "https://github.com/ttiramisu/sharky",
    type: "Python",
    w_overview:
      "Sharky is a web project designed to allow dynamic content updates through a YAML configuration system, enabling users to customize content without touching code. It is a dynamic content-driven web project featuring customizable hero sections, two-column layouts, image and text rows, carousels, and more.",
    w_chall:
      "The main challenge was building a robust parser and renderer to translate different configs into live web content, while ensuring scalability and performance and focusing on user experience. Through various trial and error tests with json, MarkDown and YAML, I figured out the best methods to achieve the above.",
    w_learn:
      "This project allowed me to learn how to integrate configuration-driven content management, structure dynamic web pages, and handle parsing errors gracefully. It also allowed me to gain insights on what are the different ways that machine can parse data.",
  },
  {
    name: "67 interpreter",
    desc: "An esoteric programming language that is based on 6s and 7s",
    tech: ["Python"],
    link: "https://github.com/ttiramisu/67-interpreter",
    type: "Python",
    w_overview:
      "67 Interpreter executes programs written in an esoteric language composed solely of 6s and 7s, providing a quirky yet educational challenge in parsing and execution.",
    w_chall:
      "Implementing correct parsing and evaluation rules for a language with such limited syntax was tricky, especially handling edge cases without errors. I also had to figure out how to reverse my code such that users can input content to output when the .67 file is ran by the Python interpreter.",
    w_learn:
      "This project strengthened my understanding of interpreters, recursive parsing, and the design of esoteric languages.",
  },
  {
    name: "Homework Tracker",
    desc: "A simple desktop homework tracker application to track deadlines",
    tech: ["Electron", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/ttiramisu/hw-tracker",
    type: "Applications",
    w_overview:
      "Homework Tracker is a desktop app to manage homework tasks, deadlines, and reminders in a simple, user-friendly interface.",
    w_chall:
      "The biggest challenge was synchronizing local storage with a responsive and reactive UI and ensuring Linux and Windows compatibility with Electron.",
    w_learn:
      "I learned to build desktop apps with Electron, manage state efficiently, and design intuitive user interfaces.",
  },
  {
    name: "Music Player",
    desc: "A simple Android music player that plays local music files",
    tech: ["Expo", "React Native", "TypeScript"],
    link: "https://github.com/ttiramisu/music-player",
    type: "Applications",
    w_overview:
      "This Android app allows users to browse and play local music files with basic playback controls, built using React Native and Expo.",
    w_chall:
      "The implementing of audio playback and handling multiple selections of MP3 files without app crashes and errors was a huge challenge.",
    w_learn:
      "I gained experience with Expo's audio libraries, file system access, and mobile UI/UX considerations.",
  },
  {
    name: "AYCF Website 2025",
    desc: "Website for Asian Youth Chinese Forum 2025",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://github.com/Summerflake/AYCF-WEBSITE-2025",
    type: "Websites",
    w_overview:
      "A multi-page event website showcasing schedules, speakers, and activities for AYCF 2025, designed to be responsive and interactive.",
    w_chall:
      "Coordinating multi-page navigation that are the same throughout, ensuring responsive layouts, and integrating dynamic content without heavy frameworks was challenging.",
    w_learn:
      "I enhanced my skills in responsive design, Bootstrap components, and structured event information clearly for users.",
  },
  {
    name: "Winterflake",
    desc: "Website for the Winterflake CTF team",
    tech: ["React", "Vite", "TypeScript"],
    link: "https://github.com/ttiramisu/winterflake",
    type: "Websites",
    w_overview:
      "Winterflake is a team website for a CTF group, featuring different sections and a leaderboard using React and TypeScript with a small flag hunting experience to allow users to have a taste of a CTF challenge",
    w_chall:
      "Creating a modular, maintainable frontend while keeping fast load times and smooth animations was difficult. Dead CTFTime APIs also didnt help as I had to find work arounds to get the latest data while keeping a set of local data as backup.",
    w_learn:
      "I improved my React component design, state management, and integration with modern build tools like Vite.",
  },
  {
    name: "Silkroad 2023",
    desc: "A multi-paged website that shows the history of the silkroad",
    tech: ["Python", "Flask", "Bootstrap"],
    link: "https://github.com/ttiramisu/website-2023",
    type: "Websites",
    w_overview:
      "Silkroad 2023 is an educational website showcasing historical information with interactive pages and visuals, powered by Flask.",
    w_chall:
      "Designing clear navigation between multiple pages and dynamically loading content with Flask templates was the main challenge. Many pages also have CSS and JavaScript all over the place due to poor editing of the codes. This lead to the inability to read some of the sections",
    w_learn:
      "I learned how to combine backend Flask routes with frontend Bootstrap styling and dynamic content rendering.",
  },
  {
    name: "Fire Chat",
    desc: "A sketchy real-time chatting application (pls do not hack)",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    link: "https://github.com/ttiramisu/online-chat",
    type: "Websites",
    w_overview:
      "Fire Chat is a real-time chat web app built with Firebase, allowing multiple users to send and receive messages instantly.",
    w_chall:
      "Managing real-time updates, authentication, and secure data handling without race conditions was difficult. Since I didn't know how to inplement environmental variables at that period of time, the open API keys were susceptible to various datas that are not supposed to be there",
    w_learn:
      "I gained experience with Firebase real-time database, authentication, and building responsive chat UIs.",
  },
  {
    name: "CNY 2025 Publicity",
    desc: "Posters for HCI CNY 2025 publicity",
    tech: ["Canva"],
    link: "/cny_compressed.pdf",
    type: "Publicity",
    w_overview:
      "Created visually engaging posters for Chinese New Year 2025 to attract student participation at Hwa Chong Institution.",
    w_chall:
      "Balancing festive visuals with clear communication and consistency across multiple poster designs was challenging.",
    w_learn:
      "I refined my visual design skills, learned layout consistency, and practiced using Canva professionally.",
  },
  {
    name: "CLEP Council Logo",
    desc: "New HCI CLEP Council Logo",
    tech: ["Canva", "Concepts"],
    link: "/clepc_compressed.pdf",
    type: "Publicity",
    w_overview:
      "Designed a modern logo for HCI CLEP Council that represents creativity, teamwork, and cultural identity.",
    w_chall:
      "Creating a simple yet memorable design that works across multiple platforms required several iterations.",
    w_learn:
      "I strengthened my logo design skills and learned how to translate abstract concepts into visual elements.",
  },
  {
    name: "Book Publicity",
    desc: "Publicity for story writing competition",
    tech: ["Canva"],
    link: "/HGWX_compressed.pdf",
    type: "Publicity",
    w_overview:
      "Produced publicity materials for a student story writing competition, highlighting key details and encouraging participation.",
    w_chall:
      "Making the materials visually attractive while keeping all essential information readable was tricky.",
    w_learn:
      "I improved typography choices, layout design, and communication clarity for event publicity, while having a outreach of around 200+ respondents for the competition.",
  },
];
