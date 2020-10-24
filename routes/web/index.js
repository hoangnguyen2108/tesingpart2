//Nguyen Hoang Long - 30108990 Octotber/10
var express = require("express");

var router = express.Router();


// add in error and info 
router.use(function(req,res, next){
    res.locals.currentUser = req.user;

    res.locals.error = req.flash("error");
    res.locals.info = req.flash ("info");

    next();
});

router.use("/", require("./home"));
router.use("/posts", require("./post"));

module.exports = router;
