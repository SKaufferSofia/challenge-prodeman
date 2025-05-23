"use client";
import { Button } from "@/components/UI/Button";
import { CardsComponent } from "@/components/UI/Cards";
import { Input } from "@/components/UI/Input";
import { Select } from "@/components/UI/Select";
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

const CardsSection = () => {
  const { isError, isLoading, selectedCategory, setSelectedCategory, data } =
    useDataMarvel();
  const { seach, handleChangeSearch, filteredByName } = useSearch(data);
  const [selectedFilter, setSelectedFilter] = React.useState("");

  return (
    <section className="flex flex-col items-center justify-center py-10 px-10 md:px-20 lg:px-40 w-full h-full">
      {/*Botones de categorias */}
      <div className="flex flex-col md:flex-row gap-5 w-full mb-10 items-center md:justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            className={`w-40 py-3 rounded-md font-bold uppercase transition cursor-pointer hover:text-textPrimary-dark hover:bg-redPrimary/80 ${
              selectedCategory === category.name
                ? "bg-redPrimary text-textPrimary-dark"
                : "bg-secondaryWhite dark:bg-secondaryBlack"
            }`}
            onClick={() => {
              setSelectedCategory(category.name);
              setSelectedFilter("");
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
              selectedCategory === "events"
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
            value={seach}
            onChange={handleChangeSearch}
          />
        </div>
        <div className="flex gap-2 justify-center items-center">
          <p>View More</p>
          <Select arrayOptions={[]} value="" onChange={() => {}} />
        </div>
      </div>

      {isError && (
        <p className="anton-sc-regular text-base md:text-xl">
          Ha ocurrido un error al cargar los datos
        </p>
      )}

      {/*Tarjetas */}
      {isLoading ? (
        <Spiner />
      ) : seach ? (
        filteredByName && filteredByName.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredByName.map(
              (item) =>
                !item.thumbnail.path.includes("image_not_available") && (
                  <CardsComponent
                    key={item.id}
                    title={isCharacter(item) ? item.name : item.title}
                    img={item.thumbnail}
                    description={item.description}
                  />
                )
            )}
          </div>
        ) : (
          <p className="anton-sc-regular text-base md:text-xl">
            No se encontraron resultados
          </p>
        )
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.results &&
            data.results.map(
              (item) =>
                !item.thumbnail.path.includes("image_not_available") && (
                  <CardsComponent
                    key={item.id}
                    title={isCharacter(item) ? item.name : item.title}
                    img={item.thumbnail}
                    description={item.description}
                  />
                )
            )}
        </div>
      )}
    </section>
  );
};

export default CardsSection;
