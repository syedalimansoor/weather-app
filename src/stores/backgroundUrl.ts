import axios from "axios";
import { writable } from "svelte/store";

const UNSPLASH_API_URL = "https://api.unsplash.com/";

export const bgUrl = (() => {
  const { subscribe, set } = writable<string>(null);

  const setBackground = async (query: string) => {
    const res = await axios.get(UNSPLASH_API_URL + "photos/random", {
      params: {
        query,
        client_id: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
      },
    });

    const url: string = res.data.urls.regular;

    set(url);
  };

  return { subscribe, setBackground };
})();
