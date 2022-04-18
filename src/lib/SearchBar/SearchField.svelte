<script lang="ts">
  import { location } from "$stores/index";

  let editing: boolean = false;
  let value: string = "";

  const handleFocus = () => {
    editing = true;
    value = "";
  };

  const handleBlur = () => {
    editing = false;
  };

  $: {
    if (!editing) value = $location.name;
  }
</script>

<input
  type="search"
  id="search"
  on:focus={handleFocus}
  on:blur={handleBlur}
  bind:value
/>
