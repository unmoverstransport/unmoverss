'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".dart_tool/package_config.json": "962b3a66576830feb6ddf346728fe654",
".git/COMMIT_EDITMSG": "5e9b13ce8f6c99f3f510756be58d15fe",
".git/config": "86689620d9ded3a04adddb072ebb3012",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "60aa66419bf26e72bd3cfac7e30a75d8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7391da40c516844f7b1eb7687d2f581e",
".git/logs/refs/heads/main": "af0356d7fa8417727da390437d2d9bf4",
".git/logs/refs/remotes/origin/main": "f13279443f5c2434019a2eedb2d38547",
".git/objects/00/be8478b4bfd0a0af1eb5908bc276df42ec9aed": "8a736d03ca3b03115a928ad6378974d2",
".git/objects/01/7c291afcdb7a80009c8b03d31c300c088adf40": "31570732e9b671558e4571b5cdace64f",
".git/objects/02/45b1f25bbfbb17768b04bd7beff8af0e73b26f": "fec74e671153d23ac950eb41748d22ba",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/02/d053eb145e05841d592d2669d5b2ce225376b9": "eba725e6f328f2e025901dce889b8908",
".git/objects/03/4135637cbfc965d1a2d72c3c92d8ed9c8549ec": "e979eeea1969942b17a78d89a32f4ca7",
".git/objects/03/e4d80c78b3c036a6f0e4b2ba8f085a043802f1": "742794708d4093fb65db2bce0e6df807",
".git/objects/05/5d582dfecec9e24501b04b66a0651899b39ad3": "64659c534c3c20d2ba7cbc287a5d3a68",
".git/objects/0a/5c19233b62afd071e6afe9d07ef4abc9942959": "8951a0a58a90bb790714810cb8aeec2b",
".git/objects/0b/01ea2391e895a58fb9eeeae5bb44d5d24e127d": "f4356e7f2d2f9d79e527c1d852a1dfd5",
".git/objects/0c/163d0856f2369a63e447722b72e1f859e6f0bc": "531820c26735b60a1c6de3c29dfbe4f9",
".git/objects/0c/ef1d17b23b0f734358b6cdbb5027c0f43530f2": "c2928207fd017394e7c52ee1e1fb9083",
".git/objects/0d/97c553d546c5f7711d2d9a8f0dfc81ec0174ff": "686e9130a3b42cdf4bff7b9983c2a0e9",
".git/objects/0d/c246a22c7dc9d3a07909383c02b42d3d3d7df5": "f31684a6e27064e626a896b96c5ffd17",
".git/objects/0e/81cb66ff1e9ef664eb3f31d7d83bba6f3a9e5e": "4ee8a33f415c90c2628bdde2b7a69bb2",
".git/objects/10/194ae208223534d9337dd1122fc107cb8591bc": "a10728bc0d3949097ea88cbe0cacd50d",
".git/objects/10/881a86d10213b8e0542aa2e22ffd1ea8ea0cbc": "c6dcece7e639317c725e017719431d61",
".git/objects/11/a68eba23eef8d767c673ffc610fca1073da735": "5d7f75ca01cd6e7ea09a09a0d84e7e33",
".git/objects/12/2cc1558ebdf6249433aea310efc5235aa88601": "c3f8586c7d51a58b1f04fa927f1bde45",
".git/objects/13/5bd6e7ae521e397c83617c9357c05e89a037a3": "1dfb52a95084abcaaa480c4bbe3471ee",
".git/objects/13/a16ea2a06dbfdfd27e20cfdf1f6762830e8ae8": "5fc7ec09c9e806478cf43bd25483d655",
".git/objects/14/08f04615a228c2e4920ecd7003b74633e47fc8": "db546d4bb7af57b986eda6443087960e",
".git/objects/14/0da7c1a8b1747734e584f2d47402e3bc615060": "d838344dcf585d0c9f3d412a8d20f84f",
".git/objects/14/1d3f3c8c6174833272e57ae0a030cca2789517": "4e5cda6bf947c65323643bead01d551d",
".git/objects/14/b5b581b76cfe79ab1a24aa9fdecaa0834e91d4": "f2d3e608d9b1aeaef75d5c6da69f29a1",
".git/objects/16/745fa7cd65690a7f88d4eeaf308753eb79cb4a": "6fd45a2f31d1e6e9feed3cc893b2aae7",
".git/objects/17/a24fc3315be7ddcddd2225b52c918722b4cee9": "07418cc694e2fdbb3a366335728c9715",
".git/objects/18/68fb722fa35416c298648c72724f7ec086e765": "6534b245a324be56ad23a91112edbddb",
".git/objects/1b/dfaed46eb4afafb34b07e23133f71154eff634": "a8cb937e1cb0c9359bad993429503d6a",
".git/objects/1c/d025961bc821fcbc63005dca001a4a963afb56": "b7fda456806e25d4174210cc5f964d5d",
".git/objects/1d/03a5ab40165fb1e2f0723f7f39797b13fb72b4": "2e2048b25ea6fc6d59b295ffc091999a",
".git/objects/1d/817ac2582340c4cfe35f4f08357faba4bf309a": "a5469e43b11f568b98233e65b4a693d4",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/20/a2a7c6374bf85ad7105f521dfc64e75490db95": "50535aadc19ef00160ba85efdbca5060",
".git/objects/22/f2cb8db5f7844c15689d52792ccbc377b6c798": "bf595350f1b812388a2535df02d3c67e",
".git/objects/24/87aa9e664e6fc5179cb72e192ba60d254231b4": "e002df5caf4c4c307bcc90ce5496279b",
".git/objects/24/e29d195e6e2c459fc51656ac58956ed664c60f": "92d373aced3f82927a3c0335545a7a97",
".git/objects/25/8ff4aeec3076b19185f628ed887d7afc4c4dda": "e800c510ddce724fc2e75329a1bc98fe",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/2a/f1534e1fdcb8a611785e13170cc960b0527796": "9eff14d68619c133895a1ae5e7c6547f",
".git/objects/2b/aad331b9d5d1d0693118bf1e49d43e09e52525": "7b0e057310b82d6ea2c2c4139d471c97",
".git/objects/2b/daf431ccd15fc855831d7a69bf9a117f2b35c5": "22616fdb731adbafc02ae02d45c6e65c",
".git/objects/2d/74a221c0cc5c0cd30b1f1b7c1d258caa81a183": "d8065904506f71fe7d96b181a6bedcd9",
".git/objects/2e/2d46d73e8d08df22a002772a1a9ad8a7cfcbb0": "b58b60c67546c71e15bd76b5677983da",
".git/objects/2f/84eca7616c9777a6ffbd1496e07f265339fcdd": "756c1e05540ba77d60786e3c64091530",
".git/objects/30/0002ec699cd64bf1336658aa366a4398b1a343": "d91eb3be9709bccc06163fb16a31b02e",
".git/objects/32/035ae967144478a3e6fb5084a4b0a039885986": "d08001104e62554f0525bd8356815577",
".git/objects/32/0e560813f453e58f5c31733da73f740d97da21": "3dca5e4d3b6af0c51df532d4bb0ba3bd",
".git/objects/33/90aeb25906d1540aa9d1058d061acf88cfc3f0": "ead34cb23c1ffaa3de2b2e39234d19fc",
".git/objects/34/f4d501f586e26f24f45132caa7a76259f7a2c2": "dea406d98be5cd9a26d0a5a471d12af1",
".git/objects/35/25c951f9dd0a26ffa8dd132a3d7b56989c70a2": "bcf1cdc633b1bb54ff8c8926f8e095b4",
".git/objects/35/38faff2ead2e24d82a829f1663d61f5d5d13d8": "182e6c8c087550829dd01dbd78923226",
".git/objects/38/8cf7bdca7cde3150ed973c69c763f8aa610432": "dc2cb47ee0b2d007831d2abb2bb59f1d",
".git/objects/39/520930968f5f73d931122c900eac285cc10d88": "65ad443efcebdeb2c9a7b8f7cde4097c",
".git/objects/39/ab389774ca52684ff1ae624fcbcebb102d00fe": "4bf7ac4f85cd682e4b142c81863e7e0a",
".git/objects/3a/70d0548cf3b567f0338080061b0552f6b8d66c": "4b111137a8f4e18327eb3f30821d4296",
".git/objects/3c/1886b598f66c0ee63973660acc0684a707ceda": "a2461f8a40e0d2d876c15820cea42d0e",
".git/objects/3c/4f66cbff394b7f44272f96e264dfedcc875870": "c8ed9e8a50fd44fe261873502e970fe2",
".git/objects/3d/290aa375a9d75b4e4e6f69fa2bb1a0dc8b9126": "50d1d8a95f032e2e1352e9ae14d8a0c6",
".git/objects/3e/7a3e0e605ca4e7241f964fad33b1c449e530d6": "62df7f6b1ea932601111e1400e4c540e",
".git/objects/3e/b3b351c266f4829cf2dd2f770d01bd522b529e": "a7d01dcf8dc671497eedb4001e6cf651",
".git/objects/3e/b70da2485fb3ed7c7f9ca0e13701e31820db9e": "839b802c6f95f260a848d7254af0904b",
".git/objects/3f/a2ec832a93ba526d17bf490e1b0170adfa9c5f": "f37febf00595c9b1d63f188c78520245",
".git/objects/40/c05e88238631975f9ce506c1751caf4d16ac74": "f8eb76398690c8a68504af879061253c",
".git/objects/42/4c1a6e89f1af277f320693604136d4ebe5593a": "5334fb43796d7f620bc1b6991f81e08c",
".git/objects/43/a153527476d0bef18d448092891bc0ada777ed": "95371bfafe1fa313e64c491c05267707",
".git/objects/43/aa156f267f90a60f97600645ff0c795407c9c6": "62d5627c663cb732fc1d3a33d02bb01c",
".git/objects/44/d1a799adc9207351157291d119bce667885899": "f549571b07a6d4d0f8626d708382b6fd",
".git/objects/46/76cb59bed6aed1afddbf1450e3364a889c578a": "5fee2b35e699824bfb096ac1022b4fa9",
".git/objects/47/29f5256c76b74b6c1c974bf7b718676870ce97": "aa1dec96e4923a6822d8c56047f84256",
".git/objects/47/92e6601700965eca633c19357dde669133768d": "538863e3c7be093733a02de850fe12eb",
".git/objects/48/21619f2434ceb7e01d411292215484a38dd689": "ba71bd1a786a446c02962b1425cabb57",
".git/objects/48/3de88493f04b700339e179427ced5aad6b0448": "6eadf72588cc86b0063c98f379af38fe",
".git/objects/49/787663b7bd66db33fcceffc1e75afd4b17bd3a": "b21fbcba413779762ad780faa3c2a0af",
".git/objects/49/8c10d7e61bff48806beed0e15ef63902be191a": "e4cd1f2d9596d1a6c370cb19593f3a3e",
".git/objects/49/b79810473ff941e68dc84e52835c02850b2f08": "d892d480705a55e34f495dcf2d2b71cb",
".git/objects/4a/494fea5a92b0befa940077df77d897a19f71b1": "90d506f6d51cd37f2eeb49e5c2ab13db",
".git/objects/4c/15eb7f72d33e58a225022525a963c7e02e3118": "1ce98cb17343819f474a6c91c1c18970",
".git/objects/4c/48b70d06d6fc7a6bd9a3bef04182c72219897e": "f784e2bc53cc7c714452eb538ab3ad6f",
".git/objects/4e/a9402516621c40b6584ba0a8e79d914ef47707": "4f021f3e8b7189a80f9b550fbdd38a83",
".git/objects/50/3a3437d79f4006311a8ad27d26b3505d25ddb5": "1367a7f7e3965072705fdb9d81afe1c1",
".git/objects/51/5e5b91fed6f05fa8f00210df3c43330db7c117": "0385ce44c68355b80a362fd47ceac693",
".git/objects/54/28c9c6dd788af7e626be91d6986d07cf6ae1b6": "054c49471d86b61bf98b92587c38cb8f",
".git/objects/55/888f9146d6f343710255aa1964c12360ffaf46": "603f202882dad6ed144cdc45392ad4a7",
".git/objects/55/95fb0ff122570bf97ce2b640cfc35e2c9ce8af": "aa0313b6f5781af75339d692b316886d",
".git/objects/59/ec81bfd23b56b9b3e1507f5581a17e5ee61f58": "74f69d2e7f1db7170e9ab6bcd17ddf17",
".git/objects/5a/d19e7e00c56d726686f9ea9624e8c970d57340": "23cb989c2f03b1e2494b442a32bfd825",
".git/objects/5b/31a2006d4cb9e8def5b4a8da4dae7469285534": "00a02766ec74916543456d2d5f9198ab",
".git/objects/5e/aa5aa0f0015670b97567f975de3d1061e5715a": "f714d0bbab6ea327e2edbfc0f6426f61",
".git/objects/5f/62b25f19facb12a4db18bed73f27e4371c8ec1": "a82cbeec5ceb2298e2c55a56ab8648db",
".git/objects/5f/6d9ef22b8c2bc1b897cd7c9194692e41e695f2": "2979f9d47d2f424e6df1d0c3725de666",
".git/objects/60/4f2350b2a5a79cc769c3d5fe62095bf341695a": "a8416102168974684a6b6b55b91dcda2",
".git/objects/60/745babe0a8697069773b15ec12b83443f31f54": "0afa729eb5c75e79321a6fee6f5134c7",
".git/objects/60/91bbb609f3e8d9e69402f29a7bd6897ad1b641": "c8914d175ac19532cab294839db87a4b",
".git/objects/62/5b256f24cf1c4153319e226976ee2fb75031be": "3681fdc322808678e5675c656da3f179",
".git/objects/62/dd6fe697e9adb55e37cd463e0a30fbd02ac995": "3edbe9cb8f854fd8c9edef7ca86cf9eb",
".git/objects/64/928cdf7cc33ed0d8e84de47e3fe680183519b4": "f4f2f89ea0d5182197e65d6f3f07291e",
".git/objects/64/b2cab5aada8be6a52cd2a5534768d312df591e": "703dc4ef98e0fdab32010eab33d37664",
".git/objects/66/0918f26e9ddcd1419165a9b947d904256bf89f": "05950f451a34b18c8a62f0da78c8f6a7",
".git/objects/69/9874fa1d46c93f3e5a8f599784f30312c841bd": "3b8dee407cf808a57ed6d1c9f26d565f",
".git/objects/69/ec8ae351d1227c93b14bb6ef3c43cf6218acb7": "625a4a8255035c38b79fb72dd0fe0af1",
".git/objects/6a/21e7c38e9f38d1e0fa169f4efce53fc76a93a3": "460579d41fca1b2e5b720c486ef27816",
".git/objects/6a/e6760c03a7de6b6180e5e55d464b2937be5251": "e487bcf79df6fdd94199f477e91eb815",
".git/objects/6b/518681e1077afc74cad78fd34f3c0059cdcfa9": "ed669cb3a927f3ef029e1309caf62b35",
".git/objects/6d/e54f7ff7ec380e01408afefad110e5afbc6064": "e2d6ad3c32fd5341f8fc2edbb5f72447",
".git/objects/6e/3c6d32610faca34a3f231e9bd859b5ecae347a": "7946012e8a4a028c90d6f9cff560b657",
".git/objects/70/2d8bf330f68394edd7d8f6041441616347f8f5": "96d723b29c251c09b760c9c89eff0901",
".git/objects/70/e85365842d949bfd76cf56df214f5c37640e6e": "e0ad0dfdc2e1df1df670edd04592cad7",
".git/objects/70/ea4e85f2e5b621cf7a663a4cc62868622b73ec": "bf0137c9454b5f6af7826a225746fddd",
".git/objects/71/8121d81399e2b5bc12e443dc5c343823c4d210": "433c226644ca5f2fa767a6b469c2c8d3",
".git/objects/71/bc6739ef9e1f078c0ff3a9e92bca15fbde674c": "a7a1ed3bf3a35fe3b657421d735d64e7",
".git/objects/72/45179d13c887d8ad42fe29064c0a853e1bc716": "be50a63a6314dafc7be5f9b0d2b547d2",
".git/objects/73/27bab2ec0cb5603a6311d7903974196ad01b83": "4db03c30d013e94cc1f01ba49ffa663b",
".git/objects/73/976599cbdd667ffeac56d3062c8395d8017a68": "9633a0d37a35b17d05f4f649ef2d5a7d",
".git/objects/74/adc766f232ab24a73335ded0e51653035fd0ef": "cee293ad6b4198518d9f4e7e215838b8",
".git/objects/74/ba4b4efc2ebb3b0581012e036a6f6440949e3e": "178049983c9145a24d98b99aae638548",
".git/objects/75/7082e19d9393d80caf5912e64a0a76751ed10d": "e641bde4cb9d56c5e913a1305e76e7e4",
".git/objects/75/a428f3666ecc500326fc182a12d735d1235aaf": "4c00b21f61168bfc76533ea182589ef3",
".git/objects/77/2e3738df221e5b4ffd200471408af83a9aa452": "f6f824509aae9d121ea11766c9091744",
".git/objects/7d/fb611f26729ccc362b6342b29caf60009bc28a": "7b4c0514feec731d8bc0cd6f9e87b809",
".git/objects/7f/51f01f80a8a1effc7ecfa30b282d3075ccaeb9": "e33219da02c53fd37b3b40f3c8795dae",
".git/objects/81/72fabd49ead90ff6e654c6505a0ea149f1ed46": "0a9c0019ed574d591b04ff1b34439e15",
".git/objects/81/f05e575f4f6841cb0ff17bb6f411d7dda8386e": "80ab45de0486f4d7b2c044a8c9d0037c",
".git/objects/82/30e38445e03f107dc8afe6ee84128f22d60ad8": "88d8a391c2016075f799a0cca348debc",
".git/objects/84/c4803b7112aae8e7067de9eeb48dc4b6a661ee": "e0e6013e9509d3933f9a3c71429509d1",
".git/objects/86/dc43ebf38937d5c5eb4512d50df4249d873c7d": "7621f355293fb041d1186cede6b39aaa",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/87/d559b6993f5482aa283147b85b00f63ac93964": "b1d425e82eae22ee858440deaeba909f",
".git/objects/88/1c03c578ed0fa0d5b2a0102a6901ec7899071d": "96d625e28d7047dadaa16c8bb064e3fd",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/543814bdab748433d71ea51dc14e7c31c5dce4": "dc00c8c209fed81d7eb2d488b1e6421a",
".git/objects/89/ef5aa41073fb1e5e6430d54589e549e61dedd0": "5472b1dd83a4643a7cbf7ef14fe61e27",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8b/0d451ae6c7f49feb469da095d770e84c3b4761": "7556e79b2f8d6bd3a0cefffbd456ccae",
".git/objects/91/72c5ad4dd84eed045f670205e2a7ee5b129d30": "0e59de0f95685d53575e07a9dd4ec898",
".git/objects/93/2b3209cdd25da36e1c2af00541e2ff82ed56a0": "a3b3b22bd2238db9a6ee5fe3bb779aae",
".git/objects/93/94d438c8142006e541b33017e74f3d4d9f8278": "f0a2c8459daed22962528b4cb59e6573",
".git/objects/96/1853925cce8137b25dadffa604d6cbb0890e5b": "d13ef7a94d11deb3a40ccffc5c30ff40",
".git/objects/97/3f72b4118f9063b07e22c5f0de7847bd31886d": "20983d14fd0cccda4ca1b604dfc748f7",
".git/objects/97/756d1ce0667634bb4cd9c7fb30b7386f5b35a5": "749a607c0c4fa378d7509aa4f1a1bdad",
".git/objects/97/9bd64f3fda9549623d51b04865ff2930e3f5c8": "47d954289c182495b25df64d693e0fb0",
".git/objects/97/c26600a74ae5cd1c475b37f2d2f7cf45a07b4c": "8ce750501e51c808522fe6e94267dde2",
".git/objects/9a/42bf5da0109d0aa20a04ceb1c8c4d6f938d26f": "7d9fc1bb3c435d54659d1ff8a11f6b04",
".git/objects/9a/c9a92a9b27092f990e111d32d23b8ae590a4b6": "c55896ca31204a4d9c1609cc8e6d131d",
".git/objects/9c/34be7c5d7a492e78b74b7f8addf09f59a32b4f": "3fa9cdb4b596ff671474b96f2b6d0fb5",
".git/objects/9e/3791e82b278f24a923b40c100c1f52d48fb357": "e0a89a4120e4b05fd31a321da67c2521",
".git/objects/9e/c24b01a1caf879aa7ecd92b600d04fdd93f085": "7bfd96b34754534f8163070f046f8816",
".git/objects/9f/9b3272450eff924b18d9559ac116a24a8ea977": "4112e8820b8dce0898bf371a2e23926d",
".git/objects/a3/a48f7204de62ebc5406f9d7022d986b0eb9ad8": "1282c663e99c704f226257c6853410c6",
".git/objects/a4/e75e98772f862956fa1c9c10f95d045eecd525": "56903c0d4f05faebc47374001e865af4",
".git/objects/a8/11af03622e3aa655f43e316a28afdd80a6fa06": "48b6c5c5f674bb76ad1c014e7d573df6",
".git/objects/a9/4fd8a434ee3a6d6ddcb87cb20449f122519c94": "6a3d5f603dd33024c34b713f6406220a",
".git/objects/a9/58c09d5529db1dd50044c5ea8abe92f0251e0b": "20bc6031637ca39bad9cd5a58980fceb",
".git/objects/a9/6082d706acd017e51344614ac29cb52099be3f": "1dde1d15f21b97e228c54b46bc197b95",
".git/objects/aa/b64877a5f78e5edb8811ef1b95213574a9190a": "a5c2b52a1bcad476d6beca053dc4df26",
".git/objects/aa/b7e812a4aa157839abb5dc8fca7fbbf377e35f": "6ca184ebb8d24adeaab7f0b882ca2459",
".git/objects/ab/26594e783208d5c520852a59135ad1e668c757": "37825ac587e935ee6c2ef05c185231f4",
".git/objects/ab/e091388933c83693d8309dd9c0cff2ecd507ad": "489ea9f211c9a14c3c6af499e32f3564",
".git/objects/ac/a751ec41ff948ac9a92068759f91a97911e381": "81c736f073f9a45d8d5a10d560f31d01",
".git/objects/ac/b571564a8c3b98cd081d600f95b2389b3095f8": "cba3ee5f29bc6e78db6b68005a485876",
".git/objects/ad/78cd7f530d50ead9490ccaa3c1f0f44f836db1": "7500da1cd199c4ed55e8f3ed0c6f0acd",
".git/objects/b0/0edf5bf93d630e1922395c56815c90268db3d4": "8874f5fb39c092c6e4f3add7bfbe5bfc",
".git/objects/b0/5ce11a7f0ffe240b1839f224525f3f7cdc954f": "910db07b70bed00a4fb033c6ae39ed81",
".git/objects/b3/c43cf48e82b98d5ce39d3b2d32a0797506c071": "1d3202ab7bed07f673290f997e457a39",
".git/objects/b4/7570629d3500e913ec539b93c5c0c873384f6b": "6a77bd61724488b348ca8ec85f4765ce",
".git/objects/b4/c518beebe008e9793132a28e939d9956e46f7d": "c486deae337455717560655c488f9eb2",
".git/objects/b4/c8f2b9a4077427979e789f27e86f3f04a1ee09": "d45aae7bba050a7bace472769ddd0c9d",
".git/objects/b7/28211c45ab762ae94ebe6d159108e0d8a491f0": "744d1be6e5f62d067ae3c01c2494783f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6e18a08cb2709ee2db3eb89432e01ddf6d597e": "521ef76ba100215931557774537e4621",
".git/objects/b7/dab03fb74af21271582fa48982f002b3f78598": "aa899b9758a2e93a7784992941d49d82",
".git/objects/b8/9bf7803647312dc2e92601b0ce23e8e4ad2ad2": "fabc0fdc11765cb79175df39822995e6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e74cffa690ea587fd7505c963f7c16dceea454": "f21c6c34771ac99dfbb24e7893e788b3",
".git/objects/ba/be38f77dffe87492380410bf6f61260ac10781": "b90dd39233fd73bcb471b70429a34af0",
".git/objects/bc/8b476ac59292d86ddce245f71a8bedc0354de6": "65d9b7b80d96c47d5dc20aac37f4b966",
".git/objects/bc/d090d4e6d3c00c35d0eef646c47e64db81cc2c": "ad43b1ad177c9488b4423c7e6f6cff67",
".git/objects/bd/ce98c3cfc489f0885c827ac3ce12c45697b362": "0f018954d3f8d409db6bff01b911dcd8",
".git/objects/be/414f95b1f30eb2e12e0403e94dd5d6abb546d4": "3feba1c71acd4ce8d1985ab22180d72a",
".git/objects/bf/0c2ec5a67c26fd279ab78b4ea975aa50552f7e": "64364e5421ecba5bbf20403426290538",
".git/objects/bf/22fed728498419713bfd98aacb2e64a5161e4d": "33b8282e77387d108477ab102f828897",
".git/objects/bf/9f0cbcf315f42393207a8a85e49000a0352fbd": "030a06fd80d1dd21d4178150bd67d54f",
".git/objects/bf/f772da932ed993ddf0f37d8d97954848cf5911": "2e0f31343834462481673f5740ab4737",
".git/objects/c1/e558631ae4000f4470d0ee44d740c0deed4fe5": "5782d0adf2099459efa2d2a672bc4154",
".git/objects/c4/5ec6d16c212400e32911f81a5b478f0ca14633": "df2d5b8211f8d0950460f6c1ff7db003",
".git/objects/c7/20ec7fae12ada654fc2a8a0d6e1d24eadc2a4c": "df9d4953e0bd011bd9f5429013557cb5",
".git/objects/c7/a0870ce2e6fcb1cb9c8b55639333f15589ca06": "da85099b2c26796be815bf434665e9da",
".git/objects/c7/e1e78a433a4e0a1e2cfe1c521cb2727052f73d": "7088bd02eb5e2e80ec2106d5ae1e4659",
".git/objects/c7/ea637a6ffd00de63ec8409dbd0b672efc133be": "d94b98124b9f8b0e708451388ca1bb06",
".git/objects/c9/2d03c74b140aa6107cbb3e3c6b762552d361e4": "bf5cd4a79eb278df495f80e93a91d4a3",
".git/objects/ca/3417be0d8270a131ae7847d6e1bd39d02f9cf9": "0e387bd8b7c3c85d06d60a51acc10f98",
".git/objects/ca/9950fd431f95c777be0f49f154d49987ba7d69": "74141fbffb66362c2cd9de060e8aa62d",
".git/objects/cb/51265a01acf6774e1db5f9004c8cd209e07697": "d8ef56356959aca32a715c3d8cd4a4d6",
".git/objects/cc/11afeb68ae371a7cac459b95cf4f2314936633": "f97f7cca6cf70e47e975f115cd766883",
".git/objects/cc/aba1a86ca13fa394bfc3fa511bc5be0a20bb18": "8cc46accc2a7993da7a897c24d70cdd6",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/323497c9087c81c33b69a1a929e3971d0712be": "cd394f1d0d41c8422823587ffe3373b5",
".git/objects/cd/489b9547fd003b9f8430e6015ad1e6e37be220": "8de0518607c4f1c5a6c313272a49b32e",
".git/objects/cd/c90f12fcce7fa9c7e131599336f6d0bb7a4835": "c8c71ef3e4f22d1e5c21ec744b11953a",
".git/objects/ce/a27a4868adab09f76e0190d7a07e0e6a300d6f": "b6ce62babc9a8794d388294a0fe619cc",
".git/objects/ce/e5b34ec9dcd0f19a699e5904477c6895812be8": "dd05aa4cf1025d83b7584d7ea6f68c79",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d1/6476d05826ee0b90f371bf98bcd2ffb0ab1bc5": "883a1cd7f902bffeb4fabf94c45cdb48",
".git/objects/d2/05b9906565c37ccdf0244cf4ba08eefe2de6f3": "a8e6f59c76ecca3e25e18b9ab5eafe99",
".git/objects/d3/c1a40de0cfcee02a3badcc7de0d4c8244dc4b0": "81bff40beec7ad2d9cdcc2f90b1ddfa5",
".git/objects/d4/ffb575d860ef9adecb070896d95fcbd6377f69": "a0d861b34ff1e6ad6d2d5c06e40b9ecc",
".git/objects/d5/ec76ce3a65fc6681b2ca633fd14714a81aa5d4": "b21210b6fbe006e089131fa825023805",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/95aa1e86a2bb254f3502c03ebaed718c1a958f": "556549ce8bfe53384b6a6e4dd9580c0f",
".git/objects/df/4367bd084ea78a6da39ff334d411d3feae54b8": "93fb59b33fe00e8a34288d28a317fbd4",
".git/objects/e0/329193ba9705ba2bd21e88b01b44869d75ed67": "9921e1e53dc7a07aed9830044998269b",
".git/objects/e3/26e8cc8c49529fef6244567ec4a683250eb99f": "e18af6d17d7a523ff6567aa1583ee4c8",
".git/objects/e3/f923f21206cf09c0f823b2feb840d8d2697162": "c0c38e04320cc764fb6d9eca810c24b1",
".git/objects/e5/f03a0bda41acb849f9d90f468570ae300c5d2d": "0968a0324e4f6992757ac440c7a603f1",
".git/objects/e6/f0d65d420b04b940c3328e8f241cd128b6e8a5": "5604fcffbf704a12aaa9dc9cd8420d57",
".git/objects/ea/2e597d96530bbbe2f4e2c430fe6aed57e254a5": "2e78e082ba6a8dea7a2454c6ed65caae",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/1c1fee04281c16f17f62911fb7b1f5964041f1": "426203859f0ed648eadd71e4b5459c9d",
".git/objects/ee/1eab9611edee6ed801023a763e3bf6f3aac31d": "592f749f8288e6fdb145f482dcfa0db4",
".git/objects/ee/38b32102563c9b483f987b0bd463c91f2d2110": "895b02b3e3244aba0d96252f93d6cfa9",
".git/objects/ee/4de5b1b8a6d73e92758f1304536b551e4294c2": "2d4508059e6665bbf25d873c88b140e5",
".git/objects/ee/52bc1eaf79bc3789e8f1147a42102558091e1f": "2c7daf2036f12963ccd9e1c25c0d1c1a",
".git/objects/ee/566f253229905a8bccafda5e055cadba6468da": "59e3e998cc7be2e976c35ac144148398",
".git/objects/ee/a23e6006d8f86acc9aaccb7e0288e8d6365cc6": "636c8999fa899c48478910532cb9f27c",
".git/objects/f0/375aef5434cd8ee17213a10758ecdc9aea71df": "2d4afd3fe1bcefb5914455fceeba5924",
".git/objects/f1/89a21f3c9f3ceee389d368a5e88c7e4e6bcd20": "90e08940ed7cb902e18c3b183c9e649f",
".git/objects/f3/33384f9748ecfe529a6f98b47177885a0c2c77": "1e89f31009ef7d0bdc0048ba6347b8da",
".git/objects/f4/b44be9b094f9678439a308cba34bcc217bfd82": "ba0284433b88e715a7580f78ba926cbb",
".git/objects/f5/ae5352049a9114f03d95bef7a92f209c00133d": "6e00adecc8e99a224f6f3203874af9f0",
".git/objects/f5/cfe9708491692d0a99a24dcaa12917b9b26457": "37fc8e24493ddbdf602a45595c28637e",
".git/objects/f8/92118f7ebe3d7af50af82b6da92f7c8635d74e": "a3c6e353611255ff2b95155a4ece0666",
".git/objects/f8/eac4c079db0b35e4ca2e9ea86aa537fac7d218": "15bf5157a642090e893cc247fd354424",
".git/objects/fa/4344626b48a1afd31935afaa1d609e773e21fc": "1348385b45202b4b6046130e468af80d",
".git/objects/fa/c38f0831af625cece55cca7136945e2ac52a7b": "9064094e87e3da9e3395a8decaeafa9d",
".git/objects/fa/f94436c66b7c3e6dd39164ce49e66c81a708ce": "124007cde368ab6b771ce59809e3a777",
".git/objects/ff/571cc986d151f28317f2248376b8942ce43e24": "65d32d545c3b0627816af5fa67b86328",
".git/refs/heads/main": "f9e8079bed4404b6e92e510e17703938",
".git/refs/remotes/origin/main": "f9e8079bed4404b6e92e510e17703938",
".idea/libraries/Dart_SDK.xml": "406353cf6a2986acb7674e49475dd911",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"analysis_options.yaml": "5df212687f3997ccd1310b5b19ebfb78",
"assets/AssetManifest.json": "4f6bca4d9c4d244e30f1d44627b5a9a3",
"assets/assets/fonts/raleway/Raleway-Black.ttf": "38b405eba92acbb5aef45d8152f2a736",
"assets/assets/fonts/raleway/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/assets/fonts/raleway/Raleway-ExtraBold.ttf": "c9503ab0f939e9d37fcfb59b25acf8b3",
"assets/assets/fonts/raleway/Raleway-Light.ttf": "6c084270ccdeb72fd9f5a5144cea628f",
"assets/assets/fonts/raleway/Raleway-Medium.ttf": "2ec8557460d3a2cd7340b16ac84fce32",
"assets/assets/fonts/raleway/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/fonts/raleway/Raleway-SemiBold.ttf": "8a192102b50118c45033e53ce897f103",
"assets/assets/imgs/logo.jpg": "eb8213a942c585f674928f4f42eb2e49",
"assets/assets/imgs/oneton.jpg": "72a5192dfc41dac0a4d4f7871b8e5e88",
"assets/assets/imgs/one_and_half_ton.jpg": "dd2f71e1b036f4e90f4e876ac304a7a8",
"assets/assets/imgs/twoton.jpg": "20a95fa20be03883ad501019c0cf4ddc",
"assets/assets/pdf_docs/tsandcs.pdf": "a1cf03672337aa385536a3659ae214db",
"assets/assets/svg/care.svg": "e92981c02727b8fcdc7e92179f840226",
"assets/assets/svg/cart.svg": "3a57c87fdadcbbe85de9477235e0f19f",
"assets/assets/svg/delivery_truck.svg": "3541897cb6c27007f822aea8048420fb",
"assets/assets/svg/driver.svg": "70afc710d8089e998b7e5ca457278cf8",
"assets/assets/svg/garden.svg": "664275c677368c5c9ae367725dd0cf81",
"assets/assets/svg/helpers.svg": "79caaeabe74cadd38ef9eeccc5ba148e",
"assets/assets/svg/house-office.svg": "845680ad846a40d9cd5128c70f4da678",
"assets/assets/svg/logo.svg": "b56e3522e4d289c23d0bcfd33d36540b",
"assets/assets/svg/money.svg": "de81112e954219f1d6990290685b457a",
"assets/assets/svg/percentage.svg": "84a9a31352fc65967c3a2d5aa27b4bf5",
"assets/assets/svg/reliable_transport.svg": "2e80bf2333010eb0513c685abe463551",
"assets/assets/svg/services.svg": "790e23d2deef099a5ea6e7cd7917c4fc",
"assets/FontManifest.json": "1883f99404b68c161a4796327d64c723",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "01976c74f0f063462815ec9b0da1386f",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/0.75x/powered_by_google_on_non_white.png": "78b06d238cb55fd775d0faefc44448f7",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/0.75x/powered_by_google_on_white.png": "31bc81278fd5b781b342ea1e767d032e",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/1.5x/powered_by_google_on_non_white.png": "a0bdd851f1d00d131f005c60ed2cb16b",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/1.5x/powered_by_google_on_white.png": "c7e713340ff7ad9e1af8482ad2a71349",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/2.0x/powered_by_google_on_non_white.png": "e72d1907bf5d0f6c1153e50aa7cf7f9a",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/2.0x/powered_by_google_on_white.png": "60e8a8323a1f5c9dc59c6783d5974123",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/3.0x/powered_by_google_on_non_white.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/3.0x/powered_by_google_on_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/4.0x/powered_by_google_on_non_white.png": "33ff537622b33a8a161646a7be0800d0",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/4.0x/powered_by_google_on_white.png": "cbb17d77d4436ba71593febe71599b53",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/powered_by_google_on_non_white.png": "27efb6d97555008ec637e8c5a6833f82",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/powered_by_google_on_white.png": "f127e368d62ad92dacab340de5af50e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "11e4f1bce30af1759693bf03f7958aa0",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "af03171b18c0110ee9c4544f3bfa3b3b",
"icons/Icon-512.png": "072128423fde35bdfd77afd2ddcf6b31",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "47615713e1790e032f6388f5e502884b",
"/": "daf53704d83864b642baa43cafd57fa7",
"lib/main.dart": "a6fb1329af99457b050f36d34b9bfb35",
"main.dart.js": "56c82e8ecf6f4e71cb0419fe77ca1408",
"main.dart.js_1.part.js": "c0d635a0ffca9a335bbf90b96099cba6",
"main.dart.js_10.part.js": "5a7ca315d5a512465af04d40fc0fa43f",
"main.dart.js_11.part.js": "ca3f8843e9e4f9890fa4250d1626eb9c",
"main.dart.js_12.part.js": "bb2541392feaf8ef6811597fb58382ac",
"main.dart.js_13.part.js": "fd7803354ffbf0047d9a7aeb00af905f",
"main.dart.js_14.part.js": "92f6d6acbb86b2bc13532f90565d4bdc",
"main.dart.js_15.part.js": "b6d54fe32cbf2b8cb101049c6d041528",
"main.dart.js_16.part.js": "7bc50d220c2d70e446a7d24979276541",
"main.dart.js_17.part.js": "1755d18a2b3279397a56b4e943b04b1c",
"main.dart.js_18.part.js": "615b283513113dc95eff5cc4b3699d96",
"main.dart.js_19.part.js": "c0fd56b3622580b3a2d16f7fbcefaa98",
"main.dart.js_2.part.js": "54de2f0ca41659589ee7379977fd19bd",
"main.dart.js_20.part.js": "71a151a19e0b8072fa2d33cec96f5a85",
"main.dart.js_3.part.js": "8e126305cd712c3794c82641e5e18fb4",
"main.dart.js_4.part.js": "448616aa67d5abf082c79e4aa6bed6d7",
"main.dart.js_5.part.js": "439c6ed81f09b1deb85e5774d6bedd84",
"main.dart.js_6.part.js": "304462ed3939dbc9b28876921471ef7d",
"main.dart.js_7.part.js": "7d29ef58fd33c292b85ff6b5a4775379",
"main.dart.js_8.part.js": "19ae83352fc3d31a6f750bb68e26a35e",
"manifest.json": "044ef831f26d7a9cb411745f9a0b007a",
"pubspec.lock": "44a082f34be35de2c959473d53316840",
"pubspec.yaml": "3de613466c7a04f6496bba10e687ba71",
"README.md": "f62eeaa7616cee091b7df40146427806",
"styles.css": "1761cdcd8027c80ffb28c1c6e73d47b7",
"test/widget_test.dart": "32cade57813a89c74d8d3a269232f36e",
"version.json": "3901fe86f33e6a098f4d455c4de664c1",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "daf53704d83864b642baa43cafd57fa7",
"web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"web.iml": "e0f10da35b9e41eee205c76b23f0f835",
"_redirects": "8038807dcc659febb7d9f09fb8206d37"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
