// vite.config.js — versão 100% estável para Vercel (SPA React)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // 👈 Caminho absoluto (necessário na Vercel)
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2018',
    emptyOutDir: true,
  },
});
