import { writable } from "svelte/store";
import axios from "axios";

interface Location {
  name: string;
  lat: number;
  lon: number;
  country: string;
}

const GEOCODING_API_URL = "http://api.openweathermap.org/geo/1.0/reverse";

export const location = (() => {
  const { subscribe, set } = writable<Location>({
    name: "",
    lat: null,
    lon: null,
    country: "",
  });

  /**
   * Get the user's current location and set the corresponding values to `location`
   */
  const autoset = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude: lat, longitude: lon } = position.coords;

        const response = await axios.get(GEOCODING_API_URL, {
          params: {
            lat,
            lon,
            limit: 1,
            appid: import.meta.env.VITE_WEATHER_API_KEY,
          },
        });

        const { name, country } = response.data[0];

        set({ name, lat, lon, country });
      });
    }
  };

  return { subscribe, autoset };
})();
