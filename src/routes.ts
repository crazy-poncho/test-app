import { COCKTAIL_CODES, CocktailEnum } from './consts';

export const routes = COCKTAIL_CODES.reduce((acc, curr) => ({ ...acc, [curr]: `/${curr}` }), {} as { [key in CocktailEnum]: `/${key}` });
