import { routeList } from '@constants';
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface DefaultRouteProps {
  children?: ReactNode;
}

export const DefaultRoute: React.FC<DefaultRouteProps> = ({ children }) => {
  return children ? (
    children
  ) : (
    <Navigate to={`/${routeList.home}`} replace={true} />
  );
};
