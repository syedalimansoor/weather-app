<script lang="ts">
  import { backgroundUrl } from "./stores";
  // import { onMount } from "svelte";

  import Header from "./lib/Header/Header.svelte";
  import SearchBar from "./lib/SearchBar/SearchBar.svelte";
  import CurrentTemp from "./lib/CurrentTemp/CurrentTemp.svelte";
  import ForecastTemp from "./lib/ForecastTemp/ForecastTemp.svelte";

  // onMount(() => backgroundUrl.setBackground("weather"));
</script>

<!-- Global styles -- skip to end for content-->
<svelte:head>
  <style lang="scss">
    /*
      Josh's Custom CSS Reset
      https://www.joshwcomeau.com/css/custom-css-reset/
    */

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    * {
      margin: 0;
    }
    html,
    body {
      height: 100%;
    }
    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }
    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }
    input,
    button,
    textarea,
    select {
      font: inherit;
    }
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }
    #root,
    #__next {
      isolation: isolate;
    }

    // Global styles

    :root {
      font-family: $font;
      font-size: $fs-default;
      font-weight: $fw-reg;
    }
  </style>
</svelte:head>

<div class="wrapper" style={`--background-url: url(${$backgroundUrl})`}>
  <Header />
  <SearchBar />
  <CurrentTemp />
  <ForecastTemp />
</div>

<!-- App styles -->
<style lang="scss">
  .wrapper {
    width: 100%;
    min-height: 100vh;
    /* background-image: var(--background-url); */
    background-image: url("./assets/default-bg.jpg");
    background-color: $transparent-gray;
    background-blend-mode: multiply;
    background-size: cover;
  }
</style>
