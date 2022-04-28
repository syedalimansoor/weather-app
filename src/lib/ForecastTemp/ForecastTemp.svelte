<script lang="ts">
  import ForecastMode from "./ForecastMode.svelte";
  import ForecastList from "./ForecastList.svelte";

  let mode: "hourly" | "daily" = "hourly";
</script>

<section class="wrapper">
  <header class="header">
    <h2 class="heading">Forecast</h2>
    <ForecastMode bind:mode />
  </header>
  <ForecastList {mode} />
</section>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: end;
    line-height: unset;
    margin-bottom: 0.4em;
  }

  .heading {
    font-size: $fs-medium;
  }
</style>
