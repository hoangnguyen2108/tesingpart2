//Nguyen Hoang Long - 30108990 Octotber/10

var express = require("express");

var router = express.Router();

router.use("/users", require("./users"));

module.exports = router;