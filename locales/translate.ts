import { getLocaleFromStorage } from '../services/localStorage';
import en from './en';
import hr from './hr';

export const availableLocales = {
  en,
  hr,
};

export const defaultLocale = 'en';

export const locale = getLocaleFromStorage();

export const translate = availableLocales[locale ?? defaultLocale];
