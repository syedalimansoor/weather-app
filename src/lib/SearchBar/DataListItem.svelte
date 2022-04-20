<script lang="ts">
  import type { City } from "$src/stores/location";
  import CountryFlag from "$lib/CountryFlag.svelte";

  export let city: City;
</script>

<li class="item">
  <button class="item-btn">
    <span class="flag">
      <CountryFlag code={city.country} />
    </span>
    <span class="info">{city.name}, {city.country}</span>
  </button>
</li>

<style lang="scss">
  .item {
    position: relative;
    &:not(:last-of-type) {
      &::after {
        content: "";
        position: absolute;
        top: 100%;
        height: 1px;
        inset-inline: 0.6rem;
        background-color: $transparent-gray;
        z-index: 2;
      }
    }
  }

  .item-btn {
    appearance: none;
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: $fs-small;
    padding: 0.6rem 0.6rem;
    text-align: right;
    cursor: pointer;
    background-color: $white;
    transition: background-color 200ms ease;

    &:hover {
      background-color: adjust-color($color: $white, $lightness: -5%);
    }
  }

  .flag {
    line-height: 0;
    font-size: 1.4rem;
  }
</style>
