<script lang="ts">
  export let mode: "hourly" | "daily";
</script>

<div class="wrapper">
  <label>
    <input
      type="radio"
      name="mode"
      value="hourly"
      class="radio"
      bind:group={mode}
    />
    <span class="button">Hourly</span>
  </label>
  <label>
    <input
      type="radio"
      name="mode"
      value="daily"
      class="radio"
      bind:group={mode}
    />
    <span class="button">Daily</span>
  </label>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    border: 1px solid $white;
    border-radius: 0.2em;
  }

  .button {
    display: inline-block;
    padding: 0.2em 0.8em;
    font-size: $fs-xsmall;
    cursor: pointer;
    transition: 200ms ease;
  }

  .radio {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;

    &:checked ~ .button {
      background-color: $white;
      color: $black;
    }
  }
</style>
