export interface NotebookPageEntry {
  image: string;
  caption?: string;
  date?: string;
  // Optional — matches ProjectInterface["id"] in config/projects.ts.
  // Not every page maps to a live project.
  projectId?: string;
}

// Some page numbers are intentionally skipped (confidential content omitted).
const PAGE_NUMBERS = [
  1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
];

export const notebookPages: NotebookPageEntry[] = PAGE_NUMBERS.map((n) => ({
  image: `/notebook/page${n}.jpg`,
}));
