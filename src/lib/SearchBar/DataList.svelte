<script lang="ts">
  import type { City } from "$src/stores/location";

  import DataListItem from "./DataListItem.svelte";

  export let cities: City[];
</script>

<div class="datalist-wrapper">
  {#if cities}
    <ul class="datalist">
      {#each cities as city}
        <DataListItem {city} />
      {/each}
    </ul>
  {:else}
    loading
  {/if}
</div>

<style lang="scss">
  .datalist-wrapper {
    display: grid;
    place-items: center;
    color: $black;
    min-height: 12em;
  }
  .datalist {
    padding: 0;
    list-style-type: none;
    height: 100%;
    width: 100%;
  }
</style>
