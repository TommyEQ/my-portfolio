import { AnimatedSection } from "@/components/common/animated-section";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, id) => (
        <AnimatedSection key={id} direction="up" delay={0.1 * ((id % 6) + 1)}>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[230px] flex-col justify-between rounded-md p-6 sm:h-[230px]">
              <skill.icon className="w-12 h-12" />
              <div className="space-y-2">
                <h3 className="font-bold">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
