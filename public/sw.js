if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,c,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-e604aefe"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/1.png",revision:"d8503a945f2332eee35774fd98b5f40b"},{url:"/2.png",revision:"247fe70fb616162d89133aed2ebc9fc6"},{url:"/3.png",revision:"b33aa9feecc2702b81228ac1ea926fb0"},{url:"/4.png",revision:"3c643ecc2885d5e2fe4db15e6e74b36e"},{url:"/5.png",revision:"b0db7430e26897f58d46646b355f591e"},{url:"/6.png",revision:"abc8fbe74559613307fbbf169a8c4c1a"},{url:"/7.png",revision:"91d70a4ddbf23a614d1265b3b5aabba0"},{url:"/8.png",revision:"46a455250f93c202bd3b7474095fc2b2"},{url:"/9.png",revision:"a178876d36181292eaa6167ee5e3c891"},{url:"/_next/static/chunks/1bfc9850-de47e0efe567d0a1d130.js",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/chunks/240-9f62ea32473a267e971f.js",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/chunks/main-8110f9c601b0fc462621.js",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/chunks/pages/_app-fed2e8c9c07bd394f277.js",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/chunks/pages/about-474ce8492f078f0c1c91.js",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/chunks/pages/career-c667d652f070da25f0f3.js",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/chunks/pages/contact-cb8eecb72ece775cc2fb.js",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/chunks/pages/index-d1ae4d5aa860f64659b9.js",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/chunks/pages/products-4ca4183af9af3e16139b.js",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/chunks/webpack-ddd010a953737b6e3536.js",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/css/1b5250853893fd37976b.css",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/css/42f638f96fe631725c29.css",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/css/4ae8cb4f7113338fb15b.css",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/css/4f5908b55131063af210.css",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/css/7d0dd3a27f5759d25abc.css",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/css/c654209662b508fdc02a.css",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/media/about.37d26dee587bedb9f108158b5328dadc.jpg",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/media/ajax-loader.fb6f3c230cb846e25247dfaa1da94d8f.gif",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/media/hero.e69b941b6f38e47c2f8eb8ff055d04e9.jpg",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/media/hero2.fe52f9995add2500240b60ba7693d767.jpg",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/media/slick.2630a3e3eab21c607e21576571b95b9d.svg",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/media/slick.295183786cd8a138986521d9f388a286.woff",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/media/slick.a4e97f5a2a64f0ab132323fbeb33ae29.eot",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/media/slick.c94f7671dcc99dce43e22a89f486f7c2.ttf",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/oV_ceqPYpxJ7jHs5pFOyv/_buildManifest.js",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/_next/static/oV_ceqPYpxJ7jHs5pFOyv/_ssgManifest.js",revision:"oV_ceqPYpxJ7jHs5pFOyv"},{url:"/about.jpg",revision:"3293b4905106a03fe2d60223fb75dc29"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/hero.jpg",revision:"050d8445c07c399a97e300ec3fcbe2c2"},{url:"/hero2.jpg",revision:"5052835163465d690fb772981ceec077"},{url:"/hero3.jpg",revision:"b258d11ff989f18a0d0464960045ea4a"},{url:"/hero4.jpg",revision:"202504fb1b7a121b12502bcd61dcc75a"},{url:"/icon-192x192.png",revision:"62442e0b11ec69f2110d740c7183803e"},{url:"/icon-256x256.png",revision:"fa29aab999e520a82dd000f1926f88e3"},{url:"/icon-384x384.png",revision:"da3f510556bbd75c4eb33354344d56c9"},{url:"/icon-512x512.png",revision:"a969db38fa90814a3011a4da579a8bd6"},{url:"/leader_1.png",revision:"90b6577d447ea686b2e4ea325a92c477"},{url:"/leader_2.png",revision:"50fb5e1abbef9fbf4b1a24aec6197d76"},{url:"/leader_3.png",revision:"6741de6a7886b29ac961d7b165fdf07b"},{url:"/leader_4.png",revision:"ecfa08d86d3ea03e15ff1a3ccd503a05"},{url:"/logo.png",revision:"19874739bbdec0451a500e480767f22f"},{url:"/manifest.json",revision:"bad9a3ee24f4c1e746b4fb325eb7d4ba"},{url:"/section_c.jpg",revision:"8eafac00013119eb7fe14071772200d5"},{url:"/section_d.jpg",revision:"c42ec4f0c1a0f7c36be4e62b8e643104"},{url:"/section_d1.jpg",revision:"443794b05102d01a610a345724001da2"},{url:"/signature.png",revision:"2b664acd93981d2a218cdff83615a6a1"},{url:"/vendor_1.png",revision:"73ff00cf2aa51730b742e194ff278e8d"},{url:"/vendor_2.png",revision:"febb7c88e7a59d6c7cdc38f9a62c4d08"},{url:"/vendor_3.png",revision:"ba6d7674e64305857fce2739889055be"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
