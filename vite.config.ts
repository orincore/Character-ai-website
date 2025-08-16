import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { writeFileSync } from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Plugin to copy _redirects file to the output directory
    {
      name: 'copy-redirects',
      closeBundle: () => {
        const to = resolve(__dirname, 'dist/_redirects');
        try {
          const content = '/* /index.html 200';
          writeFileSync(to, content);
          console.log('_redirects file copied successfully');
        } catch (err) {
          console.error('Error copying _redirects file:', err);
        }
      }
    }
  ],
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
    rollupOptions: {
      output: {
        // Ensure the _redirects file is included in the build
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === '_redirects') {
            return '[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
});
