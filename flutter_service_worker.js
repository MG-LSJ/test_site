'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1c6cc4c4d831fa38f38d01755b10124a",
"assets/AssetManifest.json": "26db8ae28760ee1a51112e321818ba05",
"assets/assets/icons/svg/icon_facebook.svg": "e513f763a8cdb1ff5d797061c59c9ead",
"assets/assets/icons/svg/icon_github.svg": "11ad3e15d0740e7e7cb5241baf37c6d3",
"assets/assets/icons/svg/icon_mailinglist.svg": "9df7c1ba9f3043fa1a80acc0aae3ae80",
"assets/assets/icons/svg/icon_matrix.svg": "f9faface116b0452282ef9c684c0261c",
"assets/assets/icons/svg/icon_osm.svg": "2d264cea3f7a012ec9c35cbea2ba157d",
"assets/assets/icons/svg/icon_telegram.svg": "f18d2ddab9158f11d3981f9e60ee1db8",
"assets/assets/icons/svg/icon_twitter.svg": "39b9eeca24c657563d9a57c6940845c1",
"assets/assets/icons/svg/icon_wiki.svg": "b79d5553221466041695a6380faf7559",
"assets/assets/icons/svg/icon_youthmappers.svg": "3e45fd2a0b70fc13ed8d3cb7583e4587",
"assets/assets/icons/svg/icon_youtube.svg": "77f2915f443eabea194c27069ca7d2ba",
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
"assets/assets/logos/image/logo_alerthub.png": "39ece242546fcc8d12bb17586254af58",
"assets/assets/logos/image/logo_gmda.png": "59a22526644cb4b45e844ca5bacd4ebb",
"assets/assets/logos/image/logo_mapathon_keralam.png": "afea23de37cafa44bbd7ee71dc87349d",
"assets/assets/logos/image/logo_nestoria.jpg": "f6c9add70beea52683b1ee9e966190e4",
"assets/assets/logos/image/logo_osm.png": "37076a5bf4f77b2735d75a8ad2ef2975",
"assets/assets/logos/image/logo_osm_animated.gif": "7e4bf981abb0796be8755f8f0e9e2df4",
"assets/assets/logos/image/logo_osm_in.png": "4436bbf0cb82122583e581b75122cb48",
"assets/assets/logos/image/logo_wikipedia.png": "740ddffcff381dd2dc8f618dbf52397e",
"assets/assets/logos/svg/logo_alltrails.svg": "e9cf296c0d0faa0bdb0d1c13a7549461",
"assets/assets/logos/svg/logo_apple_maps.svg": "2eb0ec4865b8a4dfa8ccea694159da7f",
"assets/assets/logos/svg/logo_bing.svg": "5513291dc0c724fd30e6e0ffb90b73c1",
"assets/assets/logos/svg/logo_foursquare.svg": "25d2ffa278cd8f9b148accb3d8116715",
"assets/assets/logos/svg/logo_justdial.svg": "b796df30f1b1714099796458fde28012",
"assets/assets/logos/svg/logo_mapathon_keralam.svg": "e0d7182646ae4de1f1c60d29f1196413",
"assets/assets/logos/svg/logo_mapbox.svg": "430734138560edb45caa391775c93bd3",
"assets/assets/logos/svg/logo_meta.svg": "7dc7cab1437c543a218a275d5b60283a",
"assets/assets/logos/svg/logo_netatmo.svg": "0e701f792a1102928ed7d547ea79b612",
"assets/assets/logos/svg/logo_ola.svg": "25c2201316a25e2fd6764190fe1c7f11",
"assets/assets/logos/svg/logo_osm_in.svg": "ddfbe7b61ca7591f87bfff8ce3fdddd3",
"assets/assets/logos/svg/logo_rediff.svg": "98b36ca91b7d0eb0a3c19425710fc7fb",
"assets/assets/logos/svg/logo_snapchat.svg": "004d7724d98f23c8b7614e0b5d70d554",
"assets/assets/logos/svg/logo_swiggy.svg": "729056ca0063d8696cfea51f537b90d5",
"assets/assets/logos/svg/logo_tomtom.svg": "24b4249d76aeaa63e8318ede37767248",
"assets/assets/logos/svg/logo_uber.svg": "739ab76c13a8a1fb32afb13de637bfaf",
"assets/assets/logos/svg/logo_weather.svg": "1adf5a89b9414c3c7055bceef23bbbf0",
"assets/assets/logos/svg/logo_wework.svg": "b598ba53bcdb15adbe58c6d9b96ff20f",
"assets/assets/logos/svg/logo_wikipedia.svg": "9ebd02352e3e505913eea3f403cf7f1f",
"assets/assets/logos/svg/logo_zomato.svg": "4fa23f39727400d43d672483477bded3",
"assets/assets/logos/vector/logo_osm_in.vec": "23b283163550045cfb71e8b5e173c9bf",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e710cdbab5bc89ceab52e7794d928dc",
"assets/NOTICES": "ad3cce2c592a3f71827a8314e82f1004",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d79574c2369ce460a359daa2aa35a7e8",
"/": "d79574c2369ce460a359daa2aa35a7e8",
"main.dart.js": "09c295db31aafb62c12e5356207d94c2",
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
