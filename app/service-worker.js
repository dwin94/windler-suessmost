const cacheName = 'v1';
const cacheFiles = [
  './',
  './index.html',
  './assets/dist/main.css',
  './assets/dist/main.js'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] installed');

  e.waitUntil(
    caches.open(cacheName)
          .then(function(cache) {
            console.log("[ServiceWorker] caching cacheFiles");
            return cache.addAll(cacheFiles);
          })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activated');

  e.waitUntil(
    caches.keys()
          .then(function(cacheNames) {
            return Promise.all(cacheNames.map(function(thisCacheName) {
              if (thisCacheName !== cacheName) {
                console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
                return caches.delete(thisCacheName);
              }
            }));
          })
        );

});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] fetching', e.request.url);

  e.waitUntil(
    caches.match(e.request)
          .then(function(response) {
            if(response) {
              console.log('[ServiceWorker] found in cache', e.request.url);
              return response;
            }

            return fetch(e.request);
          })
  );
});
