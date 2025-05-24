import { IDataMarvel } from "@/interfaces/data";
import { getMarvel } from "@/lib/marvel";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useDataMarvel = (search?: string) => {
  const [selectedCategory, setSelectedCategory] = useState("characters");
  const [limit, setLimit] = useState("16");
  const [page, setPage] = useState(1);
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

      return {
        ...data,
        results: Array.isArray(data.results) ? data.results : [],
      };
    },
    enabled: !!selectedCategory && !!limit,
    staleTime: 1000 * 60 * 5,
  });

  const totalPages = data ? Math.ceil(data.total / parseInt(limit)) : 0;

  return {
    selectedCategory,
    setSelectedCategory,
    isLoading,
    isError,
    data,
    limit,
    setLimit,
    page,
    setPage,
    totalPages,
  };
};

export default useDataMarvel;
