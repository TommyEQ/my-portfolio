import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import SkillsPreview from "@/components/skills/skillspreview";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { HeroPhotoStack } from "@/components/common/hero-photo-stack";
import { Icons } from "@/components/common/icons";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/Headshot.jpeg";

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Mechanical Engineer",
    sameAs: [siteConfig.links.linkedin],
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="py-10 md:py-16 lg:py-20">
        <div className="container flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="flex flex-col gap-4 lg:max-w-xl">
            <div className="flex items-center gap-4">
              <Image
                src={profileImg}
                height={80}
                width={80}
                sizes="80px"
                className="h-16 w-16 shrink-0 rounded-full border-4 border-primary object-cover md:h-20 md:w-20"
                alt="Tomas Quesada - Mechanical Engineer Portfolio"
                priority
              />
              <AnimatedText
                as="h1"
                delay={0.2}
                className="font-heading text-3xl sm:text-4xl md:text-5xl"
              >
                Tomas Quesada
              </AnimatedText>
            </div>
            <AnimatedText
              as="h3"
              delay={0.35}
              className="font-heading text-lg sm:text-xl"
            >
              Mechanical Engineer
            </AnimatedText>
            <AnimatedText delay={0.45} className="max-w-[46ch]">
              <p className="leading-normal text-muted-foreground text-sm sm:text-base">
                Welcome to my portfolio! Here you&apos;ll find a selection of my mechanical engineering projects, highlighting my experience in design, analysis, and hands-on prototyping.
              </p>
            </AnimatedText>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AnimatedText delay={0.55}>
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-primary text-primary")}
                  aria-label="View Tomas Quesada's LinkedIn profile"
                >
                  <Icons.linkedin className="w-4 h-4 mr-2" /> Linkedin
                </Link>
              </AnimatedText>
              <AnimatedText delay={0.6}>
                <Link
                  href={"/contact"}
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-primary text-primary")}
                  aria-label="Contact Tomas Quesada"
                >
                  <Icons.contact className="w-4 h-4 mr-2" /> Contact
                </Link>
              </AnimatedText>
              <AnimatedText delay={0.65}>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-primary text-primary")}
                  aria-label="View Tomas Quesada's Resume"
                >
                  Resume
                </Link>
              </AnimatedText>
            </div>
          </div>

          <HeroPhotoStack className="lg:shrink-0" />
        </div>
      </section>

      <AnimatedSection
        direction="right"
        className="container space-y-6 py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {featuredProjects.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ProjectCard project={exp} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        direction="left"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        className="container space-y-6 bg-muted py-10"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsPreview />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

    </ClientPageWrapper>
  );
}
