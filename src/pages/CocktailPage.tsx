import { FC, Suspense } from 'react';

import { ErrorBoundary, VerticalTabs } from '../components';
import { COCKTAIL_CODES } from '../consts';
import { Cocktails } from '../elements';

export const CocktailPage: FC = () => {
  return (
    <VerticalTabs
      tabs={COCKTAIL_CODES.map((label, i) => ({
        id: i + 1,
        label,
        content: (
          <ErrorBoundary>
            <Suspense fallback='loading...'>
              <Cocktails drinkName={label} />
            </Suspense>
          </ErrorBoundary>
        ),
      }))}
    />
  );
};
