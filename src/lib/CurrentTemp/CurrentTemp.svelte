<script lang="ts">
  import axios from "axios";
  import { location, unit } from "$src/stores";
  import type { CurrentTemp } from "./curr_temp";

  let currentTemp: CurrentTemp = {
    temp: null,
    feels_like: null,
    humidity: null,
    description: null,
  };

  location.subscribe(async (location) => {
    if (location.name) {
      const { data } = await axios(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat: location.lat,
            lon: location.lon,
            appid: import.meta.env.VITE_WEATHER_API_KEY,
          },
        }
      );

      currentTemp.temp = data.main.temp;
      currentTemp.feels_like = data.main.feels_like;
      currentTemp.humidity = data.main.humidity;
      currentTemp.description = data.weather[0].description;
    }
  });
</script>


