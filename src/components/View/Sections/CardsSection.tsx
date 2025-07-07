"use client";
import React from "react";
import { CardsComponent } from "@/components/UI/Cards";
import { Spiner } from "@/components/UI/Spiner";
import PaginationSection from "./PaginationSection";
import { Button } from "@/components/UI/Button";
import Link from "next/link";
import { CardsSectionProps } from "@/interfaces/sections";
import { AnimatePresence, motion } from "framer-motion";

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
  selectedFilter,
}: CardsSectionProps) => {
  console.log("selecedFilter", selectedFilter);

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
      ) : selectedFilter && data?.length === 0 && sectionId !== "favorites" ? (
        <div className="h-[50vh] flex flex-col justify-between">
          <p className="text-center anton-sc-regular text-base md:text-xl">
            No results found. Try changing the page, filters, cards per view, or
            unchecking hide broken images.
          </p>

          <PaginationSection
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            scrollToGrid={() => scrollToGrid(sectionId)}
          />
        </div>
      ) : sectionId === "favorites" && data?.length === 0 ? (
        <div className="h-[50vh]  flex flex-col items-center justify-start gap-4">
          <p className="anton-sc-regular text-base md:text-xl">
            You have no favorites yet.
          </p>
          <Button
            type="button"
            className="md:w-1/5 p-2 font-semibold bg-redPrimary dark:bg-redPrimary-dark text-secondaryWhite "
          >
            <Link href={{ pathname: "/", query: { section: "home" } }}>
              Add Favorites
            </Link>
          </Button>
        </div>
      ) : (
        <>
          <motion.div
            layout
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="wait">
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
            </AnimatePresence>
          </motion.div>
          {!(page === 1 && totalPages === 1) && (
            <PaginationSection
              page={page}
              totalPages={totalPages}
              setPage={setPage}
              scrollToGrid={() => scrollToGrid(sectionId)}
            />
          )}
        </>
      )}
    </section>
  );
};

export default CardsSection;
