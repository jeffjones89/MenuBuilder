var Sequelize = require("sequelize");
var db_connection = new Sequelize("postgress:///menu_db");
var Meal = sequelize.import("../public/javascripts/models/meal");
var Item = sequelize.import("../public/javascripts/models/item");

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
