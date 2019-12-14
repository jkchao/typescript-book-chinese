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
    "revision": "18373481e66a53ad7030abff4dca8ae6"
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
    "url": "assets/js/17.bb34a6bf.js",
    "revision": "3b1f831eed2b2bbf823ce10a3fb852cb"
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
    "url": "assets/js/32.bed261f5.js",
    "revision": "6766d8744724fe0a7353e73207d70127"
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
    "url": "assets/js/37.20c75fab.js",
    "revision": "2af584d350350db25e124d192fca266a"
  },
  {
    "url": "assets/js/38.4d8545bf.js",
    "revision": "2aaf2b32182846fbf35af5e3faa1fb2f"
  },
  {
    "url": "assets/js/39.909a9968.js",
    "revision": "d223b98a0469fac77e831f74a55862d5"
  },
  {
    "url": "assets/js/4.734505bf.js",
    "revision": "453cb0cd47811c5ab718a6530cbef4f1"
  },
  {
    "url": "assets/js/40.071a201d.js",
    "revision": "7df30e506b17b71e500b98547d9fa701"
  },
  {
    "url": "assets/js/41.5e78b8e1.js",
    "revision": "2ec0015cf689143c33855df78ce370bc"
  },
  {
    "url": "assets/js/42.f18a0d53.js",
    "revision": "a1cb7b99a15db24763bceacbb51aabd7"
  },
  {
    "url": "assets/js/43.cc253c11.js",
    "revision": "dafa038bdab4d393e124c2ad170f38a7"
  },
  {
    "url": "assets/js/44.7448e47b.js",
    "revision": "1230d1209b865cd023b92dc46efef9bb"
  },
  {
    "url": "assets/js/45.307afb0e.js",
    "revision": "323e7049f253ed0e73c4cb543c2563f5"
  },
  {
    "url": "assets/js/46.93ac50de.js",
    "revision": "39d2f7a248a6e4d44c0ac6586d229710"
  },
  {
    "url": "assets/js/47.0e9b41a0.js",
    "revision": "d3ebb8ee0b3f06cd8704b69e2d0d31fe"
  },
  {
    "url": "assets/js/48.c5e9673a.js",
    "revision": "3614005b28f74d4c0d1f38e265f9ad8f"
  },
  {
    "url": "assets/js/49.fc2f48ba.js",
    "revision": "df3e51e90aaa1c9401c07e614ef036a0"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.9234d6b1.js",
    "revision": "d95af2db245bb80e1d677e45e46daefc"
  },
  {
    "url": "assets/js/51.2531b3c1.js",
    "revision": "b845111a3f3d528a294597d94bc0d614"
  },
  {
    "url": "assets/js/52.ed9b0bd1.js",
    "revision": "3f2bb3a1d0aa838cde8ac0a6e49b3aa3"
  },
  {
    "url": "assets/js/53.1811ea2b.js",
    "revision": "1aec3c4af742d3156c4258af85da79b7"
  },
  {
    "url": "assets/js/54.402e9a73.js",
    "revision": "65205585e86006fda2bf1259f9e6555c"
  },
  {
    "url": "assets/js/55.26eb8300.js",
    "revision": "06b818ae3df156651ba4368f7df4fcba"
  },
  {
    "url": "assets/js/56.0bf4eaa8.js",
    "revision": "8077094d3f12191d86dcb4ab767c289e"
  },
  {
    "url": "assets/js/57.6765ae07.js",
    "revision": "65c1988976ed133a0c95980f4ca4bf48"
  },
  {
    "url": "assets/js/58.d854036b.js",
    "revision": "16009fc5cad2b8b08bb2c445e8030753"
  },
  {
    "url": "assets/js/59.94730d84.js",
    "revision": "7d2daffe3f60200a14510b5fabb786d4"
  },
  {
    "url": "assets/js/6.f1227dce.js",
    "revision": "5e4edc90c3c7563e7edccc41412ef305"
  },
  {
    "url": "assets/js/60.e3b90e54.js",
    "revision": "ba4a81bade833fb3ca60ff4205a6c444"
  },
  {
    "url": "assets/js/61.b4f62763.js",
    "revision": "9a2cd3820099abefb7c937225e5d4361"
  },
  {
    "url": "assets/js/62.9cf616dd.js",
    "revision": "666da77a60c4662a16c5361fda1e1ba7"
  },
  {
    "url": "assets/js/63.8ceb7292.js",
    "revision": "fcc41af06a975de6ee6cd2baa15af521"
  },
  {
    "url": "assets/js/64.e9ea6588.js",
    "revision": "01941ae6df568e4ceee08156ecb8820b"
  },
  {
    "url": "assets/js/65.45d29c7b.js",
    "revision": "4d0b1d032fef729da61480d3a9f62ab3"
  },
  {
    "url": "assets/js/66.8293b04b.js",
    "revision": "17dff1b4165b2ae8cd10ce2e76677fb4"
  },
  {
    "url": "assets/js/67.6d277a43.js",
    "revision": "17ee53894af85855015fbc24941a5752"
  },
  {
    "url": "assets/js/68.7c299710.js",
    "revision": "33ab08c87c67bd5568dc1110f72f0b42"
  },
  {
    "url": "assets/js/69.eb923c81.js",
    "revision": "11f82f92ad53132aafea74c3bbe472c3"
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
    "url": "assets/js/72.45defc46.js",
    "revision": "d03a66d8a680760683030f63f6d8fb6c"
  },
  {
    "url": "assets/js/73.d4540ad6.js",
    "revision": "5274f904201bb1d4296fd3a7e19fdf55"
  },
  {
    "url": "assets/js/74.cb880c13.js",
    "revision": "c652e0fc314a6c082fa43526e71c8d16"
  },
  {
    "url": "assets/js/75.9af66acc.js",
    "revision": "9bff6f3173332b75b2382b5775b85f6b"
  },
  {
    "url": "assets/js/76.07bbc4f1.js",
    "revision": "af1533941190bbe03c5d815f773d3c95"
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
    "url": "assets/js/8.f412bf78.js",
    "revision": "d466985882c073d42dcb9440012aabf2"
  },
  {
    "url": "assets/js/80.ade80c49.js",
    "revision": "c42cfcb530e3f22a4e2c0b6688275c92"
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
    "url": "assets/js/84.b2950860.js",
    "revision": "57414f09c263349951420c7c1f099d1e"
  },
  {
    "url": "assets/js/85.8f2cc203.js",
    "revision": "32a4e261e621ab551a39668e7a4481fd"
  },
  {
    "url": "assets/js/86.b564156a.js",
    "revision": "f2020ed15619023c3b2456b746bc8cea"
  },
  {
    "url": "assets/js/87.a6608615.js",
    "revision": "3c8b342b797fda0fea9decca97f0aee2"
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
    "url": "assets/js/app.181cab99.js",
    "revision": "5c8fbb896cc145a1f1d543f2042d8cda"
  },
  {
    "url": "compiler/ast.html",
    "revision": "365739849e534ca19b435072a9293330"
  },
  {
    "url": "compiler/binder.html",
    "revision": "908d4ed6e0d652ad9090f52194ee2b87"
  },
  {
    "url": "compiler/checker.html",
    "revision": "d3698b8952b5364047b9c78b06e35317"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "2d590627f0096b79df14b4a5c157f455"
  },
  {
    "url": "compiler/overview.html",
    "revision": "e40caddafbabcff69046d10af91e2fd7"
  },
  {
    "url": "compiler/parser.html",
    "revision": "8aa6ed3c07ef28aae723acb7a3562eaf"
  },
  {
    "url": "compiler/program.html",
    "revision": "7270145468ccc0a3c145efd5423796b7"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "d069578d867cbbf44129038cdab4c747"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "83d274b54159b05a491d7519b2159f85"
  },
  {
    "url": "error/interpreting.html",
    "revision": "425b7e516eb4e40431a6ba2b46eca2aa"
  },
  {
    "url": "faqs/class.html",
    "revision": "bbfb032bdbb5e9f0a8aee62c85d451de"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "fcc40a2e91515beb2f27e9780d673915"
  },
  {
    "url": "faqs/comments.html",
    "revision": "00c817d955f357a6874601ec7baddb08"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "ec0908cc8afc01e0b6ecffe59fa8a2b9"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "00e4cc2ca3d87fc4cd17856ad56b3b22"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "4dd326346ca4eca9bb5759379416aec9"
  },
  {
    "url": "faqs/enums.html",
    "revision": "7f13cfb96a0dc8403fb8847163ce8cbb"
  },
  {
    "url": "faqs/function.html",
    "revision": "a3721b0f08dc18f8ba3e36079c9ad172"
  },
  {
    "url": "faqs/generics.html",
    "revision": "453430e970a12de4cf6c3b81e692174b"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "9c379af7614fa7b7c05be81ff6105c11"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "b5e8d8ce505c0136d78d14fd72dc2358"
  },
  {
    "url": "faqs/modules.html",
    "revision": "d2ebcb2389cabb76b3681458c332368c"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "b4da592f97956373138cb6f483613843"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "1fdad79995b37f7810d9e1c4f52c1bf7"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "50d2d4402c7b79c9f0f8db116af6cca2"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "13a529fd5b036730a0207d66aeb9a174"
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
    "revision": "e6a320efa0e3d40191eb2cb724d07e5f"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "dbf2e1c11850dfe4beb6c5f9e8c84eea"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "184f9ea29ca02746f650e7ba539c0331"
  },
  {
    "url": "jsx/support.html",
    "revision": "315dc4fe8a1bd6b0bfbf916d43de16ec"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "new/typescript-3.7.html",
    "revision": "ef509ceda82f1680408da532ce273567"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "d7318ef41b427c9e35580c02d6f544b6"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "7a774f60fcf7cb8142a20507ce74e9af"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "03bfa9d41f52d8d2f59a53fe0f02f266"
  },
  {
    "url": "project/modules.html",
    "revision": "f6f715e1823e786f76b31ff515a6a14a"
  },
  {
    "url": "project/namespaces.html",
    "revision": "8a77e160b5eda2d2317afc3ed3bb5d6a"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "baec42da7a0970a147842240c8b3eab1"
  },
  {
    "url": "tips/barrel.html",
    "revision": "d078d0615387b00abecdf0718b47150a"
  },
  {
    "url": "tips/bind.html",
    "revision": "59c375730c70ea32de25f6454445b89b"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "bf133754d185f76b1c403a0ca2d13315"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "fedcf3619941a182085076512aaf206c"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "1d15faa4ae1215236f40e367fa96de3e"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "8feacb2db43a146d8a54da57c3de48e0"
  },
  {
    "url": "tips/curry.html",
    "revision": "d58f2420bef3e8a49d7dadd7a0c5031c"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "82ceee134cb39fd1b254581d5a150202"
  },
  {
    "url": "tips/infer.html",
    "revision": "8dfa3e70ca570dfbf49d86481c6a0727"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "e417fdcc489c3495b5d615cecab79644"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "2ec675db0474a61ba0e5562435a5c358"
  },
  {
    "url": "tips/metadata.html",
    "revision": "566339451e423953bbff7b8aade9f5e8"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "77e3602c4cdefad5298d9a356980fc93"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "740f64ecdec9398256721c16dcca7add"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "534b23540fe48f2528bfdf8fd8af901c"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "0bffb88cbffe3a27fe3af306a4c98b62"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "00dc9a4d4b3f5bd35765b0714577e004"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "0548f63e53609253025b7f972be557f1"
  },
  {
    "url": "tips/truthy.html",
    "revision": "caa0523d66d03f97d3821a1494f81ed8"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "d5790ca077cffcde2e7c899ab769ecd4"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "ae9191d19425fd34428e464da2030b9e"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "97df0ec3498ab99724ddb6a324e95c14"
  },
  {
    "url": "typings/callable.html",
    "revision": "a0fd701e82b6078b544f9068523394a3"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "9b8f91494e38fda8dd6d7cb36322a786"
  },
  {
    "url": "typings/enums.html",
    "revision": "689f59e752c73f3194e8d5905089b2e8"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "0b5ce8d9d8aeec385e287974ae5ecc69"
  },
  {
    "url": "typings/freshness.html",
    "revision": "629f8381ad3c4c5c7e8fa099638b11c0"
  },
  {
    "url": "typings/functions.html",
    "revision": "18fb8495087527a59cdbe7874029144f"
  },
  {
    "url": "typings/generices.html",
    "revision": "7d7a870551190701adcb7d4cf3226973"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "576020b3ac859a3a3cb42e72ee48d464"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "467772a3829526fe4994ebcd890fbdc0"
  },
  {
    "url": "typings/lib.html",
    "revision": "836e97c443afa3d468fe06796b45d85d"
  },
  {
    "url": "typings/literals.html",
    "revision": "12f71cf705ce00dd206068ffa485729d"
  },
  {
    "url": "typings/migrating.html",
    "revision": "86147ea4caab9072ca44c5438edd9802"
  },
  {
    "url": "typings/mixins.html",
    "revision": "352035ff41869f3794b97ac939000fd5"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "98ac5c71a571f5602dfcf1b7c9b4d689"
  },
  {
    "url": "typings/neverType.html",
    "revision": "7c2b0db7fee11cbdb793bc87bcf60cdc"
  },
  {
    "url": "typings/overview.html",
    "revision": "af86ae4cf285b2a875c168cac7ef9a65"
  },
  {
    "url": "typings/readonly.html",
    "revision": "0e09ae631d7631ab8159514aa7dd2bb1"
  },
  {
    "url": "typings/thisType.html",
    "revision": "112eb5ec4e8af0cb4c4064a52d4b83d0"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "44cadee91c611b47ff8fec82a5671369"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "f2176f5dd60c053109fb35512f758c94"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "9afd4b7d2d055d775bebe372c8836e31"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "bc7788f1058f46249553fcece499c5b2"
  },
  {
    "url": "typings/types.html",
    "revision": "7829610ded4e66be4b923ed1d7063ed9"
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
