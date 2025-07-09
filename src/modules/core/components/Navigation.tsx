import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import logo from '@/assets/logo.png';
import AuthNavLink from '@/modules/auth/components/AuthNavLink';
import { navigationCoreRoutes } from '@/modules/core/routing/routes-config';

const Navigation = () => {
  const location = useLocation();

  const navigationRoutes = [...navigationCoreRoutes];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            <img src={logo} alt="Mango D'Or Awards" className="h-14 w-auto" />
          </Link>

          <div className="flex items-center space-x-8">
            {navigationRoutes.map(route => (
              <Link
                key={route.path}
                to={route.path}
                className="relative text-white/80 hover:text-white transition-colors duration-200"
              >
                {route.title}
                {location.pathname === route.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-400"
                    initial={false}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <AuthNavLink />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
