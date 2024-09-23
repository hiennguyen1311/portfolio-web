import { storeDataServices } from '@utils';
import { User } from '@models';
import { AuthenticationState } from '@models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSuccessPayload } from './types';

const token: string | undefined = storeDataServices.getItem('token');
const user: User | undefined = storeDataServices.getItem('user');

const initialState: AuthenticationState = {
  user: (user as User) ?? {},
  token: token ?? '',
  isAuth: Boolean(token),
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: initialState,
  reducers: {
    loginSuccess: (
      state: AuthenticationState,
      action: PayloadAction<LoginSuccessPayload>,
    ) => {
      const { token, user } = action.payload;
      storeDataServices.setItem('user', user);
      storeDataServices.setItem('token', token);

      state.isAuth = true;
      state.token = token;
      state.user = user;
    },
    clearStore: (state: AuthenticationState) => {
      storeDataServices.removeItem('user');
      storeDataServices.removeItem('token');

      state.isAuth = false;
      state.user = {} as User;
      state.token = '';
    },
  },
});

export const { clearStore, loginSuccess } = authenticationSlice.actions;

const authenticationReducer = authenticationSlice.reducer;

export default authenticationReducer;
