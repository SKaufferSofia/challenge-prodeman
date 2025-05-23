"use client";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import Image from "next/image";
import React, { useRef, useState } from "react";

const LandingView = () => {
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setShowContent(true);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        ref={videoRef}
        autoPlay
        muted
        onEnded={handleVideoEnd}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          showContent ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <source
          src="https://mibucket-personal-sofia.s3.us-east-1.amazonaws.com/Challenge+prodeman/Marvel+Comics+Intro+-+Kailash+R+(1080p%2C+h264).mp4"
          type="video/mp4"
        />
      </video>

      {/* Imagen e interfaz principal luego del video */}
      {/* Imagen de fondo fija */}
      {showContent && (
        <Image
          src="https://mibucket-personal-sofia.s3.us-east-1.amazonaws.com/Challenge+prodeman/ehjgk76y2kv41.jpg"
          alt="Marvel banner"
          fill
          className="object-cover fixed top-0 left-0 w-full h-full z-0 animate-fadeIn"
        />
      )}

      {/* Overlay para mejorar contraste
      {showContent && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-10" />
      )} */}

      {/* Navbar y demás contenido visible */}
      {showContent && (
        <div className="relative !z-50">
          <NavbarComponent />
          {/* Podés agregar texto centralizado o lo que quieras acá */}
        </div>
      )}
    </section>
  );
};

export default LandingView;
