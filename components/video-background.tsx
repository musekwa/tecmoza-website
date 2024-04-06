"use client";
import React, { useEffect, useRef } from "react";

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative h-screen">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Your Content Here</h1>
      </div>
    </div>
  );
};

export default VideoBackground;
