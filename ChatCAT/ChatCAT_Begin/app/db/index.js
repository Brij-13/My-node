'use strict';

const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

// Mongoose.connection.on
// ('error', error => {
// 	console.log("MongoDB Error: ", error);
// });

// Mongoose.Connect('mongodb+srv://chatcat1:chatcat1@mychatcatdb-xlous.mongodb.net/test?retryWrites=true&w=majority').
//   catch(error => handleError(error));


// Mongoose.connection.on('error', error => {
// 	logger.log('error', 'Mongoose connection error: ' + error);
// });


// Mongoose.connect.on('error', err => {
//   logError(err);
// });



const mongoose = require('mongoose');

var options = {
    promiseLibrary: require('bluebird'), useNewUrlParser: true, useUnifiedTopology: true
};

var mongodbUri = 'mongodb://127.0.0.1:27017/chatcatdb'
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = {
	Mongoose
}