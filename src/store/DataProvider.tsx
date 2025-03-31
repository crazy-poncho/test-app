import { createContext, FC, ReactNode, useState } from 'react';

type DataProviderProps = {
  children: ReactNode;
};

export const DataCacheContext = createContext(null);

export const DataProvider: FC<DataProviderProps> = props => {
  const [cache, setCache] = useState(new Map());

  return <DataCacheContext.Provider value={{ cache, setCache }}>{props.children}</DataCacheContext.Provider>;
};
