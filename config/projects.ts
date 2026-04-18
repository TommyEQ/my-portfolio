import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [

  // =========================
  // 🏆 MOST IMPRESSIVE FIRST
  // =========================

  {
    id: "robox",
    companyName: "Autonomous RoboMaster Competition Robot",
    type: "Professional",
    category: ["Robotics", "Autonomous Systems", "Computer Vision", "3D Modeling"],
    shortDescription:
      "Served as mechanical lead for a RoboMaster-style autonomous competition robot, responsible for the design, fabrication, and integration of the full mechanical system. Led development of a modular robotic platform optimized for stability, maneuverability, and sensor integration.",

    startDate: new Date("2024-08-01"),
    endDate: new Date("2025-05-01"),

    companyLogoImg: "/projects/robox/placeholder.jpg",

    pagesInfoArr: [
      {
        imgArr: ["/projects/robox/placeholder.jpg"],
        title: "Landing Page",
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Served as mechanical lead for a RoboMaster-style autonomous competition robot, responsible for the design, fabrication, and integration of the full mechanical system. Led development of a modular robotic platform optimized for stability, maneuverability, and sensor integration, while coordinating closely with electrical and software sub-teams.",
      ],
      bullets: [
        "Led mechanical design and fabrication of the robot chassis, optimizing for rigidity, weight distribution, and modular subsystem integration.",
        "Coordinated cross-functional integration with electrical and software teams to ensure sensor placement and system reliability.",
        "Iterated designs based on testing feedback to improve durability and competition performance.",
      ],
    },
  },

  {
    id: "case",
    companyName: "Custom Modular PC Case",
    type: "Personal",
    category: ["3D Modeling", "3D Printing", "Simulation"],
    shortDescription:
      "Designed and prototyped a portable, modular PC case using aluminum extrusions and ABS/ASA 3D-printed parts.",

    startDate: new Date("2025-04-20"),
    endDate: new Date("2025-05-10"),

    companyLogoImg: "/projects/case/case2.png",

    pagesInfoArr: [
      {
        imgArr: [
          "/projects/case/case2.mov",
          "/projects/case/case4.jpg",
          "/projects/case/case3.mov",
          "/projects/case/case5.jpeg",
          "/projects/case/case6.jpeg",
        ],
        title: "Landing Page",
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Designed and prototyped a fully custom PC case focused on portability, modularity, and thermal performance using aluminum extrusion framing and 3D-printed components. CFD simulations in SolidWorks were used to validate airflow prior to fabrication.",
      ],
      bullets: [
        "Designed a portable modular PC case with optimized airflow and thermal management.",
        "Used aluminum extrusions and ABS/ASA 3D-printed parts for structural and thermal performance.",
        "Performed CFD simulation in SolidWorks to validate cooling design.",
        "Iterated for manufacturability and assembly readiness.",
      ],
    },
  },

  {
    id: "betsy",
    companyName: "Autonomous Maze Navigation Robot",
    type: "Professional",
    category: ["3D Modeling", "3D Printing", "Electronic Design"],
    shortDescription:
      "Developed an autonomous robot capable of navigating a randomized maze and collecting tennis balls.",

    startDate: new Date("2024-04-20"),
    endDate: new Date("2024-05-10"),

    companyLogoImg: "/projects/betsy/betsy1.jpeg",

    pagesInfoArr: [
      {
        imgArr: [
          "/projects/betsy/betsy2.mov",
          "/projects/betsy/betsy4.jpg",
          "/projects/betsy/betsy3.mov",
          "/projects/betsy/betsy5.jpeg",
          "/projects/betsy/betsy6.jpeg",
        ],
        title: "Landing Page",
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Developed an autonomous robot integrating mechanical design, computer vision, and sensor fusion for maze navigation and object collection in a dynamic environment.",
      ],
      bullets: [
        "Designed tank chassis powered by regulated 20V system.",
        "Integrated Nvidia compute unit, RealSense camera, and LiDAR for perception.",
        "Implemented YOLO-based object detection for tennis ball collection.",
        "Combined LiDAR + depth sensing for autonomous navigation.",
        "Improved wall-following and navigation logic through testing.",
      ],
    },
  },

  {
    id: "streaming-device",
    companyName: "Gaming Streaming Device",
    type: "Personal",
    category: ["3D Modeling", "Manufacturing"],
    shortDescription:
      "Designed and 3D printed a custom enclosure for a Raspberry Pi-based gaming streaming device.",

    startDate: new Date("2023-11-01"),
    endDate: new Date("2023-11-03"),

    companyLogoImg: "/projects/asme-hpv/ASME_Final_Prototype.jpg",

    pagesInfoArr: [
      {
        imgArr: [
          "/projects/asme-hpv/asme1.png",
          "/projects/asme-hpv/asme2.jpg",
          "/projects/asme-hpv/asme3.jpg",
          "/projects/asme-hpv/asme4.jpg",
        ],
        title: "Landing Page",
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Focused on aesthetic-driven enclosure design inspired by retro electronics for a Raspberry Pi-based game streaming system.",
      ],
      bullets: [
        "Included ports optimized for quick setup and use.",
        "Integrated rubber feet for dual orientation stability.",
        "Added ventilation and cable management features.",
        "Configured Raspberry Pi for Sunshine + Moonlight streaming.",
      ],
    },
  },

  {
    id: "mouse-bungee",
    companyName: "3D-Printed Mouse Bungee",
    type: "Personal",
    category: ["Mechanical Design", "3D Printing", "Product Design", "Mechanisms"],
    shortDescription:
      "Two-week design project creating a 3D-printed mouse bungee with a bearing-supported articulated arm for reduced cable drag.",

    startDate: new Date("2026-02-01"),
    endDate: new Date("2026-02-14"),

    companyLogoImg: "/projects/mouse-bungee/placeholder.jpg",

    pagesInfoArr: [
      {
        imgArr: ["/projects/mouse-bungee/placeholder.jpg"],
        title: "Landing Page",
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Designed a compact 3D-printed mouse bungee using a bearing-supported articulated arm to improve cable management and reduce drag during gaming.",
      ],
      bullets: [
        "Designed bearing-supported arm for smooth cable motion.",
        "Iterated from clamp design to bistable locking mechanism.",
        "3D printed and assembled prototype using off-the-shelf hardware.",
      ],
    },
  },

  {
    id: "wood-coaster-holder",
    companyName: "Wood Coaster Holder",
    type: "Personal",
    category: ["Manufacturing", "Product Design"],
    shortDescription:
      "Quick woodworking project focused on learning fabrication techniques and building a functional wooden coaster holder.",

    startDate: new Date("2026-04-01"),
    endDate: new Date("2026-04-01"),

    companyLogoImg: "/projects/coaster/placeholder.jpg",

    pagesInfoArr: [
      {
        imgArr: ["/projects/coaster/placeholder.jpg"],
        title: "Landing Page",
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Quick personal woodworking project focused on learning basic fabrication and producing a functional wooden coaster holder.",
      ],
      bullets: [
        "Designed in SolidWorks with simple joinery.",
        "Fabricated using hardwood and basic woodworking tools.",
        "Completed rapid end-to-end prototype build.",
      ],
    },
  },

  {
    id: "crutch",
    companyName: "CrutchMate: Adaptive Crutch Accessory",
    type: "Professional",
    category: ["3D Modeling", "3D Printing", "Rapid Prototyping"],
    shortDescription:
      "Developed a modular crutch accessory system to improve usability and daily mobility.",

    startDate: new Date("2024-09-16"),
    endDate: new Date("2024-09-23"),

    companyLogoImg: "/projects/crutch/crutch1.jpg",

    pagesInfoArr: [
      {
        imgArr: [
          "/projects/crutch/crutch2.jpg",
          "/projects/crutch/crutch4.jpg",
          "/projects/crutch/crutch3.jpg",
          "/projects/crutch/crutch5.jpg",
        ],
        title: "Landing Page",
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Developed a modular crutch attachment system to improve usability and accessibility for daily use.",
      ],
      bullets: [
        "Designed modular 3D-printed accessory system.",
        "Integrated magnetic attachment system.",
        "Created interchangeable functional modules.",
        "Rapid prototyping and usability testing.",
      ],
    },
  },

  {
    id: "rocket",
    companyName: "Saturn V Model Rocket",
    type: "Professional",
    category: ["3D Modeling", "3D Printing", "Simulation"],
    shortDescription:
      "Designed and tested a functional model rocket inspired by Saturn V architecture.",

    startDate: new Date("2024-04-20"),
    endDate: new Date("2024-05-10"),

    companyLogoImg: "/projects/rocket/rocket0.jpg",

    pagesInfoArr: [
      {
        imgArr: [
          "/projects/rocket/rocket1.mov",
          "/projects/rocket/rocket2.jpeg",
          "/projects/rocket/rocket3.jpg",
        ],
        title: "Landing Page",
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Designed and tested a model rocket with multiple subsystems and flight analysis using simulation and real launches.",
      ],
      bullets: [
        "Designed full rocket subsystem architecture.",
        "Performed stability and flight simulation analysis.",
        "Conducted physical test launches and iterations.",
        "Produced engineering drawings for manufacturing.",
      ],
    },
  },

  {
    id: "garden",
    companyName: "All-season Indoor Garden",
    type: "Professional",
    category: ["3D Modeling", "Analysis"],
    shortDescription:
      "Supported hydroponic indoor garden development focusing on manufacturability and system optimization.",

    startDate: new Date("2022-08-01"),
    endDate: new Date("2022-12-15"),

    companyLogoImg: "/projects/garden/garden1.jpg",

    pagesInfoArr: [
      {
        imgArr: ["/projects/garden/garden2.jpg"],
        title: "Landing Page",
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Supported development of a hydroponic indoor garden system focusing on manufacturability and water management.",
      ],
      bullets: [
        "Standardized fastener systems.",
        "Improved water management design.",
        "Built prototypes for validation.",
        "Collaborated with cross-functional team.",
      ],
    },
  },

  {
    id: "lattice",
    companyName: "Lattice Optimization",
    type: "Personal",
    category: ["3D Modeling", "Analysis", "FEA"],
    shortDescription:
      "Optimized robot component using lattice structures and FEA validation for weight reduction.",

    startDate: new Date("2025-04-01"),
    endDate: new Date("2025-04-15"),

    companyLogoImg: "/projects/lattice/lattice1.jpg",

    pagesInfoArr: [
      {
        imgArr: [
          "/projects/lattice/lattice8.jpg",
          "/projects/lattice/lattice1.jpg",
        ],
        title: "Landing Page",
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Optimized structural component using lattice design and FEA simulation for weight reduction and performance validation.",
      ],
      bullets: [
        "Achieved significant weight reduction via lattice design.",
        "Validated using FEA simulation.",
        "Compared multiple lattice architectures.",
        "Applied DfAM principles.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
