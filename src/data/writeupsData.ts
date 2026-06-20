import { writeupSlug } from "../utils/writeupSlug";

export interface Writeup {
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
  // {
  //   title: "SCTF2026: sussy2 Writeup",
  //   summary: "Writeup for the sussy2 challenge from SCTF2026",
  //   date: "2026-05-19",
  //   tags: ["Forens"],
  //   featured: true,
  //   challengeDetails: {
  //     competition: "SCTF2026",
  //     challenge: "sussy2",
  //     difficulty: "Easy",
  //     author: "abyts",
  //     description: "What could this be?",
  //     category: "Forensics",
  //   },
  // },
];

export const writeupRoutes = writeups.map((writeup) => ({
  ...writeup,
  slug: writeupSlug(writeup.title),
}));

export function getWriteupBySlug(slug: string) {
  return writeupRoutes.find((writeup) => writeupSlug(writeup.title) === slug);
}
