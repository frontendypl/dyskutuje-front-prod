if(!self.define){let e,i={};const o=(o,n)=>(o=new URL(o+".js",n).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const l=e=>o(e,r),t={module:{uri:r},exports:c,require:l};i[r]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(s(...e),c)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"dyskutuje.pl"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.a8643db8.css",revision:null},{url:"/fonts/Roboto-Bold.c36a3fe0.ttf",revision:null},{url:"/fonts/Roboto-Light.1ad50b89.ttf",revision:null},{url:"/fonts/Roboto-Medium.9204c2aa.ttf",revision:null},{url:"/fonts/Roboto-Regular.d0bc87a8.ttf",revision:null},{url:"/icons/android-chrome-192x192.png",revision:"8099152fd78e7937bc42385e930a2f1c"},{url:"/icons/android-chrome-512x512.png",revision:"151c796197ef49483b246b45ba79069d"},{url:"/icons/apple-touch-icon.png",revision:"732fe2eacd05e75fe139f19354cf0d47"},{url:"/icons/browserconfig.xml",revision:"8fa3a3a4db201db38a12bf9230365e6e"},{url:"/icons/favicon-16x16.png",revision:"ee7f606f360237a43c039062dde55661"},{url:"/icons/favicon-32x32.png",revision:"1ace1a216f02b87ab6420c0c240e57db"},{url:"/icons/mstile-150x150.png",revision:"9bb7e7e48261f45db7a882e117d1608d"},{url:"/icons/safari-pinned-tab.svg",revision:"daa68e12bc4aec3b0b9a7f5ead17cd43"},{url:"/icons/site.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"/img/logo-330.592166e9.png",revision:null},{url:"/index.html",revision:"29b07bbcbd7d4d1634dcd7843ab84293"},{url:"/js/app.b556eb75.js",revision:null},{url:"/js/chunk-vendors.4d3ea70a.js",revision:null},{url:"/manifest.json",revision:"5230bc37953a128e00fd9b50a296b020"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
