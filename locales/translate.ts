import { getLocaleFromStorage } from '../services/localStorage';
import en from './en';
import hr from './hr';
import fr from './fr';

export const availableLocales = {
  en,
  hr,
  fr,
};

export const defaultLocale = 'en';

export const locale = getLocaleFromStorage() ?? 'en';

export const translate = availableLocales[locale];
