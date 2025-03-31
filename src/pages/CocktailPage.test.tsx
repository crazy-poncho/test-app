import { render, screen, waitFor } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { routes } from '../routes';
import { AppTestWrapper, mockApi, mocks } from '../tests';
import { CocktailPage } from './CocktailPage';

describe('CocktailPage', () => {
  mockApi([mocks.drinks]);

  it('renders the CocktailPage component', async () => {
    const component = render(<CocktailPage />, {
      wrapper: ({ children }) => <AppTestWrapper children={children} initialRouterEntries={[routes.margarita]} />,
    });

    const verticalTabs = screen.queryByTestId('verticalTabs');
    await waitFor(() => expect(verticalTabs).toBeInTheDocument());

    await waitFor(() => expect(screen.queryByTestId('cocktailCardMojito')).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByTestId('cocktailCardMojito Extra')).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByTestId('cocktailCardMango Mojito')).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByTestId('cocktailCardBlueberry Mojito')).toBeInTheDocument());
  });
});
