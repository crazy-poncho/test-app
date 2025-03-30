import { FC } from 'react';

import { Drink } from '../types';
import { getNumberOfIngredients } from '../utils';
import { Badge } from './Badge';
import { Image } from './Image';

type CocktailProps = {
  drink: Drink;
};

export const Cocktail: FC<CocktailProps> = props => {
  const numberOfIngredients = getNumberOfIngredients(props.drink);

  return (
    <div className='flex flex-col-reverse sm:flex-row gap-5 justify-between'>
      <div className='flex flex-col gap-y-8'>
        <div>
          <h1 className='font-bold text-[32px] mb-2'>{props.drink.strDrink}</h1>
          <Badge value={props.drink.strCategory} />
          <Badge value={props.drink.strAlcoholic} />
          <h2>{props.drink.strGlass}</h2>
        </div>
        <div>
          <p className='font-bold underline'>Instructions:</p>
          <p>{props.drink.strInstructions}</p>
        </div>
        <div>
          <p className='font-bold underline'>List of ingredients:</p>
          <ul className='list-disc'>
            {Array.from({ length: numberOfIngredients }, (_, index) => (
              <li className='flex' key={`strMeasure${index + 1}`}>
                <p className='w-1/4'>{props.drink[`strMeasure${index + 1}`]}</p>
                <p className='w-1/4'>{props.drink[`strIngredient${index + 1}`]}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='min-w-70 w-70'>
        <Image src={props.drink.strDrinkThumb} />
      </div>
    </div>
  );
};
