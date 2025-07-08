import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { mapRoutesRecursively } from '@/lib/routes';
import AppLayout from '@/modules/core/components/AppLayout';
import { corePathConstants } from '@/modules/core/routing/path-constants';
import appRoutes from '@/modules/core/routing/routes';

const finalRoutes = [...appRoutes];

export const AppRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: corePathConstants.HOME,
      element: <AppLayout />,
      children: mapRoutesRecursively(finalRoutes),
    },
  ];

  const element = useRoutes(routes);
  return element;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
