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
  // 🏆 TOP 3 MOST IMPORTANT
  // =========================

  {
    id: "asme-hpv",
    companyName: "ASME Human Powered Vehicle",
    type: "Professional",
    category: ["3D Modeling", "Manufacturing", "FEA"],
    shortDescription:
      "Designed and built a pedal-driven vehicle for the ASME competition, focusing on CAD/FEA and fabrication.",

    startDate: new Date("2023-07-01"),
    endDate: new Date("2023-07-01"),

    companyLogoImg: "/projects/asme-hpv/ASME_Final_Prototype.jpg",

    pagesInfoArr: [
      {
        imgArr: [
          "/projects/asme-hpv/asme1.png",
          "/projects/asme-hpv/asme2.jpg",
          "/projects/asme-hpv/asme3.jpg",
          "/projects/asme-hpv/asme4.jpg",
          "/projects/asme-hpv/asme5.jpeg",
          "/projects/asme-hpv/asme6.jpg",
          "/projects/asme-hpv/asme7.jpg",
        ],
        title: "Landing Page",
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Collaborated with a senior design team to engineer and manufacture a pedal-driven vehicle that met ASME competition guidelines. My role focused on CAD/FEA, structural optimization, and hands-on fabrication to deliver a competition-ready prototype.",
      ],
      bullets: [
        "Led CAD modeling and finite element analysis (SolidWorks) to optimize frame strength and reduce weight.",
        "Fabricated components using aluminum and steel tubing, applying MIG welding, lathes, tube bending, and drill presses.",
        "Conducted safety, steering, and braking tests to ensure reliability and compliance.",
        "Coordinated with teammates on project management, design reviews, and sponsor deliverables.",
        "Strengthened expertise in CAD/FEA, hands-on manufacturing, and design validation through end-to-end development.",
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
    id: "case",
    companyName: "Custom Modular PC Case",
    type: "Personal",
    category: ["3D Modeling", "3D Printing", "Simulation"],
    shortDescription:
      "Designed and prototyped a portable modular PC case using aluminum extrusions and 3D-printed parts.",

    startDate: new Date("2025-04-20"),
    endDate: new Date("2025-05-10"),

    companyLogoImg: "/projects/case/case1.webp",

    pagesInfoArr: [
      {
        imgArr: [
          "/projects/case/case6.webp",
          "/projects/case/case3.webp",
          "/projects/case/case4.webp",
          "/projects/case/case5.mov",
          "/projects/case/case2.webp",
        ],
        title: "Landing Page",
      },
    ],

descriptionDetails: {
  paragraphs: [
    "Designed a compact, modular small form factor PC case focused on portability, thermal performance, and serviceability using CFD-driven airflow validation.",
    "The enclosure fully integrates all PC components within a compact 425 × 142 × 137 mm volume, optimizing space efficiency while maintaining accessibility and structural rigidity.",
  ],
  bullets: [
    "Designed modular aluminum extrusion frame for structural support and easy assembly/disassembly.",
    "Used ABS/ASA 3D printing for custom structural and enclosure components with improved heat resistance.",
    "Performed CFD simulations to optimize airflow paths and reduce thermal hotspots.",
    "Integrated snap-fit SSD mounting mechanism for fast swapping and tool-less storage access.",
    "Added side-mounted LCD display showing real-time CPU/GPU usage, CPU temperature, and memory load.",
    "Implemented internal cable management strategy for improved airflow and clean assembly.",
    "Designed rubber feet for improved stability, vibration damping, and desk grip.",
    "Iterated design for manufacturability, assembly efficiency, and compact packaging constraints.",
  ],
    },
  },
  {
  id: "wood-coaster-holder",
  companyName: "Wood Coaster Holder",
  type: "Personal",
  category: ["Manufacturing", "Product Design", "3D Modeling"],

  shortDescription:
    "Quick woodworking project focused on learning fabrication techniques and building a functional wooden coaster holder.",

  startDate: new Date("2026-04-01"),
  endDate: new Date("2026-04-15"),

  companyLogoImg: "/projects/coaster/Coaster1.webp",

  pagesInfoArr: [
    {
      title: "Landing Page",
      imgArr: [
        "/projects/coaster/Coaster2.webp",
        "/projects/coaster/Coaster3.webp",
        "/projects/coaster/Coaster4.webp",
      ],
    },
  ],

  descriptionDetails: {
    paragraphs: [
      "Quick personal woodworking project focused on learning basic fabrication and producing a functional wooden coaster holder.",
    ],
    bullets: [
      "Designed in SolidWorks with simple joinery concepts.",
      "Fabricated using hardwood and basic woodworking tools.",
      "Completed rapid end-to-end prototype build from design to final part.",
    ],
  },
},
  {
    id: "rocket",
    companyName: "Saturn V Model Rocket",
    type: "Professional",
    category: ["3D Modeling", "3D Printing", "Simulation"],
    shortDescription:
      "Designed, prototyped, and tested a functional model rocket inspired by the Saturn V.",

    startDate: new Date("2024-04-20"),
    endDate: new Date("2024-05-10"),

    companyLogoImg: "/projects/rocket/rocket0.jpg",

    pagesInfoArr: [
      {
        imgArr: [
          "/projects/rocket/rocket1.mov",
          "/projects/rocket/rocket2.jpeg",
          "/projects/rocket/rocket3.jpg",
          "/projects/rocket/rocket4.jpg",
          "/projects/rocket/rocket5.jpeg",
        ],
        title: "Landing Page",
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Designed, prototyped, and tested a functional model rocket inspired by Saturn V architecture.",
      ],
      bullets: [
        "Developed full rocket subsystem architecture.",
        "Performed stability and flight simulation analysis.",
        "Conducted physical test launches and iterations.",
        "Produced engineering drawings for manufacturing.",
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
        "A retro-inspired enclosure design for a Raspberry Pi-based game streaming system.",
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
    category: ["Mechanical Design", "3D Printing", "Product Design"],
    shortDescription:
      "Two-week design project creating a 3D-printed mouse bungee with a bearing-supported articulated arm.",

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
        "Designed a 3D-printed mouse bungee using a bearing-supported articulated arm to improve cable control during gaming.",
      ],
      bullets: [
        "Designed smooth bearing-supported arm mechanism.",
        "Iterated from clamp system to bistable locking design.",
        "3D printed and assembled full prototype with hardware.",
      ],
    },
  },


  {
    id: "crutch",
    companyName: "CrutchMate: Adaptive Crutch Accessory",
    type: "Professional",
    category: ["3D Modeling", "3D Printing", "Rapid Prototyping"],
    shortDescription:
      "Developed a modular crutch accessory system to improve usability and mobility.",

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
        "Developed a modular crutch accessory system to improve usability and accessibility.",
      ],
      bullets: [
        "Designed modular 3D-printed attachment system.",
        "Integrated magnetic coupling system.",
        "Created interchangeable functional modules.",
        "Rapid prototyping and usability testing.",
      ],
    },
  },
{
  id: "carnegie-racer",
  companyName: "DARPA RACER Heavy Platform)",
  type: "Professional",
  category: ["Internship", "Robotics", "Autonomous Systems", "FEA", "Mechanical Design"],

  shortDescription:
    "Supported mechanical design and hardware integration for the DARPA RACER off-road autonomous vehicle program.",

  startDate: new Date("2023-05-01"),
  endDate: new Date("2023-08-01"),

  companyLogoImg: "/projects/cr/cr1.webp",

  pagesInfoArr: [
    {
      title: "Landing Page",
      imgArr: [
        "/projects/cr/cr2.webp",
        "/projects/cr/cr3.mov",
      ],
    },
  ],

  descriptionDetails: {
    paragraphs: [
      "During my time as a mechanical engineering intern at Carnegie Robotics I supported the DARPA RACER program, contributing to the design and integration of hardware systems for autonomous tracked vehicles operating in off-road and high-impact environments. Work focused on ensuring mechanical robustness and reliable sensor integration under real-world conditions.",
    ],

    bullets: [
      "Designed mechanical integration of LiDAR and stereo camera systems on a DARPA-funded autonomous tracked vehicle, including mounts, shielding, and interface constraints.",
      "Supported field testing under real-world terrain and impact conditions, validating structural integrity and identifying failure modes in sensor mounts.",
      "Designed and fabricated enclosures and mounting systems for autonomous platforms using SolidWorks, supporting multidisciplinary hardware integration.",
    ],
  },
},

  {
    id: "garden",
    companyName: "All-season Indoor Garden",
    type: "Professional",
    category: ["3D Modeling", "Analysis", "Internship"],
    shortDescription:
      "Supported hydroponic indoor garden development and system optimization.",

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
        "Built validation prototypes.",
        "Collaborated with engineering team.",
      ],
    },
  },

  {
    id: "lattice",
    companyName: "Lattice Optimization",
    type: "Personal",
    category: ["3D Modeling", "Analysis", "FEA"],
    shortDescription:
      "Optimized robot component using lattice structures and FEA validation.",

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
        "Optimized structural component using lattice design and FEA simulation.",
      ],
      bullets: [
        "Reduced weight via lattice structures.",
        "Validated with FEA.",
        "Compared multiple architectures.",
        "Applied DfAM principles.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
