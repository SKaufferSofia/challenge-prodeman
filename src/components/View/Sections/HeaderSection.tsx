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
import { FavoriteItem, FavoritesContextType } from "@/context/favoritesContext";
import { ICharacterFront, IComicFront, ISeriesFront } from "@/interfaces/data";

interface HeaderSectionProps {
  sectionId: string;
  data:
    | ICharacterFront[]
    | IComicFront[]
    | ISeriesFront[]
    | FavoriteItem[]
    | [];
  isLoading: boolean;
  isError: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  search: string;
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  limit: string;
  handleChangeLimit: (limit: string) => void;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedFilter: string;
  handleChangeFilter: (filter: string) => void;
  isFavorite: FavoritesContextType["isFavorite"];
  toggleFavorite: FavoritesContextType["toggleFavorite"];
}

const HeaderSection = ({
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
}: HeaderSectionProps) => {
  const gridRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToGrid = () => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  console.log("sectionId", sectionId);

  return (
    <section
      id={sectionId}
      className="flex flex-col items-center justify-center py-10 px-10 md:px-20 lg:px-40 w-full h-full"
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
      />

      <CardsSection
        data={data || []}
        isLoading={isLoading}
        isError={isError}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        search={search}
        scrollToGrid={scrollToGrid}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </section>
  );
};

export default HeaderSection;
