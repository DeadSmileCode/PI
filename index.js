const express = require("express");

const app = express();

app.use(express.static(__dirname + "/html"));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/html/home.html");
}

app.get("/home", function(req, res){
	res.sendFile(__dirname + "/html/home.html");
}

app.listen(80);