const CACHE_NAME = 'sock';
const urlsToCache = [
  '/',
  '/index.html',
  '/sock.html',
  '/style.css',
  '/sock.css',
  '/app.js',
  '/icons/socketdark.png',
  '/icons/socketwhite.png',
  'icons',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});