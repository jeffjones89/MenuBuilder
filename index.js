var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname + "/public")));
app.set("view engine", "hbs");

var mealsController = require("./config/controllers/meals")
app.get("/", function(req, res){
  res.render("index", {})
});

app.use("/", mealsController);

app.listen(process.env.PORT || 3000, function(){
  console.log("Listening on port 3000");
});
