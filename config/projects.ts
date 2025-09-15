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
      title: "Landing Page"
    }
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
      title: "Landing Page"
    }
  ],
  descriptionDetails: {
    paragraphs: [
      "As part of a multidisciplinary team project, I contributed to the design and development of an autonomous vehicle capable of navigating a randomly configured maze and collecting tennis balls under competition constraints. The robot combined mechanical design, electrical integration, and advanced computer vision, resulting in a highly customized system that demonstrated the ability to adapt to uncertain environments. This project allowed me to merge hardware and software expertise, work through real-world system integration challenges, and explore strategies for improving autonomous navigation in complex spaces.",
    ],
    bullets: [
      "Designed and fabricated a custom tank chassis powered by a 20V battery system with voltage regulation for stable performance.",
      "Integrated Nvidia mini-PC, Intel RealSense camera, and LiDAR for depth sensing and spatial mapping.",
      "Implemented a YOLO-based object detection system to identify and collect tennis balls.",
      "Combined LiDAR and depth data for dynamic navigation and adaptive decision-making.",
      "Addressed maze navigation challenges, gaining experience in wall-following algorithms and system optimization.",
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
      title: "Landing Page"
    }
  ],
  descriptionDetails: {
    paragraphs: [
      "Designed, prototyped, and tested a functional model rocket inspired by the Saturn V. The project involved developing multiple subsystems, performing stability and flight analyses, and validating performance through real-world launches. This hands-on experience combined CAD, simulation, and rapid prototyping to deliver a reliable design.",
    ],
    bullets: [
      "Developed subsystems including a spy camera mount, nose cone, booster, motor mount, and launch lug mount.",
      "Calculated stability caliber for a D12-3 engine, achieving a value of 1.64 for improved flight stability.",
      "Utilized OpenRocket to analyze fin and body design, optimizing performance to reach an altitude of 80 meters.",
      "Conducted test launches in Penn State agricultural fields and iterated design based on collected data.",
      "Produced detailed engineering drawings to communicate design and manufacturing requirements.",
    ],
  },
  },
  {
    id: "crutch",
    companyName: "CrutchMate: Adaptive Crutch Accessory",
    type: "Professional",
    category: ["3D Modeling", "3D Printing", "Rapid Prototyping"],
    shortDescription:
      "Developed an adaptive crutch accessory to enhance mobility and user comfort.",
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
      title: "Landing Page"
    }
  ],
  descriptionDetails: {
    paragraphs: [
      "Developed a 3D-printed crutch attachment system designed to improve usability and convenience for daily crutch users. The modular design allows crutches to magnetically snap together for easier handling, while interchangeable attachments (e.g., suction cup, hook, or cup holder) provide versatile functionality in different settings.",
    ],
    bullets: [
      "Designed and prototyped a modular add-on system compatible with standard crutches using CAD and 3D printing.",
      "Integrated neodymium magnets to enable secure crutch pairing and attachment swapping.",
      "Created interchangeable modules, including a suction cup for wall support, hook for hanging, and cup holder for accessibility.",
      "Conducted prototyping and iterative testing to refine usability and durability of components.",
      "Completed as a one-week design sprint for a university design course, balancing speed with functionality.",
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
      title: "Landing Page"
    }
  ],
  descriptionDetails: {
    paragraphs: [
      "Designed and prototyped a fully custom PC case as a replacement for an aging commercial chassis. The design emphasized portability, modularity, and optimized cooling performance, leveraging aluminum extrusions for structural support and ABS/ASA 3D-printed components for thermal resilience. Computational Fluid Dynamics (CFD) simulations in SolidWorks were used to validate airflow configurations prior to fabrication.",
    ],
    bullets: [
      "Designed a portable, modular PC case from the ground up with a focus on airflow and thermal management.",
      "Utilized aluminum extrusions for the frame and ABS/ASA 3D-printed parts to balance strength, weight, and heat resistance.",
      "Performed SolidWorks CFD simulations to identify and confirm optimal cooling configurations.",
      "Iterated design for manufacturability and assembly, preparing for physical build and testing.",
    ],
  },
  },

  {
    id: "garden",
    companyName: "All-season Indoor Garden",
    type: "Professional",
    category: ["3D Modeling", "Analysis"],
    shortDescription:
      "Supported the development of Sage, an all-season indoor garden, by standardizing fasteners, improving water management, and prototyping hydroponics components.",
    startDate: new Date("2022-08-01"),
    endDate: new Date("2022-12-15"),
    companyLogoImg: "/projects/garden/garden1.jpg",
    pagesInfoArr: [
      {
        imgArr: [
        "/projects/garden/garden2.jpg",
      ],
      title: "Landing Page"
    }
  ],
  descriptionDetails: {
    paragraphs: [
      "Interned with the Innovation Studios team at GE Appliances to support the development of Sage, an all-season indoor garden that integrates refrigeration with a hydroponics system. The product featured a rotating mechanism for multi-wall plant growth and a built-in watering and nutrient delivery system. My contributions focused on improving manufacturability, water management, and prototype development to support concept refinement.",
    ],
    bullets: [
      "Standardized fastener selection, reducing part complexity and streamlining assembly.",
      "Improved the water management system to enhance root control and reduce clogging.",
      "Designed and fabricated prototypes to test structural durability and hydroponic performance.",
      "Collaborated with cross-functional design and engineering teams within the Innovation Studios group.",
    ],
  },
  },

  {
    id: "lattice",
    companyName: "Lattice Optimization",
    type: "Personal",
    category: ["3D Modeling", "Analysis", "FEA"],
    shortDescription:
      "Optimized a robot component with nTop by applying lattice structures and FEA validation, achieving weight reduction while maintaining structural integrity.",
    startDate: new Date("2025-04-01"),
    endDate: new Date("2025-4-15"),
    companyLogoImg: "/projects/lattice/lattice0.jpg",
    pagesInfoArr: [
      {
        imgArr: [
        "/projects/lattice/lattice8.jpg",
        "/projects/lattice/lattice1.jpg",
        "/projects/lattice/lattice6.jpg",
        "/projects/lattice/lattice3.jpg",
        "/projects/lattice/lattice7.jpg",
        "/projects/lattice/lattice4.jpg",
        "/projects/lattice/lattice5.jpg",
      ],
      title: "Landing Page"
    }
  ],
  descriptionDetails: {
    paragraphs: [
      "As part of a design exploration, I used nTop to optimize a structural robot component by replacing solid geometry with lattice structures. The goal was to reduce weight while maintaining structural performance. I compared two lattice types (Gyroid and Body-Centered Cubic) against the original solid part, applying finite element analysis (FEA) to validate performance. This project strengthened my skills in DfAM, topology optimization, and structural validation, while teaching me the trade-offs between mass reduction and stress distribution in advanced designs.",
    ],
    bullets: [
      "Optimized a robot component in nTop with lattice structures, reducing weight by over 60%.",
      "Validated designs through FEA simulations, ensuring structural performance.",
      "Integrated SolidWorks, nTop, and FEA tools for a seamless design workflow.",
      "Applied DfAM principles to balance lightweighting with manufacturability.",
    ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
