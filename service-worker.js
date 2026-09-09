const CACHE_PREFIX = `maru-shell-${encodeURIComponent(self.registration.scope)}-`;
const CACHE_NAME = `${CACHE_PREFIX}v25`;
const SCOPE_URL = new URL(self.registration.scope);
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
  'ai-photo.html',
  'account.html',
  'about.html',
  'style.css',
  'app.js',
  'admin.js',
  'manifest.json',
  'assets/favicon.svg',
  'assets/icons/icon.svg',
  'offline.html',
  'ari_culture_resources_appjs.json',
  'data/route_blueprints.json',
  'data/weather.json',
  'data/support.json',
  'data/passport.json',
  'data/courses.json',
  'data/public-data-sources.json',
  'data/festivals.json',
  'data/heritage.json',
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
  'assets/images/home/night-4.webp',
  'assets/images/routes/course-palace.webp',
  'assets/images/routes/course-hanok.webp',
  'assets/images/routes/course-craft.webp',
  'assets/images/routes/course-market.webp',
  'assets/images/routes/course-night.webp',
  'assets/images/routes/course-rainy.webp'
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
        Promise.all(keys.filter((key) => key !== CACHE_NAME && (key.startsWith(CACHE_PREFIX) || /^maru-shell-v\d+$/.test(key))).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

// Only the public app shell is eligible. Never cache auth, API or user data.
const SHELL_URLS = new Set(APP_SHELL.map((path) => new URL(path, SCOPE_URL).href));

async function publicResponse(request, canonicalUrl) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(canonicalUrl);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 4000);
  try {
    const response = await fetch(request, { signal: controller.signal });
    if (response.ok && !response.redirected) {
      await cache.put(canonicalUrl, response.clone()).catch(() => {});
      return response;
    }
    if (response.status >= 500 && cached) return cached;
    return response;
  } catch (error) {
    if (cached) return cached;
    if (request.mode === 'navigate') {
      const offline = await cache.match(new URL('offline.html', SCOPE_URL).href);
      if (offline) return offline;
    }
    return new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  } finally {
    clearTimeout(timer);
  }
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || request.headers.has('Authorization')) return;
  const url = new URL(request.url);
  if (url.origin !== SCOPE_URL.origin || !url.pathname.startsWith(SCOPE_URL.pathname)) return;
  url.search = '';
  url.hash = '';
  if (url.pathname === SCOPE_URL.pathname) url.pathname += 'index.html';
  if (!SHELL_URLS.has(url.href)) return;
  event.respondWith(publicResponse(request, url.href));
});
