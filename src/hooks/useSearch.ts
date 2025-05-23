import { IDataMarvel } from "@/interfaces/data";
import { isCharacter } from "@/utils/utils";
import { useState } from "react";

const useSearch = (data: IDataMarvel | undefined) => {
  const [seach, setSeach] = useState("");

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSeach(e.target.value);
  };

  const filteredByName =
    data?.results &&
    data?.results.filter((item) =>
      isCharacter(item) && isCharacter(item)
        ? item.name.toLowerCase().includes(seach.toLowerCase())
        : item.title.toLowerCase().includes(seach.toLowerCase())
    );

  return { seach, handleChangeSearch, filteredByName };
};

export default useSearch;
