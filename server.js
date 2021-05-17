const bodyParser = require("body-parser");
var express = require("express");
var app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req, res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var result = weight/(height*height);
    res.send("<h2 style='text-align:center;'>Your BMI is " + result +"</h2>");
});


app.listen(port, function(){
    console.log("Server Started");
});