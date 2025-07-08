import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navigation from './Navigation';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-black">
      <div className="h-screen w-full flex flex-col">
        <Navigation />
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </div>
    </div>
  );
}
