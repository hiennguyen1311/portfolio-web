import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import { concat } from 'lodash';
import { Loading } from '@components';
import { AuthenticationRoutes } from './AuthRoutes';
import { MainRoutes } from './MainRouter';

export default function AppRouter() {
  const AppRoutes: React.FC = () =>
    useRoutes(concat(AuthenticationRoutes, MainRoutes));

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <AppRoutes></AppRoutes>
      </Suspense>
    </BrowserRouter>
  );
}
