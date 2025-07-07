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
import useScrollToSection from "@/hooks/useScrollToSection";
import useFilterImgNotFound from "@/hooks/useFilterImgNotFound";

const FavoritesView = () => {
  useScrollToSection();
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
  const { imgNotFound, handleChangeImg, filterDataImgNotFound } =
    useFilterImgNotFound();

  return (
    <section>
      <HeroSection
        section="favorites"
        sectionId={selectedCategory}
        url="https://mibucket-personal-sofia.s3.us-east-1.amazonaws.com/Challenge+prodeman/mi_wallpaper_mas_dsk_01.jpg"
        title="YOUR MULTIVERSE"
        title2="FAVORITES"
        description="This is where your favorite Marvel characters, comics, and series come together. Return anytime to explore more and keep building your ultimate hero (or villain) collection."
      />

      <HeaderSection
        sectionId={selectedCategory}
        data={filteredData(
          selectedCategory,
          filterDataImgNotFound(data || []),
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
        checkboxChecked={imgNotFound}
        handleChangeImg={handleChangeImg}
      />
    </section>
  );
};

export default FavoritesView;
