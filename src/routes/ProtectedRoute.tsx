import { routeList } from '@constants';
import { Navigate } from 'react-router-dom';
import { ProtectedRouteProps } from './interfaces';
import { useSelector } from '@reducers';

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuth = useSelector((state) => state.authentication.isAuth);

  return isAuth ? (
    children
  ) : (
    <Navigate to={`/${routeList.authentication.login}`}></Navigate>
  );
}
