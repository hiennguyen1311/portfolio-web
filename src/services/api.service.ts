import { ApplicationState, ExceptionResponse } from '@models';
import { SERVER_CODE_ERROR } from '@constants';
import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { clearStore } from '../reducers/authentication';
import { API_URL } from './service.config';

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders(headers, { getState }) {
    const token = (getState() as ApplicationState).authentication.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set(
      'From-Url',
      `${window.location.pathname}${window.location.search}`,
    );
  },
});

const baseQueryWithAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>,
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (
    result.error &&
    result.error.status === 401 &&
    [SERVER_CODE_ERROR.HTTP_UNAUTHORIZED].includes(
      (result.error.data as ExceptionResponse).code,
    )
  ) {
    api.dispatch(clearStore());
  }
  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithAuth,
  endpoints: () => ({}),
});
