import axios from "axios";

export const getMarvel = async ({ category }: { category: string }) => {
  try {
    const response = await axios.get(`/api/marvel?category=${category}`);
    return response.data;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};
