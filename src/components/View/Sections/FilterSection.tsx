import { Input } from "@/components/UI/Input";
import { IOption, Select } from "@/components/UI/Select";
import React from "react";
import { IoGrid } from "react-icons/io5";
import { limitOptions } from "./options";
import Checkbox from "@/components/UI/Checkbox";
import { FaChevronDown, FaFilter } from "react-icons/fa";

interface FilterSectionProps {
  arrayOptions: IOption[];
  limit: string;
  handleChangeLimit: (limit: string) => void;
  search: string;
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFilter: string;
  handleChangeFilter: (filter: string) => void;
  checkboxChecked: boolean;
  handleChangeImg: (checked: boolean) => void;
}

const FilterSection = ({
  arrayOptions,
  selectedFilter,
  handleChangeFilter,
  limit,
  handleChangeLimit,
  search,
  handleChangeSearch,
  checkboxChecked,
  handleChangeImg,
}: FilterSectionProps) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <div className="w-full border-b border-background dark:border-gray-600 flex flex-col gap-5 bg-secondaryWhite dark:bg-secondaryBlack p-5">
      {/* Dropdown */}
      <div
        className="flex gap-3 items-center justify-between cursor-pointer transition p-2"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <div className="flex gap-3">
          <FaFilter className="text-2xl text-redPrimary dark:text-redPrimary-dark mb-2" />
          <p className="text-textPrimary dark:text-textPrimary-dark font-semibold">
            Filters and Search
          </p>
        </div>
        <div className="flex gap-3">
          {dropdownOpen ? (
            <FaChevronDown className="text-xl text-redPrimary dark:text-redPrimary-dark mb-2 rotate-180" />
          ) : (
            <FaChevronDown className="text-xl text-redPrimary dark:text-redPrimary-dark mb-2" />
          )}
        </div>
      </div>

      {dropdownOpen && (
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
          <div className="flex flex-col w-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-center gap-5 ">
              <Select
                arrayOptions={arrayOptions}
                value={selectedFilter}
                onChange={(e) => handleChangeFilter(e.target.value)}
              />

              <div className="hidden lg:flex w-px h-6 bg-redPrimary mx-2" />

              <div className="flex items-center gap-2">
                <Checkbox
                  checked={checkboxChecked}
                  onChange={() => handleChangeImg(!checkboxChecked)}
                />
                <span className="text-textPrimary dark:text-textPrimary-dark font-semibold ">
                  Hide missing images
                </span>
              </div>
            </div>

            <p className="text-sm text-redPrimary font-semibold mt-2">
              Filters are applied per page
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center lg:justify-center gap-5 ">
            <Input
              type="text"
              name="search"
              placeholder="Search by name"
              className="w-full md:w-1/2"
              value={search}
              onChange={handleChangeSearch}
            />
            <div className="hidden lg:flex w-px h-6 bg-redPrimary mx-2" />
            <div className="flex items-center gap-1">
              <IoGrid className="text-2xl" />
              <Select
                className="bg-transparent font-extrabold border-none"
                arrayOptions={limitOptions}
                value={limit}
                onChange={(e) => {
                  handleChangeLimit(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
