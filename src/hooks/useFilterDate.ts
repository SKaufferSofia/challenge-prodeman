import { ICharacterFront } from "@/interfaces/data";
import { useEffect, useState } from "react";

const useFilterDate = () => {
  const [characterFilter, setCharacterFilter] = useState("all");

  function isDateInRange(dateString: string, filter: string): boolean {
    const date = new Date(dateString);
    console.log("data", date);

    const now = new Date();

    switch (filter) {
      case "today":
        return date.toDateString() === now.toDateString();
      case "last5Years":
        const fiveYearsAgo = new Date();
        fiveYearsAgo.setFullYear(now.getFullYear() - 5);
        return date >= fiveYearsAgo && date <= now;

      case "last10Years":
        const tenYearsAgo = new Date();
        tenYearsAgo.setFullYear(now.getFullYear() - 10);
        return date >= tenYearsAgo && date <= now;

      case "before2010":
        return date.getFullYear() < 2010;

      default:
        return true;
    }
  }

  const filteredCharacters = (characters: ICharacterFront[]) => {
    console.log("character", characters);

    return characters.filter((character) => {
      const matchesFilter =
        characterFilter === "all" ||
        isDateInRange(character.modified, characterFilter);
      console.log("matchesFilter", matchesFilter);

      return matchesFilter;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dateCharacters = localStorage.getItem("dateCharacters");
      if (dateCharacters) {
        setCharacterFilter(dateCharacters);
      }
    }
  }, []);

  const handleChangeDateCharacters = (dateCharacters: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dateCharacters", dateCharacters);
    }
    setCharacterFilter(dateCharacters);
  };

  return { characterFilter, handleChangeDateCharacters, filteredCharacters };
};

export default useFilterDate;
