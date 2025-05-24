export interface IThumbnail {
  path: string;
  extension: string;
}
export interface IBaseMarvel {
  id: number;
  modified: string;
  thumbnail: IThumbnail;
  resourceURI: string;
}
export interface ICharacter extends IBaseMarvel {
  name: string;
  description: string;
}

export interface IComic extends IBaseMarvel {
  title: string;
  description: string;
}

export interface IEvent extends IBaseMarvel {
  title: string;
  description: string;
}

export type MarvelItem = ICharacter | IComic | IEvent;

export interface IDataMarvel {
  limit: number;
  total: number;
  count: number;
  results: MarvelItem[];
}

export interface ICharacterFront {
  id: number;
  name: string;
  description: string;
  modified: string;
  img: string;
  urlId: string;
  favorite: boolean;
}
