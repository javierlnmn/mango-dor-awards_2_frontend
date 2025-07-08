import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navigation from '@/components/Navigation';
import { withPageTransition } from '@/components/PageTransition';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Awards from '@/pages/Awards';

const AnimatedHome = withPageTransition(Home);
const AnimatedAbout = withPageTransition(About);
const AnimatedAwards = withPageTransition(Awards);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedHome />} />
        <Route path="/about" element={<AnimatedAbout />} />
        <Route path="/awards" element={<AnimatedAwards />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navigation />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
