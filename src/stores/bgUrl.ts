import { writable } from "svelte/store";

export const bgUrl = (() => {
  const { subscribe, set } = writable<string>(null);

  const setBackground = (query: string) => {};

  return { subscribe, setBackground };
})();
