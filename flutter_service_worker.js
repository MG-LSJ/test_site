'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7e34a98f912104d55b80157ffc107ec5",
"assets/AssetManifest.json": "bfc70e9a4c81d92a00176db3d15cabf9",
"assets/assets/icons/logo_apple_maps.svg": "2eb0ec4865b8a4dfa8ccea694159da7f",
"assets/assets/icons/logo_bing.svg": "5513291dc0c724fd30e6e0ffb90b73c1",
"assets/assets/icons/logo_foursquare.svg": "25d2ffa278cd8f9b148accb3d8116715",
"assets/assets/icons/logo_justdial.svg": "b796df30f1b1714099796458fde28012",
"assets/assets/icons/logo_mapathon_keralam.svg": "e0d7182646ae4de1f1c60d29f1196413",
"assets/assets/icons/logo_mapbox.svg": "430734138560edb45caa391775c93bd3",
"assets/assets/icons/logo_meta.svg": "7dc7cab1437c543a218a275d5b60283a",
"assets/assets/icons/logo_netatmo.svg": "0e701f792a1102928ed7d547ea79b612",
"assets/assets/icons/logo_osm_in.svg": "ddfbe7b61ca7591f87bfff8ce3fdddd3",
"assets/assets/icons/logo_osm_in.vec": "23b283163550045cfb71e8b5e173c9bf",
"assets/assets/icons/logo_rediff.svg": "98b36ca91b7d0eb0a3c19425710fc7fb",
"assets/assets/icons/logo_snapchat.svg": "004d7724d98f23c8b7614e0b5d70d554",
"assets/assets/icons/logo_swiggy.svg": "729056ca0063d8696cfea51f537b90d5",
"assets/assets/icons/logo_tomtom.svg": "24b4249d76aeaa63e8318ede37767248",
"assets/assets/icons/logo_uber.svg": "739ab76c13a8a1fb32afb13de637bfaf",
"assets/assets/icons/logo_weather.svg": "1adf5a89b9414c3c7055bceef23bbbf0",
"assets/assets/icons/logo_wework.svg": "b598ba53bcdb15adbe58c6d9b96ff20f",
"assets/assets/icons/logo_wikipedia.svg": "9ebd02352e3e505913eea3f403cf7f1f",
"assets/assets/images/logo_gmda.png": "59a22526644cb4b45e844ca5bacd4ebb",
"assets/assets/images/logo_osm.png": "37076a5bf4f77b2735d75a8ad2ef2975",
"assets/assets/images/logo_osm_animated.gif": "7e4bf981abb0796be8755f8f0e9e2df4",
"assets/assets/images/logo_osm_in.png": "4436bbf0cb82122583e581b75122cb48",
"assets/assets/images/map_ahemdabad.png": "163134de427c758bb0ce805006cdf159",
"assets/assets/images/map_ahmedabad.png": "163134de427c758bb0ce805006cdf159",
"assets/assets/images/map_amritsar.png": "17166e22ad94365f98775dee5049be6f",
"assets/assets/images/map_bengaluru.png": "6f6cf4766a9301ee686b5ca1eb0889f1",
"assets/assets/images/map_bhubaneswar.png": "ba6aca478dec12db677f7eb978fc56c1",
"assets/assets/images/map_chandigarh.png": "c889d060fa7ef9210437993d3a7378c5",
"assets/assets/images/map_chennai.png": "e925e67aa57cbd49d93e94f2243fcb65",
"assets/assets/images/map_dehradun.png": "650b628e9baea3426a2c5636f3026df8",
"assets/assets/images/map_delhi.png": "9338d1249f72a69782c287601c365fe6",
"assets/assets/images/map_guwahati.png": "fec768964c04075afaedb5d789eaf6b3",
"assets/assets/images/map_hydeabad.png": "67c6c6a090d8c9cf32aaa06cf83a2b82",
"assets/assets/images/map_hyderabad.png": "67c6c6a090d8c9cf32aaa06cf83a2b82",
"assets/assets/images/map_indore.png": "920eca57217a45e599ee39e20ec86f03",
"assets/assets/images/map_jaipur.png": "a3e615fdf9b270e1dfd2ee42800f8287",
"assets/assets/images/map_kolkata.png": "bce1319505774b868b97f011df30f498",
"assets/assets/images/map_lucknow.png": "f88b6929c59ddd14d93eedfb1d3585e6",
"assets/assets/images/map_mumbai.png": "826f557befb223a16b4babc1a7b1d362",
"assets/assets/images/map_new_delhi.png": "a469388d42d295cd2d8c1ac95e684cee",
"assets/assets/images/map_patna.png": "b813f6f0ec4b1a7f0068d35732e93d6f",
"assets/assets/images/map_pune.png": "c22dc9898d6aa87ed6fdc7e839ed81d4",
"assets/assets/images/map_srinagar.png": "e76a55f41d3a7b522a440b1777a954e6",
"assets/assets/images/map_surat.png": "2d20b1878de8c1be1b1c143506574cad",
"assets/assets/images/map_visakhapatnam.png": "c4c79938f6ee9f32e043b0ae07e4ab6e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "b00043ebbc57d0e681a5b00fe7d57409",
"assets/NOTICES": "edd71b17acb8173f73dd42d5161bae60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e6f7259190ecbff7e852a0092bac8481",
"/": "e6f7259190ecbff7e852a0092bac8481",
"main.dart.js": "3cf4a1aac1bda2e42bee489847a0170a",
"manifest.json": "f2e55a4ff9ff7700dd1b581d6919865a",
"version.json": "f3f1eb29bdb4f379ca08d3040f93dc14"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
