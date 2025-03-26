import { FC } from 'react';
import { useLocation } from 'react-router-dom';

export const CocktailPage: FC = () => {
  const location = useLocation();

  return <h1>{location.pathname}</h1>;
};
