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
