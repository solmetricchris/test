importScripts('serviceworker-cache-polyfill.js');

// The SW will be shutdown when not in use to save memory,
// be aware that any global state is likely to disappear
console.log('SW startup');

self.addEventListener('install', function (event) {
  console.log('SW installing...');

  event.waitUntil(caches.open('static-v1').then(function (cache) {
    console.log('SW installed!');

    return cache.addAll([
      '/',
      '/index.html',
      '/js/Gemini.min.js'
    ]);
  }));
});

var expectedCaches = [
  'static-v1'
];

self.addEventListener('activate', function (event) {
  console.log('SW activating...');
  event.waitUntil(caches.keys().then(function (cacheNames) {
    console.log('SW activated!');

  }));
});

self.addEventListener('fetch', function (event) {
  console.log('SW fetching...');
  var requestURL = new URL(event.request.url);

  // Poke a hole and allow ping and login routes to go over the network
  if (requestURL.pathname.indexOf('ping') === -1 && requestURL.pathname.indexOf('login') === -1) {
    event.respondWith(caches.match(event.request).then(function (response) {
      console.log('SW fetched ', response);
      return response || new Response('Nothing in the cache for this request');
    }));
  }
});
