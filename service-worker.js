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
      '/css/Mercury.css',
      '/fonts/avenir_heavy/avenirltstd-heavy-webfont.eot',
      '/fonts/avenir_heavy/avenirltstd-heavy-webfont.svg',
      '/fonts/avenir_heavy/avenirltstd-heavy-webfont.ttf',
      '/fonts/avenir_heavy/avenirltstd-heavy-webfont.woff',
      '/fonts/avenir_light/avenirltstd-light-webfont.eot',
      '/fonts/avenir_light/avenirltstd-light-webfont.svg',
      '/fonts/avenir_light/avenirltstd-light-webfont.ttf',
      '/fonts/avenir_light/avenirltstd-light-webfont.woff',
      '/fonts/avenir_regular/avenirltstd-roman-webfont.eot',
      '/fonts/avenir_regular/avenirltstd-roman-webfont.svg',
      '/fonts/avenir_regular/avenirltstd-roman-webfont.ttf',
      '/fonts/avenir_regular/avenirltstd-roman-webfont.woff',
      '/fonts/bootstrap/glyphicons-halflings-regular.eot',
      '/fonts/bootstrap/glyphicons-halflings-regular.svg',
      '/fonts/bootstrap/glyphicons-halflings-regular.ttf',
      '/fonts/bootstrap/glyphicons-halflings-regular.woff',
      '/fonts/bootstrap/glyphicons-halflings-regular.woff2',
      '/fonts/clarendonurwbold/clarendonurw-bol-webfont.eot',
      '/fonts/clarendonurwbold/clarendonurw-bol-webfont.svg',
      '/fonts/clarendonurwbold/clarendonurw-bol-webfont.ttf',
      '/fonts/clarendonurwbold/clarendonurw-bol-webfont.woff',
      '/fonts/clarendonurwitalic/clarendonurw-regobl-webfont.eot',
      '/fonts/clarendonurwitalic/clarendonurw-regobl-webfont.svg',
      '/fonts/clarendonurwitalic/clarendonurw-regobl-webfont.ttf',
      '/fonts/clarendonurwitalic/clarendonurw-regobl-webfont.woff',
      '/fonts/clarendonurwligregular/clarendonurw-lig-webfont.eot',
      '/fonts/clarendonurwligregular/clarendonurw-lig-webfont.svg',
      '/fonts/clarendonurwligregular/clarendonurw-lig-webfont.ttf',
      '/fonts/clarendonurwligregular/clarendonurw-lig-webfont.woff',
      '/fonts/clarendonurwregular/clarendonurw-reg-webfont.eot',
      '/fonts/clarendonurwregular/clarendonurw-reg-webfont.svg',
      '/fonts/clarendonurwregular/clarendonurw-reg-webfont.ttf',
      '/fonts/clarendonurwregular/clarendonurw-reg-webfont.woff',
      '/fonts/fontawesome/fontawesome-webfont.eot',
      '/fonts/fontawesome/fontawesome-webfont.svg',
      '/fonts/fontawesome/fontawesome-webfont.ttf',
      '/fonts/fontawesome/fontawesome-webfont.woff',
      '/fonts/fontawesome/FontAwesome.otf',
      '/fonts/Int_Circular_Pro/IntCircularPTT-Black.ttf',
      '/fonts/Int_Circular_Pro/IntCircularPTT-BlackItalic.ttf',
      '/fonts/Int_Circular_Pro/IntCircularPTT-Bold.ttf',
      '/fonts/Int_Circular_Pro/IntCircularPTT-BoldItalic.ttf',
      '/fonts/Int_Circular_Pro/IntCircularPTT-Book.ttf',
      '/fonts/Int_Circular_Pro/IntCircularPTT-BookItalic.ttf',
      '/fonts/Int_Circular_Pro/IntCircularPTT-Light.ttf',
      '/fonts/Int_Circular_Pro/IntCircularPTT-LightItalic.ttf',
      '/fonts/Int_Circular_Pro/IntCircularPTT-Medium.ttf',
      '/fonts/Int_Circular_Pro/IntCircularPTT-MediumItalic.ttf',
      '/fonts/Int_Circular_Pro/IntCircularPTT-Thin.ttf',
      '/fonts/Int_Circular_Pro/IntCircularPTT-ThinItalic.ttf',
      '/fonts/solar/solar-font.dev.svg',
      '/fonts/solar/solar-font.eot',
      '/fonts/solar/solar-font.svg',
      '/fonts/solar/solar-font.ttf',
      '/fonts/solar/solar-font.woff',
      '/forms/Addenda/Addendum to Add Customer.pdf',
      '/forms/Employee Handbook/Vivint Solar Employee Handbook - 9.pdf',
      '/img/apple-touch-icon.png',
      '/img/apple-touch-icon.png',
      '/img/bg-palms.jpg',
      '/img/cad-icon-white.png',
      '/img/cad-icon.png',
      '/img/error-paper.png',
      '/img/lease-disclosure/az-lease-disclosure-1.png',
      '/img/lease-disclosure/az-lease-disclosure-1.png',
      '/img/loading-orange-t2.gif',
      '/img/location.png',
      '/img/mercury-bg-sun-1600x768-lowres.jpg',
      '/img/pdf_placeholder.jpg',
      '/img/planet-mercury-01.png',
      '/img/ppa/how-to-complete-a-ppa-1.png',
      '/img/ppa/how-to-complete-a-ppa-2.png',
      '/img/ppa/how-to-complete-a-ppa-3.png',
      '/img/ppa/how-to-complete-a-ppa-4.png',
      '/img/ppa/ppa-05.png',
      '/img/ppa/ppa-06.png',
      '/img/ppa/ppa-07.png',
      '/img/ppa/ppa-08.png',
      '/img/ppa/ppa-09.png',
      '/img/ppa/ppa-10.png',
      '/img/ppa/ppa-11.png',
      '/img/ppa/ppa-12.png',
      '/img/ppa/ppa-13.png',
      '/img/ppa/ppa-14.png',
      '/img/ppa/ppa-15.png',
      '/img/ppa/ppa-16.png',
      '/img/ppa/ppa-17.png',
      '/img/ppa/ppa-18.png',
      '/img/ppa/ppa-19.png',
      '/img/ppa/ppa-20.png',
      '/img/ppa/ppa-21.png',
      '/img/ppa/ppa-22.png',
      '/img/ppa/ppa-23.png',
      '/img/ppa/ppa-24.png',
      '/img/ppa/ppa-25.png',
      '/img/ppa/ppa-26.png',
      '/img/ppa/ppa-27.png',
      '/img/ppa/ppa-28.png',
      '/img/ppa/ppa-29.png',
      '/img/ppa/ppa-30.png',
      '/img/ppa/ppa-page-01.png',
      '/img/ppa/ppa-page-02.png',
      '/img/ppa/ppa-page-03.png',
      '/img/ppa/ppa-page-04.png',
      '/img/splash-05.jpg',
      '/img/suneye_placeholder.jpg',
      '/img/touch-icon-ipad-retina.png',
      '/img/touch-icon-ipad.png',
      '/img/touch-icon-iphone-retina.png',
      '/img/win-tile-large.png',
      '/img/win-tile-square.png',
      '/img/win-tile-tiny.png',
      '/img/win-tile-wide.png',
      '/img/glyphicons-halflings.png',
      '/index.html',
      '/js/vendor.min.js',
      '/js/templates.min.js',
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
