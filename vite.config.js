// vite.config.js — MODO DIAGNÓSTICO (SEM OFUSCAÇÃO)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2018',
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
});
