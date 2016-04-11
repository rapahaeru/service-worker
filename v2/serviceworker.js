//console.log("SW startup");

CACHE_NAME = 'my-site-cache-v20';
urlsToCache = [
  'index.html',
  'my-app/images/cars.jpg',
  'my-app/images/404.gif',
  'my-app/js/jquery-221-min.js',
  'my-app/assets/css/style.css',
  'my-app/images/off-line.png',
  'my-app/404.html',
  'my-app/teste-url-cacheada.html' //adicionar mais uma imagem para testar cacheamento
];

self.addEventListener('install', function(event) {
  // perform install steps
  event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          //console.log('Cache aberto');
          return cache.addAll(urlsToCache);
        })
    );

});

self.addEventListener('activate', function(event) {
  console.log('[SW] Activate');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // console.log("cache index = " + CACHE_NAME.indexOf(cacheName));
          if (CACHE_NAME.indexOf(cacheName) == -1) {
            //console.log('[SW] Delete cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  //console.log("fetch : " + event.request.url);
  event.respondWith(
    // caches.match(event.request).catch(function() {
    //   return fetch(event.request);

    //cacheia as requests.
    caches.match(event.request).then(function(response) {

      if (!response.ok){
        console.log(response);
        throw Error('Error status : ' + response.status);
      }
      return response || fetch(event.request.clone());
      //return fetch(event.request);
    }).catch(function () {
      // abre quando não há link registrado no serviceworker
      return caches.match('my-app/404.html');
    })
  );
});

self.addEventListener('click', function(event) {
  console.log('click : ' + event);
});
