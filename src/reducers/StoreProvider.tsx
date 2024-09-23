import { StoreProviderProps } from './interfaces';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Loading } from '@components';

export default function StoreProvider({ children }: StoreProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading></Loading>}>
        {children}
      </PersistGate>
    </Provider>
  );
}
