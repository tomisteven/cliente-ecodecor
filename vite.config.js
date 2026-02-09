import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Compresión GZIP
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024, // Solo archivos > 1KB
    }),
    // Compresión Brotli (más eficiente)
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
    }),
  ],
  build: {
    // Optimización de chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor chunks para mejor caching
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-router': ['react-router-dom'],
        },
      },
    },
    // Optimización de assets
    assetsInlineLimit: 4096, // Inline assets < 4KB como base64
    chunkSizeWarningLimit: 500,
  },
})
