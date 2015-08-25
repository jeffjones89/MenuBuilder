var Sequelize = require("sequelize");
var db_connection = new Sequelize("postgress:///menu_db");
var Meal = sequelize.import("../models/meal");
var Item = sequelize.import("../models/item");

Item.belongsTo(Meal);
Meal.hasMany(Item);

module.exports ={
  Sequelize: Sequelize,
  db_connection: sequelize,
  models: {
    Meal: Meal,
    Item, Item
  };
};
