export enum FetchState {
  DEFAULT = 'DEFAULT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  NONE = 'NONE',
}

export type EventData = {
  name: string;
  type: string;
  id: string;
  url: string;
  place: {
    city: string;
  };
  dates: {
    start: {
      localDate: string;
      localTime: string;
    };
  };
  accessibility: {
    info: string;
  };
  _embedded: {
    venues: Array<{
      name: string;
      city: {
        name: string;
      };
    }>;
  };
};

export type ArtistData = {
  id: string;
  name: string;
  genres: Array<string>;
  followers: { total: BigInt };
  images: Array<{ url: string; height: BigInt; width: BigInt }>;
};

export type ArtistDetails = {
  id: string;
  name: string;
  genres: Array<string>;
  followers: { total: BigInt };
  images: Array<{ url: string; height: BigInt; width: BigInt }>;
  popularity: number;
  external_urls: { spotify: string };
};
