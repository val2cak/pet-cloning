import en from './en';
import hr from './hr';

const availableLocales = {
  en,
  hr,
};

// const router = useRouter();
// const { locale } = router;
// const defaultLocale = locale;

const defaultLocale = 'en';

export const translate = availableLocales[defaultLocale];