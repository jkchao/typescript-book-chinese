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
    "revision": "24302194bb0fd92c0b3784707aaf6c8c"
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
    "url": "assets/js/6.d526daf2.js",
    "revision": "505763767147b03e6a63a92132f14348"
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
    "url": "assets/js/app.5177be85.js",
    "revision": "8f3551bc91c8998d9049cb98dfa6148e"
  },
  {
    "url": "compiler/ast.html",
    "revision": "067b3fcd63c616fe3024379e4e37cf7a"
  },
  {
    "url": "compiler/binder.html",
    "revision": "cf3ed759c5ba565c7ce7803da88df566"
  },
  {
    "url": "compiler/checker.html",
    "revision": "54f72d59f9f2c3aa016e364b0bc912b1"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "963a777947387331109db4e4e93727d5"
  },
  {
    "url": "compiler/overview.html",
    "revision": "2d8bd97ecdc4e847c42f9ace4b2b1355"
  },
  {
    "url": "compiler/parser.html",
    "revision": "be9dc134e42ec264f5cb2d644980a709"
  },
  {
    "url": "compiler/program.html",
    "revision": "849f462041c10d4ffebea2e3f41f863c"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "914601402bcfa8aeff95040d419410dc"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "fd2bd7afbeb5b5887afefd8dbb6c48cd"
  },
  {
    "url": "error/interpreting.html",
    "revision": "a14884d9927ad4427f22a29f6851c3ce"
  },
  {
    "url": "faqs/class.html",
    "revision": "c160f0af9fa3eb428cbe4dc7bcba2721"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "96fc23cc4d5f31bca2f07f5c481892b3"
  },
  {
    "url": "faqs/comments.html",
    "revision": "7db60bb79a4740142e7b5b59602c394d"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "8387640c413c3162136850a7b753ef1a"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "bfa5475e7bb916cd6d8133696da1fa64"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "750043c372e129e8da59bb67a0e07b7d"
  },
  {
    "url": "faqs/enums.html",
    "revision": "99abd79062d65d61dc11d123215b7547"
  },
  {
    "url": "faqs/function.html",
    "revision": "1a20f186edafd95c892424d53ef8ce61"
  },
  {
    "url": "faqs/generics.html",
    "revision": "c5f625d564d2ae1490f2be182f3cc53e"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "4dc7dd6c791f7e0fe1d231169b452d39"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "d5425c560438bc18582c24be0462e868"
  },
  {
    "url": "faqs/modules.html",
    "revision": "4ed616a0a2fdc08c042e77e31b87ab5a"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "d81079cc97d2a2e5e8bdc156f1958d25"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "5f5eac0dd1a20e8d39216a43cdf0b7e0"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "11961498b0d7d5f33f3b674adb714596"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "643ad094e3ff00dfe5b51e64673cb70c"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "9e8cefbeb3916e3caeef9b20cc6677a4"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "ef535bf3b584d49ff64510432bf3a1fb"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "814d815301d019cae7fb3aa76134cd51"
  },
  {
    "url": "jsx/support.html",
    "revision": "fff6f41232641e737f388b3ed6f10c07"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "new/typescript-3.7.html",
    "revision": "0d853c0ff3906b7eb68889a3e47966db"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "86ca5b2dedd7e90ac2ff2b33180c1bd0"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "4abf24d6584f17a054f221bb50dcb80c"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "732037ff57586172976bb4b0b72c570c"
  },
  {
    "url": "project/modules.html",
    "revision": "17757e84b0b24d46cdd641f9133bdb4f"
  },
  {
    "url": "project/namespaces.html",
    "revision": "ccd2ff4dc62aaf77b8087e0e44a7876f"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "977ed13ab68757dbe93a746baec1dc97"
  },
  {
    "url": "tips/barrel.html",
    "revision": "84556014fbb1bdd3e054869f239c01e5"
  },
  {
    "url": "tips/bind.html",
    "revision": "0b54aea4f30f0b2aaa72d9b41cd48250"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "31ebea6a5b242502d5b113d6bfd673d4"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "f26396fa8d51f64b063bef97919090c4"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "4b83c42358a26f71b71506b704aa3cd4"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "0c2c869a2ad2ea20d5df791ec3a6fcb0"
  },
  {
    "url": "tips/curry.html",
    "revision": "1d198681f64bfc4841b4ff76c68cca23"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "a1f8a9707026b0186361467398c3e025"
  },
  {
    "url": "tips/infer.html",
    "revision": "8c9ef4fa1cecbff7dfdd0cb7497d6115"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "72a6e6f66dbdb6b2f86a8584792bbaf8"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "4fc1af6ff731e4f4b1cdafa18b09fb85"
  },
  {
    "url": "tips/metadata.html",
    "revision": "fac462d9b748bd4adce3ac8c630a196e"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "960e81db6a03a04db46874e8356eaf18"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "9608f08a6d883aa37d1daa16c8f363e0"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "28ab3c9b71b34d18d03bc3058e9c3cb5"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "61c7a0389c2acd307483cb5ca230cb29"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "72f8fdc85b56444d33ff15eda54eddca"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "0b70d1b5b95abfb3c313891241020e29"
  },
  {
    "url": "tips/truthy.html",
    "revision": "7b9142262753c31104a8a5a857041900"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "a7891d51af9a696066c9beb0ccf908dd"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "3cb57994adf6fdd02c3e85bd041c07f3"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "a0b17400c9c03e09bc9e34feaee5a6bf"
  },
  {
    "url": "typings/callable.html",
    "revision": "fe631bd3384a7b290ff805b035561904"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "429bc2e5b3951b068353f95c781e4f26"
  },
  {
    "url": "typings/enums.html",
    "revision": "896d3e7f6f7100c819f35293e1be7d66"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "2ab70d09f2ce19fbc648244e296cded9"
  },
  {
    "url": "typings/freshness.html",
    "revision": "3e5064ad78472f65683dadbafb26c891"
  },
  {
    "url": "typings/functions.html",
    "revision": "3cd999e91d414b6d03db0d94d7cd1ccb"
  },
  {
    "url": "typings/generices.html",
    "revision": "02ee4a603abd62bf877b50b5609d6b22"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "fb23f1516fc3355c0f4752080e10a4af"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "1b1683fa62f1e6bccb3e251b66616870"
  },
  {
    "url": "typings/lib.html",
    "revision": "c058e5f93d8968376218c8f1a8023327"
  },
  {
    "url": "typings/literals.html",
    "revision": "0cb6f312d725ea5e3bb531dce675c8e7"
  },
  {
    "url": "typings/migrating.html",
    "revision": "1d7785188ffbd2609b98c162c4f83196"
  },
  {
    "url": "typings/mixins.html",
    "revision": "f142eeda07cbc5ce31479ff61ed797d3"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "cfda3ded3443d190beaea748349b5ac1"
  },
  {
    "url": "typings/neverType.html",
    "revision": "828c6aa182ddb0d12a0a265bc3fa8b65"
  },
  {
    "url": "typings/overview.html",
    "revision": "eb88756f2ef37ab5e911c64beb7993cf"
  },
  {
    "url": "typings/readonly.html",
    "revision": "3818aaa71c90d71b6fbb523c7fa743ab"
  },
  {
    "url": "typings/thisType.html",
    "revision": "44ebec6ad3f448179a1e7cc891dd72c8"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "7aaf3d93c8b09e98b40333bb9eca7b66"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "f31bc392bbfd0ccca76949e1c94ffc4e"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "53f318bae8e4ee772656ed176648ae9b"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "ba4752d48530dfb4ef1f8a402cc92861"
  },
  {
    "url": "typings/types.html",
    "revision": "3829a14b7a3d86ea5dc0ffce9c50fb99"
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
