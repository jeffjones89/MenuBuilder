module.exports = function(sequelize, DataTypes){
  return sequelize.define("meal", {
    meal_name: DataTypes.INTEGER
  });
}
