const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const CourseModel = mongoose.model("course");


router.get("/add", (req, res)=>{
	
	console.log(req.body);
	var course = new CourseModel();
	course.courseName = req.body.courseName;
	course.courseId = Math.ceil(Math.random() * 100000000);
	course.courseDuretion = req.body.courseDuretion;
	course.courseFee = req.body.courseFee;
	course.save();
});

// router.get("/add", (req, res)=>{
// 	res.render("add-course");
// });

// router.post("/add", (req, res)=>{
// 	res.render("add-course");
// 	console.log("submited");
// });

router.get("/list", (req, res)=>{
	CourseModel.find((err, docs)=>{
		if (!err) 
		{
			res.render("list", {data : docs})
		}else{
			res.send("Error")
		}
	});
});

module.exports = router;