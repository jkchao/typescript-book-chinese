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
    "revision": "cbd76d022bd0df17589f3cc1f0e76cb1"
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
    "url": "assets/js/36.217a3099.js",
    "revision": "2965451d0bea8742900d2d2bf44145cd"
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
    "url": "assets/js/app.279e629d.js",
    "revision": "ffbf29376ddf0997ca8aa22fd6b42700"
  },
  {
    "url": "compiler/ast.html",
    "revision": "a82277cf84c40ab73b12773b28c2437c"
  },
  {
    "url": "compiler/binder.html",
    "revision": "96da726e46a360fe6a2954c3bc1fd6ff"
  },
  {
    "url": "compiler/checker.html",
    "revision": "89cd3a72d6a3a75939d95287790d6c08"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "bcd49741d65c54ce3e81c2da67cad1b1"
  },
  {
    "url": "compiler/overview.html",
    "revision": "9ed4f71f95b9a1c8792d41a5ae44ec85"
  },
  {
    "url": "compiler/parser.html",
    "revision": "5307a6292bea4c34f174a86d8e4925af"
  },
  {
    "url": "compiler/program.html",
    "revision": "41609e7426f9c93a683b5c7fb8f50182"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "cc332e6a20fec889cfa000a4d0396360"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "c901fef7c57db1507463e8bbfe074728"
  },
  {
    "url": "error/interpreting.html",
    "revision": "ecfbc455499653e1207d4c83f7fa7d30"
  },
  {
    "url": "faqs/class.html",
    "revision": "6aa464e5f4f41152b6d173201de6e70c"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "300bcf42c0f67de6f59fa8a1f2657afe"
  },
  {
    "url": "faqs/comments.html",
    "revision": "dafe9e5573f595d127583b77e510c950"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "efe39ebd7bea96b66209b4ace76eeb8c"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "aeef8e6aed179b7617f51b9b3f7cd6a9"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "6eff4ccba4a84b06829c9b3d465d8830"
  },
  {
    "url": "faqs/enums.html",
    "revision": "1bc2941dd4e36b6a9327bd3afab60a60"
  },
  {
    "url": "faqs/function.html",
    "revision": "014ea680bc7f866e98c03bdaf318955b"
  },
  {
    "url": "faqs/generics.html",
    "revision": "fa3f1ed1f44ba3effddcf341a33d0425"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "4f62195ce1ce0496c11af3fad63a1730"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "2842de1add6d3eb399dd5cb0695bccda"
  },
  {
    "url": "faqs/modules.html",
    "revision": "ed8537f8a8f369f003c2d3ef0ae64a24"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "f10dfe62af0d5de04b96f9666731da89"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "612f4b24d9ca005c9d1ec414577062ad"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "60ca3b1b568129aaded01d1e43391550"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "4f09237fbbb9295e7fb1c20bab0392e7"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "7a836a2064841732731e063a6ac4abfd"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "ab864c20419d61955e56c95e6506e24c"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "b2cce92aedf326802e2a22c14ab6cd3f"
  },
  {
    "url": "jsx/support.html",
    "revision": "b7e953565a890f5ae51fdbd4a2c1c966"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "new/typescript-3.7.html",
    "revision": "008d264c8ddd6977ffdfbac3a04bfb3d"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "0b1d9938a814e100b38aba6232846b07"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "245fd981d8823f8680799509d6b69b47"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "68eccfafcd2ddc22ade8ff1330e8f375"
  },
  {
    "url": "project/modules.html",
    "revision": "276a9dc2d5a2bfde87774f2f9bb743e9"
  },
  {
    "url": "project/namespaces.html",
    "revision": "695708229470794daf83561db0483b81"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "e293f4e6cb40606a5a2f9bb61eea3b48"
  },
  {
    "url": "tips/barrel.html",
    "revision": "dbb1c0be8b45b39e5fad3dee73375b5b"
  },
  {
    "url": "tips/bind.html",
    "revision": "d1f63ae37d6982b2f03cbc49eeb0ebc5"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "7600eec5c79d6afa64a8e46f65df2fa3"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "674dc135d34aac79edc41f5a19c46aa0"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "898b585129292c6694057d935e685556"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "65e439daa6637f3ddae1a03c07514c6a"
  },
  {
    "url": "tips/curry.html",
    "revision": "1374208c1c69ce70f751f4d32c4032d4"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "eb4ca4cc916b3fcd7f4456aa135cc333"
  },
  {
    "url": "tips/infer.html",
    "revision": "ca2b9e4014cf755e4662051d278b7e88"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "483e0ccdbf3ccebf7fa5517aebca74c9"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "b6e0fbde597abe6ceb20a31f1796dc4a"
  },
  {
    "url": "tips/metadata.html",
    "revision": "753459c613c63afc9fcc948ec284f90b"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "fe24a38904c20399bf9e00a1cdee4ef4"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "b1cbede858126a745a44287126bfc7d3"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "6935f68ebbd08f7f4d1388d95e0b8e5a"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "a262a9f8e8fbf243f081b2c628be60b8"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "b30197b7e91d438098e23eb479f9ba23"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "9349373ef7246077a9b84a620ab335a8"
  },
  {
    "url": "tips/truthy.html",
    "revision": "ff83d80e55ecbef3f0940dfc57e92fc2"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "95618e38c1bc571fe9a7172eea88647c"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "95720f90af917718e08cb4d266d50e42"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "d458b1a3ad0c6bfb661bc7b235e17c39"
  },
  {
    "url": "typings/callable.html",
    "revision": "28ae499702cefe6048064147f062f7d1"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "bf68d7729604e01c2a2d2ec5cca4d9c4"
  },
  {
    "url": "typings/enums.html",
    "revision": "6a1101d47bb3c995f737f037fef3b2a4"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "a307286998265c7977783e27137ec513"
  },
  {
    "url": "typings/freshness.html",
    "revision": "5ec753b6d41e676628bb4dcd08ea1139"
  },
  {
    "url": "typings/functions.html",
    "revision": "1a61dad20e169b2dbb61ec35b9d25925"
  },
  {
    "url": "typings/generices.html",
    "revision": "aac241ac04954af8e3568c19d43f1bdc"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "4825dbaff894d1e3f3346caf665a36c0"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "447266e71fa6f506cc282b3aa8601f13"
  },
  {
    "url": "typings/lib.html",
    "revision": "a628cc20628db732918df2a466b1c216"
  },
  {
    "url": "typings/literals.html",
    "revision": "26a4b0d6123374a47e0ddbeef5879428"
  },
  {
    "url": "typings/migrating.html",
    "revision": "c53131ce8d7e502c728e17ea49b53361"
  },
  {
    "url": "typings/mixins.html",
    "revision": "396f06f18b385951f99060202385269e"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "52b1679228d4b959ad87ed307f66bb16"
  },
  {
    "url": "typings/neverType.html",
    "revision": "f1e0b61318f50b93a3bc856c7617cdff"
  },
  {
    "url": "typings/overview.html",
    "revision": "3db80d11ac4731d0de5625b537899b0d"
  },
  {
    "url": "typings/readonly.html",
    "revision": "aa19a7ee202e92b7ba7f5d3025a3b215"
  },
  {
    "url": "typings/thisType.html",
    "revision": "116aee4832069c32ee76c2b81222cac7"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "b0435d21c6c2c3bb402a2c3a06cfcc04"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "5e8af193cb8ed8f73814c49acbf8194a"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "420d130ecc9a6be40451c0960dcc401a"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "13292a22f24d7aff885a155991854c93"
  },
  {
    "url": "typings/types.html",
    "revision": "50ce75e3e00c452fed515c2af294eaf7"
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
