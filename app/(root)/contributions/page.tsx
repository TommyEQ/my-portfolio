import { Metadata } from "next";
import Image from "next/image";
import PageContainer from "@/components/common/page-container";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Tomas Quesada.",
};

export default function AboutPage() {
  return (
    <PageContainer
      title="About Me"
      description="Learn more about Tomas Quesada."
    >
      <div className="w-full mb-10 text-left text-lg leading-relaxed px-4">
        <h2 className="text-2xl font-bold mb-4">Hello, I’m Tomas!</h2>
        <p>
          I’m a mechanical engineer passionate about prototyping and product development. I currently work at Garmin in the Marine Department, where I contribute to the design, testing, and validation of GPS and marine electronics products.
        </p>
        <p className="mt-4">
          Previously, I worked on projects ranging from designing a multi-material prosthetic hand at Penn State to developing structural components for autonomous vehicles at Carnegie Robotics. I enjoy combining CAD, simulation, and rapid prototyping to bring innovative designs to life.
        </p>
        <p className="mt-4">
          Outside of engineering, I love reading, listening to jazz, and traveling. I’m always excited to learn new tools and techniques, and I’d be happy to connect!
        </p>
      </div>
      <div className="flex justify-center gap-8">
        <Image
          src="/about1.jpg"
          alt="About Me 1"
          width={400}
          height={220}
          className="rounded-2xl object-cover"
        />
        <Image
          src="/about2.jpg"
          alt="About Me 2"
          width={400}
          height={220}
          className="rounded-2xl object-cover"
        />
        <Image
          src="/about3.jpg"
          alt="About Me 3"
          width={400}
          height={220}
          className="rounded-2xl object-cover"
        />
      </div>
    </PageContainer>
  );
}