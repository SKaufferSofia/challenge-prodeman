import React from "react";
import HeroSection from "../Sections/HeroSection";
import CardsSection from "../Sections/CardsSection";

const HomeView = () => {
  return (
    <section>
      <HeroSection />

      <CardsSection />

      {/* <CardsSection
        data={selectedCategory === "characters" ? characters : []}
        isLoading={isLoading}
        isError={isError}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        search={search}
        handleChangeSearch={handleChangeSearch}
        limitOptions={limitOptions}
      /> */}
    </section>
  );
};

export default HomeView;
