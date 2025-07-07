export interface IThumbnail {
  path: string;
  extension: string;
}

export interface IDetailsMore {
  name: string;
  resourceURI: string;
  type?: string;
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
    items: IDetailsMore[];
  };
  series?: {
    items: IDetailsMore[];
  };
  stories?: {
    items: IDetailsMore[];
  };
  events?: {
    items: IDetailsMore[];
  };
  urls?: IUrlExtension[];
}

export interface IComic extends IBaseMarvel {
  title: string;
  description: string;
  pageCount: number;
  urls?: IUrlExtension[];
  series?: IDetailsMore;
  characters?: {
    items: IDetailsMore[];
  };
  stories?: {
    items: IDetailsMore[];
  };
  events?: {
    items: IDetailsMore[];
  };
}

export interface ISeries extends IBaseMarvel {
  title: string;
  description: string;
  startYear: number;
  endYear: number;
  urls?: IUrlExtension[];
  characters?: {
    items: IDetailsMore[];
  };
  stories?: {
    items: IDetailsMore[];
  };
  comics?: {
    items: IDetailsMore[];
  };
  events?: {
    items: IDetailsMore[];
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
}
