'use strict';
// const router = require('express').Router();
const h = require('../helpers');


module.exports = () => {
	let routes = {
		'get': {
			'/': (req, res,next) => 
			{	res.render('login');
			},
			'/rooms': (req, res,next) => {
				res.render('rooms');
			},
			'/chat': (req, res,next) => {
				res.render('chatroom');
			},
			'/getsession': (req, res,next) => {
				res.send("My favorite color: " + req.session.favColor);
			},
			'/setsession': (req, res,next) => {
				req.session.favColor = "Red";
				res.send("Session Set");
			}

		},
		'post': {

		},
		'/NA': (req, res,next) => {
				res.status(404).sendFile(process.cwd() + '/views/404.htm');
			}	
}

	// let registerRoutes = (routes, method) => {
	// 	for(let key in routes){
	// 		if(typeof routes[key] === 'object' && routes[key] !== null && !(routes[key] instanceof Array)  ){
	// 			registerRoutes(routes[key], key);
	// 	} else {
	// 		if(method === 'get'){
	// 			router.get(key, routes[key]);
	// 		} else if(method === 'post') {
	// 			router.post(key, routes[key]);
	// 		}
	// 		}
	// 	}
	// 	}


	return h.route(routes);
}
