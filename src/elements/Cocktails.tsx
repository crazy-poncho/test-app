import { FC } from 'react';

import { Cocktail } from '../components';
import { COCKTAIL_CODES } from '../consts';
import { useData } from '../hooks';
import { Drink } from '../types';

type CocktailData = {
  drinkName: (typeof COCKTAIL_CODES)[number];
};

export const Cocktails: FC<CocktailData> = props => {
  const query = useData<{ drinks: Drink[] }>(props.drinkName);

  return query?.drinks?.map((drink, i) => <Cocktail key={`${drink.strDrink}-${i}`} drink={drink} />);
};
