<script lang="ts">
  import getFlag from "country-code-emoji";

  export let code: string;

  let flag: string = "";

  $: if (code) flag = getFlag(code);
</script>

<span class="icon">{flag}</span>

<style lang="scss">
  .icon {
    font-size: 2em;
    pointer-events: none;
  }
</style>
