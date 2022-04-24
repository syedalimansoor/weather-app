<script lang="ts">
  import axios from "axios";
  import { location, unit } from "$src/stores";
  import type { CurrentTemp } from "./curr_temp";
  import { convertTemp, toSentenceCase } from "$src/utils";
  import WeatherIcon from "../WeatherIcon.svelte";

  let currentTemp: CurrentTemp = {
    temp: null,
    feels_like: null,
    humidity: null,
    description: null,
    iconCode: null,
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
        currentTemp.iconCode = data.weather[0].id;
      });
    }
  }

  // Convert temperature values and round down
  $: temp = Math.round(convertTemp(currentTemp.temp, $unit));
  $: feels_like = Math.round(convertTemp(currentTemp.feels_like, $unit));
</script>

<div class="wrapper">
  {#if currentTemp.temp}
    <h2 class="current-temp">{temp}&deg;{$unit}</h2>
    <p class="feels-like">Feels like {feels_like}&deg;{$unit}</p>

    <div class="details">
      {toSentenceCase(currentTemp.description)} <br />
      Humidity: {currentTemp.humidity}%
    </div>

    <div class="weather-icon">
      <WeatherIcon iconCode={currentTemp.iconCode} />
    </div>
  {:else}
    <div class="skeleton" role="presentation">
      <div class="heading" />
      <div class="subtitle" />
      <div class="paragraph" />
    </div>
  {/if}
</div>

<style lang="scss">
  .wrapper {
    position: relative;
  }

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
    margin-bottom: 1em;
    @media (min-width: $bp-tablet) {
      font-size: $fs-large;
    }
  }

  .details {
    font-size: $fs-small;
    line-height: 1.2;
    @media (min-width: $bp-tablet) {
      font-size: $fs-medium;
    }
  }

  .weather-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 3rem;
    line-height: 1.2;

    @media (min-width: $bp-tablet) {
      font-size: 6rem;
      line-height: 1.7;
      top: 0;
      bottom: unset;
    }
  }

  .skeleton {
    opacity: 0.6;

    * {
      background: $transparent-gray;
      background: linear-gradient(
        110deg,
        $transparent-gray 8%,
        $white 18%,
        $transparent-gray 33%
      );
      background-size: 200% 100%;
      transition: 200ms ease;
      animation: shine 1.5s infinite linear;
    }

    .heading {
      height: $fs-xlarge;
      width: 15em;
      margin-bottom: 1em;
    }
    .subtitle {
      height: $fs-medium;
      width: 12em;
      margin-bottom: 2em;
    }
    .paragraph {
      height: $fs-large;
      width: 10em;
    }

    @media (min-width: $bp-tablet) {
      .heading {
        height: $fs-xxlarge;
        width: 20em;
        margin-bottom: 2em;
      }
      .subtitle {
        height: $fs-large;
        width: 18em;
        margin-bottom: 4em;
      }
    }
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
</style>
