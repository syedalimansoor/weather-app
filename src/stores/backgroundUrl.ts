import axios from "axios";
import { writable } from "svelte/store";

const UNSPLASH_API_URL = "https://api.unsplash.com/";

export const backgroundUrl = (() => {
  const { subscribe, set } = writable<string>(null);

  /**
   * Fetch an image from Unsplash and set the backgroundUrl store to the image link
   * @param query a search query to filter photos
   */
  const setBackground = async (query?: string) => {
    const res = await axios.get(UNSPLASH_API_URL + "photos/random", {
      params: {
        query: query ? query : null,
      },
      headers: {
        "Authorization": `Client-ID ${
          import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        }`,
      },
    });

    const url: string = res.data.urls.regular;

    set(url);
  };

  return { subscribe, setBackground };
})();
