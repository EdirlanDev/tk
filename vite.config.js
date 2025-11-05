// vite.config.js — MODO ESTÁVEL (SEM OFUSCAÇÃO/PROTEÇÃO)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Em Vercel use base absoluto — evita 404 em refresh de rotas
  base: '/',

  plugins: [react()],

  optimizeDeps: {
    include: ['react', 'react-dom', 'swiper', 'swiper/react'],
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2018',
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },

  esbuild: {
    legalComments: 'none',
  },

  server: {
    host: true,
    port: 5173,
  },
});
