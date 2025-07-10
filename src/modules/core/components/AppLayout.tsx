import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { authRoutesConfig } from '@/modules/auth/routing/routes-config';
import Navigation from '@/modules/core/components/Navigation';
import { coreRoutesConfig } from '@/modules/core/routing/routes-config';

const AppLayout = () => {
  const location = useLocation();

  const allRoutes = [...coreRoutesConfig, ...authRoutesConfig];

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-neutral-900 to-neutral-950">
      <div className="h-screen w-full flex flex-col">
        <Navigation />
        <div className="flex-1 relative">
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              {allRoutes.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
