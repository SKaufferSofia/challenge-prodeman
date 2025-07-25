"use client";
import React from "react";
import SectionCategory from "./SectionCategory";
import {
  categories,
  valueOptionDate,
  valueOptionPage,
  valueOptions,
} from "./options";
import CardsSection from "./CardsSection";
import FilterSection from "./FilterSection";
import { HeaderSectionProps } from "@/interfaces/sections";

const HeaderSection = ({
  section,
  sectionId,
  data,
  isLoading,
  isError,
  page,
  setPage,
  totalPages,
  search,
  limit,
  handleChangeLimit,
  selectedCategory,
  setSelectedCategory,
  selectedFilter,
  handleChangeFilter,
  handleChangeSearch,
  isFavorite,
  toggleFavorite,
  checkboxChecked,
  handleChangeImg,
}: HeaderSectionProps) => {
  const gridRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToGrid = (categoryName: string) => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

      const url = new URL(window.location.href);
      url.searchParams.set("section", categoryName);
      window.history.pushState(null, "", url.toString());
    }
  };

  return (
    <section
      id={sectionId}
      className="flex flex-col items-center justify-center py-10 px-10 md:px-20 w-full h-full "
    >
      <SectionCategory
        gridRef={gridRef}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setPage={setPage}
        scrollToGrid={scrollToGrid}
      />

      <FilterSection
        search={search}
        handleChangeSearch={handleChangeSearch}
        arrayOptions={
          selectedCategory === "series"
            ? valueOptionDate
            : selectedCategory === "comics"
            ? valueOptionPage
            : valueOptions
        }
        selectedFilter={selectedFilter}
        handleChangeFilter={handleChangeFilter}
        limit={limit}
        handleChangeLimit={handleChangeLimit}
        checkboxChecked={checkboxChecked}
        handleChangeImg={handleChangeImg}
      />

      <CardsSection
        section={section}
        sectionId={sectionId}
        data={data || []}
        isLoading={isLoading}
        isError={isError}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        search={search}
        scrollToGrid={() => scrollToGrid(selectedCategory)}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        selectedFilter={selectedFilter}
      />
    </section>
  );
};

export default HeaderSection;
