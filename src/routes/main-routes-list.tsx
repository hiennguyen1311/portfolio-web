import { routeList } from '@constants';
import { MainPage } from '../pages/main';
import { RouteObject } from 'react-router-dom';

export const mainRoutesList: RouteObject[] = [
  { index: true, element: <MainPage></MainPage> },
  {
    path: routeList.main,
    element: <MainPage></MainPage>,
  },
];
