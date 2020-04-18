const express = require("express");
const app = express();

app.get("/",(req, res)=>{
    res.send("Hello Brij. This is my first Express Program");
});

app.get("/hi",(req, res)=>{
    res.send("hi");
});

app.listen(1300,()=>console.log("Server running on port 1300"));
