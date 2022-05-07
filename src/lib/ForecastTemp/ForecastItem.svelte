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
        hour: "2-digit",
        hour12: true,
        minute: "2-digit",
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
    min-width: 10em;
    position: relative;
    scroll-snap-align: start;

    &:not(:last-child) {
      border-right: 1px solid transparent;
      &::after {
        content: "";
        position: absolute;
        left: 100%;
        inset-block: 1em;
        width: 1px;
        background-color: $white;
      }
    }
  }

  .time {
    font-style: italic;
  }

  .weather-icon {
    font-size: 3rem;
  }

  .temp {
    font-weight: $fw-reg;
    font-size: $fs-medium;
  }
</style>
