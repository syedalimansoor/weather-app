import { ls } from "$src/utils";
import { writable } from "svelte/store";

export const unit = (() => {
  const { subscribe, set, update } = writable<"C" | "F">("C");

  /**
   * Get previous localStorage value and set if present
   */
  const autoset = () => {
    const prevUnit: "C" | "F" | null = ls.get("unit");
    if (prevUnit) {
      set(prevUnit);
    } else {
      ls.set("unit", "C");
    }
  };

  /**
   * Toggle the temperature unit store value between "C" and "F"
   */
  const toggle = () => {
    update((value) => {
      switch (value) {
        case "C":
          ls.set("unit", "F");
          return "F";
        case "F":
          ls.set("unit", "C");
          return "C";
        default:
          throw new Error("Invalid value stored in unit");
      }
    });
  };

  return { subscribe, toggle, autoset };
})();
