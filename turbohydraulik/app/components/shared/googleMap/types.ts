export interface CityCords {
  lat: number;
  lng: number;
}

export interface GoogleMapData {
  cityCords: CityCords;
  title: string;
  address1: string;
  address2?: string;
  placeId?: string;
}
