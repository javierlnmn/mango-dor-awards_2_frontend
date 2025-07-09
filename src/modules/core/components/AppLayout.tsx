import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navigation from '@/modules/core/components/Navigation';
import { coreRoutesConfig } from '../routing/routes-config';

export default function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950">
      <div className="h-screen w-full flex flex-col">
        <Navigation />
        <div className="flex-1 relative">
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              {coreRoutesConfig.map(route => (
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
}
