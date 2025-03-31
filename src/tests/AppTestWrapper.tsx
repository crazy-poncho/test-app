import { FC, ReactNode } from 'react';
import { InitialEntry, MemoryRouter } from 'react-router-dom';

import { routes } from '../routes';

type AppTestWrapperProps = {
  children: ReactNode;
  initialRouterEntries: InitialEntry[];
};

export const AppTestWrapper: FC<AppTestWrapperProps> = props => {
  return <MemoryRouter initialEntries={props.initialRouterEntries}>{props.children}</MemoryRouter>;
};
