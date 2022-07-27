
var express = require('express');
var app = express();

app.get("/",(req,res)=>{
    res.send(
        "<h1>Vijay Sales </h1>"
        +"<hr/>"
        +"<h3>Smart devices for sale</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptop</li>"
        +"<li>Mobile</li>"
        +"<li>Tablet</li>"
        +"<li>Hololense</li>"
        +"</ol>"
        );
});


app.get("/aboutus",(req,res)=>{
    res.send(
        "<h1>Vijay Sales </h1>"
        +"<hr/>"
        +"<h3>it is information in the about us</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Tambde sir</li>"
        +"<li>Mobile</li>"
        +"<li>Tablet</li>"
        +"</ol>"
        );
});

var server = app.listen(9000);
console.log("Server is running on port 9000");