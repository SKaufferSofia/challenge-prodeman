import { useState } from "react";

const usePageCategory = ({ section }: { section: string }) => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(section);

  return { page, setPage, selectedCategory, setSelectedCategory };
};

export default usePageCategory;
