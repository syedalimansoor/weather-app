import { writable } from "svelte/store";

interface Location {
  name: string;
  local_names?: object;
  lat: number;
  lon: number;
  country: string;
}

export const location = writable<Location>(null);
