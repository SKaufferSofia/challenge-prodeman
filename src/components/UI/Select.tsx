import { ISelectProps } from "@/interfaces/ui";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

export const Select = ({
  arrayOptions,
  value,
  onChange,
  className,
}: ISelectProps) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`w-full appearance-none bg-secondaryWhite dark:bg-secondaryBlack text-textPrimary dark:text-textPrimary-dark font-semibold border border-background dark:border-gray-600 rounded-md py-2 pl-4 pr-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-redPrimary focus:border-redPrimary transition duration-150 ease-in-out ${className}`}
      >
        {arrayOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-sm dark:bg-secondaryBlack bg-secondaryWhite"
          >
            {option.label}
          </option>
        ))}
      </select>
      {/* Ícono personalizado */}
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
        <FaChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
};
