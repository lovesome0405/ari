const CACHE_NAME = 'hanroute-ai-shell-v8';
const APP_SHELL = [
  'index.html',
  'planner.html',
  'routes.html',
  'route-detail.html',
  'map.html',
  'weather.html',
  'support.html',
  'passport.html',
  'culture-data.html',
  'about.html',
  'style.css',
  'app.js',
  'manifest.json',
  'image-prompts.md',
  'assets/images/home/day-1.webp',
  'assets/images/home/day-2.webp',
  'assets/images/home/day-3.webp',
  'assets/images/home/day-4.webp',
  'assets/images/home/evening-1.webp',
  'assets/images/home/evening-2.webp',
  'assets/images/home/evening-3.webp',
  'assets/images/home/evening-4.webp',
  'assets/images/home/night-1.webp',
  'assets/images/home/night-2.webp',
  'assets/images/home/night-3.webp',
  'assets/images/home/night-4.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
