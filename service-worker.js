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
    "revision": "ba95d2b45fd087ebdf1a3a347ea94384"
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
    "url": "assets/js/40.b0f54248.js",
    "revision": "a5bf8ae3afdfc45779d833be35de74dc"
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
    "url": "assets/js/72.6e44ed20.js",
    "revision": "6e6c45370c7d734508d755b1baa95444"
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
    "url": "assets/js/76.34d7215d.js",
    "revision": "10edec7ba31702359017deb7b13f3c6a"
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
    "url": "assets/js/84.5af99182.js",
    "revision": "e4e82d4109a9c384e44b7f473261d8dd"
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
    "url": "assets/js/app.8434a86b.js",
    "revision": "269d245290c2feeddcd9d5a2359872a1"
  },
  {
    "url": "compiler/ast.html",
    "revision": "7e21504ae3f6a78554872c37023b22d7"
  },
  {
    "url": "compiler/binder.html",
    "revision": "508e9e97b7f0e103caee3156ab9741a8"
  },
  {
    "url": "compiler/checker.html",
    "revision": "2be80ef03c8bce9c707c6d82677b39b9"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "2886ac7f2129e4803dd230e10ca72e01"
  },
  {
    "url": "compiler/overview.html",
    "revision": "56f6f6f00917db06767029fa5e17a367"
  },
  {
    "url": "compiler/parser.html",
    "revision": "f659600190762b8e999a70fff688c365"
  },
  {
    "url": "compiler/program.html",
    "revision": "006a1263efb6de4e3601a90f5d40381c"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "6457d697a47036b5846709914086e205"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "faa953ac2138c18a2511b02027082c9d"
  },
  {
    "url": "error/interpreting.html",
    "revision": "59963b66918d3ab924bcd06a7a5cc508"
  },
  {
    "url": "faqs/class.html",
    "revision": "8574594f2768c1893363b68b0c8d583d"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "1d7294a684ff98b67032fede30cbe53d"
  },
  {
    "url": "faqs/comments.html",
    "revision": "1d60dc40b27efdb8c0cd4146a3d5476d"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "156532673d246de9a7fdcf5caa7f50b7"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "79b317e3570aff8a7fae2b74ab246c36"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "4d0f72a443fbdb00ab13c511d95fd7cb"
  },
  {
    "url": "faqs/enums.html",
    "revision": "cfc05ccfe0a745bf11e305a5faa8890b"
  },
  {
    "url": "faqs/function.html",
    "revision": "a761eef7751d986c0b99f31f683c356d"
  },
  {
    "url": "faqs/generics.html",
    "revision": "1b3fe17e14b63e49bc48714cc39a0d3a"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "767da493273f3803e738c89a6e33ce86"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "75ede5f1eceb3864a41acf46dfb33faf"
  },
  {
    "url": "faqs/modules.html",
    "revision": "0fb10d3e90c24d8e0980f2147e46525e"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "4ea7eb62fb04ea07f10b72bbfaf83e71"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "40fb090ac75d70a2b55c686adfc97096"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "1f05167ebf79c7401544b668fdb721b8"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "3ad722dbc3d8ac2631b44861ac86b522"
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
    "revision": "cd8761e6657b8ba33b04d4a974971da8"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "d67c690b53747099b6891ca6d8ef6de7"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "035ead6d47b666ddb2ee150893952ead"
  },
  {
    "url": "jsx/support.html",
    "revision": "4e0ca5e846b124bb84dfdd6188c61789"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "new/typescript-3.7.html",
    "revision": "1bfd518fc22dfd402d2673e76d30b0ee"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "227809e1e7bdfbd70efd8cf7d9ace25a"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "cad7c43c88ac53f0031dbcc40830e809"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "e831ef698a019e2852856a4fce6c57e1"
  },
  {
    "url": "project/modules.html",
    "revision": "7923e80042224cff47bdb5ad67c475ca"
  },
  {
    "url": "project/namespaces.html",
    "revision": "8c6136e58367cebe6982279840f22226"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "f83183b0b0036ca825b5e06f706b7b6b"
  },
  {
    "url": "tips/barrel.html",
    "revision": "93fa19527dfee312a586bc4fdd0212b8"
  },
  {
    "url": "tips/bind.html",
    "revision": "4c28a8e757bbd52ae10cd8d5b96e7492"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "17c8d706a03ed3f1400a93ce1bb9519b"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "31bef8a984474eb2d54b9ec9306cb002"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "b83867554f71dd26e809d321e5f32dc1"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "c5fe17a535a18c283bd7952b2a19c764"
  },
  {
    "url": "tips/curry.html",
    "revision": "05f16395091986152434fab69f99d6a1"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "21278952348ff50fdbff408cab46f2d9"
  },
  {
    "url": "tips/infer.html",
    "revision": "21655801747211d08faa1dabe5e448f6"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "c1abb1c0f7dae188c506305ae6f34563"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "eb83814417a721cc358e25b39ff3c893"
  },
  {
    "url": "tips/metadata.html",
    "revision": "42388dd5cde355392c93ea0898e0febb"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "c7a540255b366558e0e9628ea4972ea2"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "5be39dbeda36ca6221247878e054e17a"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "df5524a8009e08521bcff6cf6d625c0c"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "81cdc00b3e71527987deeada34bbaaef"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "536022f4c4e8d066261b6fe8ec0cd3da"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "b8c6184abe60e11f3f262964e08f12bc"
  },
  {
    "url": "tips/truthy.html",
    "revision": "e8b3a5f1ccf11df9efb6e286586f5df9"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "3d38872608e8e1bb07caf12560196e33"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "db570ef1b5182a0b9228b423f96c754d"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "b293bf776c49db22fc9bb2df28a1d586"
  },
  {
    "url": "typings/callable.html",
    "revision": "5f205094243689b6c9108d55229da02f"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "3645d55b9cb85b079b9eebeab73bc220"
  },
  {
    "url": "typings/enums.html",
    "revision": "b04cf2c743e867066d2987735762bca4"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "ad70b830c4f09cfce55cafc99671a698"
  },
  {
    "url": "typings/freshness.html",
    "revision": "b866725a36ae74384861db7d794164c2"
  },
  {
    "url": "typings/functions.html",
    "revision": "33731dd063d1db364c1cb723858681c4"
  },
  {
    "url": "typings/generices.html",
    "revision": "519b1f37dc97111bb25a0ecd2680a457"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "e4360a043ba2ce94193b279f5826831d"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "73d1e977699912bdd13525b87c06ced3"
  },
  {
    "url": "typings/lib.html",
    "revision": "791d468cf9861a5d360e6ad244c77790"
  },
  {
    "url": "typings/literals.html",
    "revision": "8c821f8676c685b260d2f3a149cc0707"
  },
  {
    "url": "typings/migrating.html",
    "revision": "9730b097b2630736b551247b659f461f"
  },
  {
    "url": "typings/mixins.html",
    "revision": "c79b1179811112d3cafa90bb0b01639b"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "f2f89b99722405defd34294d5a28abe7"
  },
  {
    "url": "typings/neverType.html",
    "revision": "9f4858983a50671678db5d66d5810454"
  },
  {
    "url": "typings/overview.html",
    "revision": "a0c0710e0e371b49af645dd7ae8bc3ba"
  },
  {
    "url": "typings/readonly.html",
    "revision": "eec684b467a3a5f8146a3d49e2826e33"
  },
  {
    "url": "typings/thisType.html",
    "revision": "2485165a8133ae75bca0a7694b49713c"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "0651e5a4acb13e9108467c2f879a64a5"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "3cce43d4fbee5761812cb23a269ef12e"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "4656ff4c26343f448cceb8a32417dc47"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "318dcb1425455d890ede6d230a215e41"
  },
  {
    "url": "typings/types.html",
    "revision": "51b864934ff0d4908f57ef115b86ae86"
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
