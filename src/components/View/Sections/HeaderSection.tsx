"use client";
import React from "react";
import SectionCategory from "./SectionCategory";
import useSearch from "@/hooks/useSearch";
import useDataMarvel from "@/hooks/useDataMarvel";
import { IOption, Select } from "@/components/UI/Select";
import {
  categories,
  valueOptionDate,
  valueOptionPage,
  valueOptions,
} from "./options";
import { Input } from "@/components/UI/Input";
import { IoGrid } from "react-icons/io5";
import CardsSection from "./CardsSection";

const HeaderSection = () => {
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

  // console.log("data", data);

  return (
    <section className="flex flex-col items-center justify-center py-10 px-10 md:px-20 lg:px-40 w-full h-full">
      <SectionCategory
        gridRef={gridRef}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setPage={setPage}
        setSelectedFilter={setSelectedFilter}
        scrollToGrid={scrollToGrid}
      />

      {/*Filtrados y buscadores */}
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
      <CardsSection
        data={data || []}
        isLoading={isLoading}
        isError={isError}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        search={search}
        scrollToGrid={scrollToGrid}
      />
    </section>
  );
};

export default HeaderSection;
