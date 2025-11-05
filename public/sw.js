// public/sw.js
const NAME = 'anti-scrape-sw';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

let lastHit = 0;
self.addEventListener('fetch', (event) => {
  const now = Date.now();
  const delta = now - lastHit;
  lastHit = now;

  // se a ferramenta disparar muitas requests muito rápidas,
  // devolve 429 para "frear"
  if (delta < 40) {
    event.respondWith(
      new Response('Too Many Requests', {
        status: 429,
        headers: { 'Cache-Control': 'no-store' }
      })
    );
    return;
  }
  // segue fluxo normal
  event.respondWith(fetch(event.request));
});
