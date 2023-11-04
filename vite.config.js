// vite.config.js
import { defineConfig } from "vite";
// html partals
import injectHTML from "vite-plugin-html-inject";
// optimize images
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
// Concatenate JavaScript files (like former Starter Kit)
import concat from '@vituum/vite-plugin-concat'
// Calculate paths
import FastGlob from 'fast-glob'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Get all html files
const htmlFilesList = Object.fromEntries(
  FastGlob.sync('src/*.html').map(file => [
    // This remove `src/` as well as the file extension from each
    // file, so e.g. src/nested/foo.js becomes nested/foo
    path.relative(
      'src',
      file.slice(0, file.length - path.extname(file).length)
    ),
    // This expands the relative paths to absolute paths, so e.g.
    // src/nested/foo becomes /project/src/nested/foo.js
    fileURLToPath(new URL(file, import.meta.url))
  ]));

const inputFilesList = {
  ...htmlFilesList,
  'main': 'src/js/main.js',
}

export default defineConfig({
  base: "./",
  root: "src",
  publicDir: "../public",
  build: {
    minify: "esbuild",
    outDir: "../docs",
    sourcemap: "inline",
    emptyOutDir: true,
    rollupOptions: {
      input: inputFilesList,
      output: {
        sourcemap: true,
        entryFileNames: ({name}) => {
          if( name === 'main' ) {
            return 'js/main.js';
          }
          // default value
          // ref: https://rollupjs.org/configuration-options/#output-entryfilenames
          return "[name].js";
        },
      },
    },
  },
  server: {
    open: "/index.html",
  },
  plugins: [
    injectHTML(),
    ViteImageOptimizer({
      /* pass your config */
    }),
    concat({
      input: ['main.js']
    }),
  ],
});
