const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("home");
})

app.get("/resume", function(req, res){
    res.render("resume")
})

app.get("/portfolio", function(req, res){
    res.render("portfolio")
})










app.listen(3000, function(){
    console.log("Server started on port 3000")
})