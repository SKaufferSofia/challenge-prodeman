import axios from "axios";

export const getMarvel = async ({
  category,
  limit,
  offset,
  search,
}: {
  category: string;
  limit: string;
  offset: string;
  search: string;
}) => {
  try {
    const response = await axios.get(`/api/marvel?category=${category}`, {
      params: {
        search,
        limit,
        offset,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
