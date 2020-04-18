const connection = require("./model");
const express = require("express");
const application = express();
const path = require("path");
const expressHandlerbars = require("express-handlebars");
const bodyparser = require("body-parser");
const CourseController = require("./controlers/course");

application.use(bodyparser.urlencoded({
	extended : true
}));

application.set('views', path.join(__dirname, "/views/"));

application.engine("hbs",expressHandlerbars({
	extname : "hbs",
	defaultLayout : "mainlayouts",
	defaultDir : __dirname + "/views/layouts"
}));

application.set('view engine', "hbs");

application.get("/", (req, res)=>{
	// res.send('<h1>Hello World</h1>');
	res.render("index.hbs", {});
});

application.use('/course', CourseController);

application.listen("3000", ()=>{
	console.log("Server Started");
});