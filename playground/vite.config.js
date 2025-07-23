import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    port: 3001,
    fs: {
      // Allow serving files from parent directory
      allow: ['..']
    }
  },
  resolve: {
    alias: {
      // Alias for easier imports
      '@': '../src'
    }
  },
  css: {
    postcss: '../postcss.config.js'
  }
});
