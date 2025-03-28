import { Drink } from '../types';

export const getNumberOfIngredients = (drink: Drink) => {
  let count = 1;

  while (`strMeasure${count}` in drink && drink[`strMeasure${count}`]) {
    count++;
  }

  return count - 1;
};
