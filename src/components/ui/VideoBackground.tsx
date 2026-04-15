"use client";

import { useEffect, useRef } from "react";

interface VideoBackgroundProps {
  src: string;
  className?: string;
  overlay?: boolean;
  overlayClassName?: string;
  priority?: boolean;
}

export default function VideoBackground({
  src,
  className = "",
  overlay = true,
  overlayClassName = "",
  priority = false,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover ${className}`}
        src={src}
        muted
        loop
        playsInline
        preload={priority ? "auto" : "metadata"}
      />
      {overlay && (
        <div
          className={`absolute inset-0 ${
            overlayClassName ||
            "bg-gradient-to-t from-bg-primary via-bg-primary/60 to-bg-primary/30"
          }`}
        />
      )}
    </>
  );
}
