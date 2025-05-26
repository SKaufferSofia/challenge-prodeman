"use client";
import React from "react";
import { CardsComponent } from "@/components/UI/Cards";
import { Spiner } from "@/components/UI/Spiner";
import PaginationSection from "./PaginationSection";
import { Button } from "@/components/UI/Button";
import Link from "next/link";
import { CardsSectionProps } from "@/interfaces/sections";

const CardsSection = ({
  sectionId,
  data,
  isLoading,
  isError,
  page,
  setPage,
  totalPages,
  search,
  scrollToGrid,
  isFavorite,
  toggleFavorite,
}: CardsSectionProps) => {
  return (
    <section className="w-full bg-secondaryWhite dark:bg-secondaryBlack p-5 ">
      {isLoading ? (
        <Spiner />
      ) : isError ? (
        <p className="h-[50vh] text-center anton-sc-regular text-base md:text-xl">
          Something went wrong.
        </p>
      ) : search && data?.length === 0 ? (
        <p className="h-[50vh] text-center anton-sc-regular text-base md:text-xl">
          No search results found.
        </p>
      ) : sectionId === "favorites" && data?.length === 0 ? (
        <div className="h-[50vh]  flex flex-col items-center justify-start gap-4">
          <p className="anton-sc-regular text-base md:text-xl">
            You have no favorites yet.
          </p>
          <Button className="w-1/5 p-2 hover:scale-105 transition-all duration-200 font-semibold bg-redPrimary dark:bg-redPrimary-dark text-secondaryWhite ">
            <Link href={{ pathname: "/", query: { section: "home" } }}>
              Add Favorites
            </Link>
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.isArray(data) &&
              data.map((item) => (
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
          {!(page === 1 && totalPages === 1) && (
            <PaginationSection
              page={page}
              totalPages={totalPages}
              setPage={setPage}
              scrollToGrid={scrollToGrid}
            />
          )}
        </>
      )}
    </section>
  );
};

export default CardsSection;
