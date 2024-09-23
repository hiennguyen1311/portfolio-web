import { RouteObject } from 'react-router-dom';
import { MainPage, NotFoundPage } from '@pages';
import ProtectedRoute from './ProtectedRoute';
import { mainRoutesList } from './main-routes-list';

export const MainRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainPage></MainPage>
      </ProtectedRoute>
    ),
    children: mainRoutesList,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
