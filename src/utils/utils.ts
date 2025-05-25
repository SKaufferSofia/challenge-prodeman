import { ICharacterFront, IComicFront, ISeriesFront } from "@/interfaces/data";

export const filteredData = (
  selectedCategory: string,
  data: ICharacterFront[] | IComicFront[] | ISeriesFront[],
  filteredCharacters: (data: ICharacterFront[]) => ICharacterFront[],
  filteredComics: (data: IComicFront[]) => IComicFront[],
  filteredEventsDate: (data: ISeriesFront[]) => ISeriesFront[]
) => {
  return selectedCategory === "characters"
    ? filteredCharacters((data as ICharacterFront[]) || [])
    : selectedCategory === "comics"
    ? filteredComics((data as IComicFront[]) || [])
    : filteredEventsDate((data as ISeriesFront[]) || []);
};

export const selectedFilter = (
  selectedCategory: string,
  characterFilter: string,
  comicFilter: string,
  eventFilter: string
) => {
  return selectedCategory === "characters"
    ? characterFilter
    : selectedCategory === "comics"
    ? comicFilter
    : eventFilter;
};

export const handleChangeFilter = (
  selectedCategory: string,
  handleChangeDateCharacters: (filter: string) => void,
  handleChangePageComics: (filter: string) => void,
  handleChangeEventFilter: (filter: string) => void
) => {
  return selectedCategory === "characters"
    ? handleChangeDateCharacters
    : selectedCategory === "comics"
    ? handleChangePageComics
    : handleChangeEventFilter;
};
