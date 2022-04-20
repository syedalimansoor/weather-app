<script lang="ts">
  import type { City } from "$src/stores/location";

  export let cities: City[];
</script>

<div>
  {JSON.stringify(cities)}
</div>
