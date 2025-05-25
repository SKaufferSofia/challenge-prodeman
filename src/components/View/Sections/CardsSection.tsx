"use client";
import React from "react";
import { Button } from "@/components/UI/Button";
import { CardsComponent } from "@/components/UI/Cards";
import { Spiner } from "@/components/UI/Spiner";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ICharacterFront, IComicFront, ISeriesFront } from "@/interfaces/data";
import { useFavorites } from "@/context/favoritesContext";
interface CardsSectionProps {
  data: ICharacterFront[] | IComicFront[] | ISeriesFront[] | [];
  isLoading: boolean;
  isError: boolean;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  search: string;
  scrollToGrid: () => void;
}

const CardsSection = ({
  data,
  isLoading,
  isError,
  page,
  setPage,
  totalPages,
  search,
  scrollToGrid,
}: CardsSectionProps) => {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  console.log("favorites", favorites);

  return (
    <section>
      {isLoading ? (
        <Spiner />
      ) : isError ? (
        <p className="anton-sc-regular text-base md:text-xl">
          No results found.
        </p>
      ) : search && data?.length === 0 ? (
        <p className="anton-sc-regular text-base md:text-xl">
          No search results found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(data) &&
            data
              // .filter(
              //   (item) => !item.thumbnail.path.includes("image_not_available")
              // )
              .map((item) => (
                <CardsComponent
                  key={item.id}
                  title={item.name}
                  img={item.img}
                  description={item.description}
                  favorites={isFavorite(item.id)}
                  toggleFavorite={() => toggleFavorite(item)}
                />
              ))}
        </div>
      )}
      <div className="flex justify-center items-center gap-2 mt-8">
        <Button
          onClick={() => {
            setPage(Math.max(page - 1, 1));
            scrollToGrid();
          }}
          disabled={page === 1}
        >
          <FaArrowLeft className="h-4 w-4" />
        </Button>
        <Button>
          {page} de {totalPages}
        </Button>
        <Button
          onClick={() => {
            setPage(Math.min(page + 1, totalPages));
            scrollToGrid();
          }}
          disabled={page === totalPages}
        >
          <FaArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default CardsSection;
