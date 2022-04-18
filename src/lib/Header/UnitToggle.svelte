<script lang="ts">
  import { unit } from "$stores/index";
</script>

<div class="wrapper">
  &deg;C
  <label class="toggle">
    <input
      class="checkbox"
      type="checkbox"
      checked={$unit === "F"}
      on:click={unit.toggle}
    />
    <span class="slider" />
  </label>
  &deg;F
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .toggle {
    width: 3.4em;
    height: 1.6em;
    position: relative;

    background-color: $transparent-gray;
    border-radius: 99em;
    cursor: pointer;
  }

  .slider {
    position: absolute;
    width: 1.2em;
    inset-block: 0.2em;
    left: 0.2em;

    transition: 100ms ease;
    border-radius: 99em;
    background-color: $white;
  }

  .checkbox {
    display: none;
    opacity: 0;
    width: 0;
    height: 0;

    &:checked ~ .slider {
      left: 3.4em - 1.2em - 0.2em;
    }
  }
</style>
