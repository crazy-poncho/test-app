import { FC, ReactNode } from 'react';
import { InitialEntry, MemoryRouter } from 'react-router-dom';

import { DataProvider } from '../store';

type AppTestWrapperProps = {
  children: ReactNode;
  initialRouterEntries: InitialEntry[];
};

export const AppTestWrapper: FC<AppTestWrapperProps> = props => {
  return (
    <MemoryRouter initialEntries={props.initialRouterEntries}>
      <DataProvider>{props.children}</DataProvider>
    </MemoryRouter>
  );
};
