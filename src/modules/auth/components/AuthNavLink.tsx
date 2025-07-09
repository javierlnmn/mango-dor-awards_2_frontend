import { MdLogin, MdLogout } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { useAuthStore } from '@/modules/auth/stores/authStore';
import { authPathConstants } from '../routing/path-constants';

const AuthNavLink = () => {
  const { user } = useAuthStore();
  const location = useLocation();

  if (user.username) {
    return (
      <Link className="relative" to={authPathConstants.LOGOUT}>
        <MdLogout
          className="text-white/80 hover:text-white transition-colors duration-200"
          size={25}
        />
        {location.pathname === authPathConstants.LOGOUT && (
          <motion.div
            layoutId="activeTab"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-400"
            initial={false}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
        )}
      </Link>
    );
  }

  return (
    <Link className="relative" to={authPathConstants.LOGIN}>
      <MdLogin
        className="text-white/80 hover:text-white transition-colors duration-200"
        size={25}
      />
      {location.pathname === authPathConstants.LOGIN && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-400"
          initial={false}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
};

export default AuthNavLink;
