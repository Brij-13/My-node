var express = require('express');
var router = express.Router();
router.use('/abc',express.static(__dirname +'/static'));

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

// router.use(mainmiddleware);


/* GET home page. */
router.get('/', mainmiddleware, function(req, res, next) {
  res.render('index', { title: 'Express', name:'Hello Brij'});
});

router.get('/a/ab*cd?', function(req, res, next) {
  res.send('Edited iteam is '+ req.params[0]);
});


router.get('/my',mymiddleware, function(req, res, next) {
  res.sendFile(__dirname +'/my.html');
});

router.get('/user/:id?',usermainmiddleware, function(req, res, next) {
  if(req.params.id==undefined){
    res.send('Hello user');  
  }else{
  res.send('Hello user your ID is : ' + req.params.id);
  }
});


router.get('/travel/:From?.:To?', function(req, res, next) {
 
  if(req.params.From ==undefined){
    res.send('Hello Travelors');      
  }else{
    res.send('Hello travelor your traveling is From "' + req.params.From +'" To "' + req.params.To+'".');
  }
});

module.exports = router;
