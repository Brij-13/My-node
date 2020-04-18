var mainmiddleware = function(req, res, next){
  console.log("Middleware Working");
  next();
}

var mymiddleware = function(req, res, next){
  console.log("Mymiddleware Working");
  next();
}

var usermainmiddleware = function(req, res, next){
if(req.params.id== 13 ){
  console.log("You are valid user.");
}else{
  console.log("You are unvalid user. ", req.params.id);
}
next();
}
