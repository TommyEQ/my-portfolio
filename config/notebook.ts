export interface NotebookPageEntry {
  image: string;
  caption?: string;
  date?: string;
  // Optional — matches ProjectInterface["id"] in config/projects.ts.
  // Not every page maps to a live project.
  projectId?: string;
}

export interface NotebookEntry {
  id: string;
  title: string;
  coverTitle: string;
  coverSubtitle?: string;
  pages: NotebookPageEntry[];
}

// Some page numbers are intentionally skipped (confidential content omitted).
const BOOK_1_PAGE_NUMBERS = [
  1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
];

export const notebooks: NotebookEntry[] = [
  {
    id: "book-1",
    title: "Notebook 1",
    coverTitle: "Engineering Notebook",
    coverSubtitle: "№ 1",
    pages: BOOK_1_PAGE_NUMBERS.map((n) => ({
      image: `/notebook/book-1/page${n}.webp`,
    })),
  },
  // Add a second entry here once the next notebook is scanned, e.g.:
  // {
  //   id: "book-2",
  //   title: "Notebook 2",
  //   coverTitle: "Engineering Notebook",
  //   coverSubtitle: "№ 2",
  //   pages: [
  //     { image: "/notebook/book-2/page1.jpg" },
  //   ],
  // },
];
