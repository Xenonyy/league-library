importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');
const {registerRoute} = workbox.routing;
const {CacheFirst, StaleWhileRevalidate} = workbox.strategies;
const {CacheableResponse} = workbox.cacheableResponse;
const {ExpirationPlugin} = workbox.expiration;
workbox.loadModule('workbox-strategies');
workbox.loadModule('workbox-cacheable-response');
workbox.loadModule('workbox-expiration');

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
registerRoute(
  // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  // Use a Stale While Revalidate caching strategy
  new StaleWhileRevalidate({
    // Put all cached files in a cache named 'assets'
    cacheName: 'assets',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponse({
        statuses: [200],
      }),
    ],
  }),
);

// Cache images with a Cache First strategy
registerRoute(
  // Check to see if the request's destination is style for an image
  ({ request }) => request.destination === 'image',
  // Use a Cache First caching strategy
  new CacheFirst({
    // Put all cached files in a cache named 'images'
    cacheName: 'images',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponse({
        statuses: [200],
      }),
      // Don't cache more than 50 items, and expire them after 1 Year
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  }),
);

// Cache API responses of champion splash arts
registerRoute(
  new RegExp('/cdn/(.*)'),
  new StaleWhileRevalidate({
       cacheName: 'apiCache',
       plugins : [
          new ExpirationPlugin({
              maxEntries: 200,
              maxAgeSeconds: 60 * 60 * 24 * 30 // Store for 30 Days
          })
      ]
  })
);