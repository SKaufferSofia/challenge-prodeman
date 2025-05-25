"use client";
import React from "react";
import HeroSection from "../Sections/HeroSection";
import useSearch from "@/hooks/useSearch";
import useDataMarvel from "@/hooks/useDataMarvel";
import useLimitView from "@/hooks/useLimitView";
import HeaderSection from "../Sections/HeaderSection";
import { useFavorites } from "@/context/favoritesContext";
import usePageCategory from "@/hooks/usePageCategory";
import useFilterDate from "@/hooks/useFilterDate";
import useFilterPage from "@/hooks/useFilterPage";
import useFilterSeries from "@/hooks/useFilterSeries";
import {
  filteredData,
  handleChangeFilter,
  selectedFilter,
} from "@/utils/utils";

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

      {/* <HeaderSection /> */}
    </section>
  );
};

export default HomeView;
