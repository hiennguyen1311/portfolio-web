import { RouteObject } from 'react-router-dom';
import { MainConversationsPage, NotFoundPage } from '@pages';
import ProtectedRoute from './ProtectedRoute';
import { mainRoutesList } from './main-routes-list';

export const MainRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainConversationsPage></MainConversationsPage>
      </ProtectedRoute>
    ),
    children: mainRoutesList,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
