/** @type {import('vite').UserConfig} */

import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    port: 3000,
  },
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../build",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        affiliate: resolve(__dirname, "src/affiliate.html"),
        "about-us": resolve(__dirname, "src/about-us.html"),
        sifuspy: resolve(__dirname, "src/sifuspy.html"),
        support: resolve(__dirname, "src/support.html"),
        "privacy-policy": resolve(__dirname, "src/privacy-policy.html"),
      },
    },
  },
});
