import type { ReactElement, ComponentType } from 'react';

export interface Route {
  title: string;
  pathname: string;
  Icon: ComponentType<any>;
  element: ReactElement;
  children?: Route[];
} 