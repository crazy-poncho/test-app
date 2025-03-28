import { Code } from '../types';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

// TODO think about better solution
const cache = new Map<Code, { data: any; isResolved: boolean } | Error>();

const fetchData = (code: Code) => {
  if (cache.has(code)) {
    const cached = cache.get(code);
    if (cached instanceof Error) {
      throw cached;
    }

    if (!cached.isResolved) {
      throw cached.data;
    }

    return cached.data;
  }

  const promise = fetch(`${BASE_URL}?s=${code}`)
    .then(res => res.json())
    .then(data => {
      cache.set(code, { data, isResolved: true });
    })
    .catch(error => {
      cache.set(code, error);
    });

  cache.set(code, { data: promise, isResolved: false });
  throw promise;
};

export const useData = (code: Code) => {
  return fetchData(code);
};
