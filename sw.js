self.addEventListener('install', e => {
    const cachePromesa = caches.open('cache-1')
        .then(cache => {
            return cache.addAll([

                '/index.html',
                '/css/style.css',
                '/img/main.jpg',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                '/js/app.js'
            ]);


        });
    e.waitUntil(cachePromesa);
});


self.addEventListener('fetch', e => {
    //Cache Only: Toda la app no esta conectada a internet
    e.respondWith(caches.match(e.request));
})