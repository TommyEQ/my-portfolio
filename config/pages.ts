import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Tomas Quesada's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Tomas Quesada's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Tomas Quesada's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Tomas Quesada.",
    },
  },
  contributions: {
    title: "About Me",
    description: "A brief introduction to my background and interests.",
    metadata: {
      title: "About Me",
      description:
        "Tomas Quesada's background, interests, and personal journey.",
    },
  },
  resume: {
    title: "Resume",
    description: "Tomas Quesada's resume.",
    metadata: {
      title: "Resume",
      description: "Tomas Quesada's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Tomas Quesada's professional journey and experience timeline.",
    },
  },
};
