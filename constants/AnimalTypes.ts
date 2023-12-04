import { translate } from '../locales/translate';
import { Lookup } from '../types/typeDefinitions';

const { dog, cat, horse } = translate.common;

export const animalTypes: Lookup[] = [
  { id: 1, name: dog },
  { id: 2, name: cat },
  { id: 3, name: horse },
];
