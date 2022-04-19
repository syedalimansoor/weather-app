<script lang="ts">
  import { location } from "$src/stores";

  import SearchField from "./SearchField.svelte";
  import CountryFlag from "$lib/CountryFlag.svelte";
</script>

<label class="label" for="search">Search for a city</label>
<div class="field">
  <SearchField />
  {#if $location.country}
    <CountryFlag code={$location.country} />
  {/if}
</div>

<style lang="scss">
  .label {
    display: block;
    margin-bottom: 0.8rem;
  }

  .field {
    display: flex;
    align-items: center;
    gap: 1em;
  }
</style>
