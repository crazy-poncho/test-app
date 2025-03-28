import { FC, Suspense } from 'react';

import { ErrorBoundary, Loader, VerticalTabs } from '../components';
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
            <Suspense fallback={<Loader />}>
              <Cocktails drinkName={label} />
            </Suspense>
          </ErrorBoundary>
        ),
      }))}
    />
  );
};
