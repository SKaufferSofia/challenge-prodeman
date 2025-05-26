"use client";
import React from "react";
import HomeView from "./Home/HomeView";
import Image from "next/image";
import useScrollToSection from "@/hooks/useScrollToSection";

const ViewSections = () => {
  useScrollToSection();
  return (
    <main>
      <HomeView />

      <section className="w-full">
        <Image
          src="https://mibucket-personal-sofia.s3.us-east-1.amazonaws.com/Challenge+prodeman/ip_page_marvel_banner_mobile_0d04586279.jpg"
          alt="Marvel banner"
          className="w-full object-cover"
          width={3000}
          height={3000}
        />
      </section>
    </main>
  );
};

export default ViewSections;
