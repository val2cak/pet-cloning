import en from './en';
import hr from './hr';

const availableLocales = {
  en,
  hr,
};

const defaultLocale = 'en';

export const translate = availableLocales[defaultLocale];
