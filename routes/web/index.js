//Nguyen Hoang Long - 30108990 Octotber/10
var express = require("express");

var router = express.Router();


// add in error and info 

router.use("/", require("./home"));


module.exports = router;
