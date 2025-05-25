import {
  ICharacter,
  ICharacterFront,
  IComic,
  IComicFront,
  ISeries,
  ISeriesFront,
} from "@/interfaces/data";

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

export const comicsResponse = (comics: IComic[]) => {
  return comics.map(
    (comic): IComicFront => ({
      id: comic.id,
      name: comic.title,
      description:
        comic.description === "" || comic.description === null
          ? "Comic witout description"
          : comic.description,
      modified: comic.modified,
      pageCount: comic.pageCount,
      img: comic.thumbnail.path + "." + comic.thumbnail.extension,
      urlId: comic.resourceURI,
      favorite: false,
    })
  );
};

export const seriesResponse = (series: ISeries[]) => {
  return series.map(
    (comic): ISeriesFront => ({
      id: comic.id,
      name: comic.title,
      description:
        comic.description === "" || comic.description === null
          ? "Comic witout description"
          : comic.description,
      modified: comic.modified,
      startYear: comic.startYear,
      endYear: comic.endYear,
      img: comic.thumbnail.path + "." + comic.thumbnail.extension,
      urlId: comic.resourceURI,
      favorite: false,
    })
  );
};
