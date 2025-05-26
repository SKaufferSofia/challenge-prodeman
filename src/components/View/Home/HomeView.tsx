"use client";
import React from "react";
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
import HeroSection from "../Sections/HeroSection";
import useFilterImgNotFound from "@/hooks/useFilterImgNotFound";

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
  const { imgNotFound, handleChangeImg, filterDataImgNotFound } =
    useFilterImgNotFound();

  return (
    <section>
      <HeroSection
        section="home"
        url="https://mibucket-personal-sofia.s3.us-east-1.amazonaws.com/Challenge+prodeman/ehjgk76y2kv41.jpg"
        title="EXPLORE THE"
        title2="MARVEL UNIVERSE"
        description="Discover iconic characters, comics, and epic events that shaped
          generations."
      />
      <HeaderSection
        sectionId="home"
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

      {/* <HeaderSection /> */}
    </section>
  );
};

export default HomeView;
