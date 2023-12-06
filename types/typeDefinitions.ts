export interface Lookup {
  id: number;
  name: string;
}

export interface FormData {
  name: string;
  phoneMobile: string;
  email: string;
  petName: string;
  animalType: number;
  cloningInfo: boolean;
  preservationInfo: boolean;
  message: string;
}

export interface Navigation {
  id: number;
  text: string;
  link: string;
}
