import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './rootReducer';
import { persistStore } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from '../services/api.service';
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      api.middleware,
      thunk,
    ),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };
