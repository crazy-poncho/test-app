import { Navigate, Route, Routes } from 'react-router-dom';

import { COCKTAIL_CODES } from './consts';
import { CocktailPage } from './pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={`/${COCKTAIL_CODES[0]}`} replace />} />
      {COCKTAIL_CODES.map(code => (
        <Route key={code} element={<CocktailPage />} path={`/${code}`} />
      ))}
    </Routes>
  );
};
