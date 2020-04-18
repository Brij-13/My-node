// const fs = require("fs");

// const http = require("http");
// const server = http.createServer(function(req,res){
	
// 	res.writeHead(200,{"content-type":"text/html"});
// 	res.write("<h1>Hello I'm Brij. Server is created</h1>");
// 	res.end();
// 	// console.log("Server created succe");
// }).listen(1313,()=>console.log("Server created successfully"));

// fs.readFile(__dirname+"\\fs.txt","utf8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

const fs = require("fs");

const http = require("http");
const server = http.createServer(function(req,res){

    fs.readFile(__dirname+"\\fs.txt","utf8",(err,data)=>{

	res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Hello I'm Brij. Server is created</h1>");
    

    res.write("<p>"+data+"</p>");
    res.end();
});


}).listen(1313,()=>console.log("Server created successfully"));

