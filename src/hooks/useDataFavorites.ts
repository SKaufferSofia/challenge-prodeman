import { FavoriteItem } from "@/context/favoritesContext";
import { useQuery } from "@tanstack/react-query";

const useDataFavorites = (
  favorites: FavoriteItem[],
  search: string,
  limit: string,
  page: number,
  selectedCategory: string
) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["favorites", selectedCategory, limit, page, search, favorites],
    queryFn: () => {
      if (!favorites.length) return { results: [] };

      const filtered = favorites
        .filter((favorite) => favorite.category === selectedCategory)
        .filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );

      const start = (page - 1) * parseInt(limit);
      const paginated = filtered.slice(start, start + parseInt(limit));

      return { results: paginated, total: filtered.length };
    },
    enabled: !!selectedCategory && !!limit && !!page,
    staleTime: 1000 * 60 * 5,
  });

  const totalPages = data?.total ? Math.ceil(data.total / parseInt(limit)) : 0;

  return {
    isLoading,
    isError,
    data: data?.results || [],
    totalPages,
  };
};

export default useDataFavorites;
