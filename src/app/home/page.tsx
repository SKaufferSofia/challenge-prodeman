import FooterComponent from "@/components/Footer/FooterComponent";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import HomeView from "@/components/View/Home/HomeView";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <NavbarComponent />

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
      <FooterComponent />
    </main>
  );
};

export default HomePage;
