// hooks/useSearch.ts

import { useState } from "react";

const useSearch = () => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return { search, handleChangeSearch, setSearch };
};

export default useSearch;
