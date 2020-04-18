'use strict';
const qr = require('qr-image');
const fs = require('fs');

// node qr "Encode this string" "QRImage.png"

let dataToEncode = process.argv[2] || null;
let outImage = process.argv[3] || null;

if(dataToEncode !== null && outImage !== null){
	qr.image(dataToEncode, {
		type: 'png',
		size: 15
	}).pipe(fs.createWriteStream(outImage));

	console.log('QR image Generated!');

}else{

	console.log('Pls check arguments!!');

}