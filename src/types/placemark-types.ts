export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id: string;
}

export interface Trektype {
  title: string;
  _id: string;
}


export interface Placemark {
  poi: string;
  level: string;
  trektype: Trektype | string;
  member: User | string;
  lat: number;
  lng: number;
}

export interface Db {
  userStore: any;
  trektypeStore: any;
  placemarkStore: any;
}