import { screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { overrides, render } from '../tests';
import { Cocktail } from './Cocktail';

describe('Cocktail', () => {
  it('renders the Cocktail component', () => {
    render(<Cocktail drink={overrides.drinks[0]} />);

    const cocktailCard = screen.queryByTestId('cocktailCardMojito');
    expect(cocktailCard).toBeInTheDocument();

    const drinkName = screen.queryByTestId('drinkName');
    expect(drinkName.textContent).toBe('Mojito');

    const drinkCategoryBadge = screen.queryByTestId('drinkCategory');
    expect(drinkCategoryBadge.textContent).toBe('Cocktail');

    const drinkAlcoholicBadge = screen.queryByTestId('drinkAlcoholic');
    expect(drinkAlcoholicBadge.textContent).toBe('Alcoholic');

    const drinkGlassBadge = screen.queryByTestId('drinkGlass');
    expect(drinkGlassBadge.textContent).toBe('Highball glass');

    const drinkInstructions = screen.queryByTestId('drinkInstructions');
    expect(drinkInstructions.textContent).toBe(
      'Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.',
    );

    const drinkIngredients = screen.queryByTestId('drinkIngredients');
    expect(drinkIngredients.textContent).toBe('2-3 oz Light rumJuice of 1 Lime2 tsp Sugar2-4 Mint');

    const drinkImg = screen.queryByTestId('drinkImg');
    expect(drinkImg.getAttribute('src')).toBe('https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg');
  });
});
