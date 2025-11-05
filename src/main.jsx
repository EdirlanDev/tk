import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// ✅ Produção: apenas adiciona uma classe <body>, sem registrar SW
if (import.meta.env.PROD) {
  document.body.classList.add('prod');
  // Nenhum service worker será registrado
  // (os antigos serão desregistrados automaticamente)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((r) => r.unregister());
    });
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
