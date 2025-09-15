import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "garmin",
    position: "Mechanical Engineer",
    company: "Garmin",
    location: "Kansas City, KS",
    startDate: new Date("2024-08-01"),
    endDate: "Present",
    description: [
      "Mechanical engineer in the Marine Department at Garmin, contributing to the design, testing, and validation of GPS and marine electronics products. Gaining hands-on experience in the intersection of mechanical design, materials testing, and industrial product development.",

    ],
    achievements: [
      "Contributed to engineering projects in the Marine Department, supporting design, testing, and prototyping initiatives.",
  ],
    skills: ["Onshape", "DFM", "DFA", "Plastic Part Design", "Statistical Analysis"],
    companyUrl: "https://www.garmin.com/en-US/",
    logo: "/garmin.png",
  },
  {
    id: "pennstate",
    position: "Reasearch Assistant",
    company: "Penn State University",
    location: "University Park, PA",
    startDate: new Date("2022-08-01"),
    endDate: new Date("2025-06-01"),
    description: [
      "At Penn State, I worked under Dr. Xiaogang Hu in the Neuromechanics Laboratory, where I designed and prototyped a prosthetic hand using soft materials. The research focused on developing a cost-effective prosthetic hand that maintained ease of manufacturability while improving durability through extended cyclic testing.",
    ],
    achievements: [
      "Designed and prototyped a multi-material 3D-printed robotic hand using TPU, with enhanced manufacturability and durability.",
      "Performed initial Ansys simulations to identify stress concentrations and guide design improvements.",
      "Conducted cyclic fatigue testing on soft material prototypes, achieving 40,000+ cycles, and analyzed changes in part flexibility over time.",
      "Utilized tensile testers to characterize material properties and select the most suitable flexible material for prosthetic applications.",
      "Optimized prosthetic finger design to reduce localized stress by 53.7% while maintaining comparable force output.",
    ],
    skills: ["SolidWorks", "Ansys", "Excel", "Statistical Analysis", "Matlab"],
    companyUrl: "https://www.me.psu.edu/",
    logo: "/psulogo.jpg",
  },
  {
    id: "garminintern",
    position: "Mechanical Engineering Intern",
    company: "Garmin",
    location: "Kansas City, KS",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-08-01"),
    description: [
      "Developed and validated actuator test fixtures in Garmin’s Marine Department, collaborating with the Industrial Design team and performing FEA simulations to confirm structural strength. Designed components with plastic injection molding principles to balance durability and manufacturability.",
    ],
    achievements: [
      "Designed motor mounts for a live sonar scanner using Onshape, increasing the FOS by 25% from previous designs.",
      "Developed the mounts with DFA principles for plastic injection molding, with production targeting over 120,000 units.",
      "Engineered and validated a hydraulic test bed system for an actuator tested up to 1,000 psi and 5,000 pounds of force.",
      "Implemented an electronics system for the test bed, enabling life cycle testing of up to 1 million cycles.",
    ],
    skills: ["SolidWorks", "DFM", "Rapid Prototyping", "Plastic Part Design", "3D Printing Slicing Software", "Onshape"],
    companyUrl: "https://www.garmin.com/en-US/",
    logo: "/garmin.png",
  },
  {
    id: "carnegierobotics",
    position: "Mechanical Engineering Intern",
    company: "Carnegie Robotics",
    location: "Pittsburgh, PA",
    startDate: new Date("2023-05-01"),
    endDate: new Date("2023-08-01"),
    description: [
      "At Carnegie Robotics, I supported DARPA’s Robotic Autonomy in Complex Environments with Resiliency (RACER) program by assisting with the structural design of a treaded autonomous vehicle capable of resilient off-road navigation.",
    ],
    achievements: [
      "Designed and manufactured electronic component enclosures, panels, mounts, and casings for off-road autonomous vehicles, LiDAR sensors, and stereo cameras using SolidWorks.",
      "Participated in creating 75+ manufacturing and engineering drawings with explicit callouts such as bending and welding",
      "Machined 20+ prototype and production-ready parts using CNC, lathe, and threading machines to support rapid prototyping and final design iterations.",
    ],
    skills: ["SolidWorks", "DFA", "Rapid Prototyping", "Metal Part Design"],
    companyUrl: "https://carnegierobotics.com/",
    logo: "/CRlogo.png",
  },
  {
    id: "geappliances",
    position: "Mechanical Engineering Intern",
    company: "GE Appliances",
    location: "Louisville, KY",
    startDate: new Date("2021-08-01"),
    endDate: new Date("2021-12-01"),
    description: [
      "At GE Appliances, I worked with the Innovation Department to rapidly prototype potential products in the indoor farming market, developing concepts and creating detailed CAD designs to support early-stage product development.",
    ],
    achievements: [
      "Managed nozzle evaluation testing and lowered liquid system usage by 30% for the GE Sage, All Season Indoor Garden",
      "Designed prototypes in SolidWorks and PTC Creo to assist with root entanglement",
      "Assisted in fastener communization and documentation to lower the cost of fasteners by 40% in the final build",
    ],
    skills: [
      "Rapid Prototyping",
      "Creo PTC",
      "SolidWorks",
      "Excel",
    ],
    companyUrl: "https://www.geappliances.com",
    logo: "/gelogo.png",
  },
    {
    id: "burn",
    position: "Mechanical Intern",
    company: "Burns & McDonnell",
    location: "Kansas City, MO",
    startDate: new Date("2021-05-01"),
    endDate: new Date("2021-08-01"),
    description: [
      "Worked with the Federal and Aviation Departments, supporting the design and implementation of HVAC and hydronic systems for a variety of buildings, including hangars, laboratories, and government facilities. Gained experience in equipment selection, energy analysis, life cycle cost evaluation, and cross-functional collaboration with architectural, structural, and electrical teams.",
    ],
    achievements: [
      "Assisted senior engineers with hydronics and HVAC design for hangars, laboratories, and government buildings.",
      "Supported equipment selection, energy analysis, life cycle cost analysis, and specification preparation.",
      "Collaborated cross-functionally with architectural, structural, and electrical teams.",
    ],
    skills: [
      "Revit",
      "Excel",
    ],
    companyUrl: "https://www.burnsmcd.com",
    logo: "/burnlogo.png",
  },
];
