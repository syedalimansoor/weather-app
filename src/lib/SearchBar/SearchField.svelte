<script lang="ts">
  import { location } from "$src/stores";
  import { search } from "$src/utils";
  import type { City } from "$stores/location";
  import { fly } from "svelte/transition";

  import DataList from "./DataList.svelte";

  let editing: boolean = false;
  let value: string = "";
  let cities: City[];

  const handleFocus = () => {
    editing = true;
    value = "";
  };

  const handleBlur = () => {
    editing = false;
  };

  const handleInput = async (
    evt: Event & { currentTarget: EventTarget & HTMLInputElement }
  ) => {
    cities = await search(`https://api.openweathermap.org/geo/1.0/direct`, {
      params: {
        q: evt.currentTarget.value,
        limit: 5,
        appid: import.meta.env.VITE_WEATHER_API_KEY,
      },
    });
  };
  // Display the current chosen city if the user is not editing the search box
  $: {
    if (!editing && $location.name)
      value = `${$location.name}, ${$location.country}`;
  }
</script>

<div class="wrapper">
  <div class="field-wrapper">
    <input
      class="field"
      type="text"
      id="search"
      on:focus={handleFocus}
      on:blur={handleBlur}
      on:input={handleInput}
      bind:value
    />
  </div>
  {#if editing}
    <div class="datalist-wrapper" transition:fly={{ y: -10, duration: 500 }}>
      <DataList {cities} />
    </div>
  {/if}
</div>

<style lang="scss">
  .wrapper {
    flex-grow: 1;
    position: relative;

    @media (min-width: $bp-tablet) {
      flex-grow: 0;
    }
  }

  .field-wrapper {
    position: relative;
    &::before {
      content: url("$assets/icon-search.svg");
      position: absolute;
      left: 0.8rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .field {
    border: none;
    border-radius: 0.1em;
    display: inline-block;
    font-size: $fs-small;
    background-color: $white;
    padding: 0.6rem 0.8rem;
    text-align: right;
    width: 100%;
  }

  .datalist-wrapper {
    position: absolute;
    z-index: 2;
    border-radius: 0.1em;
    top: calc(100% + 1em);
    inset-inline: 0;
    background-color: $white;
  }
</style>
