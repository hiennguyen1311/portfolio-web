import { isEmpty } from 'lodash';
import { BaseStorageProviderOptions } from './types';

export default class BaseStorageProvider {
  private JSON: JSON;
  private isThrowError: boolean;
  constructor({
    throwErrorIfNotExistData = false,
  }: BaseStorageProviderOptions) {
    this.JSON = JSON;
    this.isThrowError = throwErrorIfNotExistData;
  }

  throwError(data: any) {
    if (this.isThrowError) {
      if (!data || isEmpty(data)) {
        throw new Error('empty');
      }
    }
  }

  parseObject(data: string) {
    try {
      return this.JSON.parse(data);
    } catch {
      return data;
    }
  }
}
