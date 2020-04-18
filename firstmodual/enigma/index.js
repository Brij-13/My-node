'use strict';
const crypto = require('crypto');

// exports.hello1 = (user) =>{
// 	return "Hello " + user;
// }

module.exports = function(key) {
	this.key = key;
	return{
		encode: (str) => {
			let encoder = crypto.createCipher('aes-256-ctr', this.key);
			return encoder.update(str, 'utf8', 'hex');
		},
		decode: (user) => {
			let decoder = crypto.createDecipher('aes-256-ctr', this.key);
			return decoder.update(str, 'utf8', 'utf8');
		}
		}
	}
