import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

interface HeroSectionProps {
  section: string;
  url: string;
  title: string;
  title2: string;
  description: string;
}

const HeroSection = ({
  section,
  url,
  title,
  title2,
  description,
}: HeroSectionProps) => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center text-textPrimary-dark"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-0" />

      <div className="relative z-10 px-4 max-w-3xl">
        <h1 className="text-3xl md:text-6xl leading-tight font-bold uppercase anton-sc-regular">
          {title} <br /> {title2}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-textPrimary-dark font-light">
          {description}
        </p>
        {section === "home" ? (
          <Link href={{ pathname: "/", query: { section: "home" } }}>
            <FaArrowDown className="animate-bounce mx-auto mt-8 text-3xl" />
          </Link>
        ) : (
          <Link
            href={{ pathname: "/favorites", query: { section: "favorites" } }}
          >
            <FaArrowDown className="animate-bounce mx-auto mt-8 text-3xl" />
          </Link>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
