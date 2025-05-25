"use client";
import React from "react";
import HeroSection from "../Sections/HeroSection";
import usePageCategory from "@/hooks/usePageCategory";
import { useFavorites } from "@/context/favoritesContext";
import useDataFavorites from "@/hooks/useDataFavorites";
import useLimitView from "@/hooks/useLimitView";
import HeaderSection from "../Sections/HeaderSection";
import useSearch from "@/hooks/useSearch";
import useFilterDate from "@/hooks/useFilterDate";
import useFilterPage from "@/hooks/useFilterPage";
import useFilterSeries from "@/hooks/useFilterSeries";
import {
  filteredData,
  handleChangeFilter,
  selectedFilter,
} from "@/utils/utils";

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

  //Hook de filtros
  const { characterFilter, filteredCharacters, handleChangeDateCharacters } =
    useFilterDate();
  const { comicFilter, handleChangePageComics, filteredComics } =
    useFilterPage();
  const { eventFilter, handleChangeEventFilter, filteredEventsDate } =
    useFilterSeries();

  return (
    <section>
      <HeroSection />
      <HeaderSection
        data={filteredData(
          selectedCategory,
          data || [],
          filteredCharacters,
          filteredComics,
          filteredEventsDate
        )}
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
        selectedFilter={selectedFilter(
          selectedCategory,
          characterFilter,
          comicFilter,
          eventFilter
        )}
        handleChangeFilter={handleChangeFilter(
          selectedCategory,
          handleChangeDateCharacters,
          handleChangePageComics,
          handleChangeEventFilter
        )}
        handleChangeSearch={handleChangeSearch}
      />
    </section>
  );
};

export default FavoritesView;
