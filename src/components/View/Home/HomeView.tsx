"use client";
import React from "react";
import HeroSection from "../Sections/HeroSection";
import useSearch from "@/hooks/useSearch";
import useDataMarvel from "@/hooks/useDataMarvel";
import useLimitView from "@/hooks/useLimitView";
import HeaderSection from "../Sections/HeaderSection";
import { useFavorites } from "@/context/favoritesContext";
import usePageCategory from "@/hooks/usePageCategory";

const HomeView = () => {
  const { search, handleChangeSearch } = useSearch();
  const { limit, handleChangeLimit } = useLimitView();
  const { page, setPage, selectedCategory, setSelectedCategory } =
    usePageCategory();
  const { isError, isLoading, data, totalPages } = useDataMarvel(
    search,
    limit,
    page,
    selectedCategory
  );
  const { isFavorite, toggleFavorite } = useFavorites();
  const [selectedFilter, setSelectedFilter] = React.useState("");
  return (
    <section>
      <HeroSection />

      <HeaderSection
        data={data || []}
        search={search}
        limit={limit}
        isError={isError}
        isLoading={isLoading}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setPage={setPage}
        page={page}
        totalPages={totalPages}
        handleChangeLimit={handleChangeLimit}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        setSelectedFilter={setSelectedFilter}
        handleChangeSearch={handleChangeSearch}
        selectedFilter={selectedFilter}
      />

      {/* <HeaderSection /> */}
    </section>
  );
};

export default HomeView;
