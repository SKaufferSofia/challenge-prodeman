import { Button } from "@/components/UI/Button";
import React from "react";

type SectionCategoryProps = {
  gridRef: React.RefObject<HTMLDivElement | null>;
  categories: { id: number; name: string }[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  scrollToGrid: () => void;
};

const SectionCategory = ({
  gridRef,
  categories,
  selectedCategory,
  setSelectedCategory,
  setPage,
  scrollToGrid,
}: SectionCategoryProps) => {
  return (
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
            scrollToGrid();
          }}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default SectionCategory;
