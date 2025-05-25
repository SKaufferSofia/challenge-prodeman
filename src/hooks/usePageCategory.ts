import { useState } from "react";

const usePageCategory = () => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("characters");

  return { page, setPage, selectedCategory, setSelectedCategory };
};

export default usePageCategory;
