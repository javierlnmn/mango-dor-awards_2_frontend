import type { ReactElement } from 'react';

export interface RouteConfig {
  path: string;
  showInNavigation?: boolean;
  element: ReactElement;
  title?: string;
}
