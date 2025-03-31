import { screen, waitFor } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { mockApi, mocks, render } from '../tests';
import { CocktailPage } from './CocktailPage';

describe('CocktailPage', () => {
  mockApi([mocks.drinks]);

  it('renders the CocktailPage component', async () => {
    render(<CocktailPage />);

    const verticalTabs = screen.queryByTestId('verticalTabs');
    await waitFor(() => expect(verticalTabs).toBeInTheDocument());

    await waitFor(() => expect(screen.queryByTestId('cocktailCardMojito')).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByTestId('cocktailCardMojito Extra')).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByTestId('cocktailCardMango Mojito')).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByTestId('cocktailCardBlueberry Mojito')).toBeInTheDocument());
  });
});
