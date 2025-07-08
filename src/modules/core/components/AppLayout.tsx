import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import About from '@/modules/core/pages/About';
import Awards from '@/modules/core/pages/Awards';
import Home from '@/modules/core/pages/Home';
import { withPageTransition } from '@/ui/PageTransition';
import Navigation from './Navigation';

const AnimatedHome = withPageTransition(Home);
const AnimatedAbout = withPageTransition(About);
const AnimatedAwards = withPageTransition(Awards);

export default function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-800 to-neutral-950">
      <div className="h-screen w-full flex flex-col">
        <Navigation />
        <div className="flex-1 relative">
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<AnimatedHome />} />
              <Route path="/about" element={<AnimatedAbout />} />
              <Route path="/awards" element={<AnimatedAwards />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
