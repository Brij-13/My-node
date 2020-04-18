'use strict'
 
const express = require('express');
const app = express();
const chatCat = require('./app');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(chatCat.session);

app.use('/', chatCat.router);
// let helloMiddleware = (req, res, next) => {
// 	req.hello = "Hello! It's me! I was wondering..... you get the idea!";
// 	next();
// }

// app.use('/dashboard', helloMiddleware);

app.get('/', (req, res, next)=>{
	// res.send('<h1>Hello express</h1>');
	res.render('login');
});
// app.get('/dashboard', (req, res, next)=>{
// 	res.send('<h1>This is the dashboard page! Middleware says: ' + req.hello +'</h1>');
// });

app.listen(app.get('port'), () => {
	console.log('chatCat Running on Port: ',app.get('port'));
});