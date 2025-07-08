import type { RouteObject } from 'react-router-dom';
import type { Route } from '@/modules/core/types/route';


export const mapRoutesRecursively = (routes: Route[]): RouteObject[] => {
  return routes.map(({ pathname, element, children }) => ({
    path: pathname,
    element,
    children: children ? mapRoutesRecursively(children) : undefined,
  }));
};