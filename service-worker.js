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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5bf7960e59d04673672bd77782d79189"
  },
  {
    "url": "assets/css/0.styles.890f74af.css",
    "revision": "8eeb886704f60240fb174210d51e6483"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.67330217.js",
    "revision": "def7620a95051417d122788af4699882"
  },
  {
    "url": "assets/js/11.137c02b8.js",
    "revision": "3e459fc0ef78c9dbc76a8b246961d02e"
  },
  {
    "url": "assets/js/12.fc3eddde.js",
    "revision": "5c569245c3ac243f45de91a434d82009"
  },
  {
    "url": "assets/js/13.85f545ee.js",
    "revision": "e8fa1245c0d7e64715f4356a6e1cfb0d"
  },
  {
    "url": "assets/js/14.3a464195.js",
    "revision": "8b8cdb36b6b35de10e6d5241c593ea54"
  },
  {
    "url": "assets/js/15.7ee47059.js",
    "revision": "c7bb128f00696ef62545044d1ab7c7cf"
  },
  {
    "url": "assets/js/16.d74802ae.js",
    "revision": "6eaea9cdffcd23449087023f4d3821d7"
  },
  {
    "url": "assets/js/17.d0579439.js",
    "revision": "781691d8d27c1dfcbcd61b8b7b8e0b3a"
  },
  {
    "url": "assets/js/18.68d3246a.js",
    "revision": "eb2d03a62f132c370368ae70ffa6e720"
  },
  {
    "url": "assets/js/19.71c2f74c.js",
    "revision": "b74fb50418e78b5b6a1ff5b37888f324"
  },
  {
    "url": "assets/js/2.482d3ed7.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.d43ca1f9.js",
    "revision": "d94eab79ed6b05c82267fff83a241904"
  },
  {
    "url": "assets/js/21.35d0661a.js",
    "revision": "e1709c6bb3240f704be93ad0e322ebea"
  },
  {
    "url": "assets/js/22.a644f843.js",
    "revision": "ce5046274c37ae6ab957ec1633810fd2"
  },
  {
    "url": "assets/js/23.e6474d5c.js",
    "revision": "9838ace950894467d7bc641e1d9079e5"
  },
  {
    "url": "assets/js/24.fcab3a44.js",
    "revision": "091ededa6c04dd799c5ff7e44aef1b1f"
  },
  {
    "url": "assets/js/25.730c5e9c.js",
    "revision": "b37b1d80121ef221b207827a3fc19f88"
  },
  {
    "url": "assets/js/26.be1b030d.js",
    "revision": "7353d2131e7eddc5905790644a914711"
  },
  {
    "url": "assets/js/27.7c04bab3.js",
    "revision": "1913303f13b381d103f2328de65492fc"
  },
  {
    "url": "assets/js/28.32d50c9e.js",
    "revision": "e9549d094bcf151979c9869b86d932b5"
  },
  {
    "url": "assets/js/29.3deaea8b.js",
    "revision": "2c25dc549d71996d804e2a1c11dcc67b"
  },
  {
    "url": "assets/js/3.1f3c9c35.js",
    "revision": "73d771c17a99a9ae50e7666393575011"
  },
  {
    "url": "assets/js/30.fa4f6072.js",
    "revision": "510b944705187332b3cecbc49c6ac2cf"
  },
  {
    "url": "assets/js/31.1b380e5a.js",
    "revision": "5d88588a49074482c8b208e0f874530c"
  },
  {
    "url": "assets/js/32.d8400547.js",
    "revision": "51a60ee376cb54a42332edfa060a58c6"
  },
  {
    "url": "assets/js/33.dca0115f.js",
    "revision": "2f6e1d454bc388a17a2816c01fabce00"
  },
  {
    "url": "assets/js/34.3aae9a5c.js",
    "revision": "f9b5fa15a3a7e4d57efb82c22c83d216"
  },
  {
    "url": "assets/js/35.d543beb6.js",
    "revision": "4d63c68cf34415ab2105ddf40823cb10"
  },
  {
    "url": "assets/js/36.21d4c288.js",
    "revision": "8089f332d2310ab3fd3a290097eaccd3"
  },
  {
    "url": "assets/js/37.23915758.js",
    "revision": "da7b3ace9ed4da60223ad5a6776ca67c"
  },
  {
    "url": "assets/js/38.0445e808.js",
    "revision": "ca8189f26d381303a6ccbfe651042ee9"
  },
  {
    "url": "assets/js/39.cdf4d714.js",
    "revision": "6da85ab21771cab892754682e419e59b"
  },
  {
    "url": "assets/js/4.734505bf.js",
    "revision": "453cb0cd47811c5ab718a6530cbef4f1"
  },
  {
    "url": "assets/js/40.55170355.js",
    "revision": "cba12aeac34c3f07600fc2148296666d"
  },
  {
    "url": "assets/js/41.4f8dd48f.js",
    "revision": "1b2aabd3e7874931bd4a0c1cb0bd6c3f"
  },
  {
    "url": "assets/js/42.ef87486d.js",
    "revision": "e1cd8de57e44df9a375a79e6f655efe1"
  },
  {
    "url": "assets/js/43.59dd4eab.js",
    "revision": "9afbef163113fdb6126761e17eb7165e"
  },
  {
    "url": "assets/js/44.cdfc0016.js",
    "revision": "d312aa699f3cb7519fbd6ad601721e78"
  },
  {
    "url": "assets/js/45.c23d845a.js",
    "revision": "1bd6ec2c1fe1d94e51d208d7699cd51d"
  },
  {
    "url": "assets/js/46.95079b6d.js",
    "revision": "49e95733f408d242a76f05cdfb45e9b0"
  },
  {
    "url": "assets/js/47.8fb53257.js",
    "revision": "bc5f56b8853ee8078de18eb7ba445931"
  },
  {
    "url": "assets/js/48.deeef2f6.js",
    "revision": "98641b955ac73e7ca33644d180cd8f5c"
  },
  {
    "url": "assets/js/49.c0b1a804.js",
    "revision": "4738658a4ffc235738118e159b1a05c7"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.9c758278.js",
    "revision": "24b40cca64542326d03dfbd2e82c32f5"
  },
  {
    "url": "assets/js/51.192fac2c.js",
    "revision": "3f6fa9cfaf772730957bbe3f46ebecdc"
  },
  {
    "url": "assets/js/52.9d212c5e.js",
    "revision": "23f54f1f22138f44af4201c1ad2dc09c"
  },
  {
    "url": "assets/js/53.16ea2561.js",
    "revision": "dbf96890c4314f4567fa4d52f7828821"
  },
  {
    "url": "assets/js/54.dd9ef73e.js",
    "revision": "0e93baf42c1aeef335cab0691bd835c2"
  },
  {
    "url": "assets/js/55.55d04b32.js",
    "revision": "161cc74a22e0b53f3af863894ad54941"
  },
  {
    "url": "assets/js/56.ae88c64e.js",
    "revision": "0e4f7236b949b1ffde8ca22add5cf190"
  },
  {
    "url": "assets/js/57.2e571750.js",
    "revision": "3a3bd79dcc8cc36136b4124c3561ad3d"
  },
  {
    "url": "assets/js/58.583e5d73.js",
    "revision": "53cbc4f60b17ef87a60dc9ee98420863"
  },
  {
    "url": "assets/js/59.9b5bb95f.js",
    "revision": "48dcc6df7870c08d908a459e6b44f32e"
  },
  {
    "url": "assets/js/6.f1227dce.js",
    "revision": "5e4edc90c3c7563e7edccc41412ef305"
  },
  {
    "url": "assets/js/60.3eb16bc9.js",
    "revision": "99ae2bf91d22b6eab2ca832cb8b5e055"
  },
  {
    "url": "assets/js/61.ab3b9ae6.js",
    "revision": "19097e792ee3bb478cc635710d548cf2"
  },
  {
    "url": "assets/js/62.888788a9.js",
    "revision": "6f92e2f917d886c9559eaa603ab4faaf"
  },
  {
    "url": "assets/js/63.89a7f55f.js",
    "revision": "633169f2d4dc815fbbca91fdfe168237"
  },
  {
    "url": "assets/js/64.547bf82a.js",
    "revision": "ae124fad8cf201f53cf798ea610b7842"
  },
  {
    "url": "assets/js/65.d9fe6c6a.js",
    "revision": "8d1aacdd5b8829c00261768f054da4d0"
  },
  {
    "url": "assets/js/66.d7f5542d.js",
    "revision": "8dcc03c9ba943690fde9378cddaaccfd"
  },
  {
    "url": "assets/js/67.81e1d1dd.js",
    "revision": "878fbc27a4fd1163698b33a40dcb5ac2"
  },
  {
    "url": "assets/js/68.f4b44603.js",
    "revision": "12f410e75342e49af63ab610d8411266"
  },
  {
    "url": "assets/js/69.3a207aa6.js",
    "revision": "d16c7ab69666c9572e22444f7fb8cc03"
  },
  {
    "url": "assets/js/7.e446ea68.js",
    "revision": "76b8c3ca6d1997e6b6c89d83e1999211"
  },
  {
    "url": "assets/js/70.ddf357b3.js",
    "revision": "b9451c238b25728a103721813860a301"
  },
  {
    "url": "assets/js/71.5c88cc5c.js",
    "revision": "e3894d392a693e9acf9f2e95f99a5fee"
  },
  {
    "url": "assets/js/72.381f2623.js",
    "revision": "1948183adf092a329232f7c0da7190eb"
  },
  {
    "url": "assets/js/73.afdcea33.js",
    "revision": "fd5d67d52f2ee8f7a16d7db78d2c4220"
  },
  {
    "url": "assets/js/74.0d2ae292.js",
    "revision": "b6bbc54d1666e0053b38e5f68ce79c74"
  },
  {
    "url": "assets/js/75.98e18b62.js",
    "revision": "b63ca14674ea84649023c7a885c59ad0"
  },
  {
    "url": "assets/js/76.2a950e76.js",
    "revision": "5fa394ceca05409a5f06b8495cbf9772"
  },
  {
    "url": "assets/js/77.b0051ced.js",
    "revision": "e7dfd309eb59fcc7121c1f952760070a"
  },
  {
    "url": "assets/js/78.0c1b6bbe.js",
    "revision": "3f2b6598c3b2c186a34700d39482bc7f"
  },
  {
    "url": "assets/js/79.49ba08f7.js",
    "revision": "5e760b78e1609d0f783d3370d9aaa036"
  },
  {
    "url": "assets/js/8.9c98c03d.js",
    "revision": "c0330f6cbabf784d79bcb72e12861312"
  },
  {
    "url": "assets/js/80.6c03d46e.js",
    "revision": "7640a049da4a52c16ac0876bea792850"
  },
  {
    "url": "assets/js/81.5c17a27c.js",
    "revision": "3e46fa8c50a4515504a036a579ece63c"
  },
  {
    "url": "assets/js/82.9b10ca3d.js",
    "revision": "817b6deed00c6f16935c37caf25e4fc1"
  },
  {
    "url": "assets/js/83.318cfe9a.js",
    "revision": "c77699dd36f52b3935a7b2ce66f87f95"
  },
  {
    "url": "assets/js/84.b23769df.js",
    "revision": "92e8c96b637eb73dfeaa97ab093d03db"
  },
  {
    "url": "assets/js/85.5f112fbc.js",
    "revision": "516fbf681614aae4995ed42a18d888be"
  },
  {
    "url": "assets/js/86.f7df3cdf.js",
    "revision": "1fda0c0eb32e16ec3945f43039cfd27c"
  },
  {
    "url": "assets/js/87.1cd8ad3c.js",
    "revision": "32f168a83f661d28bcd31a63a06d1d08"
  },
  {
    "url": "assets/js/88.e7ac3ac6.js",
    "revision": "63bd4b0e01a9b40160664650b917b844"
  },
  {
    "url": "assets/js/9.01fff7e2.js",
    "revision": "df353b22506e9426450286a79ae2c2da"
  },
  {
    "url": "assets/js/app.7c66c50b.js",
    "revision": "1f75adcef114ecdad5a7e3d87857d1bd"
  },
  {
    "url": "compiler/ast.html",
    "revision": "70557fd368f71bb6d768d8ebbe22a008"
  },
  {
    "url": "compiler/binder.html",
    "revision": "fda56f6ccff9c27566ed76201c344934"
  },
  {
    "url": "compiler/checker.html",
    "revision": "18e2dab11649791c8d613d18050ef998"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "c29d0a1a1001f989dd76ca3ef06e43f7"
  },
  {
    "url": "compiler/overview.html",
    "revision": "7d2d53e5a87f14da766a6d52751bb90a"
  },
  {
    "url": "compiler/parser.html",
    "revision": "5427b9cb94087f1f84a8e809b06cd35e"
  },
  {
    "url": "compiler/program.html",
    "revision": "da7c3e338d9439c7561c9196175c0424"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "19af8463c68d065d063a5ca3b19bf827"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "576f25d54acf4e465aeb34c4c8f56845"
  },
  {
    "url": "error/interpreting.html",
    "revision": "10aafca121f9bac7455ac3aea188e9ae"
  },
  {
    "url": "faqs/class.html",
    "revision": "117422c5667b30500df161a48ccc5474"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "99319c506c5eaa0806dbd70661e79408"
  },
  {
    "url": "faqs/comments.html",
    "revision": "079835b6dbf01de03df19f3649baab0a"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "923297210427bc04b231689a8e898a1d"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "be2bc819b4fdd8cae61f9b95cb145876"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "0e0d01bdf3c311edf848bc6d66c9b42c"
  },
  {
    "url": "faqs/enums.html",
    "revision": "6aa1a30708e05a42540cce48ce670105"
  },
  {
    "url": "faqs/function.html",
    "revision": "51e7c94d40561ed4ce79a876ed2858b1"
  },
  {
    "url": "faqs/generics.html",
    "revision": "7d4cbf32a2586d9d338d76977b06ad60"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "dd7a674cf01649f3991a26e3e7c896f5"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "a73064df17306416e8e9881d51c9329f"
  },
  {
    "url": "faqs/modules.html",
    "revision": "ab4b3b6a3c5eaaf9d7542e8f6569c1c0"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "08f3bf655fc908113692b4a1fc59b946"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "3cfd5c8fd438a927a4be89b5c44d9b18"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "5bc0523b0213b0b5b3d8df6d843c9374"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "24b2fb42bec6e3466771f419ad57d8e0"
  },
  {
    "url": "icons/android-chrome-144x144.png",
    "revision": "c69cd1b02ddc62326a747e3fc32c75fd"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "835244e9492188eb03cdd9b7c142187d"
  },
  {
    "url": "icons/android-chrome-36x36.png",
    "revision": "0c8e1aea7893741111d5768d6e3e5701"
  },
  {
    "url": "icons/android-chrome-48x48.png",
    "revision": "4a00eaf5a2be433bc3cf8764ff4fe378"
  },
  {
    "url": "icons/android-chrome-72x72.png",
    "revision": "c99dcee7261b904f10d6601b880a17de"
  },
  {
    "url": "icons/android-chrome-96x96.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "3dba8d903ab85e6b034bb3b6b43e1492"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "912532b7a07078f2a8b856eb739619b4"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "ff9af4ff1e2f53cad5e3d6fadb0b9a2a"
  },
  {
    "url": "jsx/support.html",
    "revision": "184144671778a26f0b07ed3948389058"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "new/typescript-3.7.html",
    "revision": "c8b7d6f7ffca281c5d7c9d71e1fa08dc"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "eca1456cf1a93d5315c5485fe1b194e8"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "ab22f59c507e679bbbb73d6825d0e081"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "59e03734749d2b64f6556669b4404c78"
  },
  {
    "url": "project/modules.html",
    "revision": "5dd5214680ebec5f67ea8eb87b080505"
  },
  {
    "url": "project/namespaces.html",
    "revision": "30e735cd5cfaa65205ba8fa655176e82"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "10394d00c5709e8e9a46f25f9a344e4c"
  },
  {
    "url": "tips/barrel.html",
    "revision": "03cb84f163889352b9b4c0c14310f375"
  },
  {
    "url": "tips/bind.html",
    "revision": "68d16a284344b9dca18e5b64136187c3"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "c75a7d2bf98e87c8c4ebd2d84ff2eb83"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "a4d4835a4d7eb23847f57844dc985a88"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "81a3f43dc1904383bf0bde72bd5e949b"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "a96cf645fe5acefdaf391e9400bc18c8"
  },
  {
    "url": "tips/curry.html",
    "revision": "e86f7f3ae7afbe8d95aba6e00c3f5d3e"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "fd9d7d8beb945202457959fad5032c16"
  },
  {
    "url": "tips/infer.html",
    "revision": "63b4d67504632afea965010ea144a42f"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "916dabbe7bf2b3e44c470f1c2d17c8d3"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "e81f77cab20c65180b9ac365c7511756"
  },
  {
    "url": "tips/metadata.html",
    "revision": "0fe5a90959858b5cb549ad8e9b36c5c1"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "9f29578311b76894ed157d56d6f9115c"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "0294dc700a93bf921c1b351bd3b087f9"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "687969c468a7e4a1f0d3c261f408623d"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "164b982044fc071a72640cbec15ddfc1"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "5ef3d8e3ad3aeac185b2d92462f5442f"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "3f00ce3d10b82d3f8d15f1587a974d8b"
  },
  {
    "url": "tips/truthy.html",
    "revision": "60c277505295c34d77b55485f6a4d264"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "98804f3924edb93dabf4a65d412573cc"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "d32cbd56b4b42e7d387983610534c967"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "bd6eb573c1fdacd04d61e70f7cee9660"
  },
  {
    "url": "typings/callable.html",
    "revision": "4f23927b0ea7e2f8f186d9d744d5ea37"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "79a932927324289261259209b80b300f"
  },
  {
    "url": "typings/enums.html",
    "revision": "7b8acc8eee0740f25e55e15f675cb237"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "17adfa6b573000f0228654878dcb2c3e"
  },
  {
    "url": "typings/freshness.html",
    "revision": "cb3340a12a40fd09bc37b184ea8ee307"
  },
  {
    "url": "typings/functions.html",
    "revision": "c96c32a78c92b15c8ba12265f348c236"
  },
  {
    "url": "typings/generices.html",
    "revision": "b250d93cca7c554f16c10cd993e3f966"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "60a7aabb3f01f11fb9daffb8d3919d90"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "c84e5af80e52faf7ad6496deeddc132f"
  },
  {
    "url": "typings/lib.html",
    "revision": "54a0d3dc2ea7f3ebef43a0207fbeb9d5"
  },
  {
    "url": "typings/literals.html",
    "revision": "e92c11874f6bffc16d7c6be8cda2be7b"
  },
  {
    "url": "typings/migrating.html",
    "revision": "93b2552f227314a01dea6c4e17094175"
  },
  {
    "url": "typings/mixins.html",
    "revision": "91b2b8592fdc30579c4795583993895a"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "60416718c81bca06d4ec9b7a0f2240e1"
  },
  {
    "url": "typings/neverType.html",
    "revision": "3bf462917d46e9b266745e110cafbfb1"
  },
  {
    "url": "typings/overview.html",
    "revision": "bb681208c58df18cac973b44fd154d6e"
  },
  {
    "url": "typings/readonly.html",
    "revision": "542c8549422f2955568128f557a0b206"
  },
  {
    "url": "typings/thisType.html",
    "revision": "5a7f97364ddc809a837819d0ac0b6d3e"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "217b96b13a0bee6d334f893f8a6511fa"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "358c5b8fe604b678812b48839b138720"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "aad1caa02d8a62c38a36d81c7effe06d"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "3c5e4a78b6149dbf9edecca1de05a0d5"
  },
  {
    "url": "typings/types.html",
    "revision": "c93e1046356b95f7a65dd25cb371bf6e"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
