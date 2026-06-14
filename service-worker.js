const CACHE_NAME = 'maru-shell-v18';
const APP_SHELL = [
  'index.html',
  'admin.html',
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
  'admin.js',
  'manifest.json',
  'assets/favicon.svg',
  'image-prompts.md',
  'ari_culture_resources_appjs.json',
  'data/route_blueprints.json',
  'data/weather.json',
  'data/support.json',
  'data/passport.json',
  'assets/images/ari/ari1.webp',
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
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const requestUrl = new URL(event.request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (isSameOrigin && response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
