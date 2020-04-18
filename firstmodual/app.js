'use strict';
const Enigma = require('./enigma');
const eng = new Enigma('magrathea');

let encodeString = eng.encode("Brij");
let decodeString = eng.encode(encodeString);

console.log("Encoded: ", encodeString);
console.log("Decoded: ", decodeString);