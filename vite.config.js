import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    laravel({
      input: ["resources/css/app.css", "resources/js/app.jsx"],
      refresh: true,
    }),
    react(),
    tailwindcss(),
  ],
  esbuild: {
    jsx: "automatic",
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "ziggy-js": resolve(__dirname, "vendor/tightenco/ziggy"),
    },
  },
});
