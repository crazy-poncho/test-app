import { useContext } from 'react';

import { Code } from '../types';
import { DataCacheContext } from './../store';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

const useDataCache = () => useContext(DataCacheContext);

const fetchData = <TData>(code: Code): TData => {
  const { cache, setCache } = useDataCache();

  if (cache.has(code)) {
    const cached = cache.get(code);

    if (cached instanceof Error || cached instanceof Promise) throw cached;

    return cached;
  }

  const promise = fetch(`${BASE_URL}?s=${code}`)
    .then(res => res.json())
    .then(data => {
      setCache(prev => new Map(prev).set(code, data));
    })
    .catch(error => {
      setCache(prev => new Map(prev).set(code, error));
    });

  setCache(prev => new Map(prev).set(code, promise));
  throw promise;
};

export const useData = <TData>(code: Code): TData => {
  return fetchData<TData>(code);
};
