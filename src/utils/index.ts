export const ls = {
  set: (key: string, value: any): void => {
    localStorage.setItem(key, value);
  },
  get: (key: string): any => {
    return localStorage.getItem(key);
  },
};
