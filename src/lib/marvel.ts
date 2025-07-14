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

export const getMarvelId = async ({
  category,
  id,
}: {
  category: string;
  id: string;
}) => {
  try {
    const response = await axios.get(`/api/marvel/?category=${category}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMarvelDetails = async ({
  category,
  id,
  categoryDetails,
}: {
  category: string;
  id: string;
  categoryDetails: string;
}) => {
  try {
    const response = await axios.get(
      `/api/marvel/?category=${category}/${id}/${categoryDetails}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
