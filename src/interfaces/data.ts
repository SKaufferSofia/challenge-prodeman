export interface IThumbnail {
  path: string;
  extension: string;
}
export interface IUrlExtension {
  type: string;
  url: string;
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
  comics?: {
    collectionURI: string;
  };
  series?: {
    collectionURI: string;
  };
  stories?: {
    collectionURI: string;
  };
  events?: {
    collectionURI: string;
  };
  urls?: IUrlExtension[];
}

export interface IComic extends IBaseMarvel {
  title: string;
  description: string;
  pageCount: number;
  urls?: IUrlExtension[];
  characters?: {
    collectionURI: string;
  };
  stories?: {
    collectionURI: string;
  };
  events?: {
    collectionURI: string;
  };
}

export interface ISeries extends IBaseMarvel {
  title: string;
  description: string;
  startYear: number;
  endYear: number;
  urls?: IUrlExtension[];
  characters?: {
    collectionURI: string;
  };
  stories?: {
    collectionURI: string;
  };
  comics?: {
    collectionURI: string;
  };
  events?: {
    collectionURI: string;
  };
}

export type MarvelItem = ICharacter | IComic | ISeries;

export interface IDataMarvel {
  limit: number;
  total: number;
  count: number;
  results: MarvelItem[];
}

export interface IDataMarvelDetails {
  data: {
    results: MarvelItem[];
  };
}

export interface ICharacterFront {
  id: number;
  name: string;
  description: string;
  modified: string;
  img: string;
  urlId: string;
  favorite: boolean;
  category: string;
  comics?: IComicFront[];
  series?: ISeriesFront[];
  detailUrl?: string;
  wikiUrl?: string;
  comicsUrl?: string;
}

export interface IComicFront {
  id: number;
  name: string;
  description: string;
  modified: string;
  pageCount: number;
  img: string;
  urlId: string;
  favorite: boolean;
  category: string;
  characters?: ICharacterFront[];
  detailUrl?: string;
  wikiUrl?: string;
  comicsUrl?: string;
}

export interface ISeriesFront {
  id: number;
  name: string;
  description: string;
  modified: string;
  startYear: number;
  endYear: number;
  img: string;
  urlId: string;
  favorite: boolean;
  category: string;
  characters?: ICharacterFront[];
  comics?: IComicFront[];
  detailUrl?: string;
  wikiUrl?: string;
  comicsUrl?: string;
}
