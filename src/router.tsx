import { Navigate, Route, Routes } from 'react-router-dom';

import { COCKTAIL_CODES } from './consts';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={`/${COCKTAIL_CODES[0]}`} replace />} />
      {COCKTAIL_CODES.map(code => (
        <Route key={code} element={<h1>{code}</h1>} path={`/${code}`} />
      ))}
    </Routes>
  );
};
