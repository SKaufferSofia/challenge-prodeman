import { ICharacter, IComic, IDataMarvel, ISeries } from "@/interfaces/data";
import { getMarvel } from "@/lib/marvel";
import {
  charactersResponse,
  comicsResponse,
  seriesResponse,
} from "@/utils/responseFront";
import { useQuery } from "@tanstack/react-query";

const useDataMarvel = (
  search: string,
  limit: string,
  page: number,
  selectedCategory: string
) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["marvel", selectedCategory, limit, page, search],
    queryFn: async () => {
      const response = await getMarvel({
        category: selectedCategory,
        limit: limit,
        offset: `${(page - 1) * Number(limit)}`,
        search: search && search.length >= 3 ? search : "",
      });
      const data = response.data as IDataMarvel;

      const characters = charactersResponse(
        (data && data.results ? data.results : []) as ICharacter[]
      );
      const comics = comicsResponse(
        (data && data.results
          ? (data.results as IComic[]).filter(
              (item) =>
                typeof item.title === "string" &&
                !item.title.includes("Star Wars")
            )
          : []) as IComic[]
      );

      const series = seriesResponse(
        (data && data.results
          ? (data.results as ISeries[]).filter(
              (item) =>
                typeof item.title === "string" &&
                !item.title.includes("Star Wars")
            )
          : []) as ISeries[]
      );

      return {
        ...data,
        results:
          selectedCategory === "characters"
            ? characters
            : selectedCategory === "comics"
            ? comics
            : selectedCategory === "series"
            ? series
            : [],
      };
    },
    enabled: !!selectedCategory && !!limit && !!page,
    staleTime: 1000 * 60 * 5,
  });

  const totalPages = data ? Math.ceil(data.total / parseInt(limit)) : 0;

  return {
    isLoading,
    isError,
    data: data?.results,
    totalPages,
  };
};

export default useDataMarvel;
