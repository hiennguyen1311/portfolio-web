import { DataApiResponse, LoginInputPayload } from '@models';
import { api } from './api.service';
import { LoginSuccessPayload } from '@reducers/authentication';
import { API_PATHS } from './service.config';
import Cookie from 'js-cookie';

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      DataApiResponse<LoginSuccessPayload>,
      LoginInputPayload
    >({
      query: (body) => ({ url: API_PATHS.login, body, method: 'POST' }),
    }),
  }),
});

export const { useLoginMutation } = authApi;

class AuthService {
  constructor() {}

  logout = () => {
    Cookie.remove('token');
  };
}

const authService = new AuthService();
export const logout = authService.logout;
