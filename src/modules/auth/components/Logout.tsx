import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/modules/auth/stores/authStore';
import { corePathConstants } from '@/modules/core/routing/path-constants';

const Logout = () => {
  const { logout } = useAuthStore();

  useEffect(() => {
    logout();
  }, []);

  return <Navigate to={corePathConstants.HOME} />;
};

export default Logout;
