import { FC } from 'react';

import { Cocktail } from '../components';
import { useData } from '../hooks';
import { Code, Drink } from '../types';

type CocktailData = {
  drinkName: Code;
};

export const Cocktails: FC<CocktailData> = props => {
  const query = useData<{ drinks: Drink[] }>(props.drinkName);

  return query?.drinks?.map((drink, i) => <Cocktail key={`${drink.strDrink}-${i}`} drink={drink} />);
};
