import Home from '@/modules/core/pages/Home';
import { corePathConstants } from '@/modules/core/routing/path-constants';
import type { RouteConfig } from '@/modules/core/types/route';
import { withPageTransition } from '@/ui/PageTransition';

const AnimatedHome = withPageTransition(Home);

export const coreRoutesConfig: RouteConfig[] = [
  {
    path: corePathConstants.HOME,
    showInNavigation: true,
    title: 'Home',
    element: <AnimatedHome />,
  },
];

export const navigationCoreRoutes = coreRoutesConfig.filter(
  route => route.showInNavigation
);
