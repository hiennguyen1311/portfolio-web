import { routeList } from '@constants';
import { RouteObject } from 'react-router-dom';
import { Home } from '@pages';
import { DefaultRoute } from './DefaultRoute';

export const mainRoutesList: RouteObject[] = [
  { index: true, element: <DefaultRoute></DefaultRoute> },
  {
    path: routeList.home,
    element: <Home></Home>,
  },
];
