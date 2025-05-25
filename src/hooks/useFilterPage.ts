import { IComicFront } from "@/interfaces/data";
import { useEffect, useState } from "react";

const useFilterPage = () => {
  const [comicFilter, setComicFilter] = useState("all");

  function filterComicsByPages(pageCount: number, filter: string): boolean {
    switch (filter) {
      case "lessThan50":
        return pageCount > 0 && pageCount < 50;
      case "50to100":
        return pageCount >= 50 && pageCount <= 100;
      case "100to200":
        return pageCount > 100 && pageCount <= 200;
      case "moreThan200":
        return pageCount > 200;
      case "noPages":
        return pageCount === 0;
      default:
        return true;
    }
  }

  const filteredComics = (comics: IComicFront[]) => {
    return comics.filter((comic) => {
      const matchesFilter =
        comicFilter === "all" ||
        filterComicsByPages(comic.pageCount, comicFilter);
      return matchesFilter;
    });
  };

  useEffect(() => {
    const pageComics = localStorage.getItem("pageComics");
    if (pageComics) {
      setComicFilter(pageComics);
    }
  }, []);

  const handleChangePageComics = (pageComics: string) => {
    localStorage.setItem("pageComics", pageComics);
    setComicFilter(pageComics);
  };

  return {
    comicFilter,
    setComicFilter,
    filteredComics,
    handleChangePageComics,
  };
};

export default useFilterPage;
