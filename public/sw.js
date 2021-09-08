const cacheName = "sw-cache-v4";

// Cache all the files to make a PWA
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        "/",
        "/worker.js",
        "/index.html",
        "/manifest.json",
        "/css/bulma.min.css",
        "/pages/films/index.html",
        "/pages/species/index.html",
        "/pages/people/index.html",
        "/pages/planets/index.html",
        "/pages/vehicles/index.html",
        "/pages/starships/index.html",
        "/components/Film.js",
        "/components/Header.js",
        "/components/Nav.js",
        "/components/SearchConfig.js",
        "/components/SearchResultsHeader.js",
        "/scripts/htm.standalone.module.js",
        "/scripts/rxjs.umd.js",
        "/redux/actions/api.js",
        "/redux/actions/entity.js",
        "/redux/actions/films.js",
        "/redux/actions/people.js",
        "/redux/actions/planets.js",
        "/redux/actions/search.js",
        "/redux/actions/species.js",
        "/redux/actions/starships.js",
        "/redux/actions/vehicles.js",
        "/redux/middleware/core/api.js",
        "/redux/middleware/core/actionSplitter.js",
        "/redux/middleware/core/logger.js",
        "/redux/middleware/feature/people.js",
        "/redux/middleware/feature/films.js",
        "/redux/middleware/feature/planets.js",
        "/redux/middleware/feature/search.js",
        "/redux/middleware/feature/species.js",
        "/redux/middleware/feature/starships.js",
        "/redux/middleware/feature/vehicles.js",
        "/redux/reducers/films.reducer.js",
        "/redux/reducers/people.reducer.js",
        "/redux/reducers/planets.reducer.js",
        "/redux/reducers/vehicles.reducer.js",
        "/redux/reducers/search.reducer.js",
        "/redux/reducers/species.reducer.js",
        "/redux/reducers/starships.reducer.js",
        "/favicon.ico",
        "/icons/my-icon-512x512.png",
      ]);
    })
  );
});
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
