// "use client";
// import CategoryFilter from "@/components/Test";
// import Link from "next/link";
import FooterComponent from "@/components/Footer/FooterComponent";
import NavbarComponent from "@/components/Navbar/NavbarComponent";
import HomeView from "@/components/View/Home/HomeView";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  // const handleFilterChange = (filters: {
  //   category: string;
  //   search: string;
  //   order: string;
  // }) => {
  //   console.log("Filtros actuales:", filters);
  //   // Podés hacer fetch con estos filtros acá
  // };

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

    // <main>

    //   <CategoryFilter onFilterChange={handleFilterChange} />
    //   <div className="flex items-center gap-2">
    //     {/* <GridIcon className="w-5 h-5 text-gray-600" /> */}
    //     <label htmlFor="cardsPerPage" className="text-sm">
    //       Mostrar:
    //     </label>
    //     <select
    //       id="cardsPerPage"
    //       // value={cardsPerPage}
    //       //onChange={(e) => setCardsPerPage(Number(e.target.value))}
    //       className="border px-2 py-1 rounded"
    //     >
    //       <option value={10}>10</option>
    //       <option value={20}>20</option>
    //       <option value={50}>50</option>
    //     </select>
    //   </div>

    //   {/* Acá irían las cards, el paginado, etc */}

    // </main>
  );
};

export default HomePage;
