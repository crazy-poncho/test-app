import { render as renderRtl } from '@testing-library/react';

import { ReactElement } from 'react';

import { routes } from '../routes';
import { AppTestWrapper } from './AppTestWrapper';

export const render = (ui: ReactElement<any>) => {
  return renderRtl(ui, { wrapper: ({ children }) => <AppTestWrapper children={children} initialRouterEntries={[routes.margarita]} /> });
};
