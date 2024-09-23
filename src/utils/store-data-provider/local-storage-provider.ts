import BaseStorageProvider from './base-storage-provider';
import { LocalStorageProviderOptions } from './types';

export default class LocalStorageProvider extends BaseStorageProvider {
  protected store: Storage;
  constructor(
    options: LocalStorageProviderOptions = { throwErrorIfNotExistData: false },
  ) {
    super(options);
    this.store = localStorage;
  }

  getData(key: string) {
    const value = this.store.getItem(key);
    this.throwError(value);
    return this.parseObject(value ?? '');
  }

  setData(key: string, value: any) {
    this.store.setItem(key, JSON.stringify(value));
  }

  removeData(key: string) {
    this.store.removeItem(key);
  }

  clear() {
    this.store.clear();
  }
}
