// vite.config.js
import { defineConfig } from "vite";
// html partals
import injectHTML from "vite-plugin-html-inject";
// optimize images
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  base: "./",
  root: "src",
  publicDir: "../public",
  build: {
    minify: "esbuild",
    outDir: "../docs",
    sourcemap: "inline",
  },
  server: {
    open: "/index.html",
  },
  plugins: [
    injectHTML(),
    ViteImageOptimizer({
      /* pass your config */
    }),
  ],
});
