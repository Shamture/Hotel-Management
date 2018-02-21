export type TravelType = '5KM' | '30KM' | '60KM';

export interface Travel {
  id?: number;
  name?: string;
  price?: number;
  type?: TravelType[];
  picture?: string;
}

export interface TravelFilter {
  type?: TravelType;
}
