<script lang="ts">
  import type { City } from "$src/stores/location";
  import DataListItem from "./DataListItem.svelte";

  export let cities: City[];
  export let value: string;
  export let closeDataList: () => void;
</script>

<div class="datalist-wrapper">
  {#if cities}
    <menu class="datalist">
      {#each cities as city}
        <DataListItem {city} on:close={closeDataList}/>
      {/each}
    </menu>
  {:else if value}
    Loading...
  {:else}
    Nothing to show.
  {/if}
</div>

<style lang="scss">
  .datalist-wrapper {
    display: grid;
    place-items: center;
    color: $black;
    min-height: 12rem;
  }
  .datalist {
    padding: 0;
    list-style-type: none;
    height: 100%;
    width: 100%;
  }
</style>
