<script lang="ts">
  import { unit } from "$src/stores";
  import { convertTemp, toSentenceCase } from "$src/utils";
  import WeatherIcon from "../WeatherIcon.svelte";

  export let temp: {
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: Array<{
      description: string;
      id: number;
    }>;
  };
</script>

<article class="forecast-item">
  <time datetime={temp.dt_txt}>{temp.dt_txt}</time>
  <WeatherIcon iconCode={temp.weather[0].id} />
  <h3>{Math.round(convertTemp(temp.main.temp, $unit))}</h3>
  <p>{toSentenceCase(temp.weather[0].description)}</p>
</article>
