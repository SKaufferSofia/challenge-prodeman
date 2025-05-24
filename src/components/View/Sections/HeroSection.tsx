import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-72 md:h-96 flex items-center justify-center text-center text-textPrimary-dark"
      style={{
        backgroundImage:
          "url('https://mibucket-personal-sofia.s3.us-east-1.amazonaws.com/Challenge+prodeman/mi_wallpaper_mas_dsk_01.jpg')", // imagen en public/
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-0" />

      <div className="relative z-10 px-4 max-w-3xl">
        <h1 className="text-3xl md:text-6xl leading-tight font-bold uppercase anton-sc-regular">
          EXPLORE THE <br /> MARVEL UNIVERSE
        </h1>
        <p className="mt-4 text-lg md:text-xl text-textPrimary-dark font-light">
          Discover iconic characters, comics, and epic events that shaped
          generations.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
