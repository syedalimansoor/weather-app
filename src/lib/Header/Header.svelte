<script lang="ts">
  import Logo from "./Logo.svelte";
  import UnitToggle from "./UnitToggle.svelte";
</script>

<div class="header">
  <Logo />
  <UnitToggle />
</div>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
  }
</style>
