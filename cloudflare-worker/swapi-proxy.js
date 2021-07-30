/**
 * An object with different URLs to fetch
 * @param {Object} ORIGINS
 */
const ORIGINS = {
  "swapi-proxy.truestack.workers.dev": "swapi.dev",
  "api.starwars.run": "swapi.dev",
};
const regex = new RegExp("swapi.dev", "g");

async function handleRequest(request) {
  const url = new URL(request.url);
  // Check if incoming hostname is a key in the ORIGINS object
  if (url.hostname in ORIGINS) {
    const target = ORIGINS[url.hostname];
    url.hostname = target;
    // If it is, proxy request to that third party origin
    const originalResponse = await fetch(url.toString(), request);

    // Change response body by replacing the original API URL
    const originalBody = await originalResponse.text();
    return new Response(
      originalBody.replace(regex, "api.starwars.run"),
      originalResponse
    );
  }

  // Otherwise, process request as normal
  return await fetch(request);
}
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
