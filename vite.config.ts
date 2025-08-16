import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // This enables SPA fallback in development
    fs: {
      strict: false
    }
  },
  // For production build
  build: {
    outDir: 'dist',
  },
});
