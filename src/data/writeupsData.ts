import { writeupSlug } from "../utils/writeupSlug";

export interface Writeup {
  slug?: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  featured?: boolean;
  challengeDetails?: {
    competition: string;
    challenge: string;
    difficulty: string;
    author: string;
    description?: string;
    category?: string;
  };
}

export const writeups: Writeup[] = [
  {
    slug: "sctf2026-sussy2-writeup",
    title: "SCTF2026: sussy2 Writeup",
    summary: "Writeup for the sussy2 challenge from SCTF2026",
    date: "2026-06-19",
    tags: ["Forens"],
    featured: true,
    challengeDetails: {
      competition: "SCTF2026 Qualis",
      challenge: "sussy2",
      difficulty: "Easy",
      author: "abyts",
      description: "What could this be?",
      category: "Forens",
    },
  },
  {
    slug: "sctf2026-baka-tsuushin-writeup",
    title: "SCTF2026: バカ通信 Writeup",
    summary: "Writeup for the バカ通信 challenge from SCTF2026",
    date: "2026-06-19",
    tags: ["Forens"],
    featured: true,
    challengeDetails: {
      competition: "SCTF2026 Qualis",
      challenge: "バカ通信",
      difficulty: "Hard",
      author: "Techno cat",
      description: "Suspect left his device and we managed to get a disk image before he returned. We believe this is just one of many devices he owns and a preliminary investigation has determined he likes to use Github, but this disk does not have what we really need. Smart enough not to store Github credentials as a plain txt file, but it has to be somewhere on this device...",
      category: "Forens",
    },
  },
    {
    slug: "sctf2026-glup-writeup",
    title: "SCTF2026: glup Writeup",
    summary: "Writeup for the glup challenge from SCTF2026",
    date: "2026-06-25",
    tags: ["Forens"],
    featured: true,
    challengeDetails: {
      competition: "SCTF2026 Finals",
      challenge: "glup",
      difficulty: "Hard",
      author: "yj",
      description: "sorry i ate all the files i was hungry",
      category: "Forens",
    },
  },
];

export const writeupRoutes = writeups.map((writeup) => ({
  ...writeup,
  slug: writeup.slug ?? writeupSlug(writeup.title),
}));

export function getWriteupBySlug(slug: string) {
  return writeupRoutes.find((writeup) => writeup.slug === slug);
}
