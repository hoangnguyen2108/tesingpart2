//Nguyen Hoang Long - 30108990 Octotber/10
var express = require("express");

var router = express.Router();


router.get("/", function(req, res) {
    // console.log("hello I'm on the start page");
 res.render("home/");
 });
 // Get home page
 router.get("/home", function(req,res){
     res.render("home/home");
 });
//Get  about page
 router.get("/about", function(req, res){
    res.render("home/about");
 });
//Get contact page
 router.get("/contact", function(req, res){
    res.render("home/contact");
 });
//Get services page
 router.get("/Services", function(req, res){
    res.render("home/Services");
 });
//Get  project page
 router.get("/project", function(req, res){
    res.render("home/project");
 });

 module.exports = router;
