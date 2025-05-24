import { IOption } from "@/components/UI/Select";
import { ICharacterFront } from "./data";

export interface ICardsSectionProps {
  data: ICharacterFront[] | [];
  isLoading: boolean;
  isError: boolean;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  limit: string;
  setLimit: (limit: string) => void;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  search: string;
  limitOptions: IOption[];
}
