export function getLocaleFromStorage(): string | null {
  const locale =
    typeof window !== 'undefined' && window.localStorage.getItem('locale');

  if (locale && locale !== null) return JSON.parse(locale);
  else return null;
}

export function setLocaleToStorage(locale: string) {
  localStorage.setItem('locale', JSON.stringify(locale));
}
