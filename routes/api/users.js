//Nguyen Hoang Long - 30108990 Octotber/10

var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    res.json(" json status code for the users api");
});

module.exports = router;