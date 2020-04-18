const mongoose = require("mongoose");

var CourseSchema = new mongoose.Schema({
	courseName : {
		type : String,
		// required : "Required"
	},
	courseId : {
		type : String
	},
	courseDuretion : {
		type : String
	},
	courseFee : {
		type : String
	}
});

mongoose.model("course", CourseSchema)