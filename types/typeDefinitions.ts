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
  language: string;
}

export interface Navigation {
  id: number;
  text: string;
  link: string;
}

export interface Language {
  id: number;
  locale: string;
  name: string;
}

export interface Brochure {
  language: string;
  id: string;
  code: string;
}
