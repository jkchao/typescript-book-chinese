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
    "revision": "b5915c128167487bb2a8adaa9644cf7c"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
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
    "url": "assets/js/3.ef3b1567.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
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
    "url": "assets/js/36.5d49781b.js",
    "revision": "3e195775c1b02fbdf7bf03cdb4e8f386"
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
    "url": "assets/js/6.40f38506.js",
    "revision": "a9567230480ce0ff3042dde93cdd625c"
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
    "url": "assets/js/app.27dccbea.js",
    "revision": "4f86290cc911a2d34f6228f34c675f4e"
  },
  {
    "url": "compiler/ast.html",
    "revision": "3a0b388608ae67e01ba080bde474c706"
  },
  {
    "url": "compiler/binder.html",
    "revision": "72eaad42282ef7182b7e3e23365f2304"
  },
  {
    "url": "compiler/checker.html",
    "revision": "c8bc8d349a8b5fff994be57e554d1532"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "1dfcbb282c1f6774eaa3d8f5ccf06122"
  },
  {
    "url": "compiler/overview.html",
    "revision": "9fc15e2dc15487c9e14f8e33348ce5c7"
  },
  {
    "url": "compiler/parser.html",
    "revision": "a25a74e3446ccb1df111896cdc0a29f6"
  },
  {
    "url": "compiler/program.html",
    "revision": "1e02c371d9608d4135f114bc30f00e84"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "9e4bdf5f35f190a880567dbe92355e2a"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "0e901968b60b9c78bc052fdce0c31b0f"
  },
  {
    "url": "error/interpreting.html",
    "revision": "4d6c2281d61701306d87bfc709873844"
  },
  {
    "url": "faqs/class.html",
    "revision": "bcb7488e60cc69510f137f3d849a4824"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "0a51525b99279e350e3275e7b641b1f5"
  },
  {
    "url": "faqs/comments.html",
    "revision": "882e77902e6999c838a53e8ab87e3509"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "70c0f9bfe0eef9e5e3fb594941daa91d"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "1035f2fb1f915c4d342e6ad414744749"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "2473ecc11de81cb4611ddd17b2ff4718"
  },
  {
    "url": "faqs/enums.html",
    "revision": "e98574b3d13036d562cc3158923d04fb"
  },
  {
    "url": "faqs/function.html",
    "revision": "e99cfcfe3c5bd41d4804da6363fc9338"
  },
  {
    "url": "faqs/generics.html",
    "revision": "a69b707a60cfa5b2b5a1a17799b82a68"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "c1ce176d304d1d5abc748c6268c4bdf4"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "b446f192fadfa7e15efe6ab3c333e3eb"
  },
  {
    "url": "faqs/modules.html",
    "revision": "c774520f3ae69a41b19a53c60e0d5508"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "bb05b51724e4eaf4ebaf34032953409f"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "6b41a731e82b283e7be36d4fc10414f8"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "ae360068046d99dc089119f3a4cd026a"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "173216007f055dbd6d1f7605fba42ac8"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "a9ae2989c0c00f440fbac4edf2c3357e"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "efc7a925572b2b210e6418399ff62b24"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "0aa223b808a6abf1987a1f8c2b814de0"
  },
  {
    "url": "jsx/support.html",
    "revision": "447f762969beb51a21b779295cb1985b"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "new/typescript-3.7.html",
    "revision": "2c8feeadceb7f347f813ab5b7759a872"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "c59986947103f3c39de3e4b328095944"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "d060c6793c5d74b11137f23507ccef19"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "aae60b48b905d662d5384a7e692a9695"
  },
  {
    "url": "project/modules.html",
    "revision": "59acffa68a08f05636a55bbf845d5ca8"
  },
  {
    "url": "project/namespaces.html",
    "revision": "70bfe870fa8c899c34af57b9e307bc1a"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "66f4c189cca8dcbbaf8e448c69291d51"
  },
  {
    "url": "tips/barrel.html",
    "revision": "991b62e4fa8b6c76687693228f751ec9"
  },
  {
    "url": "tips/bind.html",
    "revision": "5336e47a38ff71ca67023df379f22a30"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "6a4dde21fc3c2b5814650922c8831b42"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "99c829b4e626076d172ed529e766f6fa"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "20b40ee9365023f29acd016ab25038f4"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "eb203cfeb35265c7886d3652e418f1b2"
  },
  {
    "url": "tips/curry.html",
    "revision": "0511aaa840090b69d0a185c3c097dee1"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "048ef5b35015147ec853a84bac9b34ff"
  },
  {
    "url": "tips/infer.html",
    "revision": "29d38d14d01fbee89df402227ab4a42c"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "f04050edd6fe3b41f54ed71f84515d2d"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "78f0fc931f71dfdf73880c71e1a2e102"
  },
  {
    "url": "tips/metadata.html",
    "revision": "6adab023bb15636fefa3f893106acb86"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "3720eb6077a67b1e40f35db4375c0676"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "08e3f2222393b7cf8511993ef4cef9d0"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "8c59c9fbe744c32043b85590536e0b1b"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "bae384531424c8db3146b668ab8685c1"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "0371e8b3f087dd6a0153e2e9509478c3"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "b338da3c721cf5566868ed1b901854ca"
  },
  {
    "url": "tips/truthy.html",
    "revision": "689d14a8a84806d33d05b3e8c25957f5"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "265b65fce2d1abd5aa13277b39639be6"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "c42adc8c5fa0c7f4fb486430f15a0120"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "bba41d3480185b03cb33b34ec9c24c11"
  },
  {
    "url": "typings/callable.html",
    "revision": "51de4d7ff03df599bab9d5403705c255"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "f01618c921d714b268d3b1b67b9b3381"
  },
  {
    "url": "typings/enums.html",
    "revision": "cb23a88441345a79d9786fcb3477029a"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "f8524c3ffe6721876e8b455dcd727bd2"
  },
  {
    "url": "typings/freshness.html",
    "revision": "0b168360b5b3761d938abd7d6fe0b3f8"
  },
  {
    "url": "typings/functions.html",
    "revision": "9acd99450493c873b75c8c1e6413427b"
  },
  {
    "url": "typings/generices.html",
    "revision": "1e148c9b70ffd6e226a86c741df8fec7"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "3f03d522ee55e35088cf06dbe4caac3e"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "06403cca6f72a35008d7a846fde52d0d"
  },
  {
    "url": "typings/lib.html",
    "revision": "0eacdfe2f5fc8a073d5356e017507888"
  },
  {
    "url": "typings/literals.html",
    "revision": "e890ab61eddf2fd46e8622d3e869961f"
  },
  {
    "url": "typings/migrating.html",
    "revision": "5a630d4f8dad6925abb3736758fee9d2"
  },
  {
    "url": "typings/mixins.html",
    "revision": "ce65c8068355b2b0cf0f75cad18effa8"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "37f45c8d4773455b52278c6e5eae6b11"
  },
  {
    "url": "typings/neverType.html",
    "revision": "090682ac27ac07ffb23bd037cdd53de0"
  },
  {
    "url": "typings/overview.html",
    "revision": "d066e52e6a888223cc4e211ea7deaf06"
  },
  {
    "url": "typings/readonly.html",
    "revision": "386b01597542def6b3ba266b73814337"
  },
  {
    "url": "typings/thisType.html",
    "revision": "c0845f814b77e041eb9a64c8b3e105ff"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "7c51034c3c8d9b0e0fd4e1df0cfb564a"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "8dcb51a9587d7e4c23cb58998d5908d9"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "1309031f932cfd7c3967a7083129f8f1"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "cb88bffa3e7d13e6b78f3fa7cf4b6d18"
  },
  {
    "url": "typings/types.html",
    "revision": "c0ef84f86baffa10d519672a54e736bd"
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
