import { Input } from "@/components/UI/Input";
import { IOption, Select } from "@/components/UI/Select";
import React from "react";
import { IoGrid } from "react-icons/io5";
import { limitOptions } from "./options";

interface FilterSectionProps {
  arrayOptions: IOption[];
  limit: string;
  handleChangeLimit: (limit: string) => void;
  search: string;
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFilter: string;
  handleChangeFilter: (filter: string) => void;
}

const FilterSection = ({
  arrayOptions,
  selectedFilter,
  handleChangeFilter,
  limit,
  handleChangeLimit,
  search,
  handleChangeSearch,
}: FilterSectionProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between mb-10 gap-5">
      <div className="flex flex-col md:flex-row gap-5">
        <Select
          arrayOptions={arrayOptions}
          value={selectedFilter}
          onChange={(e) => handleChangeFilter(e.target.value)}
        />
        <Input
          type="text"
          name="search"
          placeholder="Search by name"
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
