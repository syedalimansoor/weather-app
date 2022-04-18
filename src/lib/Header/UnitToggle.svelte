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

  $slider-size: 1.2em;
  $toggle-height: 1.6em;
  $toggle-width: 3.4em;
  $inset: calc(($toggle-height - $slider-size) / 2);

  .toggle {
    width: $toggle-width;
    height: $toggle-height;
    position: relative;

    background-color: $transparent-gray;
    border-radius: 99em;
    cursor: pointer;
  }

  .slider {
    position: absolute;
    width: $slider-size;
    inset-block: $inset;
    left: $inset;

    transition: 100ms ease;
    border-radius: 99em;
    background-color: $white;
    box-shadow: 0px 2px 4px rgba(45, 45, 45, 0.5);
  }

  .checkbox {
    display: none;
    opacity: 0;
    width: 0;
    height: 0;

    &:checked ~ .slider {
      left: $toggle-width - $inset - $slider-size;
    }
  }
</style>
