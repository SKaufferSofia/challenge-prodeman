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
import { useSearchParams } from "next/navigation";

const HomeView = () => {
  const { search, handleChangeSearch } = useSearch();
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  const { limit, handleChangeLimit } = useLimitView();
  const { page, setPage, selectedCategory, setSelectedCategory } =
    usePageCategory({ section: section || "characters" });

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
        sectionId={selectedCategory}
        url="https://mibucket-personal-sofia.s3.us-east-1.amazonaws.com/Challenge+prodeman/ehjgk76y2kv41.jpg"
        title="EXPLORE THE"
        title2="MARVEL UNIVERSE"
        description="Discover iconic characters, comics, and epic events that shaped
          generations."
      />
      <HeaderSection
        section="home"
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

export default HomeView;
