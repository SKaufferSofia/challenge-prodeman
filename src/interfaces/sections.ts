import { ICharacterFront, IComicFront, ISeriesFront } from "@/interfaces/data";
import { FavoriteItem, FavoritesContextType } from "@/context/favoritesContext";
import { IOption } from "./ui";
export interface CardsSectionProps {
  sectionId: string;
  data:
    | ICharacterFront[]
    | IComicFront[]
    | ISeriesFront[]
    | FavoriteItem[]
    | [];
  isLoading: boolean;
  isError: boolean;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  search: string;
  scrollToGrid: (category: string) => void;
  isFavorite: FavoritesContextType["isFavorite"];
  toggleFavorite: FavoritesContextType["toggleFavorite"];
  selectedFilter: string;
}

export interface FilterSectionProps {
  arrayOptions: IOption[];
  limit: string;
  handleChangeLimit: (limit: string) => void;
  search: string;
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFilter: string;
  handleChangeFilter: (filter: string) => void;
  checkboxChecked: boolean;
  handleChangeImg: (checked: boolean) => void;
}

export interface HeaderSectionProps {
  sectionId: string;
  data:
    | ICharacterFront[]
    | IComicFront[]
    | ISeriesFront[]
    | FavoriteItem[]
    | [];
  isLoading: boolean;
  isError: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  search: string;
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  limit: string;
  handleChangeLimit: (limit: string) => void;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedFilter: string;
  handleChangeFilter: (filter: string) => void;
  isFavorite: FavoritesContextType["isFavorite"];
  toggleFavorite: FavoritesContextType["toggleFavorite"];
  checkboxChecked: boolean;
  handleChangeImg: (checked: boolean) => void;
}

export interface HeroSectionProps {
  section: string;
  sectionId: string;
  url: string;
  title: string;
  title2: string;
  description: string;
}

export interface PaginationSectionProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  scrollToGrid: () => void;
}

export type SectionCategoryProps = {
  gridRef: React.RefObject<HTMLDivElement | null>;
  categories: { id: number; name: string }[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  scrollToGrid: (name: string) => void;
};
