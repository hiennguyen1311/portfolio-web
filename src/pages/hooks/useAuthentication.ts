import { routeList } from '@constants';
import { clearStore } from '@reducers';
import { logout } from '@services';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

export function useAuthentication() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    dispatch(clearStore());
    navigate(routeList.authentication.login);
  };

  return {
    onLogout,
  };
}
