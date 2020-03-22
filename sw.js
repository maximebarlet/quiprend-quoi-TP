const name = 'mbarlet';
console.log(`Bonjour ${name}`);

addEventListener('install', (event) => {
    console.log('Hello from the service worker')
    event.waitUntil(
        caches.open('offline').then((cache) => {
          cache.add('offline.html');
        })
      );
  });

addEventListener('fetch', (event) => {
if (event.request.headers.get('Accept').includes('text/html')) {
    event.respondWith(
        fetch(event.request).catch(() => caches.match('offline.html')),
      );
}
});