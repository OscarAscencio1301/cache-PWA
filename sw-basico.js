self.addEventListener('fetch', evento => {
    // const offlineResp = new Response(`
    // Bienvenido a mi pagina web
    // Necesitas intenet

    // `);

    // 
    const offlineResp = fetch('pages/offline.html');

    const resp = fetch(evento.request).catch(() => {
        return offlineResp;
    });
    evento.respondWith(resp)

});