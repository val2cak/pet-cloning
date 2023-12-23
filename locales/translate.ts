import { getLocaleFromStorage } from '../services/localStorage';
import en from './en';
import hr from './hr';
import fr from './fr';
import de from './de';
import es from './es';
import it from './it';
import nl from './nl';
import ru from './ru';

export const availableLocales = {
  en,
  hr,
  fr,
  de,
  es,
  it,
  nl,
  ru,
};

let defaultLocale = 'en';

if (typeof window !== 'undefined') {
  defaultLocale = window.navigator.language.split('-')[0] || 'en';
}

export const locale = getLocaleFromStorage() ?? defaultLocale;

export const translate = availableLocales[locale];
