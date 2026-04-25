"use client";

interface VideoPlayerProps {
  src: string;
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      width={720}
      height={405}
      className="my-4 rounded-lg border bg-muted transition-colors"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
