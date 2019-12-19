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
    "revision": "5b88a5ae5bcce470c955bf05ba8d8c6c"
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
    "url": "assets/js/app.649a761c.js",
    "revision": "381af782877225c866844ffdaeb4bd55"
  },
  {
    "url": "compiler/ast.html",
    "revision": "57a2335e4fa1a8dd508a99a2c95921ff"
  },
  {
    "url": "compiler/binder.html",
    "revision": "69b74a4e414ebc16c93f1c0a3e894620"
  },
  {
    "url": "compiler/checker.html",
    "revision": "7dee1f5d154fa47e6547882ad9291bfb"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "8520544aa2fa6059413d754d455565d4"
  },
  {
    "url": "compiler/overview.html",
    "revision": "d82482e31f81ffedeefd64ce0cc631be"
  },
  {
    "url": "compiler/parser.html",
    "revision": "64b25a1ac2153c0d10fd94d06a578f8f"
  },
  {
    "url": "compiler/program.html",
    "revision": "30c92baa9eb171af8d9c224661b130e0"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "6e87a466f11e4f1e0f09c1ac1ce3563f"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "0108ed91a66843b62bd8bcf1dd1149a1"
  },
  {
    "url": "error/interpreting.html",
    "revision": "2548c8d1453cf727ee8ff8cfd425ca52"
  },
  {
    "url": "faqs/class.html",
    "revision": "1ed0e45de0397e644b7baf83344995a9"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "160c7f4e378baf7b309bbba66beb02be"
  },
  {
    "url": "faqs/comments.html",
    "revision": "203e1038688b75bd336fd0c79c09fb17"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "5910a81b6d15ed40d1fd18b7f905791f"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "c31914c52de69eaeb0a2bd7f884db5cb"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "28b5a9887275d88ac42e3b0f7b0e8dfd"
  },
  {
    "url": "faqs/enums.html",
    "revision": "aef7b8da87f840aa699a347f95d22300"
  },
  {
    "url": "faqs/function.html",
    "revision": "4c63205b89042747a4b070e42f6222a6"
  },
  {
    "url": "faqs/generics.html",
    "revision": "1cd21434fda97add2a831020f1c76ce5"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "a56efc77a75e215154ee0b4478dc2927"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "b3b3d70bda1e9e67ded2d8f1fdec6a2e"
  },
  {
    "url": "faqs/modules.html",
    "revision": "c0e4e1f11ab3f2a126a01d82d318abe6"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "85ec2a8885dca832e734bd88ac160a4e"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "d9857ce1e74f505ae41f9777bbbd37d9"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "7513b361e796a0953f816c7ff68ede6b"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "741b326c5c192fd8d1e93cab37f4740e"
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
    "revision": "e23af4f62c38329a618cd1b5d13ff9ad"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "feac63af298202f3805a89f89c1baf2e"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "983f254e015677afaaa68527787f2776"
  },
  {
    "url": "jsx/support.html",
    "revision": "6e56843f9766015aeaf513211d167ba5"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "new/typescript-3.7.html",
    "revision": "8aa30d4f0e5ea6d43a1cae7d777cf7ba"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "4236f4b1ad5d329a4e51382dbb112604"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "3a31ea7ef81c4b3d8e827adf0ec27771"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "49ac4b1fcdcb4eec7d32c26d7c7b2417"
  },
  {
    "url": "project/modules.html",
    "revision": "407c147303b3b8cf57017abfaecdfa41"
  },
  {
    "url": "project/namespaces.html",
    "revision": "b504cf2513077d08dfed331b1ee0ce53"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "f48918bfd2ddceaec5d9b47cc589be06"
  },
  {
    "url": "tips/barrel.html",
    "revision": "f949fdc002086a897c9377021c4dc94b"
  },
  {
    "url": "tips/bind.html",
    "revision": "089ae174c125631809521afdee080c90"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "1a7aac911f3b989ba66732bac039f3a2"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "ecdde048e630cc7b0fe22d39cb00bca4"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "0a95ab33608a4ea954af2860aa4c4c08"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "d2e518352a945128c04f314de4e3f1bd"
  },
  {
    "url": "tips/curry.html",
    "revision": "94aea3de7936094025de7c93f61d039a"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "7f0ba3bfe5a2682c2ad5bbc3060a6b6e"
  },
  {
    "url": "tips/infer.html",
    "revision": "088a55672166bbe30e7be1112ac3729c"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "e5f7b16dbb108e36f4e13a64a064dd78"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "3044ea448fb355551cffde743f7fb01f"
  },
  {
    "url": "tips/metadata.html",
    "revision": "0801ad5582035570bcec170e0dcee844"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "fb82c152436ac65227608b9aa6092a90"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "3c2224a05b9b6b0f31ac5c2e183dc0aa"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "7a7924fb045edec79f46547e001632f7"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "5ecc7b07f9841ce5d1a5cfc1957dca7d"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "1557b082e4a7e185afaaa44a0432e96e"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "d7814a835bb5abd82aa337ef2455f313"
  },
  {
    "url": "tips/truthy.html",
    "revision": "ad36b0f240b1dd5d988c377f0a40d658"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "3ae1c9ee09e5b9a8a7da6bbc6629b2e9"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "ccc77ad7f3e605898d66f730f4b44cc8"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "49cca76a2f64aa90b1f0a5320af10a33"
  },
  {
    "url": "typings/callable.html",
    "revision": "caa428ffe9a9b8baae7fa9d00f8319c3"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "e44e9c0cac2510a5652e21bd322ad639"
  },
  {
    "url": "typings/enums.html",
    "revision": "ce56a5b92a9d16c1b177d32c1ec0983e"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "e2856cdee658d311fcd35d6e02fcfd4a"
  },
  {
    "url": "typings/freshness.html",
    "revision": "9d7fcd4fce439d7258d247b24307e8b9"
  },
  {
    "url": "typings/functions.html",
    "revision": "8a59c3ba0d85968c659f5358bcb4de2a"
  },
  {
    "url": "typings/generices.html",
    "revision": "29bc7edbf9380e88036b14f587263859"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "56e145db44c255a8eb116be1676f4920"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "49c8fee4d349064cadb54ee505c611ff"
  },
  {
    "url": "typings/lib.html",
    "revision": "f53865e0199fc65ba11eae112c2973a1"
  },
  {
    "url": "typings/literals.html",
    "revision": "a0b887b3a3cfda208b40f7b3b7256493"
  },
  {
    "url": "typings/migrating.html",
    "revision": "797e3859d6dd3b08665c4568f45612ec"
  },
  {
    "url": "typings/mixins.html",
    "revision": "920ad10b7b33c9ec7044a54c3436641d"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "c993a21bbacf4357673dc98bc90494bb"
  },
  {
    "url": "typings/neverType.html",
    "revision": "f70276d1c6364fd03c1767c0846148b7"
  },
  {
    "url": "typings/overview.html",
    "revision": "d0bd95178acff3c524ef61c6184817f2"
  },
  {
    "url": "typings/readonly.html",
    "revision": "9e4198a5cb44f5dae1a89b9504cda9e3"
  },
  {
    "url": "typings/thisType.html",
    "revision": "89cdf60f4cc228cf30b80e69a3723b3d"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "5780b7b5f672d2e16a1a9247295161db"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "e7cab6e0c3e4692532dd605691feca13"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "3dbce1dd313f4afd3ff997d28f79ffd9"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "28e6a7cdff6fafe03b5c19f33c59a611"
  },
  {
    "url": "typings/types.html",
    "revision": "9b36c59dfc62e266cadf71614f67483c"
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
