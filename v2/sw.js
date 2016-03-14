// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     //fetchStuffAndInitDatabases()
//     console.log ('instalando ...');
//   );
// });

// this.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open('v1').then(function(cache) {
//       return cache.addAll([
//         'my-app/cars.jpg' 
//       ]);
//     })
//   );
// });
//
CACHE_NAME = 'my-site-cache-v2';
urlsToCache = [
  'css/estilo.css',
  '../teste-url-cacheada.html'
];

self.addEventListener('install', function(event) {
  // perform install steps
  event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Cache aberto');
          return cache.addAll(urlsToCache);
        })
    );

});

self.addEventListener('fetch', function(event) {
  console.log('fetch = ' + event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
       // console.log('cache response = ' + response);
        // Cache hit - return response
        if (response) {
          console.log('cache response = ' + response);
          return response;
        }
        //console.log('cache response = ' + event.request);
        return fetch(event.request);
      }
    )
  );
});

// self.addEventListener('activate', function(event) {
//   // You're good to go!
//   console.log("Ativado! ");
// });

// self.addEventListener('fetch', function(event) {
// 	console.log("addEventListener");
//   // if (/\.jpg$/.test(event.request.url)) {
//   // 	console.log("substituicao de imagem");
//   //   event.respondWith(
//   //     fetch('//http://lh3.googleusercontent.com/WCNQfpkXItAVLRPdsxx7d8O9yHf1spUilzBJRs9ZL53DibeX9QDlLvmfhsEY2cThN-3fq61h-N4szfnLHe0lbkBprYtmdVi36Hv7fEqq=s660', {
//   //       mode: 'no-cors'
//   //     })
//   //   );
//   // }
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     fetch(event.request).catch(function() {
//       return new Response("Request failed!");
//     })
//   );
// });

// this.onfetch = function(event) { 
// 	console.log("evento acionado");
//   event.respondWith(new Response("Hello world!"));
// };
