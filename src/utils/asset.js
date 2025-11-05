// src/utils/asset.js
// Gera URL relativa respeitando base './' do Vite e remove a '/' inicial.
export const ASSET = (p = '') => {
  const base = import.meta.env.BASE_URL || './';
  const clean = String(p).replace(/^\//, ''); // remove a barra inicial
  return `${base}${clean}`;
};
