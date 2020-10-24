//Nguyen Hoang Long - 30108990 Octotber/10
var express = require("express");

var router = express.Router();

var passport = require("passport");

var ensureAuthenticated = require("../../auth/auth").ensureAuthenticated;

var User = require("../../models/user");

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

 //Get  login page
 router.get("/login", function(req, res){
   res.render("home/login");
});
//get logout page
router.get("/logout", function(req, res){
   req.logout();
   res.redirect("/home");
});

router.get("/signup", function (req, res) {
   res.render("home/signup")
});








router.get("/login", function (req, res) {
   res.render("home/login")
});

router.get("/logout", function(req, res){
   req.logout();
   res.redirect("/home");
});

router.post("/login", passport.authenticate("login", {
   successRedirect: "/",
   failureRedirect: "/login",
   failureFlash: true
}));

router.get("/signup", function (req, res) {
   res.render("home/signup")
});

router.post("/signup", function (req, res, next) {
   var username = req.body.username;
   var email = req.body.email;
   var password = req.body.password;

   User.findOne({ email: email }, function (err, user) {
      if (err) { return next(err); }
      if (user) {
         req.flash("error", "There's already an account with this email");
         return res.redirect("/signup");
      }

      var newUser = new User({
         username: username,
         password: password,
         email: email
      });

      newUser.save(next);

   });

}, passport.authenticate("login", {
   successRedirect: "/",
   failureRedirect: "/signup",
   failureFlash: true
}));

module.exports = router;
