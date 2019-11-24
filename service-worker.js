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
    "revision": "076516fd887b1f1df79ed194a7c87917"
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
    "url": "assets/js/6.4d803c7d.js",
    "revision": "fe671ec4b4f7117b7e7755d817f3be48"
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
    "url": "assets/js/app.614711e2.js",
    "revision": "3984874677bed3dda1b2a617652c7108"
  },
  {
    "url": "compiler/ast.html",
    "revision": "4c51837c45a04013ea1eef7256accad6"
  },
  {
    "url": "compiler/binder.html",
    "revision": "c934876678b97269333dd43ece31f63c"
  },
  {
    "url": "compiler/checker.html",
    "revision": "a5818db0d8e98fa84484ff7e2d8ef797"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "47abddf79c398f725f9cf6621c5ab8a9"
  },
  {
    "url": "compiler/overview.html",
    "revision": "25c773988cba8c9c701569d345e45003"
  },
  {
    "url": "compiler/parser.html",
    "revision": "6c444c733f26f985c442350ba13dad9e"
  },
  {
    "url": "compiler/program.html",
    "revision": "71f8a4d468e12636568b24a8b29a7685"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "787fd69da7217b4e5267387b8587df53"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "684eed530e8759be5484482760663ef5"
  },
  {
    "url": "error/interpreting.html",
    "revision": "2cd1fd26dfd2304eb8b8de4bb3cb00f1"
  },
  {
    "url": "faqs/class.html",
    "revision": "cdb6cd7a930970f214c3ec1f919a7fee"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "a729af7321cdabe582568d141f865bd8"
  },
  {
    "url": "faqs/comments.html",
    "revision": "491d28204588c00290560ed027c82ba3"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "36a0232bdf1fe1fde734a9fc2e238ebd"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "8dae5046dc9703cda02805c51c09d13c"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "429cc11708c0b4010ff37fae5a4e03ff"
  },
  {
    "url": "faqs/enums.html",
    "revision": "4cd5837c7823fd9301b3849ad73953fb"
  },
  {
    "url": "faqs/function.html",
    "revision": "37753825dbcaa2f3858b60c24708b801"
  },
  {
    "url": "faqs/generics.html",
    "revision": "f37dbd6e5d72fb5ee20e667a2258255c"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "2d448481697683073414a97e5eb86c0a"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "a0a63bc08bc92f731c56fbdc91c58090"
  },
  {
    "url": "faqs/modules.html",
    "revision": "8dcd94826e69fb641ccb6859542d581f"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "5dad4d009f28ae34b464a75286998599"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "b5da9afdacdcfdf6bee5c83c700de64d"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "1964e4b03917066f76cf5cddb2afd4d5"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "c4a98e4b169c8c55f3d4469f2f78968b"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "6c0214eee63fcd7ecf2702b21fdfbbb8"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "2701d0f820ab4eed1cb35bc71dba6554"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "fbc81b909aa31470c685b84fad62af20"
  },
  {
    "url": "jsx/support.html",
    "revision": "abadaee7a7b82c5a41b4c1253ed5f673"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "new/typescript-3.7.html",
    "revision": "ab1186136ea9f86bd9276db64a33095b"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "f74c536f8aedd4f19f8a1f679a0c3bad"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "2e68fbe4de90abcce6f917408bc12c0f"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "fee8ca543c653331cc9ad818a8eb7e6f"
  },
  {
    "url": "project/modules.html",
    "revision": "93078ce7e95977613dce5d19b2b9cb82"
  },
  {
    "url": "project/namespaces.html",
    "revision": "0ef9e3a644e77ea7e58efe7822411ce2"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "97b43753a55624ca8c61388e737af8a8"
  },
  {
    "url": "tips/barrel.html",
    "revision": "45c95b6a7b69b277895ed4e02257e8e3"
  },
  {
    "url": "tips/bind.html",
    "revision": "73d4a8f0d3e7d8fd6b3f313de24706c1"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "c7ca046468c34abd95d8593996980b6a"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "5a9e0301eb6249e9d14b4170dbdb91dd"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "72e69edeb7345e7950e7e16115206755"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "4d3b152b1e45db81a38ee7f1672cdc54"
  },
  {
    "url": "tips/curry.html",
    "revision": "3a2867d36593a32274d144add507f4ad"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "4ebd167766592132371328b1d9551222"
  },
  {
    "url": "tips/infer.html",
    "revision": "b4a51b8717d998d9a9d7290e0fc43aac"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "a65f453f56eac515a43c5997209c6a47"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "db9d9aa3431196071bffcbf6faf5ed3a"
  },
  {
    "url": "tips/metadata.html",
    "revision": "b788ca641081992764ee9437f7a151d4"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "a62719654b1d7c9177aea1aa66d0d678"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "ad6d902575fce12d6dcc532367562886"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "159e36ba8640662e33bb5f05009b9468"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "fd3e984a1762dc05011017c1c1335c31"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "a1255ac4627892c6c614e89bf118661f"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "39d29c4b74d7231c6ce5cebcb9ad9f3a"
  },
  {
    "url": "tips/truthy.html",
    "revision": "901983598303dbe7bf035fe4fd940dce"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "67a4eba0c5e0eda0d18971e5b31f5454"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "fc7884ef3d003c23c149ed3fb168bcce"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "22a38f10a7353d6ad9757c28c602dcbb"
  },
  {
    "url": "typings/callable.html",
    "revision": "d6b55ba19b0a379a2aca0ea53f7d2ded"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "05c0cd5748ef6433d9ca936775780bfe"
  },
  {
    "url": "typings/enums.html",
    "revision": "8b6903e172fb993bc79341c19b20197a"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "136bbf03f1ce4e23e797b052a695dedf"
  },
  {
    "url": "typings/freshness.html",
    "revision": "d003253f1d13eb5c60113d8aaab892ae"
  },
  {
    "url": "typings/functions.html",
    "revision": "f7d19bf68034828bb7d4b5778f30ef0b"
  },
  {
    "url": "typings/generices.html",
    "revision": "4f894809e6746621021a3360813c71b1"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "c3ef9f58ccc7797dec301978443ab4f5"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "a1422352236a70cc6d64b4e5ae8fec57"
  },
  {
    "url": "typings/lib.html",
    "revision": "ca326328dbc65c02e6231f96b9ee512d"
  },
  {
    "url": "typings/literals.html",
    "revision": "800f39b96f21fe4ebaa4d65861cd292e"
  },
  {
    "url": "typings/migrating.html",
    "revision": "5d350f07dfeae96bec3da76b8da2aad5"
  },
  {
    "url": "typings/mixins.html",
    "revision": "27ff2efdd069c64a3b9f8a7e13d0f6bb"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "aa459e577f34ac8d6a58cd4c62370f50"
  },
  {
    "url": "typings/neverType.html",
    "revision": "ba995c38d12a88d21d5923a2ee718000"
  },
  {
    "url": "typings/overview.html",
    "revision": "4e1a1fce1554dd5862cc89193a4ee0e8"
  },
  {
    "url": "typings/readonly.html",
    "revision": "578d07b8e4b97c21016627b0080e676f"
  },
  {
    "url": "typings/thisType.html",
    "revision": "be2c1522fce842f9058514895a0fbcbb"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "810ead23cfcab1a7347220050258e627"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "3049a56a7ff09a3680b47128975c9e8d"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "71c03fad65673024d99629c7ff2febf7"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "1a99ed6cb8ae485c7f8e9b7294530d81"
  },
  {
    "url": "typings/types.html",
    "revision": "a43c599dbaf9bf59c70a80046d44f446"
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
