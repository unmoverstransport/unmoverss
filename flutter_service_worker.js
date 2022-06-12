'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "86689620d9ded3a04adddb072ebb3012",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f51af182ebcc8f409ca3af2965f1fdb9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0781196793b63f1adc825c596488892c",
".git/logs/refs/heads/main": "cd5bbd790d97356677eb119fbf0af758",
".git/logs/refs/remotes/origin/main": "2a6d28c863d6c887a81a0571fdf245e7",
".git/objects/00/be8478b4bfd0a0af1eb5908bc276df42ec9aed": "8a736d03ca3b03115a928ad6378974d2",
".git/objects/02/45b1f25bbfbb17768b04bd7beff8af0e73b26f": "fec74e671153d23ac950eb41748d22ba",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/11/a68eba23eef8d767c673ffc610fca1073da735": "5d7f75ca01cd6e7ea09a09a0d84e7e33",
".git/objects/13/a16ea2a06dbfdfd27e20cfdf1f6762830e8ae8": "5fc7ec09c9e806478cf43bd25483d655",
".git/objects/14/0da7c1a8b1747734e584f2d47402e3bc615060": "d838344dcf585d0c9f3d412a8d20f84f",
".git/objects/14/1d3f3c8c6174833272e57ae0a030cca2789517": "4e5cda6bf947c65323643bead01d551d",
".git/objects/16/745fa7cd65690a7f88d4eeaf308753eb79cb4a": "6fd45a2f31d1e6e9feed3cc893b2aae7",
".git/objects/1c/d025961bc821fcbc63005dca001a4a963afb56": "b7fda456806e25d4174210cc5f964d5d",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/2b/aad331b9d5d1d0693118bf1e49d43e09e52525": "7b0e057310b82d6ea2c2c4139d471c97",
".git/objects/2e/2d46d73e8d08df22a002772a1a9ad8a7cfcbb0": "b58b60c67546c71e15bd76b5677983da",
".git/objects/39/ab389774ca52684ff1ae624fcbcebb102d00fe": "4bf7ac4f85cd682e4b142c81863e7e0a",
".git/objects/3a/70d0548cf3b567f0338080061b0552f6b8d66c": "4b111137a8f4e18327eb3f30821d4296",
".git/objects/3c/4f66cbff394b7f44272f96e264dfedcc875870": "c8ed9e8a50fd44fe261873502e970fe2",
".git/objects/3d/290aa375a9d75b4e4e6f69fa2bb1a0dc8b9126": "50d1d8a95f032e2e1352e9ae14d8a0c6",
".git/objects/40/c05e88238631975f9ce506c1751caf4d16ac74": "f8eb76398690c8a68504af879061253c",
".git/objects/43/a153527476d0bef18d448092891bc0ada777ed": "95371bfafe1fa313e64c491c05267707",
".git/objects/46/76cb59bed6aed1afddbf1450e3364a889c578a": "5fee2b35e699824bfb096ac1022b4fa9",
".git/objects/47/29f5256c76b74b6c1c974bf7b718676870ce97": "aa1dec96e4923a6822d8c56047f84256",
".git/objects/48/3de88493f04b700339e179427ced5aad6b0448": "6eadf72588cc86b0063c98f379af38fe",
".git/objects/49/b79810473ff941e68dc84e52835c02850b2f08": "d892d480705a55e34f495dcf2d2b71cb",
".git/objects/4e/a9402516621c40b6584ba0a8e79d914ef47707": "4f021f3e8b7189a80f9b550fbdd38a83",
".git/objects/55/888f9146d6f343710255aa1964c12360ffaf46": "603f202882dad6ed144cdc45392ad4a7",
".git/objects/59/ec81bfd23b56b9b3e1507f5581a17e5ee61f58": "74f69d2e7f1db7170e9ab6bcd17ddf17",
".git/objects/62/dd6fe697e9adb55e37cd463e0a30fbd02ac995": "3edbe9cb8f854fd8c9edef7ca86cf9eb",
".git/objects/64/b2cab5aada8be6a52cd2a5534768d312df591e": "703dc4ef98e0fdab32010eab33d37664",
".git/objects/6e/3c6d32610faca34a3f231e9bd859b5ecae347a": "7946012e8a4a028c90d6f9cff560b657",
".git/objects/70/2d8bf330f68394edd7d8f6041441616347f8f5": "96d723b29c251c09b760c9c89eff0901",
".git/objects/70/ea4e85f2e5b621cf7a663a4cc62868622b73ec": "bf0137c9454b5f6af7826a225746fddd",
".git/objects/71/8121d81399e2b5bc12e443dc5c343823c4d210": "433c226644ca5f2fa767a6b469c2c8d3",
".git/objects/74/ba4b4efc2ebb3b0581012e036a6f6440949e3e": "178049983c9145a24d98b99aae638548",
".git/objects/77/2e3738df221e5b4ffd200471408af83a9aa452": "f6f824509aae9d121ea11766c9091744",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/96/1853925cce8137b25dadffa604d6cbb0890e5b": "d13ef7a94d11deb3a40ccffc5c30ff40",
".git/objects/a9/58c09d5529db1dd50044c5ea8abe92f0251e0b": "20bc6031637ca39bad9cd5a58980fceb",
".git/objects/a9/6082d706acd017e51344614ac29cb52099be3f": "1dde1d15f21b97e228c54b46bc197b95",
".git/objects/aa/b64877a5f78e5edb8811ef1b95213574a9190a": "a5c2b52a1bcad476d6beca053dc4df26",
".git/objects/ab/e091388933c83693d8309dd9c0cff2ecd507ad": "489ea9f211c9a14c3c6af499e32f3564",
".git/objects/ac/b571564a8c3b98cd081d600f95b2389b3095f8": "cba3ee5f29bc6e78db6b68005a485876",
".git/objects/b3/c43cf48e82b98d5ce39d3b2d32a0797506c071": "1d3202ab7bed07f673290f997e457a39",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/be38f77dffe87492380410bf6f61260ac10781": "b90dd39233fd73bcb471b70429a34af0",
".git/objects/bc/8b476ac59292d86ddce245f71a8bedc0354de6": "65d9b7b80d96c47d5dc20aac37f4b966",
".git/objects/bc/d090d4e6d3c00c35d0eef646c47e64db81cc2c": "ad43b1ad177c9488b4423c7e6f6cff67",
".git/objects/c1/e558631ae4000f4470d0ee44d740c0deed4fe5": "5782d0adf2099459efa2d2a672bc4154",
".git/objects/c4/5ec6d16c212400e32911f81a5b478f0ca14633": "df2d5b8211f8d0950460f6c1ff7db003",
".git/objects/cb/51265a01acf6774e1db5f9004c8cd209e07697": "d8ef56356959aca32a715c3d8cd4a4d6",
".git/objects/cc/aba1a86ca13fa394bfc3fa511bc5be0a20bb18": "8cc46accc2a7993da7a897c24d70cdd6",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/489b9547fd003b9f8430e6015ad1e6e37be220": "8de0518607c4f1c5a6c313272a49b32e",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/329193ba9705ba2bd21e88b01b44869d75ed67": "9921e1e53dc7a07aed9830044998269b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/1c1fee04281c16f17f62911fb7b1f5964041f1": "426203859f0ed648eadd71e4b5459c9d",
".git/objects/ee/38b32102563c9b483f987b0bd463c91f2d2110": "895b02b3e3244aba0d96252f93d6cfa9",
".git/objects/f5/ae5352049a9114f03d95bef7a92f209c00133d": "6e00adecc8e99a224f6f3203874af9f0",
".git/objects/fa/4344626b48a1afd31935afaa1d609e773e21fc": "1348385b45202b4b6046130e468af80d",
".git/refs/heads/main": "f96771aabf89690fc1546baada460d01",
".git/refs/remotes/origin/main": "f96771aabf89690fc1546baada460d01",
"assets/AssetManifest.json": "8955235d7b571f9be38c3ac1eb66205e",
"assets/assets/fonts/Montserrat-Regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "7ffeec2b4edb434d393875ffbe633c30",
"assets/assets/fonts/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/assets/fonts/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/imgs/logo.jpg": "eb8213a942c585f674928f4f42eb2e49",
"assets/assets/imgs/oneton.jpg": "72a5192dfc41dac0a4d4f7871b8e5e88",
"assets/assets/imgs/one_and_half_ton.jpg": "dd2f71e1b036f4e90f4e876ac304a7a8",
"assets/assets/imgs/twoton.jpg": "20a95fa20be03883ad501019c0cf4ddc",
"assets/assets/pdf_docs/tsandcs.pdf": "a1cf03672337aa385536a3659ae214db",
"assets/assets/svg/deliveries.svg": "8207865b71f349b0c55544b0c023cebe",
"assets/assets/svg/delivery.svg": "9974aa8fe3fabaefabbfc75bd8f70a40",
"assets/assets/svg/delivery_man.svg": "ee109b310d01576989e18f7a5d53ba0c",
"assets/assets/svg/delivery_truck.svg": "3541897cb6c27007f822aea8048420fb",
"assets/FontManifest.json": "3201ed9b6d1a3e43b2cb19d9f784936f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "206a51893150d951d481b798fb6c5dec",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/0.75x/powered_by_google_on_non_white.png": "78b06d238cb55fd775d0faefc44448f7",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/0.75x/powered_by_google_on_white.png": "31bc81278fd5b781b342ea1e767d032e",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/1.5x/powered_by_google_on_non_white.png": "a0bdd851f1d00d131f005c60ed2cb16b",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/1.5x/powered_by_google_on_white.png": "c7e713340ff7ad9e1af8482ad2a71349",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/2.0x/powered_by_google_on_non_white.png": "e72d1907bf5d0f6c1153e50aa7cf7f9a",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/2.0x/powered_by_google_on_white.png": "60e8a8323a1f5c9dc59c6783d5974123",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/3.0x/powered_by_google_on_non_white.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/3.0x/powered_by_google_on_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/4.0x/powered_by_google_on_non_white.png": "33ff537622b33a8a161646a7be0800d0",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/4.0x/powered_by_google_on_white.png": "cbb17d77d4436ba71593febe71599b53",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/powered_by_google_on_non_white.png": "27efb6d97555008ec637e8c5a6833f82",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/powered_by_google_on_white.png": "f127e368d62ad92dacab340de5af50e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8f5354e997a8467c996a3ca770d7b1bb",
"/": "8f5354e997a8467c996a3ca770d7b1bb",
"main.dart.js": "e275bb895b39d52ffb791c33076de065",
"manifest.json": "898f46f79a446b168c4a1df905372c91",
"styles.css": "1761cdcd8027c80ffb28c1c6e73d47b7",
"version.json": "3901fe86f33e6a098f4d455c4de664c1",
"_redirects": "8038807dcc659febb7d9f09fb8206d37"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
