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
    "revision": "ac6d0ed6c33ea6cbeed269d37d6f1614"
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
    "url": "assets/js/app.e23d88c3.js",
    "revision": "d761b5ad4d0707f6c5684b79fb3dbe81"
  },
  {
    "url": "compiler/ast.html",
    "revision": "b4d240c467ff048d24c5dea39f2d50f8"
  },
  {
    "url": "compiler/binder.html",
    "revision": "6960dedf95b149cef5975eba3e6619e6"
  },
  {
    "url": "compiler/checker.html",
    "revision": "6a4ba9893d5310f9b0a974a978f76ef3"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "7a6da96de1b2214378abbeae1e63d84e"
  },
  {
    "url": "compiler/overview.html",
    "revision": "419232dfa0593b493c7c45077a8d8130"
  },
  {
    "url": "compiler/parser.html",
    "revision": "d0db549888b0745bd3ce8777ef2f80f7"
  },
  {
    "url": "compiler/program.html",
    "revision": "911e8b69599c040824ed2792aa4b29a0"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "15de51150ac361aa3be60a9c04ee63a1"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "f75eb0ed1b0178e6f14d9677487a9c01"
  },
  {
    "url": "error/interpreting.html",
    "revision": "a179dc31eb459d8078e32c7881dccd46"
  },
  {
    "url": "faqs/class.html",
    "revision": "d0f4e75d2492c7119f977f6dc19830ec"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "4b133c95e99b3d65ffb562964ddcda9b"
  },
  {
    "url": "faqs/comments.html",
    "revision": "e68cf13d1d6d4c916f23bc9178f1a52d"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "80b7e87c0c554d9bb3e34be8d3c0bff1"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "212acfcb01cc7ef5ef39e475bed66334"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "3e1d7321c222b2eec251214825cb6835"
  },
  {
    "url": "faqs/enums.html",
    "revision": "440f0443b2c5e72df5ac39e9721e0177"
  },
  {
    "url": "faqs/function.html",
    "revision": "9796b1c8e3da57c327225481e3a5b088"
  },
  {
    "url": "faqs/generics.html",
    "revision": "442010725842b21bec0f24ea790a86eb"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "7d3d15c6d1efd5233b79f44086664f8a"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "ffd60caa6f8a93317319b78c7d3d51a3"
  },
  {
    "url": "faqs/modules.html",
    "revision": "8c5e234ad2d7cd14a9bb896db0b69bdf"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "147e5e3cb8ed3aab034786622e5f8bbc"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "09207b88cc6b1b7fb241fb7b79ba908d"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "2b3fbe14fc6cc7bc2e6ba9c8b71bf10c"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "7bc215f678958a965a91b2c0d7fb7487"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "c3455455ae6dfb1bc5fe7d60f76f5ae7"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "21a9528cf8a3bd6020e20ea58f2924dc"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "b6c8f164b1dc4c656d809a86ad555aea"
  },
  {
    "url": "jsx/support.html",
    "revision": "dccc91cc9505fb555e9a93edbbc07901"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "new/typescript-3.7.html",
    "revision": "b074ea055479619228f3fb26ad98dc50"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "24d9584f333454e25ea4882c482f89ea"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "a8a34a15222f7f9af2091aacdccff574"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "1d81151da568394d28488cdc26389ba6"
  },
  {
    "url": "project/modules.html",
    "revision": "da01ea2d8b96bc3369a8b690f536b6bf"
  },
  {
    "url": "project/namespaces.html",
    "revision": "3163f14b492a1f7c5185fb705b2e1091"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "da87c46a6643ce666053c3d657a3bd92"
  },
  {
    "url": "tips/barrel.html",
    "revision": "c127cb92a0d1747f89b148de5026393c"
  },
  {
    "url": "tips/bind.html",
    "revision": "623073b20719d0d0a76e98d155b0fa00"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "5a249fa6a139c3cc00c4c2617b9fd7f6"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "8b35897dc46b069bdca4fe9f3263bb03"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "1eb857c87b7f94e5792d696281ac6b0a"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "8b7941e78bddfe61838bb50bc5510ea3"
  },
  {
    "url": "tips/curry.html",
    "revision": "936d2b2633e27f0659e94e652b5b05b7"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "a4be7de5cfc41f343dcdbd249514f90c"
  },
  {
    "url": "tips/infer.html",
    "revision": "35f62e5f6623228b50934f067ae6b7ff"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "535f6ee7da22086738e4006e7b3071e5"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "1d34e27ea5d2c098b3fa50abae34bf89"
  },
  {
    "url": "tips/metadata.html",
    "revision": "886aaeeec83140998726a1c64e3010d9"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "74a8f50ef62af9078c876876fc0f7546"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "982b4689fec008846773be1831d2ccc3"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "d0ff9f6eec8ed2db1fe67f09e29db249"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "ff0c05300c45766a58d2fd28e4492d03"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "2bcc3d7520b364fc8a3902e092071b3d"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "e005c271b2e3d0bce11cee8ec8b9053b"
  },
  {
    "url": "tips/truthy.html",
    "revision": "f549ebbf9a786e8d2652bbd51758cfba"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "17b653226a267982f9f049096cd84a4c"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "4df8f3ff9effe41d9e788f734c54bc1c"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "58eb25033a93edae2b362864d407cc47"
  },
  {
    "url": "typings/callable.html",
    "revision": "50f6d7b20277f52bbaaa7081deb77e15"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "3fb5e7d98ebd5dc9fbac9344fbed5c42"
  },
  {
    "url": "typings/enums.html",
    "revision": "9784fcf5e41edfc617e76733ba7a49f8"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "e0c023e031accedbc83ce34cbd909419"
  },
  {
    "url": "typings/freshness.html",
    "revision": "b00b3fb3a35909c7995bf4d091a51735"
  },
  {
    "url": "typings/functions.html",
    "revision": "785c3a9c5b4406b0dc0d3233488c80a0"
  },
  {
    "url": "typings/generices.html",
    "revision": "9156b8fcd2550a7aaa1037801de6e8f4"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "4c423392462aebbb4206a05eceb8c030"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "93c4cbf9032017056a57788fb699a82c"
  },
  {
    "url": "typings/lib.html",
    "revision": "5008eeedfc29316ebd2e700c5ab91318"
  },
  {
    "url": "typings/literals.html",
    "revision": "c3a3072246f59b3dbd2e88954031af09"
  },
  {
    "url": "typings/migrating.html",
    "revision": "e196ff272f4464a00f0535ef6ca58e68"
  },
  {
    "url": "typings/mixins.html",
    "revision": "30eb73bfa5b7821aae5bc956a14e01b7"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "5c9eca825eb74d9dccb8613e34363ef1"
  },
  {
    "url": "typings/neverType.html",
    "revision": "c61b1ab3b5b7f7b225be0226fbe4c981"
  },
  {
    "url": "typings/overview.html",
    "revision": "72ad721821e516b23290d72e525d2774"
  },
  {
    "url": "typings/readonly.html",
    "revision": "e5f896c68bae823cfab571672931605c"
  },
  {
    "url": "typings/thisType.html",
    "revision": "d27b62b124dba073159b3ba9e6127449"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "d7fb57f01545ccab20a2e3fdac68a3f6"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "963cead1826f4a670c9fa49b9d7fecb4"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "9ab4299ce7f2eb3f653c13a67136af79"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "b388dd798f5b8ca6ec661df96d659481"
  },
  {
    "url": "typings/types.html",
    "revision": "67d6abd5ec27e03e48ced1286a3b7a3b"
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
