<script lang="ts">
  import { unit } from "$src/stores";
  import { convertTemp, toSentenceCase } from "$src/utils";
  import WeatherIcon from "../WeatherIcon.svelte";

  export let mode: "hourly" | "daily";
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

  $: date = new Date(temp.dt_txt);
</script>

<article class="forecast-item">
  <time class="time" datetime={temp.dt_txt}>
    {#if mode === "hourly"}
      {date.toLocaleTimeString(undefined, {
        timeStyle: "short",
      })}
    {:else}
      {date.toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
      })}
    {/if}
  </time>
  <div class="weather-icon">
    <WeatherIcon iconCode={temp.weather[0].id} />
  </div>
  <div>
    <h3 class="temp">
      {Math.round(convertTemp(temp.main.temp, $unit))}&deg;{$unit}
    </h3>
    <p class="descr">{toSentenceCase(temp.weather[0].description)}</p>
  </div>
</article>

<style lang="scss">
  .forecast-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1em;
  }

  .time {
    font-style: italic;
  }
</style>
