import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // você tem src/index.css

// ✅ registra SW e marca "prod" só no build
if (import.meta.env.PROD) {
  document.body.classList.add('prod');
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
