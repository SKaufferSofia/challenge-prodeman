import { Input } from "@/components/UI/Input";
import { Select } from "@/components/UI/Select";
import React from "react";
import { IoGrid } from "react-icons/io5";
import { limitOptions } from "./options";

interface FilterSectionProps {
  limit: string;
  handleChangeLimit: (limit: string) => void;
  search: string;
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterSection = ({
  limit,
  handleChangeLimit,
  search,
  handleChangeSearch,
}: FilterSectionProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between mb-10 gap-5">
      <div className="flex flex-col md:flex-row gap-5">
        {/* <Select
            arrayOptions={
              selectedCategory === "series"
                ? valueOptionDate
                : selectedCategory === "comics"
                ? valueOptionPage
                : valueOptions
            }
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          /> */}
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
            handleChangeLimit(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default FilterSection;
