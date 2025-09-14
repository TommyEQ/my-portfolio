"use client";
import { useState } from "react";
import SkillsCard from "./skills-card";
import { featuredSkills } from "@/config/skills"; // <-- Make sure this import exists and is correct

export default function SkillsPreview() {
  const [showAll, setShowAll] = useState(false);
  const skillsToShow = showAll ? featuredSkills : featuredSkills.slice(0, 6);

  return (
    <div>
      <SkillsCard skills={skillsToShow} />
      {featuredSkills.length > 6 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-4 underline text-primary"
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}