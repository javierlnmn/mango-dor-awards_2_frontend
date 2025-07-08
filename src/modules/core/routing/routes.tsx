import type { Route } from '@/modules/core/types/route';
import { withPageTransition } from '@/ui/PageTransition';
import { corePathConstants } from './path-constants';

import Home from '@/modules/core/pages/Home';
import About from '@/modules/core/pages/About';
import Awards from '@/modules/core/pages/Awards';

import { MdHome } from 'react-icons/md';
import { MdInfo } from 'react-icons/md';
import { MdStar } from 'react-icons/md';

// Wrap components with page transitions
const AnimatedHome = withPageTransition(Home);
const AnimatedAbout = withPageTransition(About);
const AnimatedAwards = withPageTransition(Awards);

const appRoutes: Route[] = [
  {
    title: 'Home',
    pathname: corePathConstants.HOME,
    Icon: MdHome,
    element: <AnimatedHome />,
  },
  {
    title: 'About',
    pathname: corePathConstants.ABOUT,
    Icon: MdInfo,
    element: <AnimatedAbout />,
  },
  {
    title: 'Awards',
    pathname: corePathConstants.AWARDS,
    Icon: MdStar,
    element: <AnimatedAwards />,
  },
];

export default appRoutes;
