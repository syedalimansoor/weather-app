<script lang="ts">
  import { location } from "$src/stores";
  import axios from "axios";
  import ForecastItem from "./ForecastItem.svelte";
  export let mode: "hourly" | "daily";

  const FORECAST_API_URL = "https://api.openweathermap.org/data/2.5/forecast";

  let tempList: Array<{
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: Array<{
      description: string;
      id: number;
    }>;
  }> = [];

  location.subscribe((location) => {
    if (location.name) {
      axios(FORECAST_API_URL, {
        params: {
          lat: location.lat,
          lon: location.lon,
          appid: import.meta.env.VITE_WEATHER_API_KEY,
        },
      }).then(({ data }) => {
        tempList = data.list;
      });
    }
  });
</script>

<div class="wrapper">
  {#each tempList as temp, index}
    {#if mode === "hourly" || (mode === "daily" && index % 8 === 0)}
      <ForecastItem />
    {/if}
  {/each}
</div>
