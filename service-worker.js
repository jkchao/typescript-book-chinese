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
    "revision": "95bb35be9c8b185cb24290fb0472f510"
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
    "url": "assets/js/app.abc2bd9a.js",
    "revision": "c0389d3f1fcb8ab51f5e7112d4efd653"
  },
  {
    "url": "compiler/ast.html",
    "revision": "05a14a38cfe67187d0b4b0192e13d4d1"
  },
  {
    "url": "compiler/binder.html",
    "revision": "0f3bc81f096565c2f4c817950f994675"
  },
  {
    "url": "compiler/checker.html",
    "revision": "e7afd34d7d71df9ae0cc933f03744f3b"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "b93017169350928512d1a264cf05e01d"
  },
  {
    "url": "compiler/overview.html",
    "revision": "0b54f648ba4029e139f1d80df49e22fc"
  },
  {
    "url": "compiler/parser.html",
    "revision": "c16817bdcdaff3666a72b1464e927b11"
  },
  {
    "url": "compiler/program.html",
    "revision": "a81fb03aef07598ca43ddb7a1a1846d2"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "0a3a5dc79ec2faed101523402bc45eaf"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "b4b5ed20323e3b812ce26d84757ad1c7"
  },
  {
    "url": "error/interpreting.html",
    "revision": "cf749860c49e9dadacbe145613ae1dab"
  },
  {
    "url": "faqs/class.html",
    "revision": "588802e9fee9479e81312609679e0d53"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "939da2c51b5dbb550d70f1e649f8cba8"
  },
  {
    "url": "faqs/comments.html",
    "revision": "d0d9586e8c9810ec030cd74cf39e4ca1"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "2896f3cdb861047175074f2fddbca30e"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "38624c128eee51261ec4698356b25190"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "fc8b66c2746a7ad7b280b2d8a7676a6d"
  },
  {
    "url": "faqs/enums.html",
    "revision": "67a35242e8cedffaec7eabce0bf6b858"
  },
  {
    "url": "faqs/function.html",
    "revision": "82bf2237ab683ac305c6fa987d436728"
  },
  {
    "url": "faqs/generics.html",
    "revision": "7ebc971633ce51d7e814b95998edc21e"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "a745067aaec9c442c8137e4f152bc636"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "ea411e5ef260729ec3f5f4b7753c29e0"
  },
  {
    "url": "faqs/modules.html",
    "revision": "55cf69a78a743f483e0531934815a346"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "5e02e2bccef2fb1b0b427f6df8a4d449"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "5922fc8cd58cd0b7b5e89cd628f7c1b8"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "50157272bbf0f36e764bcc4af7d231f2"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "208e797acbb79071db026e2dedba822f"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "81f2d8176d7781c716ad886424f88830"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "a8e3b8bca8207cd1f9274b167bca9150"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "9ec5735789294763d0a81cbc531571eb"
  },
  {
    "url": "jsx/support.html",
    "revision": "8cdfb93395d92b0a89e2b58feb2a56cf"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "new/typescript-3.7.html",
    "revision": "6b64d37e870202e9405807d6319c3c7c"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "5b19b26971d1c1a1788409e957110f4e"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "78c9387f2954156d499541e0cc5ab4d4"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "73223bb535e79ed56e0d74be862b87c8"
  },
  {
    "url": "project/modules.html",
    "revision": "6ad3262ae0b4acf93976dc463a55440d"
  },
  {
    "url": "project/namespaces.html",
    "revision": "b833cd46829400b5964bf2aa2ebd9834"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "b178fe5b6136fa26edd1002f70d11eb6"
  },
  {
    "url": "tips/barrel.html",
    "revision": "7f888ab0a0e37dee7ef82f6bf452ff2b"
  },
  {
    "url": "tips/bind.html",
    "revision": "a3b4ea16f864d914049df3c0aed507fe"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "24f85b709a93d067f634bed89cf4b782"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "af30ec0444e6aa37b47eeb52ace08063"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "c86e3c4dc341bc96d2e432e917caddac"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "6943431aa0543e81f97b91c09f130f2c"
  },
  {
    "url": "tips/curry.html",
    "revision": "0a582fca973a8c886242e535e5f5c12b"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "71e23f6bcd22e6a08e464e5f65765e79"
  },
  {
    "url": "tips/infer.html",
    "revision": "f39c0963563cf15acdae4c104c7503f4"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "2e47c0db9f5fd8ce40e20ff9a9c53a19"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "fcf0b06b5d323f8f6e4619c14b6e6dd6"
  },
  {
    "url": "tips/metadata.html",
    "revision": "ecdd343bcb91ba6f9501f974e6f2e22c"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "9188d37331b7d8ccb49c50df3b028d22"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "16a6c72d18757ff311db57833e4f0154"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "c28ab8faf44a91899f6b6f505e9948d2"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "32987c9158e9978ee62ac77743c8f214"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "b2ad880a066339261f7ffdad1cc0f47e"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "bba7db244010a405379b85972b6f9cfe"
  },
  {
    "url": "tips/truthy.html",
    "revision": "e94c1037d855a19ecd824578b33667d2"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "308ae59f991a42283a6b3efa6220682e"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "3aacaee689c2cfd7f73a61c2696d64f2"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "1c763f112a665e4e4f04950faf7a3315"
  },
  {
    "url": "typings/callable.html",
    "revision": "6f354445ab0c6a7e816ceca7221d9525"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "9a546b6b79cc9b18d5037dca19cce6af"
  },
  {
    "url": "typings/enums.html",
    "revision": "7b6a7a9d2b85ec50e9c72cfc4e51b770"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "a55e07b6d9abdba9d6fac663d7cd4052"
  },
  {
    "url": "typings/freshness.html",
    "revision": "f4f710eb7dd4f788de9bb4181bb956b2"
  },
  {
    "url": "typings/functions.html",
    "revision": "6c2c57faf3fff3d4204e28e0d33601df"
  },
  {
    "url": "typings/generices.html",
    "revision": "b333265d7297accaa77de339fa8c4f25"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "cb6bf2ac0a314f60cacbc4f08f4bfcfe"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "87cd707fdaa6b5eec5d3cba3be7a8123"
  },
  {
    "url": "typings/lib.html",
    "revision": "31502668798fcbf773a4ff1915d1209a"
  },
  {
    "url": "typings/literals.html",
    "revision": "9f5af468330f89e441c1f489646596ed"
  },
  {
    "url": "typings/migrating.html",
    "revision": "78e428958e716b306bb9b32c7e5057ab"
  },
  {
    "url": "typings/mixins.html",
    "revision": "f3ee854e4aeffcd976c16d4bf194608b"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "89263e312a943a61df412b9c74813e24"
  },
  {
    "url": "typings/neverType.html",
    "revision": "6b0ff8daa9d6521f9931f51cc8b80668"
  },
  {
    "url": "typings/overview.html",
    "revision": "90aa030b10740909e75857a634b4bb28"
  },
  {
    "url": "typings/readonly.html",
    "revision": "57926d8389a82a2991182eca66ac8e24"
  },
  {
    "url": "typings/thisType.html",
    "revision": "8dfbc88cb2a5886683d622388e146cdf"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "a03e16d75bd662787a61cff13ae958d0"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "b3871989b906760e91a6200e578e8fb3"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "b43cc2eb1cd5795093f08084c826f0e7"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "e7968537dfb0e5b729d62b185d928fb2"
  },
  {
    "url": "typings/types.html",
    "revision": "cf6357fbc15816eac6d6c23e645de33e"
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
