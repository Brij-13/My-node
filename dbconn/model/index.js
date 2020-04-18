const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/chatcatdb", { useNewUrlParser: true, useUnifiedTopology: true } , (error)=>{
	if(!error)
	{
		console.log("success Done");
	}else{
		console.log("error in db connection");
	}
});

const Course = require("./Course.model");