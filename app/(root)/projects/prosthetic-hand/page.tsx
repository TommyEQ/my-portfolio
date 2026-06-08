import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prosthetic Hand | Tomas Quesada",
  description:
    "Groove-based 3D printed prosthetic hand using TPU soft robotics — validated through ANSYS FEA, 250,000-cycle fatigue testing, and fingertip force benchmarking.",
};

const tags = ["Mechanical Design", "Robotics", "Product Design"];

const stats = [
  { value: "2.1×", label: "Stress reduction vs. non-grooved" },
  { value: "250,000", label: "Fatigue cycles completed" },
  { value: "6", label: "Independent motors" },
  { value: "~$125", label: "Estimated build cost" },
];

const bullets = [
  "Designed a novel groove-based TPU finger to reduce stress concentration and improve bending durability vs. conventional tendon-driven designs.",
  "Ran ANSYS parameter sensitivity studies (FEA) across groove height, thickness, and spacing — validated with response surface method statistical analysis.",
  "Built a custom cyclic test bench with servo motor, tendon routing system, and load cell to run 250,000-cycle fatigue and force output experiments.",
  "Integrated six DC motors, a servo-driven thumb, and Arduino-based control into a compact palm housing designed from 3D hand scans.",
  "Demonstrated power and precision grasps across rigid, soft, and irregular objects using the fully assembled hand.",
];

export default function ProstheticHandPage() {
  return (
    <main className="container max-w-4xl mx-auto px-4 py-10">

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title + subtitle */}
      <h1 className="text-3xl font-semibold text-foreground mb-2">
        Groove-Based 3D Printed Prosthetic Hand
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        Master&apos;s Thesis &middot; Penn State Mechanical Engineering &middot; 2025
      </p>

      {/* Hero image — centered portrait */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full sm:w-2/3 rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
          <Image
            src="/projects/hand/hand2.webp"
            alt="Prosthetic hand — front view"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-secondary rounded-lg p-4">
            <div className="text-xl font-semibold text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <hr className="border-border mb-8" />

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-3">Overview</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          This project designed and fabricated a fully functional prosthetic hand using TPU-based 3D
          printing and soft robotic principles. The core contribution is a novel groove pattern along
          each phalange that reduces stress concentration, improves joint flexibility, and extends
          fatigue life — all without compromising grip strength. The design was validated through
          finite element analysis, physical fatigue testing, fingertip force benchmarking, and
          real-world grasping trials.
        </p>
        <ul className="space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-border mb-8" />

      {/* Design Process */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4">Design process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Hand scan */}
          <div>
            <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/projects/hand/handscan.png"
                alt="3D hand scan used as anatomical reference"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Artec Space Spider 3D scan — used as anatomical reference for finger and palm geometry
            </p>
          </div>

          {/* CAD placeholder — replace src with your exploded view image when ready */}
          <div>
            <div
              className="relative w-full rounded-lg overflow-hidden bg-secondary flex items-center justify-center"
              style={{ aspectRatio: "4/3" }}
            >
              <p className="text-sm text-muted-foreground text-center px-4">
                CAD exploded assembly view<br />
                <span className="text-xs">(coming soon)</span>
              </p>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              SolidWorks exploded assembly — finger, palm, and motor housing components
            </p>
          </div>

        </div>
      </section>

      <hr className="border-border mb-8" />

      {/* Design & Build */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4">Design &amp; build</h2>

        {/* Two portrait studio shots side by side */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/projects/hand/hand1.webp"
                alt="Prosthetic hand front view"
                fill
                className="object-cover object-top"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Front view — groove-based TPU fingers
            </p>
          </div>
          <div>
            <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/projects/hand/hand2.webp"
                alt="Prosthetic hand back view"
                fill
                className="object-cover object-top"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Back view — palm and wrist assembly
            </p>
          </div>
        </div>

        {/* Full-width internals shot */}
        <div>
          <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/projects/hand/hand3.webp"
              alt="Palm internals showing motor layout comparison"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Palm internals — final motor layout (DC motors + servo thumb)
          </p>
        </div>
      </section>

      <hr className="border-border mb-8" />

      {/* Research Data */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4">Research data</h2>

        {/* FEA comparison */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-3">
            ANSYS finite element analysis comparing Von Mises stress between the grooved and
            non-grooved finger designs under identical 20 mm tendon displacement loading. The groove
            pattern reduces peak stress by more than 50%, directly extending fatigue life.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="relative w-full rounded-lg overflow-hidden bg-white" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/projects/hand/groovefea.png"
                  alt="FEA Von Mises stress — grooved finger"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Grooved finger — max stress 1.656 Pa
              </p>
            </div>
            <div>
              <div className="relative w-full rounded-lg overflow-hidden bg-white" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/projects/hand/nongroovefea.png"
                  alt="FEA Von Mises stress — non-grooved finger"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Non-grooved finger — max stress 3.578 Pa
              </p>
            </div>
          </div>
        </div>

        {/* RSM plots + force chart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="relative w-full rounded-lg overflow-hidden bg-white" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/projects/hand/handdata1.webp"
                alt="Response surface method — Von Mises stress FEA optimization"
                fill
                className="object-contain p-2"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Von Mises stress — groove geometry FEA optimization (RSM)
            </p>
          </div>
          <div>
            <div className="relative w-full rounded-lg overflow-hidden bg-white" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/projects/hand/handdata2.webp"
                alt="Force transmission: groove vs non-groove at 90° and 135°"
                fill
                className="object-contain p-2"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Force transmission — groove vs. non-groove at 90° and 135°
            </p>
          </div>
        </div>
      </section>

      <hr className="border-border mb-8" />

      {/* Grasping Tests */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4">Grasping tests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/projects/hand/hand4.webp"
                alt="Prosthetic hand grasping a cylindrical object"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Power grasp — deodorant
            </p>
          </div>
          <div>
            <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <video
                src="/projects/hand/hand5.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Live actuation demo
            </p>
          </div>
        </div>
      </section>

      <hr className="border-border mb-8" />

      {/* Electronics */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-4">Electronics &amp; control</h2>
        <div className="relative w-full rounded-lg overflow-hidden mb-2" style={{ aspectRatio: "16/9" }}>
          <Image
            src="/projects/hand/hand6.webp"
            alt="Arduino-based motor control board"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Arduino Uno, L298N motor drivers, DC-DC buck converter, and manual potentiometer
          control — all mounted on a custom 3D-printed panel
        </p>
      </section>

      {/* Tools card */}
      <div className="bg-secondary rounded-lg p-5 mb-10">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Tools &amp; methods
        </p>
        <p className="text-sm text-foreground">
          SolidWorks &middot; ANSYS Mechanical &middot; Prusa XL 5T &middot; Arduino &middot; TPU
          &amp; PLA &middot; FEA &middot; Response Surface Method &middot; Mooney-Rivlin
          Hyperelastic Modeling
        </p>
      </div>

      <hr className="border-border mb-6" />

      <Link
        href="/projects"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← All Projects
      </Link>
    </main>
  );
}