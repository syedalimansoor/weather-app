<script lang="ts">
  import SearchField from "./SearchField.svelte";
  import CountryFlag from "$lib/CountryFlag.svelte";
</script>

<label class="label" for="search">Search for a city</label>
<div class="field">
  <SearchField />
  <CountryFlag />
</div>

<style lang="scss">
  .label {
    display: block;
    margin-bottom: 0.8rem;
  }

  .field {
    display: flex;
  }
</style>
