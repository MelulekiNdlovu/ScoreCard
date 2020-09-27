var cacheName = 'scoreCardShell-v1';
var filesToCahe = [
	'/',
	'index.html',
	'basketball.html',
	'football.html',
	'js/app.js',
	'js/bball.js',
	'js/football.js',
	'js/bootstrap.bundle.js',
	'js/jquery-3.5.1.js',
	'js/localforage.min.js',
	'img/icon-144.png'
];

self.addEventListener('install', function(e) {
	console.log('[ServiceWorker] install');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			return cache.addAll(filesToCahe);
		})
	);
});

self.addEventListener('activate', function(e){
	console.log('[ServiceWorker] activate');
	e.waitUntil(
		caches.keys().then(function(keyList){
			return Promise.all(keyList.map(function(key) {
				if(key !== cacheName) {
					console.log('[ServiceWorker] Removing old cache', key);
					return cache.delete(key);
				}
			}));
		})
	);
});


self.addEventListener('fetch', function(e){
	console.log('[ServiceWorker] fetch', e.request.url);
	e.respondWith(
		caches.match(e.request).then(function(response) {
			return response || fetch(e.request);
		})
	);
});