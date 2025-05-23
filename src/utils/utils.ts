import { ICharacter, MarvelItem } from "@/interfaces/data";

export const isCharacter = (item: MarvelItem): item is ICharacter => {
  return (item as ICharacter).name !== undefined;
};
