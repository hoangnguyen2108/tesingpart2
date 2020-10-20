// installed 3rd party packages
var express = require("express");
var path = require("path");

//var routes = require("./routes");

var app = express();
 // render the error page

app.set("port", process.env.PORT || 3000);
 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'code_script')));


app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
})
