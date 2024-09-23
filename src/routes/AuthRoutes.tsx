import { routeList } from '@constants';
import { Logout, LoginPage } from '@pages';
import { RouteObject } from 'react-router-dom';

export const AuthenticationRoutes: RouteObject[] = [
  {
    path: routeList.authentication.login,
    element: <LoginPage></LoginPage>,
  },
  {
    path: routeList.authentication.logout,
    element: <Logout></Logout>,
  },
];
