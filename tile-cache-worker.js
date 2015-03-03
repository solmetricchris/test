importScripts('serviceworker-cache-polyfill.js');

// The SW will be shutdown when not in use to save memory,
// be aware that any global state is likely to disappear
console.log('SW startup');

self.addEventListener('install', function (event) {
  console.log('tile cache installing...');

  event.waitUntil(caches.open('map-tile-cache').then(function (cache) {
    console.log('tile cache installed!');
  }));
});

var expectedCaches = [
  'map-tile-cache'
];

self.addEventListener('activate', function (event) {
  console.log('tile cache activating...');
  event.waitUntil(caches.keys().then(function (cacheNames) {
    console.log('tile cache activated!');
  }));
});

self.addEventListener('fetch', function (event) {
  console.log('tile cache fetching...');
  var requestURL = new URL(event.request.url);

  // Poke a hole and allow ping and login routes to go over the network

    event.respondWith(caches.match(event.request).then(function (response) {
      console.log('tile fetched from cache ', response);
            if(response) {
                console.log("found!");
                return response;
            } else {
                console.log('unable to fetch tile from cache go get it elsewhere! ', response);
            }
      return response || new Response('Nothing in the cache for this request');
    }, function(response) {
            console.log('unable to fetch tile from cache ', response);
        })
    );
});
