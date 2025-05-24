import { ICharacter, ICharacterFront } from "@/interfaces/data";

export const charactersResponse = (characters: ICharacter[]) => {
  return characters.map(
    (character): ICharacterFront => ({
      id: character.id,
      name: character.name,
      description:
        character.description === "" || character.description === null
          ? "Character witout description"
          : character.description,
      modified: character.modified,
      img: character.thumbnail.path + "." + character.thumbnail.extension,
      urlId: character.resourceURI,
      favorite: false,
    })
  );
};
