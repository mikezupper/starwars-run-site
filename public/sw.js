importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);

const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;
const { CacheableResponse, CacheableResponsePlugin } =
  workbox.cacheableResponse;

const matchFunction = ({ url, request, event }) => {
  const match = url.href.includes("https://api.starwars.run/api/");
  return match;
};

registerRoute(
  matchFunction,
  new CacheFirst({
    cacheName: "search-results-cache-v1.0.0",
    plugins: [new CacheableResponsePlugin({ statuses: [0, 200] })],
  })
);
registerRoute(
  ({ url }) =>
    url.pathname.startsWith("/icons/") ||
    url.pathname.startsWith("/css/") ||
    url.pathname.startsWith("/components/") ||
    url.pathname.startsWith("/pages/") ||
    url.pathname.startsWith("/redux/") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".css") ||
    url.pathname.startsWith("/scripts/"),
  new CacheFirst({
    cacheName: "static-cache-1.0.0",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
