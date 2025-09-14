import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
  category: string; // <-- Add this line
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "SolidWorks",
    description:
      "3D CAD software used for parametric modeling, assemblies, and detailed engineering drawings.",
    rating: 5,
    icon: Icons.solidworks,
    category: "Software"
  },
  {
    name: "Matlab",
    description:
      "Computational software for numerical analysis, simulation, data processing, and visualization.",
    rating: 4,
    icon: Icons.matlab,
    category: "Software"
  },
  {
    name: "Ansys",
    description:
      "Finite element analysis software for simulating and analyzing mechanical designs.",
    rating: 4,
    icon: Icons.ansys,
    category: "Software"
  },
  {
    name: "Onshape",
    description:
      "Cloud-based CAD platform for collaborative design, version control, and product development.",
    rating: 5,
    icon: Icons.onshape,
    category: "Software"
  },
  {
    name: "Autodesk Fusion",
    description:
      "Integrated CAD/CAM/CAE tool for design, simulation, and manufacturing workflows.",
    rating: 4,
    icon: Icons.fusion,
    category: "Software"
  },
  {
    name: "CATIA",
    description:
      "CAD software for complex surface modeling, product design, and engineering.",
    rating: 2,
    icon: Icons.solidworks,
    category: "Software"
  },
  {
    name: "Creo Parametric",
    description:
      "Parametric 3D CAD software for mechanical design, assemblies, and simulation.",
    rating: 2,
    icon: Icons.creo,
    category: "Software"
  },
  {
    name: "Python",
    description:
      "Programming language for automation, data analysis, machine learning, and scripting.",
    rating: 1,
    icon: Icons.python,
    category: "Software"
  },
  {
    name: "Arduino IDE",
    description:
      "Programming environment for developing and uploading code to Arduino microcontrollers.",
    rating: 3,
    icon: Icons.arduino,
    category: "Software"
  },
  {
    name: "3D Printing Slicing Software",
    description:
      "Tools (e.g., BambuLabs, PrusaSlicer) that convert CAD models into machine instructions for additive manufacturing.",
    rating: 5,
    icon: Icons.bambulabs,
    category: "Software"
  },
  {
    name: "Excel",
    description:
      "Spreadsheet software for data analysis, engineering calculations, and visualization.",
    rating: 4,
    icon: Icons.excel,
    category: "Software"
  },
  {
    name: "Minitab",
    description:
      "Statistical software for data analysis, process improvement, and Six Sigma projects.",
    rating: 4,
    icon: Icons.minitab,
    category: "Software"
  },
  {
    name: "Siemens NX",
    description:
      "Advanced CAD/CAM/CAE software for product design, simulation, and manufacturing.",
    rating: 4,
    icon: Icons.siemens,
    category: "Software"
  },
    {
    name: "DFM / DFA",
    description:
      "Design for Manufacturability and Assembly, optimizing designs to reduce cost, complexity, and production time.",
    rating: 5,
    icon: Icons.factory,
    category: "Design & Manufacturing"
  },
      {
    name: "GD&T",
    description:
      "Geometric Dimensioning and Tolerancing, a system for defining and communicating engineering tolerances.",
    rating: 5,
    icon: Icons.ruler,
    category: "Design & Manufacturing"
  },
        {
    name: "Rapid Prototyping",
    description:
      "Fast fabrication of physical models using 3D printing and other quick-turn processes.",
    rating: 5,
    icon: Icons.zap,
    category: "Design & Manufacturing"
  },
  {
    name: "Statistical Tolerance Analysis",
    description:
      "Quantitative approach for predicting how part variations impact assembly performance.",
    rating: 3,
    icon: Icons.chart,
    category: "Design & Manufacturing"
  },
    {
    name: "Design of Experiments (DOE)",
    description:
      "Statistical method for planning and analyzing controlled tests to understand variable effects.",
    rating: 4,
    icon: Icons.flask,
    category: "Design & Manufacturing"
  },
    {
    name: "Plastic Part Design",
    description:
      "Specialized design methods for injection-molded and additively manufactured polymer parts.",
    rating: 3,
    icon: Icons.plastic,
    category: "Design & Manufacturing"
  },
      {
    name: "Metal Part Design",
    description:
      "Mechanical design and analysis of sheet metal, machined, and cast components.",
    rating: 3,
    icon: Icons.cog,
    category: "Design & Manufacturing"
  },

];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
