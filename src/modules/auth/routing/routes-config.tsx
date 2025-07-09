import Login from '@/modules/auth/components/Login';
import Logout from '@/modules/auth/components/Logout';
import { authPathConstants } from '@/modules/auth/routing/path-constants';
import type { RouteConfig } from '@/modules/core/types/route';
import { withPageTransition } from '@/ui/PageTransition';

const AnimatedLogin = withPageTransition(Login);

export const authRoutesConfig: RouteConfig[] = [
  {
    path: authPathConstants.LOGIN,
    showInNavigation: true,
    title: 'Login',
    element: <AnimatedLogin />,
  },
  {
    path: authPathConstants.LOGOUT,
    showInNavigation: true,
    title: 'Logout',
    element: <Logout />,
  },
];

export const navigationAuthRoutes = authRoutesConfig.filter(
  route => route.showInNavigation
);
