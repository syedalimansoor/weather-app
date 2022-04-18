import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "$src": path.resolve("./src"),
      "$stores": path.resolve("./src/stores"),
      "$lib": path.resolve("./src/lib"),
      "$assets": path.resolve("./src/assets"),
    },
  },
});
