var express = require("express");
var router = express.Router();
var DB = require("../connection.js");
var Meal = DB.models.Meal;

function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/meals", function(req, res){
  Meal.findAll().then(function(meals){
    res.json(meals);
  });
})

router.post("/meals", function(req, res){
  Meal.create(req.body).then(function(meal){
    res.json(meal);
  });
})


module.exports = router;
