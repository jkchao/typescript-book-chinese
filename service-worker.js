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
    "revision": "46a3fb67d953fe3a768e7c611b72fad3"
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
    "url": "assets/js/40.a2e0f6ac.js",
    "revision": "e195c74fbecc9866c73d07157adb4bd8"
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
    "url": "assets/js/64.ad17a19d.js",
    "revision": "1d885792c87e8e87431bef934c171ad3"
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
    "url": "assets/js/74.14b24390.js",
    "revision": "3c57efba2b3e1389dbeec8aef6344f6d"
  },
  {
    "url": "assets/js/75.98e18b62.js",
    "revision": "b63ca14674ea84649023c7a885c59ad0"
  },
  {
    "url": "assets/js/76.6f6bb3d5.js",
    "revision": "8533c91cae842696cf6721cc866eb593"
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
    "url": "assets/js/app.c06fe733.js",
    "revision": "21ebdcbab5ed8e28e0909bb76938dbe5"
  },
  {
    "url": "compiler/ast.html",
    "revision": "438352a6e948538f41588ff8572ba8ce"
  },
  {
    "url": "compiler/binder.html",
    "revision": "a78889b2cba09600d2e347ee3c1996ba"
  },
  {
    "url": "compiler/checker.html",
    "revision": "9dcdc26d18ee2d91a70642201af46aeb"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "a73596f8044e0e6b9df5eeadfc534ff1"
  },
  {
    "url": "compiler/overview.html",
    "revision": "73f39352f02a2781800d9d6342421539"
  },
  {
    "url": "compiler/parser.html",
    "revision": "b7527aff740adc850383eac3341dc788"
  },
  {
    "url": "compiler/program.html",
    "revision": "4a4c458e07f347b879894def3b387e01"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "1eb51e7411d9d15dcdba0b5fdeaaccb3"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "019c2a2224a4b9b275bb1d4782fb4a66"
  },
  {
    "url": "error/interpreting.html",
    "revision": "9b770e99f2dcc2d982b8eed2f6e6d362"
  },
  {
    "url": "faqs/class.html",
    "revision": "adbc3248dd82caad52dbf7f98b948213"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "53bd4c878434be3b10d8697658b043ca"
  },
  {
    "url": "faqs/comments.html",
    "revision": "6d3011bb570edbff64721053b2df7053"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "45b6a21bc06f5c51b2ee9c83dc56f1fd"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "a522b2f0dacde0f32722fa1221c2f69c"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "fdd997b9c66385705174179f3cd5200b"
  },
  {
    "url": "faqs/enums.html",
    "revision": "8867dee135502f0283b5b13ce1854571"
  },
  {
    "url": "faqs/function.html",
    "revision": "0986dd7139aa467d5aed03a1f68cb6bc"
  },
  {
    "url": "faqs/generics.html",
    "revision": "2a9eebcfdfc0d9cfd8eb3ee7441e7399"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "899dbcaaa5262f5cf2c316f176b5bbab"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "2851777f7ebf82a8cde74ce9912291d5"
  },
  {
    "url": "faqs/modules.html",
    "revision": "31b854c8755e53b483b3dc6d416b40b2"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "b07303e7b43ed49de988ee4bf767ce0b"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "07b8841eab37cef7f6024a811c9a8c8f"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "a94d114d89bb74afddf29fe22b9e5346"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "01ba8ff9631b1eea4e8facd912154742"
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
    "revision": "f08e97a4f07f907b011992a281f20090"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "e64b0048faad139e6d40365364afe4b5"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "8a6151a64e57a606c44fe2d30b9b5532"
  },
  {
    "url": "jsx/support.html",
    "revision": "5385baa37b2da0c126f69745a85c69ab"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "new/typescript-3.7.html",
    "revision": "cc510f808bbbdabf0949e6dbd4de6b7f"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "1ff7b8d9a4723c4252ec3142363b4a3f"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "bca3c392be7c319600c630ed18187698"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "173dacfd6b71b0a3baa876aa98c70e63"
  },
  {
    "url": "project/modules.html",
    "revision": "76a5d725f43b0a9607630d2d6fc6a6de"
  },
  {
    "url": "project/namespaces.html",
    "revision": "4e31de570d5ec393f14d07cb931a874b"
  },
  {
    "url": "qrcode.jpg",
    "revision": "14958af0f1153a2b8e44ca2548d27b1b"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "71c1fe6460ee91c9aabd735707514948"
  },
  {
    "url": "tips/barrel.html",
    "revision": "4b1420bce152c63a87b7bdf3a41c717b"
  },
  {
    "url": "tips/bind.html",
    "revision": "26ef45e6f43e1a640c44a61d8194831a"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "e238d6f287cd25584e6e6aaed5a1e96f"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "72e174144255d901f41f0b31bd0fb21c"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "ff91db7d3401717decbc38eebd83ac62"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "4f7a42467f7cf616dc90e52959a7d544"
  },
  {
    "url": "tips/curry.html",
    "revision": "0dd841559d3861e32449831d06bef18c"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "afa8f038ff421254fe22f4050a869b41"
  },
  {
    "url": "tips/infer.html",
    "revision": "6eaa1a0ca785f4651ad9eeb120ba9ef1"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "df23751b58980f0a8111ff477be8d15b"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "9c6d30909fe3f154e5740036346451d2"
  },
  {
    "url": "tips/metadata.html",
    "revision": "c0b054a9868728e442a347f915cfaf56"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "66c7747e5358d840c02b76229866525a"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "ba87ddadd6a083faec0ed3011b264116"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "f118fa01d8c230ff936279a9ba6fc699"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "176e399c73b15b618ace0ae6a4eaf902"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "79a5f532a1a036872540c7343af5f056"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "e0ec92adba3ff3b425d5f502e27fafea"
  },
  {
    "url": "tips/truthy.html",
    "revision": "0437cdd83d204bd01d7773754acb7a4e"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "0a93eb4650800052c24320e3e795386f"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "308c32e6af30517461667b01aeef4079"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "199b7455b61372650d06cd44e0a62140"
  },
  {
    "url": "typings/callable.html",
    "revision": "5ff6698c51283e29fe2c4e4ea3a6243a"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "9c0c8ee6dc5b7329704ff3dca453db77"
  },
  {
    "url": "typings/enums.html",
    "revision": "172288eda6227dff9c9d259ba667aea1"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "664804913a94d02da9506348b5f71e6b"
  },
  {
    "url": "typings/freshness.html",
    "revision": "309599b8ed5a0a53a04578ca345c71bd"
  },
  {
    "url": "typings/functions.html",
    "revision": "5292fd30147e7c89f4c75f610b4af1da"
  },
  {
    "url": "typings/generices.html",
    "revision": "285c9125adbefd459e7a3a37dbb8764e"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "e4de078c6cc9e8e805f258d79546a0fd"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "5b48389f5ce557275995373fb07020c2"
  },
  {
    "url": "typings/lib.html",
    "revision": "44c1f7558410d8b9b362c229a4637563"
  },
  {
    "url": "typings/literals.html",
    "revision": "7d8e500cef0d1e58ac04d127b8fb90bc"
  },
  {
    "url": "typings/migrating.html",
    "revision": "cab8f150d5c7c1afb270a7b669f49852"
  },
  {
    "url": "typings/mixins.html",
    "revision": "5514d6c2554ecf0ae2e1136c497e6d50"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "b578eca7ffffa1b6782013654291135d"
  },
  {
    "url": "typings/neverType.html",
    "revision": "f25fc46b0c451001b355f1ebea5451b2"
  },
  {
    "url": "typings/overview.html",
    "revision": "fb41ed5ea46d285a84d4dd4f0d729040"
  },
  {
    "url": "typings/readonly.html",
    "revision": "513461a867831cb307c58dd1800caa91"
  },
  {
    "url": "typings/thisType.html",
    "revision": "83273fbc1e197df7594de41bafcce0e2"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "376adb977b2ea3a67197539822d16360"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "94859322babc807d0bbee9b545435cbd"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "ced8f17ccd4b07530c8be617459fb93b"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "fa8eeae3deb6464aa2a1bc17d4414ce7"
  },
  {
    "url": "typings/types.html",
    "revision": "ca6d84f4a2cbac447a3ce27c1c64011b"
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
