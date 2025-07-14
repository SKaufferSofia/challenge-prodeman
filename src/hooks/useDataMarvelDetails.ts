import { ICharacter, IComic, IDataMarvel, ISeries } from "@/interfaces/data";
import { getMarvelId } from "@/lib/marvel";
import {
  charactersDetailsResponse,
  comicsDetailsResponse,
  seriesDetailsResponse,
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

      // Preprocesar los resultados comunes
      const results = data?.results ?? [];

      if (selectedCategory === "characters") {
        const character = await charactersDetailsResponse(
          results as ICharacter[]
        );
        return { ...data, results: character };
      }

      if (selectedCategory === "comics") {
        const comic = await comicsDetailsResponse(results as IComic[]);
        console.log("comic", comic);

        return { ...data, results: comic };
      }

      if (selectedCategory === "series") {
        const serie = await seriesDetailsResponse(results as ISeries[]);
        return { ...data, results: serie };
      }

      return { ...data, results: [] };
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
