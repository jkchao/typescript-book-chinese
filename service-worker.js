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
    "revision": "6f1015d733198d30c16336ec2c9114c2"
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
    "url": "assets/js/69.858e606d.js",
    "revision": "8d5e0ebdad43a08a76318f852ffef113"
  },
  {
    "url": "assets/js/7.e446ea68.js",
    "revision": "76b8c3ca6d1997e6b6c89d83e1999211"
  },
  {
    "url": "assets/js/70.cd0af384.js",
    "revision": "613cfcbafad2e0390dfd8cd2dac3c85b"
  },
  {
    "url": "assets/js/71.9a9dbebb.js",
    "revision": "ce1793951ee34ebe7cf8c14d9ee87862"
  },
  {
    "url": "assets/js/72.6e44ed20.js",
    "revision": "6e6c45370c7d734508d755b1baa95444"
  },
  {
    "url": "assets/js/73.d4540ad6.js",
    "revision": "5274f904201bb1d4296fd3a7e19fdf55"
  },
  {
    "url": "assets/js/74.0d2ae292.js",
    "revision": "b6bbc54d1666e0053b38e5f68ce79c74"
  },
  {
    "url": "assets/js/75.9af66acc.js",
    "revision": "9bff6f3173332b75b2382b5775b85f6b"
  },
  {
    "url": "assets/js/76.6831f166.js",
    "revision": "07933bb54169cebdaf50fc3ccf4fc243"
  },
  {
    "url": "assets/js/77.b6090a68.js",
    "revision": "33727fd6e794c5a83b96f8cbd023db03"
  },
  {
    "url": "assets/js/78.58f276d6.js",
    "revision": "f9d23c370b0ee1bd96051f1df9d5528b"
  },
  {
    "url": "assets/js/79.bbcc018d.js",
    "revision": "d86fafc2fac4f4ccf72e012924319e09"
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
    "url": "assets/js/81.e73ec459.js",
    "revision": "1e0fe19e133783c9507cd71ff35b2d8e"
  },
  {
    "url": "assets/js/82.04f95649.js",
    "revision": "cecaba68aa44e95e811204d77fe0a881"
  },
  {
    "url": "assets/js/83.114009e3.js",
    "revision": "6a8e7ef3922fc2c476d52502a5fa9dac"
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
    "url": "assets/js/app.adc8cfb6.js",
    "revision": "b175a2414f4b896c62dc6f7aa44a48c3"
  },
  {
    "url": "compiler/ast.html",
    "revision": "c8ec7470494f41cc6220cb5fb69d37c6"
  },
  {
    "url": "compiler/binder.html",
    "revision": "3b161f6708c869263975f8e1c7b2873d"
  },
  {
    "url": "compiler/checker.html",
    "revision": "d6f8e4451def451d1a8b6ad0bb9bd95c"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "7e9042a72b70e5fffa765834ca81764a"
  },
  {
    "url": "compiler/overview.html",
    "revision": "dd230b5764471677559bb7b0289060c1"
  },
  {
    "url": "compiler/parser.html",
    "revision": "1bc06525d122e967109e8c1c42e57a69"
  },
  {
    "url": "compiler/program.html",
    "revision": "edaba39fe4e961984bea1a5b29e15f2a"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "4df7895707317f82e01a6b3c738770f1"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "e201862c5a0c0417ada389a021f48881"
  },
  {
    "url": "error/interpreting.html",
    "revision": "cadd68e3eaf2a3dda7ba996d17eb30a9"
  },
  {
    "url": "faqs/class.html",
    "revision": "3dc35d0a4cb493a291ad2c9efe9bfce0"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "5c94c5df68086c6a8d93db25a7346d3c"
  },
  {
    "url": "faqs/comments.html",
    "revision": "81a6ba1d6a9a86a6b50f0d6d770876ff"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "79e74abf28e167e676c92fc0828c9b02"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "b3f5152d0cbb42a25dd12553cf4c34b1"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "b2caea632a5d3b7c15e53eb7498ba7f7"
  },
  {
    "url": "faqs/enums.html",
    "revision": "00733e723b35e922f23eb4ec21780dbb"
  },
  {
    "url": "faqs/function.html",
    "revision": "6cec7f2c0ebb7158bd9b225ff8f17bc2"
  },
  {
    "url": "faqs/generics.html",
    "revision": "86d48b25e62089a02c7c167a34d05292"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "e5b6ea43328a25fc33f1d66567a8385c"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "06b1fec651ed6cb8fe748d11fa83970d"
  },
  {
    "url": "faqs/modules.html",
    "revision": "1a52acead21b56de0002ca6adb2b89bf"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "2da24d3fe9879fef16a22dcb5e53575a"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "d769152ba1dc343c6e017075df6e3a42"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "8e2121e3f91261e5da7aead5a62dfbca"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "08ddfee7ac42029549c3c45472140322"
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
    "revision": "f12600a01026d74fb2f6b68a76a93994"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "67af2b03588c1ee593e95e2f14e3b20e"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "2f2ad87a76baba8d9a0565955d630f04"
  },
  {
    "url": "jsx/support.html",
    "revision": "25c5efb2e322fd06cb45c69bfe09fa73"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "new/typescript-3.7.html",
    "revision": "b38b9fc655e001f6d1b69bf2a79f8d5b"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "b1936130a27256383a0207ec039c0404"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "77246ed86520f157e628c3d0c29eee45"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "23cda3138ff80426d795e7aaeaeff860"
  },
  {
    "url": "project/modules.html",
    "revision": "4bfd60f1406932633d000b8c6fd40ed5"
  },
  {
    "url": "project/namespaces.html",
    "revision": "9028ba0d7ceb05b62a8b1f87d9d0f573"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "58903b0afb62373d237d9a8bd5838e7b"
  },
  {
    "url": "tips/barrel.html",
    "revision": "564ce19382edf2600110258af49daf16"
  },
  {
    "url": "tips/bind.html",
    "revision": "1aff8ca51c233eca7c79a2b12f2e3328"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "cd9c86c9bf8d33b55b8bd9e31665a598"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "dddfa2b79051912d46d073df06a01583"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "4ca70952379686e3c86c40bc55f13de6"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "e6670aca708845416f27f4100622c2bf"
  },
  {
    "url": "tips/curry.html",
    "revision": "e3a94306a3f58bd5b87c670370e94a33"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "cc23fc2f111eff7b7c786eb06f100626"
  },
  {
    "url": "tips/infer.html",
    "revision": "c01381386a6e4a2825442afcab125d6c"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "fe545437412bff8fdfbdc339069d029e"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "aede1d46f3e45489f2b5b1614044cd5f"
  },
  {
    "url": "tips/metadata.html",
    "revision": "74dea5f8d64d0469ace035f8acd6d84c"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "ebbb4c60e4862650dc601a628f3f8996"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "ac1347775170dd793b864da647e19be1"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "f35a07579f8d89f2bbe0c1988331bb69"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "1a93419d749009fb3e1cc39806a580b2"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "be44de680a39372377fc0e5fe9d249f2"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "b2104962cc75ea9c4afd536480cd2de3"
  },
  {
    "url": "tips/truthy.html",
    "revision": "0f4eaeff5fbc8b21763001db63064d55"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "0eec627eabfdc1c0a6a2c13e720d7039"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "82b70310db68c0e011e543dd3774878e"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "c65bb1455a53f125e393fccdb79a075f"
  },
  {
    "url": "typings/callable.html",
    "revision": "e0fd44937a465492fb97624b4ffe66aa"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "0aabfca3d929419aa6409dcd72e640d5"
  },
  {
    "url": "typings/enums.html",
    "revision": "66b50a537f181be985a7bfd98e405f16"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "a878d998656febaecb5f157a70dc667c"
  },
  {
    "url": "typings/freshness.html",
    "revision": "84f5e651123fd30cb1c8fcd5d46a7308"
  },
  {
    "url": "typings/functions.html",
    "revision": "25aabd8333d89479e73acdb31b085c43"
  },
  {
    "url": "typings/generices.html",
    "revision": "5f1d12d865a6f220ee2cf4946668184f"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "1c83d0324e3b73612656caf5c537c028"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "6bae153708020017128244c79bfa091f"
  },
  {
    "url": "typings/lib.html",
    "revision": "583586c9e53e39b69dbcb7c205c0cdab"
  },
  {
    "url": "typings/literals.html",
    "revision": "824be7f09662bdcbdd342807db2d5005"
  },
  {
    "url": "typings/migrating.html",
    "revision": "f0496124527474d68e47a27676d49f09"
  },
  {
    "url": "typings/mixins.html",
    "revision": "59cd551f9d79e94e0642741a92a166b6"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "9512c1eb5a4bf130b8e935233de30443"
  },
  {
    "url": "typings/neverType.html",
    "revision": "42340faee82fc6ca740b1b174cf3b7a0"
  },
  {
    "url": "typings/overview.html",
    "revision": "8a4ea001839dcbe117d346b883c3703f"
  },
  {
    "url": "typings/readonly.html",
    "revision": "114856aeed2b367d2f546687246e6712"
  },
  {
    "url": "typings/thisType.html",
    "revision": "4dfc57a62c8b9636d370dfc348267f5f"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "31eefb08c89ade382649fcede94a37dd"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "9aa09ea33e9e3df3ca188b0fcca8041a"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "cd88c370bec9619fe0951b4082c6ce1b"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "77e3d0ac95fafd8a4cf0d299ec85af0c"
  },
  {
    "url": "typings/types.html",
    "revision": "7e694a071683768e83627ee5026ef132"
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
