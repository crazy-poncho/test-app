import { Navigate, Route, Routes } from 'react-router-dom';

import { routes } from './routes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={routes.margarita} replace />} />
      <Route element={<h1>margarita</h1>} path={routes.margarita} />
      <Route element={<h1>mojito</h1>} path={routes.mojito} />
      <Route element={<h1>a1</h1>} path={routes.a1} />
      <Route element={<h1>kir</h1>} path={routes.kir} />
    </Routes>
  );
};
