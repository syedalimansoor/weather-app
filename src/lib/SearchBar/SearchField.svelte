<script lang="ts">
  import { location } from "$src/stores";
  import { search } from "$src/utils";
  import type { City } from "$src/stores/location";

  let editing: boolean = false;
  let value: string = "";
  let cities: City[];

  const handleFocus = () => {
    editing = true;
    value = "";
  };

  const handleBlur = (evt: Event) => {
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

  $: {
    if (!editing && $location.name)
      value = `${$location.name}, ${$location.country}`;
  }
</script>

<div class="wrapper">
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

<style lang="scss">
  .wrapper {
    flex-grow: 1;
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
    display: inline-block;
    font-size: $fs-small;
    background-color: $white;
    padding: 0.6rem 0.8rem;
    text-align: right;
    width: 100%;
  }
</style>
