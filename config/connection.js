var Sequelize = require("sequelize");
var db_connection = new Sequelize(process.env.DATABASE_URL || "postgres:///menu_db");
var Meal = db_connection.import("../models/meal");
var Item = db_connection.import("../models/item");

Item.belongsTo(Meal);
Meal.hasMany(Item);

module.exports ={
  Sequelize: Sequelize,
  db_connection: db_connection,
  models: {
    Meal: Meal,
    Item: Item
  }
};
