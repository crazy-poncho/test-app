import { Navigate, Route, Routes } from 'react-router-dom';

import { COCKTAIL_CODES } from './consts';
import { CocktailPage, NotFoundPage } from './pages';
import { routes } from './routes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={routes[COCKTAIL_CODES[0]]} replace />} />
      {COCKTAIL_CODES.map(code => (
        <Route key={code} element={<CocktailPage />} path={routes[code]} />
      ))}
      <Route element={<NotFoundPage />} path='*' />
    </Routes>
  );
};
