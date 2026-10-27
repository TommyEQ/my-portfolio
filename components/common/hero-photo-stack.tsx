"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface WorkPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
  mat: "primary" | "accent" | "secondary";
  rotate: string;
}

const photos: WorkPhoto[] = [
  {
    src: "/projects/hand/hand1.webp",
    alt: "Groove-based 3D printed prosthetic hand",
    width: 168,
    height: 224,
    mat: "primary",
    rotate: "-rotate-6",
  },
  {
    src: "/projects/robo/Robo1.webp",
    alt: "Hero combat robot built for the DJI RoboMaster competition",
    width: 236,
    height: 122,
    mat: "accent",
    rotate: "rotate-3",
  },
  {
    src: "/projects/asme-hpv/ASME_Final_Prototype.jpg",
    alt: "ASME human-powered vehicle prototype",
    width: 180,
    height: 212,
    mat: "secondary",
    rotate: "-rotate-3",
  },
];

const matClass: Record<WorkPhoto["mat"], string> = {
  primary: "bg-primary",
  accent: "bg-accent",
  secondary: "bg-secondary",
};

interface HeroPhotoStackProps {
  className?: string;
}

export function HeroPhotoStack({ className }: HeroPhotoStackProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-end justify-center gap-5 sm:justify-start sm:gap-0",
        className
      )}
    >
      {photos.map((photo, i) => (
        <div
          key={photo.src}
          className={cn(
            "shrink-0 rounded-lg p-2 shadow-md transition-transform duration-300 ease-out hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:shadow-lg",
            matClass[photo.mat],
            photo.rotate,
            i > 0 && "sm:-ml-8"
          )}
        >
          <div
            className="relative overflow-hidden rounded"
            style={{ width: photo.width, height: photo.height }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={`${photo.width}px`}
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
