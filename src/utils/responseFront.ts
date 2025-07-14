import {
  ICharacter,
  ICharacterFront,
  IComic,
  IComicFront,
  ISeries,
  ISeriesFront,
} from "@/interfaces/data";
import { getMarvelDetails } from "@/lib/marvel";

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
      category: "characters",
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
      category: "comics",
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
      category: "series",
    })
  );
};

export const charactersDetailsResponse = async (characters: ICharacter[]) => {
  const charactersFront = await Promise.all(
    characters.map(async (character): Promise<ICharacterFront> => {
      const [
        comics,
        series,
        //  events,
      ] = await Promise.all([
        getMarvelDetails({
          category: "characters",
          id: character.id.toString(),
          categoryDetails: "comics",
        }),
        getMarvelDetails({
          category: "characters",
          id: character.id.toString(),
          categoryDetails: "series",
        }),
        // getMarvelDetails({
        //   category: "characters",
        //   id: character.id.toString(),
        //   categoryDetails: "events",
        // }),
      ]);

      return {
        id: character.id,
        name: character.name,
        description:
          character.description === "" || character.description === null
            ? "Character without description"
            : character.description,
        modified: character.modified,
        img: character.thumbnail.path + "." + character.thumbnail.extension,
        urlId: character.resourceURI,
        favorite: false,
        category: "characters",
        comics: comicsResponse(
          (comics && comics.data.results ? comics.data.results : []) as IComic[]
        ),
        series: seriesResponse(
          (series && series.data.results
            ? series.data.results
            : []) as ISeries[]
        ),
        detailUrl:
          character.urls?.find((url) => url.type === "detail")?.url || "",
        wikiUrl: character.urls?.find((url) => url.type === "wiki")?.url || "",
        comicsUrl:
          character.urls?.find((url) => url.type === "comiclink")?.url || "",
      };
    })
  );

  return charactersFront;
};

export const comicsDetailsResponse = async (comics: IComic[]) => {
  const comicsFront = await Promise.all(
    comics.map(async (comic): Promise<IComicFront> => {
      const [characters] = await Promise.all([
        getMarvelDetails({
          category: "comics",
          id: comic.id.toString(),
          categoryDetails: "characters",
        }),
      ]);

      return {
        id: comic.id,
        name: comic.title,
        description:
          comic.description === "" || comic.description === null
            ? "Comic without description"
            : comic.description,
        modified: comic.modified,
        pageCount: comic.pageCount,
        img: comic.thumbnail.path + "." + comic.thumbnail.extension,
        urlId: comic.resourceURI,
        favorite: false,
        category: "comics",
        characters: charactersResponse(
          (characters && characters.data.results
            ? characters.data.results
            : []) as ICharacter[]
        ),
        detailUrl: comic.urls?.find((url) => url.type === "detail")?.url || "",
        wikiUrl: comic.urls?.find((url) => url.type === "wiki")?.url || "",
        comicsUrl:
          comic.urls?.find((url) => url.type === "comiclink")?.url || "",
      };
    })
  );
  console.log("comicsFront", comicsFront);

  return comicsFront;
};

export const seriesDetailsResponse = async (series: ISeries[]) => {
  const seriesFront = await Promise.all(
    series.map(async (serie): Promise<ISeriesFront> => {
      const [characters, comics] = await Promise.all([
        getMarvelDetails({
          category: "series",
          id: serie.id.toString(),
          categoryDetails: "characters",
        }),
        getMarvelDetails({
          category: "series",
          id: serie.id.toString(),
          categoryDetails: "comics",
        }),
      ]);

      return {
        id: serie.id,
        name: serie.title,
        description:
          serie.description === "" || serie.description === null
            ? "Comic without description"
            : serie.description,
        modified: serie.modified,
        startYear: serie.startYear,
        endYear: serie.endYear,
        img: serie.thumbnail.path + "." + serie.thumbnail.extension,
        urlId: serie.resourceURI,
        favorite: false,
        category: "series",
        characters: charactersResponse(
          (characters && characters.data.results
            ? characters.data.results
            : []) as ICharacter[]
        ),
        comics: comicsResponse(
          (comics && comics.data.results ? comics.data.results : []) as IComic[]
        ),
        detailUrl: serie.urls?.find((url) => url.type === "detail")?.url || "",
        wikiUrl: serie.urls?.find((url) => url.type === "wiki")?.url || "",
        comicsUrl:
          serie.urls?.find((url) => url.type === "comiclink")?.url || "",
      };
    })
  );

  return seriesFront;
};
