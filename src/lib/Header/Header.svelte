<script lang="ts">
  import Logo from "./Logo.svelte";
  import UnitToggle from "./UnitToggle.svelte";
</script>

<header class="header">
  <Logo />
  <UnitToggle />
</header>

<style lang="scss">
  .header {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
  }
</style>
