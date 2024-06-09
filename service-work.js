const CACHE_NAME = 'REALM 0.1 Alpha';
const urlsToCache = [
  '/',
  '/index.html',
  '/sock.html',
  '/style.css',
  '/sock.css',
  '/app.js',
  'icon',
  'icon/Realm_transparent2.png'
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