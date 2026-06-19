import { writeupSlug } from "../utils/writeupSlug";

export interface Writeup {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  featured?: boolean;
}

export const writeups: Writeup[] = [
  {
    title: "Web Login Bypass",
    summary: "A clean writeup about a chained auth bypass on a CTF web challenge.",
    date: "2026-05-18",
    tags: ["Web", "Auth", "SQLi"],
    featured: true,
  },
  {
    title: "Forensics: The Hidden Archive",
    summary: "Notes on extracting clues from a noisy archive and reconstructing the flag path.",
    date: "2026-04-22",
    tags: ["Forensics", "Archive", "Stego"],
    featured: true,
  },
  {
    title: "Reverse Engineering: Tiny Binary",
    summary: "A short reverse engineering walkthrough for a compact challenge binary.",
    date: "2026-03-11",
    tags: ["RE", "Binary", "IDA"],
    featured: true,
  },
];

export const writeupRoutes = writeups.map((writeup) => ({
  ...writeup,
  slug: writeupSlug(writeup.title),
}));

export function getWriteupBySlug(slug: string) {
  return writeupRoutes.find((writeup) => writeupSlug(writeup.title) === slug);
}
