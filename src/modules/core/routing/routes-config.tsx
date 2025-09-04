import Candidates from '@/modules/candidates/pages/Candidates';
import Home from '@/modules/core/pages/Home';
import { corePathConstants } from '@/modules/core/routing/path-constants';
import type { RouteConfig } from '@/modules/core/types/route';
import { withPageTransition } from '@/ui/PageTransition';

const AnimatedHome = withPageTransition(Home);
const AnimatedCandidates = withPageTransition(Candidates);

export const coreRoutesConfig: RouteConfig[] = [
  {
    path: corePathConstants.HOME,
    showInNavigation: true,
    title: 'Home',
    element: <AnimatedHome />,
  },
  {
    path: corePathConstants.CANDIDATES,
    showInNavigation: true,
    title: 'Candidatos',
    element: <AnimatedCandidates />,
  },
];

export const navigationCoreRoutes = coreRoutesConfig.filter(
  route => route.showInNavigation
);
