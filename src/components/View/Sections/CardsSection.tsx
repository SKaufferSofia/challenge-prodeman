"use client";
import { Button } from "@/components/UI/Button";
import { CardsComponent } from "@/components/UI/Cards";
import { Input } from "@/components/UI/Input";
import { IOption, Select } from "@/components/UI/Select";
import { Spiner } from "@/components/UI/Spiner";
import useDataMarvel from "@/hooks/useDataMarvel";
import React from "react";
import {
  categories,
  valueOptionDate,
  valueOptionPage,
  valueOptions,
} from "./options";
import { isCharacter } from "@/utils/utils";
import useSearch from "@/hooks/useSearch";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const CardsSection = () => {
  const gridRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToGrid = () => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const { search, handleChangeSearch } = useSearch();
  const {
    isError,
    isLoading,
    selectedCategory,
    setSelectedCategory,
    data,
    limit,
    setLimit,
    page,
    setPage,
    totalPages,
  } = useDataMarvel(search);

  const [selectedFilter, setSelectedFilter] = React.useState("");

  const limitOptions: IOption[] = [
    {
      value: " 16",
      label: "16",
    },
    {
      value: "32",
      label: "32",
    },
    {
      value: "48",
      label: "48",
    },
    {
      value: "64",
      label: "64",
    },
    {
      value: "80",
      label: "80",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-10 px-10 md:px-20 lg:px-40 w-full h-full">
      {/*Botones de categorias */}
      <div
        ref={gridRef}
        className="flex flex-col md:flex-row gap-5 w-full mb-10 items-center md:justify-center"
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            className={` w-40 py-3 rounded-md font-extrabold uppercase transition cursor-pointer hover:text-textPrimary-dark hover:bg-redPrimary/80 ${
              selectedCategory === category.name
                ? "bg-redPrimary text-textPrimary-dark"
                : "bg-secondaryWhite dark:bg-secondaryBlack"
            }`}
            onClick={() => {
              setSelectedCategory(category.name);
              setPage(1);
              setSelectedFilter("");
              scrollToGrid();
            }}
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between mb-10 gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <Select
            arrayOptions={
              selectedCategory === "series"
                ? valueOptionDate
                : selectedCategory === "comics"
                ? valueOptionPage
                : valueOptions
            }
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          />
          <Input
            type="text"
            name="search"
            placeholder="Buscar por nombre"
            value={search}
            onChange={handleChangeSearch}
          />
        </div>
        <div className="flex gap-2 justify-center items-center group">
          <IoGrid className="text-2xl" />
          <Select
            className="bg-transparent font-extrabold"
            arrayOptions={limitOptions}
            value={limit}
            onChange={(e) => {
              // setPage(1);
              //  setSelectedFilter();
              setLimit(e.target.value);
            }}
          />
        </div>
      </div>

      {isError && (
        <p className="anton-sc-regular text-base md:text-xl">
          No results found.
        </p>
      )}

      {/*Tarjetas */}
      {isLoading ? (
        <Spiner />
      ) : search && data?.results?.length === 0 ? (
        <p className="anton-sc-regular text-base md:text-xl">
          No search results found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(data?.results) &&
            data.results
              // .filter(
              //   (item) => !item.thumbnail.path.includes("image_not_available")
              // )
              .map((item) => (
                <CardsComponent
                  key={item.id}
                  title={isCharacter(item) ? item.name : item.title}
                  img={item.thumbnail}
                  description={item.description}
                />
              ))}
        </div>
      )}
      <div className="flex justify-center items-center gap-2 mt-8">
        <Button
          onClick={() => {
            setPage((p) => Math.max(p - 1, 1));
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
            setPage((p) => Math.min(p + 1, totalPages));
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
