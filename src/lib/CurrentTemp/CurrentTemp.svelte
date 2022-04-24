<script lang="ts">
  import axios from "axios";
  import { location, unit } from "$src/stores";
  import type { CurrentTemp } from "./curr_temp";
  import { convertTemp } from "$src/utils/convertTemp";

  let currentTemp: CurrentTemp = {
    temp: null,
    feels_like: null,
    humidity: null,
    description: null,
  };

  // Fetch weather data and store in currentTemp
  $: {
    if ($location.name) {
      axios("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          lat: $location.lat,
          lon: $location.lon,
          appid: import.meta.env.VITE_WEATHER_API_KEY,
        },
      }).then(({ data }) => {
        currentTemp.temp = data.main.temp;
        currentTemp.feels_like = data.main.feels_like;
        currentTemp.humidity = data.main.humidity;
        currentTemp.description = data.weather[0].description;
      });
    }
  }

  // Convert temperature values and round down
  $: temp = Math.round(convertTemp(currentTemp.temp, $unit));
  $: feels_like = Math.round(convertTemp(currentTemp.feels_like, $unit));
</script>

<div class="wrapper">
  <h2 class="current-temp">{temp}&deg;{$unit}</h2>
  <p class="feels-like">Feels like {feels_like}&deg;{$unit}</p>
</div>

<style lang="scss">
  .current-temp {
    font-size: $fs-xlarge;
    font-weight: $fw-reg;
    line-height: 1.2;

    @media (min-width: $bp-tablet) {
      font-size: $fs-xxlarge;
    }
  }

  .feels-like {
    font-size: $fs-medium;
    @media (min-width: $bp-tablet) {
      font-size: $fs-large;
    }
  }
</style>
