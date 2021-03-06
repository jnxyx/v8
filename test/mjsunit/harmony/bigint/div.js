// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated by tools/bigint-tester.py.

// Flags: --harmony-bigint

var data = [{
  a: "c0bb18527ab19a800932cc14c553c69688372809dde38f095fdb99478a7eba",
  b: "8137ebc482f361a3e43fb80fe2ba509caa3f0acc62be0d2",
  r: "17dd3b8ecbdd71a4"
}, {
  a: "10c5163e874c786fcfcb48bbb0ccf8d6c66f480b76332194",
  b: "4e462b2",
  r: "36d8ca96869a7226d456bff9b5ed3effdcaaf6f83"
}, {
  a: "-677f8c8668fcc826129f2724a5b88a6225dd19959810b5254afbc0",
  b: "-2bf8ff1c49636",
  r: "25a8bd406d721554f45ad37cc691d58821ad163f3a"
}, {
  a: "e80276ba7d416f4f7e5f8917529eb204cc7ed08413261e73aa23f169eb46e7162",
  b: "-c884f07a",
  r: "-12834073e7cbc44804a99cb2778fb82b098645946d5e4f5e6c47c49267"
}, {
  a: "-f9a51f64ce995e0a1c7f8369a573dae2533bc3df801edbb79235d41502e1ce",
  b: "-f33bf",
  r: "106bf522569501704f9700d6bfcd203a606e63725e339e92ff931f568f"
}, {
  a: "-6c9ae08dfa5b11c29ae30e53c108d915e0e87f1a8ca82f42d23a53b08895",
  b: "-43fd79afe1ae6a4994ee7dfc2c89453d6b6",
  r: "198ecd667e8cca17c2839b38fe"
}, {
  a: "-d20a2f7074ecbc776b64c2e04ff007e194b8cdd106b2be2e78d752f2d16e9",
  b: "43eb8ae7d7f9be6d77e3be696ffef",
  r: "-317ab1a09014950e1c53b9e3e8f44873c"
}, {
  a: "-999e0f75f2f652d403840cea3536b1a522433a331dace7c39d7990b993908fdd6",
  b: "cea1de74020232c6c4bedca49d63f140c",
  r: "-be51ac62c073e7d7cb9e43fc12436bfe"
}, {
  a: "1b49ac0c323436294f1471a3f00feb197b9b42549c3",
  b: "5a7e30888a22fbbcecfe2a0b2e5eca30",
  r: "4d321e8fe1c"
}, {
  a: "-689adf0d332ed26c63f8f361d5cb66056321b683ce87c60567df7305396f20d6ab8",
  b: "82f3b92f5bb57811fdb66f519",
  r: "-cc7e64b9ef239ac4c31b6ae3687aa181bda7657222"
}, {
  a: "-6fecb457f9e05c15b7fe038494c25053938d4747a01577cf2dc939a21e",
  b: "b7cb6ce62c1d7483d0b675109f5782a1ad19",
  r: "-9be52d2e94716bb441dbcd"
}, {
  a: "f96f8276f314d37657ce7774bc539198ee84fcec8a53cbb3d36ad81040b715",
  b: "-891c9a0dd99b02",
  r: "-1d1b803e3484173c0d2e8add5042117eaa27c853c222f5fdd"
}, {
  a: "-d2c9a9068d57f2ebc9ad432b48b4135f2a911519d4b791",
  b: "-a34d124b5b4825d314683098d0",
  r: "14a715b96671307438926"
}, {
  a: "-59593d55f61c1c739601e15624fe2e61592fe6abf1ecb238c9f8e1a7bded9c1bd1c",
  b: "f067a5a155fc894b0f7f0a939f1772c4d135a",
  r: "-5f250867331e7eff64dafcd58e9922"
}, {
  a: "2c0a3172494623013ba14d01433ad38167f365765b1c0ca610",
  b: "ffe8",
  r: "2c0e52ca0c37483000215020c64d6ac36a455bf6fa4382"
}, {
  a: "-a9cde7cdfe56eb8bd6777543ae714fadac2d97a394d8e9e8",
  b: "104b0d7135d3d2",
  r: "-a6bfb9031e60b5bc4b20e814cabfd80bd27"
}, {
  a: "6216ceed0d221476bfba7701f8297af56a4e66d003f8165b",
  b: "bfcaaf8676ad6a",
  r: "82ed6efc83669b0bc476bdd717dcfb6f10"
}, {
  a: "-707752a899efbe8989d205293535a404a6afb39cf21ce1274",
  b: "-3a24848be1024a6ea901f",
  r: "1ef2f2a8c0ad85ff4e6e6afdd3966"
}, {
  a: "-e662fb8c46f979ff3b3f576fffd5c51cf70071ab61168b2eafee4708af",
  b: "964c4dd019b9a543df0cd1830a90428ec84ec04f8165283",
  r: "-18869d87ce54"
}, {
  a: "b4403dee3a192009a5aae85c74efdb52b66dee1be6befa66f708ca9bf6b7",
  b: "-36db9f9f6e",
  r: "-34928ce65c2b71a6b6ce351838d4263d91ff2bceecec7a91441"
}];

var error_count = 0;
for (var i = 0; i < data.length; i++) {
  var d = data[i];
  var a = BigInt.parseInt(d.a, 16);
  var b = BigInt.parseInt(d.b, 16);
  var r = a / b;
  if (d.r !== r.toString(16)) {
    print("Input A:  " + a.toString(16));
    print("Input B:  " + b.toString(16));
    print("Result:   " + r.toString(16));
    print("Expected: " + d.r);
    print("Op: /");
    error_count++;
  }
}
if (error_count !== 0) {
  print("Finished with " + error_count + " errors.")
  quit(1);
}
