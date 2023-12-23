import { translate } from '../locales/translate';
import { Lookup } from '../types/typeDefinitions';

const { dog, cat, horse, other } = translate.common;

export const animalTypes: Lookup[] = [
  { id: 1, name: dog },
  { id: 2, name: cat },
  { id: 3, name: horse },
  { id: 4, name: other },
];
