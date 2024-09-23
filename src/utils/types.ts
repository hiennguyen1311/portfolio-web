export type Provider = {
  getData(key: string): any;
  setData(key: string, value: any): void;
  removeData(key: string): void;
};
