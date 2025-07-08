import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import logo from '@/assets/logo.png';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/awards', label: 'Awards' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-8 h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="text-2xl font-bold text-white">
            <img src={logo} alt="Mango D'Or Awards" className="h-15 w-auto" />
          </Link>

          <div className="flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-white/80 hover:text-white transition-colors duration-200"
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-400"
                    initial={false}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
