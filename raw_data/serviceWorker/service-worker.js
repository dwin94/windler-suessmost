var CACHE_NAME = 'v11';
var urlsToCache = [
  // './',
  // './index.html',
  './assets/dist/main.css'
  // './assets/images/apples-header_tiny.jpg',
  // './assets/images/products/frischer-apfelsaft-tropft-vom-band.jpg',
  // './assets/images/products/obstanlage.jpg',
  // './assets/images/products/trester-rutscht-vom-band.jpg',
  // './assets/images/products/unsere-produkte.jpg',
  // './assets/images/apples-header_rotate_tiny.jpg'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[ServiceWorker] Activated');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(thisCacheName) {
          return thisCacheName !== CACHE_NAME;
        }).map(function(thisCacheName) {
          console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
          return caches.delete(thisCacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log('service worker loads from cache: ', event.request.url);
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
