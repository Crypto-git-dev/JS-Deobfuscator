if(!self.define){const r=r=>{"require"!==r&&(r+=".js");let e=Promise.resolve();return o[r]||(e=new Promise(async e=>{if("document"in self){const o=document.createElement("script");o.src=r,document.head.appendChild(o),o.onload=e}else importScripts(r),e()})),e.then(()=>{if(!o[r])throw new Error(`Module ${r} didn’t register its module`);return o[r]})},e=(e,o)=>{Promise.all(e.map(r)).then(r=>o(1===r.length?r[0]:r))},o={require:Promise.resolve(e)};self.define=(e,a,i)=>{o[e]||(o[e]=Promise.resolve().then(()=>{let o={};const s={uri:location.origin+e.slice(1)};return Promise.all(a.map(e=>{switch(e){case"exports":return o;case"module":return s;default:return r(e)}})).then(r=>{const e=i(...r);return o.default||(o.default=e),o})}))}}define("./sw.js",["./workbox-3110e472"],(function(r){"use strict";self.addEventListener("message",r=>{r.data&&"SKIP_WAITING"===r.data.type&&self.skipWaiting()}),r.precacheAndRoute([{url:"assets/css/style.css",revision:"efd2761a8245806c95f3455683d1606c"},{url:"assets/images/bkg.png",revision:"360842dce3f69f728aa77ae005424fe8"},{url:"assets/images/blacktocat.png",revision:"63f291a3168cc5e02daaa6156756b122"},{url:"assets/images/bullet.png",revision:"03ac3148397e2db4a517b649dda1473b"},{url:"assets/images/buttons/copy-document.png",revision:"383595543e61ac2796b290749fcc52ef"},{url:"assets/images/buttons/download.png",revision:"d2dedf6d77957db5a7bfb6a53295e7d6"},{url:"assets/images/buttons/external-link-symbol.png",revision:"2de11a499c90ac4ae01e216b1f80177b"},{url:"assets/images/icons/icon-128x128.png",revision:"6f14d711cf80097b078497193ea4ac30"},{url:"assets/images/icons/icon-144x144.png",revision:"e67b5b9ba8858a5d7db314fb36c038a5"},{url:"assets/images/icons/icon-152x152.png",revision:"4ced623ede1d3cf81710a7e19037a2f7"},{url:"assets/images/icons/icon-192x192.png",revision:"f1b40ddd6aef720f988681573c295218"},{url:"assets/images/icons/icon-384x384.png",revision:"5ba82586ea5c9a813117f132eb348fe7"},{url:"assets/images/icons/icon-512x512.png",revision:"e6bdac56bd1b6144f2a134d5828b1f87"},{url:"assets/images/icons/icon-72x72.png",revision:"f2e958dff8f4adead85d6d2ed4691807"},{url:"assets/images/icons/icon-96x96.png",revision:"515f261f32a0fd0e6a1bc6487a377979"},{url:"favicon.ico",revision:"9023cfc9b056b1e214bed25cfc018a33"},{url:"index.html",revision:"3358eedf818cd181219d760778fd26ba"},{url:"lib/arraydecode.js",revision:"fdc629943ff74ceb6ac5db996425e25f"},{url:"lib/evaldecode.js",revision:"4f59b2c741609ab89fc40e8c6ecc196f"},{url:"lib/jsfuckdecode.js",revision:"7fe99e9044d95fde7ee9ec0df51b8882"},{url:"lib/numberdecode.js",revision:"9b100f205b5ed0b77c3a8196034e1d09"},{url:"lib/obfuscatorio.js",revision:"2652064df9058dd7da52325776acca09"},{url:"lib/utils.js",revision:"51823fbd6610e0c07018361395dfef4a"},{url:"main.js",revision:"07c1274e47970e65e964ebb4baccc55e"},{url:"manifest.webmanifest",revision:"b94102b1340367613a5b168b57ba94d3"},{url:"sw.js",revision:"71fe306d426650f7a5adb0f10875ac5b"},{url:"third_party/cat-in-136/aadecode.js",revision:"06ea6b7f3cc57abf9bf111be19f10c7c"},{url:"third_party/clipboard-js/clipboard.min.js",revision:"ef09ae325779f61c5b994bb7d3797695"},{url:"third_party/decoder-jjencode/jjdecode.js",revision:"27abc7cdeee1be4a891678eb72c46880"},{url:"third_party/highlight-js/highlight.min.js",revision:"885244632b9e623c0cc40061ee5745f4"},{url:"third_party/js-beautify/beautify.min.js",revision:"f1cb625c43e86caf730eb258a289e8c3"},{url:"third_party/js-beautify/unpackers/javascriptobfuscator_unpacker.js",revision:"939ead8257cdb38a0556ba8a0f79feda"},{url:"third_party/js-beautify/unpackers/myobfuscate_unpacker.js",revision:"9c2d3d994e406d3ca73419978ccfff26"},{url:"third_party/js-beautify/unpackers/p_a_c_k_e_r_unpacker.js",revision:"0303e930789facfc4d8a764ffcfb6d30"},{url:"third_party/js-beautify/unpackers/urlencode_unpacker.js",revision:"6c4a9f54d4a766f6d085fff7bd7c88fb"},{url:"third_party/mathjs/math.min.js",revision:"4f44a4577c93aa6b6c13083b3ad4cd86"},{url:"third_party/workbox/workbox-v5.1.4/workbox-background-sync.dev.js",revision:"292540f6dfbf73613fee69c4daa34768"},{url:"third_party/workbox/workbox-v5.1.4/workbox-background-sync.prod.js",revision:"1477337d11af8f727e9203690ef10cfc"},{url:"third_party/workbox/workbox-v5.1.4/workbox-broadcast-update.dev.js",revision:"c8aec116b72d5a6f4fbdf895cbe9a6a2"},{url:"third_party/workbox/workbox-v5.1.4/workbox-broadcast-update.prod.js",revision:"3b28d76111687065750273c7ac7f4c97"},{url:"third_party/workbox/workbox-v5.1.4/workbox-cacheable-response.dev.js",revision:"22b01a882fa59ca2dc95581a863d6543"},{url:"third_party/workbox/workbox-v5.1.4/workbox-cacheable-response.prod.js",revision:"baa5a06eb89620c714728d9292895824"},{url:"third_party/workbox/workbox-v5.1.4/workbox-core.dev.js",revision:"4da76fb060d4145b55f770ef2ba1916e"},{url:"third_party/workbox/workbox-v5.1.4/workbox-core.prod.js",revision:"2002e39bc413245e9466646856a3a1a0"},{url:"third_party/workbox/workbox-v5.1.4/workbox-expiration.dev.js",revision:"2b6ecefe6b4de33b232b1d4f3f6f2d4d"},{url:"third_party/workbox/workbox-v5.1.4/workbox-expiration.prod.js",revision:"3c39521fc764b9952c819c8be6bdee40"},{url:"third_party/workbox/workbox-v5.1.4/workbox-navigation-preload.dev.js",revision:"79bf2718a2ad92bc4b16e90df9a6813e"},{url:"third_party/workbox/workbox-v5.1.4/workbox-navigation-preload.prod.js",revision:"b08e45df331d747386f7a9d3ce8d6f35"},{url:"third_party/workbox/workbox-v5.1.4/workbox-offline-ga.dev.js",revision:"3bfac87afd96631ca169f1580340bb09"},{url:"third_party/workbox/workbox-v5.1.4/workbox-offline-ga.prod.js",revision:"291d35c6a2d5e4e63240804f3da93dff"},{url:"third_party/workbox/workbox-v5.1.4/workbox-precaching.dev.js",revision:"fe30d3ca56741cc350362b551cc81ea6"},{url:"third_party/workbox/workbox-v5.1.4/workbox-precaching.prod.js",revision:"aad79f6fd69e76afce9a9bc0444fb4b1"},{url:"third_party/workbox/workbox-v5.1.4/workbox-range-requests.dev.js",revision:"0aba977d2b293ce947ace319edfff93f"},{url:"third_party/workbox/workbox-v5.1.4/workbox-range-requests.prod.js",revision:"05a4f56357fc7bc48478d8048df4f0e3"},{url:"third_party/workbox/workbox-v5.1.4/workbox-routing.dev.js",revision:"eb2ee6155e0c721707d9fa05e4590f28"},{url:"third_party/workbox/workbox-v5.1.4/workbox-routing.prod.js",revision:"65baaf497738a14f1b694a9cff829d4d"},{url:"third_party/workbox/workbox-v5.1.4/workbox-strategies.dev.js",revision:"929f436eeb0effe772037b7afb8ab1db"},{url:"third_party/workbox/workbox-v5.1.4/workbox-strategies.prod.js",revision:"2a12ac7e1932c797cb3084c2543066c9"},{url:"third_party/workbox/workbox-v5.1.4/workbox-streams.dev.js",revision:"1ebc21ea730f92a3ea3e2698f9449a65"},{url:"third_party/workbox/workbox-v5.1.4/workbox-streams.prod.js",revision:"e1ce8b87604c3265fcca4504f1b97814"},{url:"third_party/workbox/workbox-v5.1.4/workbox-sw.js",revision:"dc277aae8a000c27df99aba092aa1832"},{url:"third_party/workbox/workbox-v5.1.4/workbox-window.dev.umd.js",revision:"80d6025c59787e3fbdbd4e55ef08d7f3"},{url:"third_party/workbox/workbox-v5.1.4/workbox-window.prod.umd.js",revision:"a416894a85a10c88abd525b50d27ffed"},{url:"userscript/de4js_helper.meta.js",revision:"9a215f68e08a78ae99aac2495dbcc3a2"},{url:"userscript/de4js_helper.user.js",revision:"6510e8208e9a70291e6a521240434b86"},{url:"workbox-3110e472.js",revision:"f9f818b697555ce7b63536eecf722797"},{url:"worker/decode.js",revision:"1c75d6ed6b9bc8d478534c239d2f52a1"},{url:"worker/format.js",revision:"25bcf106cc8a18976c69e362951d8017"}],{})}));
//# sourceMappingURL=sw.js.map
