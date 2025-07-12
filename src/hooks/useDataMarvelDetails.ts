import { ICharacter, IComic, IDataMarvel, ISeries } from "@/interfaces/data";
import { getMarvelId } from "@/lib/marvel";
import {
  charactersDetailsResponse,
  comicsResponse,
  seriesResponse,
} from "@/utils/responseFront";
import { useQuery } from "@tanstack/react-query";

const useDataMarvelDetails = (selectedCategory: string, id: string) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["marvelId", selectedCategory, id],
    queryFn: async () => {
      const response = await getMarvelId({
        category: selectedCategory,
        id: id,
      });
      const data = response.data as IDataMarvel;

      const character = await charactersDetailsResponse(
        (data && data.results ? data.results : []) as ICharacter[]
      );
      const comic = comicsResponse(
        (data && data.results
          ? (data.results as IComic[]).filter(
              (item) =>
                typeof item.title === "string" &&
                !item.title.includes("Star Wars")
            )
          : []) as IComic[]
      );

      const serie = seriesResponse(
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
            ? character
            : selectedCategory === "comics"
            ? comic
            : selectedCategory === "series"
            ? serie
            : [],
      };
    },
    enabled: !!selectedCategory,
    staleTime: 1000 * 60 * 5,
  });

  return {
    isLoading,
    isError,
    data: data?.results,
  };
};

export default useDataMarvelDetails;
