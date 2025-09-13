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
    "revision": "48ed426eefe5344d2b70b36691e89a8e"
  },
  {
    "url": "assets/css/0.styles.a7fae610.css",
    "revision": "f5a7e572e7a8055bc93b89a0a8570928"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.238563f2.js",
    "revision": "8aeb60be7e9282bc24a3729625b0c92b"
  },
  {
    "url": "assets/js/10.d7ebe35d.js",
    "revision": "5dfe007f296b8da5482e4980fb01c1f5"
  },
  {
    "url": "assets/js/14.afe76789.js",
    "revision": "e09a09a2660ddd4d72012b00bd0a7c01"
  },
  {
    "url": "assets/js/15.74eb4110.js",
    "revision": "48bfb5a12680e21a1fad25ca48cd8193"
  },
  {
    "url": "assets/js/16.de458767.js",
    "revision": "c3788709e46cb2fd8bb2278cef85f096"
  },
  {
    "url": "assets/js/17.155ce7ce.js",
    "revision": "9d1141aa4d8e4e157cb5b6c6c34e70e1"
  },
  {
    "url": "assets/js/18.b9ed37ac.js",
    "revision": "dd403fea88baa59c7ba37ee58a90a432"
  },
  {
    "url": "assets/js/19.2c5e5b5b.js",
    "revision": "1a40ce244a05f13a3c6a117eb7b1c59a"
  },
  {
    "url": "assets/js/2.496299c8.js",
    "revision": "0c1a063be4231fa307824490c467ff84"
  },
  {
    "url": "assets/js/20.3cd1b0ff.js",
    "revision": "434173508e64a6d4c463287a8415b629"
  },
  {
    "url": "assets/js/21.866b1ecc.js",
    "revision": "fa24fc220b4e6e6ec51b5024ee7d28dd"
  },
  {
    "url": "assets/js/22.47cd2858.js",
    "revision": "cf05d9f553ff0b801b4f36197bbf921f"
  },
  {
    "url": "assets/js/23.663de762.js",
    "revision": "0d7cabb39987864f16007936cb93965d"
  },
  {
    "url": "assets/js/24.427fa1ee.js",
    "revision": "fa40269ebf941a970bb846bd0ed6db5f"
  },
  {
    "url": "assets/js/25.d199256d.js",
    "revision": "1d5bda1df2d1713c3d5f9f51127afa07"
  },
  {
    "url": "assets/js/26.a97cc8e3.js",
    "revision": "8cb432c3b187c9569dac753fab952617"
  },
  {
    "url": "assets/js/27.d6e4bda7.js",
    "revision": "ca23beb6e037416a5eed3abee4c38e27"
  },
  {
    "url": "assets/js/28.afab28a4.js",
    "revision": "ecad932cd6acf19ff21428b49a157522"
  },
  {
    "url": "assets/js/29.82652176.js",
    "revision": "3d3ec0661469b74d37eb069e54d1d457"
  },
  {
    "url": "assets/js/3.db45bb20.js",
    "revision": "30f8184f5c40bd21f44a9d8159c0be96"
  },
  {
    "url": "assets/js/30.41077d1c.js",
    "revision": "2a6d8b3d4309163ea5afdb41e50ec5a7"
  },
  {
    "url": "assets/js/31.85e1f989.js",
    "revision": "dce81db418327f60201cf7ce3230e65f"
  },
  {
    "url": "assets/js/32.27b087b1.js",
    "revision": "b36d8d42f039a5cf00520995f1ecbf92"
  },
  {
    "url": "assets/js/33.60d4e13f.js",
    "revision": "5c95c258242e71c686d47b6a618ac367"
  },
  {
    "url": "assets/js/34.2807c690.js",
    "revision": "fad4453c4901c84ad02fbf50300bfb5d"
  },
  {
    "url": "assets/js/35.4adad1d4.js",
    "revision": "49989135236678df297b8eb75bd12b14"
  },
  {
    "url": "assets/js/36.a1650bb0.js",
    "revision": "a2a119c91c3fd08537928903dee5a182"
  },
  {
    "url": "assets/js/37.9f842336.js",
    "revision": "c01c0597d9e175aaea449fb9b931a69e"
  },
  {
    "url": "assets/js/38.da4fcbef.js",
    "revision": "942415fcbfa0509b21bb5b81719b6a41"
  },
  {
    "url": "assets/js/39.4615afa7.js",
    "revision": "373f1f6a456bb1340fb13c66b3320ded"
  },
  {
    "url": "assets/js/4.620edd08.js",
    "revision": "af74010a92e6ecab69dced183c6aba43"
  },
  {
    "url": "assets/js/40.a964914f.js",
    "revision": "75405135bca0c4ac01739af90785239f"
  },
  {
    "url": "assets/js/41.be09b632.js",
    "revision": "d2d681b488bbf9f055abf83a881a5f74"
  },
  {
    "url": "assets/js/42.ec38d346.js",
    "revision": "572a9345b6b9bc1ce2c606f025b69de1"
  },
  {
    "url": "assets/js/43.7e23b6fd.js",
    "revision": "87f0500ecb30b0c69cff25cc6fc0e3fc"
  },
  {
    "url": "assets/js/44.1eb79d49.js",
    "revision": "6969571f902032ed21a9db7f1015da9e"
  },
  {
    "url": "assets/js/45.d692092e.js",
    "revision": "31bdacaadfb993e49dfbc4b844f65a9b"
  },
  {
    "url": "assets/js/5.914a2687.js",
    "revision": "a4124896c463754c57373439a84a5c51"
  },
  {
    "url": "assets/js/6.901a1f9a.js",
    "revision": "4ec06b0dc2f9ab2886ee9cbb823af737"
  },
  {
    "url": "assets/js/7.fcf5d18e.js",
    "revision": "53314a46987320fd9c9dd99318fe34c1"
  },
  {
    "url": "assets/js/8.c436a761.js",
    "revision": "52444a144a60471c86b2b65743aad9d7"
  },
  {
    "url": "assets/js/9.55bdbe0e.js",
    "revision": "273fff2a2da287caabf56186dbd1d444"
  },
  {
    "url": "assets/js/app.68c3b6f4.js",
    "revision": "b0e7fc1ef51cea3a6890cf23f52f18f8"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~docsearch.8512197f.js",
    "revision": "c769d28bc27ebe3ee83cc3787c31b863"
  },
  {
    "url": "assets/js/vendors~flowchart.63dff3b6.js",
    "revision": "110377f28de45a35cbf89c289fa4f2a5"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "c028f67651f03351959214a221c33c3f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f534bde45a39dbfbe29897d4534bf1af"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "0863d7da50cb2f61cadd1564f1877748"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2856887d5faab57eb95426970421f82e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2f8ada8024bf980a192570d819fc7b74"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "f86d596f1a0d0a50162e50bfc84f461f"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "c17d440de6302c6db49a78755a4bbc53"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "e534806a8e91961e9f9b0a53290529a8"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "078e16880c600a0e7c235185f78e85fb"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a5a2f6d2f5da306af4bed9e027ee989f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "371096f2b047454700662113ac13f4fb"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "0b972a55866e0bfac63f4ce9b54b3c3a"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "7fc82688f61a6919743cf87f13877c1f"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e08233abefeee8196d19fb89af997d71"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "e6acd22605895a358cbc123ffe1c51fc"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "a00501908cf2d0123722a775eca0203e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "26a38fd2833b7eebc99428919145f95a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "0d20373dd6618e9f43b3e9e906d3cc1f"
  },
  {
    "url": "timeline/index.html",
    "revision": "97f3651a7ed72e8b57945d710bf8d49e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "0a2efbde5a5c6dbf88f1d3f666719712"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "7cb408f2e90a05b9d5a41d1c504cee0b"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "4135dd27a30d23e89a3a5cda8cf569df"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "4c7418dc60e1e56cef07b299d60b9748"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d79a0ad67e4c95828e796cb374eea247"
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
