/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "41eaa58bbd59cd804df1cf59b2fd7c31"
  },
  {
    "url": "assets/css/0.styles.76f8e010.css",
    "revision": "f44bd0fbf7c0cebf18a7d125e49dde60"
  },
  {
    "url": "assets/js/10.2db3cd3f.js",
    "revision": "2f79a8e3cbb7011b7ca564ed5b00c46f"
  },
  {
    "url": "assets/js/11.23755c96.js",
    "revision": "c1f2d7e8853de1716d5317762b0ecfdd"
  },
  {
    "url": "assets/js/12.8706efc0.js",
    "revision": "76c172d8ea315f8cb92c203c453394ae"
  },
  {
    "url": "assets/js/13.baa40a61.js",
    "revision": "dd92c458f8de32fc84b66c44672b8edb"
  },
  {
    "url": "assets/js/14.46a10961.js",
    "revision": "5fefce1f0333a15ccda853809e177a55"
  },
  {
    "url": "assets/js/15.15d08838.js",
    "revision": "1ee8333066c96f08138046142993738f"
  },
  {
    "url": "assets/js/16.3872c6b8.js",
    "revision": "9a5ba95834071174bd20507b86a05a54"
  },
  {
    "url": "assets/js/17.30dc1ba4.js",
    "revision": "f4a103ae59d2d1859f154132d69079ee"
  },
  {
    "url": "assets/js/18.a3e5c70d.js",
    "revision": "14b83eb76a00c2ea8b635a71297ad965"
  },
  {
    "url": "assets/js/19.0a076294.js",
    "revision": "69b6a5fceb1513e2a0cea04cdcd2d1c0"
  },
  {
    "url": "assets/js/2.ec562266.js",
    "revision": "73a493949cc5ad12b3301556012bc952"
  },
  {
    "url": "assets/js/20.41f062c6.js",
    "revision": "6ac58976eb33fc965b7320371d16f736"
  },
  {
    "url": "assets/js/21.663a7d1b.js",
    "revision": "3d901976740c64a3c93e278faba234a4"
  },
  {
    "url": "assets/js/22.3842581f.js",
    "revision": "d0ae43624ca63df3562801e8fe4167c5"
  },
  {
    "url": "assets/js/23.92347556.js",
    "revision": "7cf3fd8356c90338da031986642b02a9"
  },
  {
    "url": "assets/js/24.914664a7.js",
    "revision": "4def788daf7da86eefb7d6ae505b5f76"
  },
  {
    "url": "assets/js/25.a01feb9b.js",
    "revision": "a7c1c49576266b212a55ac6840752e02"
  },
  {
    "url": "assets/js/26.3c862670.js",
    "revision": "f381be96771a2daf1cc350a2fd143af8"
  },
  {
    "url": "assets/js/27.44fab3fc.js",
    "revision": "6a520cd4c6df451de19ea6541a7625f8"
  },
  {
    "url": "assets/js/28.9f5ad655.js",
    "revision": "1d678a5f6fa4adf41b1d0ae9b5afee81"
  },
  {
    "url": "assets/js/29.740070cc.js",
    "revision": "1092e99d50b29ede7b4218d49f182cf1"
  },
  {
    "url": "assets/js/3.a6c7d40f.js",
    "revision": "6e82aef8c229b900be0dd265a37d3376"
  },
  {
    "url": "assets/js/30.3beb8b3d.js",
    "revision": "94b432b77ead8a23950dbdd9b4a2df78"
  },
  {
    "url": "assets/js/31.94fcaf76.js",
    "revision": "22a48f5390cd0aad8103012266c36269"
  },
  {
    "url": "assets/js/32.a909d971.js",
    "revision": "2c6c08d3e8b0a8620ba3ac6b353f6b48"
  },
  {
    "url": "assets/js/33.164a9077.js",
    "revision": "3e784f822b52a5af6234da6ee8b5e3b9"
  },
  {
    "url": "assets/js/34.04da3f59.js",
    "revision": "3ad8e271adff87e0574fd4bb0e83907c"
  },
  {
    "url": "assets/js/35.a2b386a9.js",
    "revision": "d4ac81e5385bfd61232ea68e263a37a5"
  },
  {
    "url": "assets/js/4.02cd8131.js",
    "revision": "1fed6828608eb8332e468511f2ec99f6"
  },
  {
    "url": "assets/js/5.8d0c0a92.js",
    "revision": "dc2500467078736f9a12284106cecb88"
  },
  {
    "url": "assets/js/6.3e0005e2.js",
    "revision": "18332e60c55521781741671f4bf247fb"
  },
  {
    "url": "assets/js/7.9f0e9207.js",
    "revision": "4704e086f2ef87d2a87c4fdda9e343e2"
  },
  {
    "url": "assets/js/8.61f10c9b.js",
    "revision": "e132bc9b005410129591c4d910b791a2"
  },
  {
    "url": "assets/js/9.62b88df4.js",
    "revision": "7075ce540408ab132bf0b00c04ef4835"
  },
  {
    "url": "assets/js/app.a183b7dd.js",
    "revision": "736932bf81837ed2ea0aff289b119e05"
  },
  {
    "url": "bar/demo1.html",
    "revision": "92ee2e87522afe57696d5fdb3f34d1e7"
  },
  {
    "url": "bar/demo2.html",
    "revision": "9d2f6a8195b9b66ce4940f066c5d04b5"
  },
  {
    "url": "bar/demo3.html",
    "revision": "ac167e4693d5765f5338c3db8d8629c3"
  },
  {
    "url": "bar/demo4.html",
    "revision": "457440cf60c6db73668e3676521b6d33"
  },
  {
    "url": "bar/demo5.html",
    "revision": "89761f215ff333b50722fd4d0fb5e830"
  },
  {
    "url": "bar/index.html",
    "revision": "598a8afd7136b8b1db0f31ee2b452a8c"
  },
  {
    "url": "bar/markdown.html",
    "revision": "96e082cb3d2813a6bc3e1ea6b6b1bcb3"
  },
  {
    "url": "bar/one.html",
    "revision": "27320a83ad04ec12910f8024cc8780e4"
  },
  {
    "url": "bar/two.html",
    "revision": "298a27ef0fe4597c02d23b57f4f884c3"
  },
  {
    "url": "docs/index.html",
    "revision": "78f8bf6a98dfccb2d920a64c11d220f4"
  },
  {
    "url": "docs/install.html",
    "revision": "0eec5daa26072afdbd574992f431ce9c"
  },
  {
    "url": "docs/one.html",
    "revision": "3256802f0469443f2b6069606dbba128"
  },
  {
    "url": "docs/three.html",
    "revision": "dfc185fdda8c9f677c05afb01ed16b62"
  },
  {
    "url": "docs/two.html",
    "revision": "dd2fbb4d1b65cb848524845d4302cdf2"
  },
  {
    "url": "example/index.html",
    "revision": "8c4703d3fb8b6acca71436c900834cb3"
  },
  {
    "url": "example/one.html",
    "revision": "0ca0766bd9d8a22725e5da5192cd5987"
  },
  {
    "url": "example/three.html",
    "revision": "cd3078d67f060e51fe4459242b961170"
  },
  {
    "url": "example/two.html",
    "revision": "21c932be8401e60355936a8d40377cbc"
  },
  {
    "url": "font/index.css",
    "revision": "4c1b0ce139ac057b28db93af1db337bd"
  },
  {
    "url": "font/inter/Inter-Light-slnt=0.eot",
    "revision": "91368ebd30cf7a374dd1297fc323c790"
  },
  {
    "url": "font/inter/Inter-Light-slnt=0.svg",
    "revision": "a93211c042538e430b9591013484474a"
  },
  {
    "url": "font/inter/Inter-Light-slnt=0.ttf",
    "revision": "6ffbefc66468b90d7af1cbe1e9f13430"
  },
  {
    "url": "font/inter/Inter-Light-slnt=0.woff",
    "revision": "7dcf5a2828450b026d0fec12398a2ca2"
  },
  {
    "url": "font/inter/Inter-Light-slnt=0.woff2",
    "revision": "1e4accdfbe85cf82f1d86efe5960e28e"
  },
  {
    "url": "font/inter/Inter-Medium-slnt=0.eot",
    "revision": "d8bc91abfe68a248e567a85ff0959e82"
  },
  {
    "url": "font/inter/Inter-Medium-slnt=0.svg",
    "revision": "b6890579c2b934757e1bea3180348c07"
  },
  {
    "url": "font/inter/Inter-Medium-slnt=0.ttf",
    "revision": "5ff1f2a9a78730d7d0c309320ff3c9c7"
  },
  {
    "url": "font/inter/Inter-Medium-slnt=0.woff",
    "revision": "bf8098eda3c8b59eb9834d1ad3ad6c41"
  },
  {
    "url": "font/inter/Inter-Medium-slnt=0.woff2",
    "revision": "e1ba9f2608b22648b25432cc52c5decb"
  },
  {
    "url": "font/inter/Inter-Regular-slnt=0.eot",
    "revision": "27b0f1e40a2568a8a175da31fc7f47f0"
  },
  {
    "url": "font/inter/Inter-Regular-slnt=0.svg",
    "revision": "b8b9197407623004495f53cd1f15521d"
  },
  {
    "url": "font/inter/Inter-Regular-slnt=0.ttf",
    "revision": "515cae74eee4925d56e6ac70c25fc0f6"
  },
  {
    "url": "font/inter/Inter-Regular-slnt=0.woff",
    "revision": "01d8020d672e0c32be2f195a6833ccbc"
  },
  {
    "url": "font/inter/Inter-Regular-slnt=0.woff2",
    "revision": "eabbe260940d3d7af4e8f4503b9ef85b"
  },
  {
    "url": "font/inter/Inter-SemiBold-slnt=0.eot",
    "revision": "7bebf40fa6e648df422ee558d0dff78d"
  },
  {
    "url": "font/inter/Inter-SemiBold-slnt=0.svg",
    "revision": "b6db3cf002e9ec87771789af47d1ce6b"
  },
  {
    "url": "font/inter/Inter-SemiBold-slnt=0.ttf",
    "revision": "ec60b23f3405050f546f4765a9e90fec"
  },
  {
    "url": "font/inter/Inter-SemiBold-slnt=0.woff",
    "revision": "b7de63e4ecf88fa82e86a80fb545444d"
  },
  {
    "url": "font/inter/Inter-SemiBold-slnt=0.woff2",
    "revision": "19c69cb31f58613eba929733bb0e77d2"
  },
  {
    "url": "font/open-sans/OpenSans-Regular.eot",
    "revision": "07d1a425ccbad19329db2f72d12c4233"
  },
  {
    "url": "font/open-sans/OpenSans-Regular.svg",
    "revision": "b9fdea1cf915cbceb17621e3b584b406"
  },
  {
    "url": "font/open-sans/OpenSans-Regular.ttf",
    "revision": "3ed9575dcc488c3e3a5bd66620bdf5a4"
  },
  {
    "url": "font/open-sans/OpenSans-Regular.woff",
    "revision": "9a9345ca19905f91829e747a09fea84a"
  },
  {
    "url": "font/open-sans/OpenSans-Regular.woff2",
    "revision": "9666411f6532dc9c31920ea6059b9728"
  },
  {
    "url": "font/open-sans/OpenSans-SemiBold.eot",
    "revision": "9b5d357fe4cf2efd4897da122ceb6d6b"
  },
  {
    "url": "font/open-sans/OpenSans-SemiBold.svg",
    "revision": "2761373c5534a4f29f8affd7d9bd7fe8"
  },
  {
    "url": "font/open-sans/OpenSans-SemiBold.ttf",
    "revision": "ba5cde21eeea0d57ab7efefc99596cce"
  },
  {
    "url": "font/open-sans/OpenSans-SemiBold.woff",
    "revision": "fc742e723908d3ceb33e1de1ad0caa17"
  },
  {
    "url": "font/open-sans/OpenSans-SemiBold.woff2",
    "revision": "43c05971907b0ab140fcaf97487204db"
  },
  {
    "url": "foo/api/index.html",
    "revision": "84035e5f346db073765e8b8af2aa317d"
  },
  {
    "url": "foo/api/one.html",
    "revision": "e3cbb1ff594bb6522caab4ece681e813"
  },
  {
    "url": "foo/api/two.html",
    "revision": "90c5d89c9a483b7b06b69ba30d9b13ac"
  },
  {
    "url": "foo/more/index.html",
    "revision": "eae392af5dd99f736d1f04ea15b5837c"
  },
  {
    "url": "foo/more/one.html",
    "revision": "76fbc3fecff6d252b5bcbab3cee555d4"
  },
  {
    "url": "foo/more/two.html",
    "revision": "539ec5a987d176deffc942914017033a"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "images/icons/bulb.svg",
    "revision": "e3fbc07fc8a4fd64bf3585de3c5868c4"
  },
  {
    "url": "images/icons/danger.svg",
    "revision": "7224901b2f84983efa258490e5a1c03a"
  },
  {
    "url": "images/icons/info.svg",
    "revision": "39d1a12b97555d796d4dcda9bf403429"
  },
  {
    "url": "images/icons/stop.svg",
    "revision": "7d577a225ddf7f95f96032b3eefb48b6"
  },
  {
    "url": "index.html",
    "revision": "9f92717b9e2aaca66ec3ac1a96bd0963"
  },
  {
    "url": "js/index.html",
    "revision": "a68bfe9ff60199990f9ff62342dbcb7f"
  },
  {
    "url": "vuepress-icon.svg",
    "revision": "8dce0ff99517904f213f14c0ffc4d09b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
