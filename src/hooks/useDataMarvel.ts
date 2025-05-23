import { IDataMarvel } from "@/interfaces/data";
import { getMarvel } from "@/lib/marvel";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useDataMarvel = () => {
  const [selectedCategory, setSelectedCategory] = useState("events");
  const { isLoading, isError, data } = useQuery({
    queryKey: ["marvel", selectedCategory],
    queryFn: async () => {
      const response = await getMarvel({ category: selectedCategory });
      const data = response.data as IDataMarvel;
      return data;
    },
    enabled: !!selectedCategory,
    staleTime: 1000 * 60 * 5,
  });

  return { selectedCategory, setSelectedCategory, isLoading, isError, data };
};

export default useDataMarvel;
