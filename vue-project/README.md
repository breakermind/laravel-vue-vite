# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Project Config

```js
import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: resolve(__dirname, '../public'),
    rollupOptions: {
      output: {
        dir: '../public',
        // One dir
        // chunkFileNames: "js/[name].js",
        // entryFileNames: 'js/[name].js',
        // assetFileNames: 'js/[name].[ext]',

        // Multi dir
        assetFileNames: 'vue/[ext]/[name][extname]',
        chunkFileNames: 'vue/chunks/[name].[hash].js',
        entryFileNames: 'vue/js/[name].js',

        // Settings
        manualChunks: undefined,
      }
    }
  }
})
```
