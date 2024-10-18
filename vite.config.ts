import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      // Remove the `external` option or only use it if you have a specific reason.
    }
  },
  define: {
    'process.env': process.env
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Ensure Dart Sass is used
        implementation: (await import('sass')).default,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
