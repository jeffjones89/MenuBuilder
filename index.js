var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname + "/app/assets")))

app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});


app.listen(process.env.PORT || 3000, function(){
  console.log("Listening on port 3000");
});
