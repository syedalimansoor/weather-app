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
    if (!editing && $location.name)
      value = `${$location.name}, ${$location.country}`;
  }
</script>

<div class="wrapper">
  <input
    class="field"
    id="search"
    on:focus={handleFocus}
    on:blur={handleBlur}
    bind:value
  />
</div>

<style lang="scss">
  .wrapper {
    flex-grow: 1;
    position: relative;

    &::before {
      content: url("$assets/icon-search.svg");
      position: absolute;
      left: 0.8rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .field {
    border: none;
    display: inline-block;
    font-size: $fs-small;
    background-color: $white;
    padding: 0.6rem 0.8rem;
    text-align: right;
    width: 100%;
  }
</style>
