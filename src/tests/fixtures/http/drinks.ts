import { Mock } from '../../mockApi';
import { drinks as drinksOverride } from './../overrides/drinks';

export const drinks: Mock = {
  method: 'get',
  path: 'https://www.thecocktaildb.com/api/json/v1/1/search.php',
  response: { drinks: drinksOverride },
};
