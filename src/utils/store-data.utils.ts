import LocalStorageProvider from './store-data-provider/local-storage-provider';
import { Provider } from './types';

export class StorageServices {
  private provider: Provider;
  constructor(
    provider: Provider = {
      getData: () => null,
      setData: () => null,
      removeData: () => null,
    },
  ) {
    this.provider = provider;
  }

  getItem(key: string) {
    return this.provider.getData(key);
  }

  setItem(key: string, value: any) {
    return this.provider.setData(key, value);
  }

  removeItem(key: string) {
    return this.provider.removeData(key);
  }
}

const storeDataServices = new StorageServices(new LocalStorageProvider());
export default storeDataServices;
