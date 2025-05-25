"use client";
import React from "react";
import HeroSection from "../Sections/HeroSection";
import usePageCategory from "@/hooks/usePageCategory";
import { useFavorites } from "@/context/favoritesContext";
import useDataFavorites from "@/hooks/useDataFavorites";
import useLimitView from "@/hooks/useLimitView";
import HeaderSection from "../Sections/HeaderSection";
import useSearch from "@/hooks/useSearch";

const FavoritesView = () => {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const { page, setPage, selectedCategory, setSelectedCategory } =
    usePageCategory();
  const { search, handleChangeSearch } = useSearch();
  const { limit, handleChangeLimit } = useLimitView();
  const { data, isError, isLoading, totalPages } = useDataFavorites(
    favorites,
    search,
    limit,
    page,
    selectedCategory
  );
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
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        handleChangeSearch={handleChangeSearch}
      />
    </section>
  );
};

export default FavoritesView;
