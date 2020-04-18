
const express = require("express");
const router = express();


router.get('/user/:id?', function(req, res, next) {
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

router.listen(200);
