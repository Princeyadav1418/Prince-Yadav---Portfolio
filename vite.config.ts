import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), ...(process.env.ANALYZE === 'true' ? [visualizer({ filename: 'dist/bundle-analysis.html', open: true })] : [])],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) return 'vendor_react';
              if (id.includes('three') || id.includes('@react-three')) return 'vendor_three';
              if (id.includes('motion')) return 'vendor_motion';
              if (id.includes('lucide-react')) return 'vendor_icons';
              if (id.includes('@google/genai')) return 'vendor_genai';
              return 'vendor_misc';
            }
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
