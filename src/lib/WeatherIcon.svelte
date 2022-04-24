<script lang="ts">
  import { getWeatherIcon } from "$src/utils";

  export let iconCode: number;
</script>

<i class={getWeatherIcon(iconCode)} />
