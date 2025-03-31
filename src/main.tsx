import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './router.js';
import { DataProvider } from './store/DataProvider.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <AppRouter />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>,
);
