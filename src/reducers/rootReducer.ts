import authenticationReducer from './authentication/authSlice';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { ApplicationState } from '@models';
import { api } from '../services/api.service';

const reducers = {
  authentication: authenticationReducer,
  [api.reducerPath]: api.reducer,
};

const rootReducers = combineReducers(reducers);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authentication'],
};

export const persistedReducer = persistReducer<ApplicationState>(
  persistConfig,
  rootReducers,
);
