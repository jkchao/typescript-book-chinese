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
    "revision": "5770e66e510444e2413a0a85aee15d64"
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
    "url": "assets/js/app.04865eb5.js",
    "revision": "a32ae25f5fdf282c8f5d3649d71c887a"
  },
  {
    "url": "compiler/ast.html",
    "revision": "39f2176182242e03c52415c5906d1a83"
  },
  {
    "url": "compiler/binder.html",
    "revision": "7144b8dd5297cf201435ae766c3e537f"
  },
  {
    "url": "compiler/checker.html",
    "revision": "41225cf5ae3c680554c089938d250756"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "47307645ba7dcb9bae0d6a53085a73ba"
  },
  {
    "url": "compiler/overview.html",
    "revision": "c4e32a4792c7dda69984bfab1c650709"
  },
  {
    "url": "compiler/parser.html",
    "revision": "43c6f639320445b430b2099aa18d1267"
  },
  {
    "url": "compiler/program.html",
    "revision": "38869e9a175bcfde6d89dfc5169d6130"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "1fc57f6daa10b8d0a3086f51a7fdf6f1"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "7cf4bb1cc847cc92265eb19609bedac4"
  },
  {
    "url": "error/interpreting.html",
    "revision": "befadde0e1ea2b88ee053fa5671cb4e5"
  },
  {
    "url": "faqs/class.html",
    "revision": "d0d376fb8470ad8159bbb8b953786173"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "1ffe03208489fdfe0381440a3d3117ba"
  },
  {
    "url": "faqs/comments.html",
    "revision": "9a024bdd1e956445aaadb2279ebf2748"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "43892496ca185db309cee88259bb377b"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "d83f13fd1a65a13d76c34c0074b43bff"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "c8454b85d1b4fcf53ad1f4128211ff14"
  },
  {
    "url": "faqs/enums.html",
    "revision": "957cbfbfdc5334ca94e2d46ed21b54a9"
  },
  {
    "url": "faqs/function.html",
    "revision": "7a61075103bdb421a6058aa2c37bbe25"
  },
  {
    "url": "faqs/generics.html",
    "revision": "780d3ff4a6441514b595720dc7c7cb7f"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "990dd49d6388aa1ac72de1d8ef713f08"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "d4d24aacee8819b419a5ba68ad580ba9"
  },
  {
    "url": "faqs/modules.html",
    "revision": "7c05d2c1eb2f0718f940c5313544a686"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "8a6097a4bfc7f3ba076fcadde1e3593b"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "52f4f7c90d8ff666c7f1602df1aa0cfc"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "4147bdca1e264e7b9254aafc61671b0d"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "6e08e2999a5d488a2abcbc2ba0728d50"
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
    "revision": "349dc43130de28ddb3a47071a3730017"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "1382bc0ece43e8a343597668e1805a4a"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "9457b65c3457e883ae682f5ee3d1a19d"
  },
  {
    "url": "jsx/support.html",
    "revision": "86d9340851aedda147844237d49deeec"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "new/typescript-3.7.html",
    "revision": "029aec9c291914b82eb668cde7c2f2e5"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "53cbe0c8c318e9080aac0966c515e3b6"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "7cd123de20bb3461a1bc55e05d285fd9"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "d80d571090dccf83c691600190f871a3"
  },
  {
    "url": "project/modules.html",
    "revision": "e6befb5f3944d996f3e90ff47fe26196"
  },
  {
    "url": "project/namespaces.html",
    "revision": "3a6f4f133981fd02d1e62ad8c8c7c8ce"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "aa66c18ca927a8dba9e4c1961414b4d1"
  },
  {
    "url": "tips/barrel.html",
    "revision": "f29d6858cb33dbf1b930be783d7877f0"
  },
  {
    "url": "tips/bind.html",
    "revision": "662b74fd5062fd684cf0730acf88fa48"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "c3c97fdd7205d0358f09ca574124cea8"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "e39201157a593f70ff039c19746fabf4"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "cceacdb2d56107694a1b2c2dc1725a8f"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "6bb398c69175c5b8c4fe63050e606057"
  },
  {
    "url": "tips/curry.html",
    "revision": "847f9f9e7baf7513416c4e9d3852321a"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "f8e125ba35628ad6f0541d09324f8569"
  },
  {
    "url": "tips/infer.html",
    "revision": "579b32203a3a59436e9de33114b97a48"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "cf94fb63f4b2625f602d06636c401848"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "78afd3f722a2c2aca8242315a17a120d"
  },
  {
    "url": "tips/metadata.html",
    "revision": "0dd0b55e078e811170624bc6acfd5d04"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "3b836b0dcfa3c4f374ac8063cad1c0ab"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "24025d61ee626dde35d9d6c510393dc1"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "3146c1258c4fba8938c3a123d2227442"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "b8a7dc509a488af5fd35e9358c50c027"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "d9bd4587ae0599499b30651cd3b95c0e"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "7f27205cc081290f9e7732cc9dbb6d79"
  },
  {
    "url": "tips/truthy.html",
    "revision": "0a40c811d9bbe7c32a181aec3c161ecf"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "1d1e126b23498afdb1cc8b54d4546880"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "c63bde8e23b0317b08ec46161881113c"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "cfe805fdf7ee3b618c74c1f062f83c37"
  },
  {
    "url": "typings/callable.html",
    "revision": "8c5ba6386e7b278fb382eccb7b06759e"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "b8035b2e7c5d5569f1f9ddb5e685b663"
  },
  {
    "url": "typings/enums.html",
    "revision": "f0790f24e1fb4189ad292a06b9e01bc9"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "69eb7badca55c5749fa0bab301744df2"
  },
  {
    "url": "typings/freshness.html",
    "revision": "36a63f8119e3f09d5f6f4fb5d7ee9f58"
  },
  {
    "url": "typings/functions.html",
    "revision": "fbe413a4341d4cbaa6e9ab27c3268027"
  },
  {
    "url": "typings/generices.html",
    "revision": "d021a488c46de246ed1474949cf7e8b0"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "fc29f2ebe20f5bffc4af95e97fe2b159"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "338a641e8c495295949a4773dcd0b826"
  },
  {
    "url": "typings/lib.html",
    "revision": "13d1feae0e1a2c55099dd158f5870951"
  },
  {
    "url": "typings/literals.html",
    "revision": "e74cf753ff6529c82c7f05fee235c7c5"
  },
  {
    "url": "typings/migrating.html",
    "revision": "fc13c356a15552a0a65d65bea7d33cb1"
  },
  {
    "url": "typings/mixins.html",
    "revision": "8c7de30e93e201e11ace26152d9f2027"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "d771412ad6cd01ed1057aba7fdc4a5e0"
  },
  {
    "url": "typings/neverType.html",
    "revision": "25c37771998e605ae69b948db2052abc"
  },
  {
    "url": "typings/overview.html",
    "revision": "4d38b93b74bc218afda296d32c16360d"
  },
  {
    "url": "typings/readonly.html",
    "revision": "b9392b5fec8eb8018a647cd046c966dc"
  },
  {
    "url": "typings/thisType.html",
    "revision": "f04b6f5b2c1163fff5f829e897fc8f34"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "16be66edfa72ed6ffb94c4aec4b58315"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "90d9e6aedacb9c28e2d0963669794f47"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "5c0e1ed4dfa7bffe818042af0903feee"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "62be3bf9ab9493aff02d7a1e23b7bedf"
  },
  {
    "url": "typings/types.html",
    "revision": "0d3abc954c1836fc466e3f5e09007a94"
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
