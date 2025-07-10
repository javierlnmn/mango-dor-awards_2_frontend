import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { authPathConstants } from '@/modules/auth/routing/path-constants';
import { useAuthStore } from '@/modules/auth/stores/authStore';

const Logout = () => {
  const { logout } = useAuthStore();

  useEffect(() => {
    logout();
  }, []);

  return <Navigate to={authPathConstants.LOGIN} />;
};

export default Logout;
