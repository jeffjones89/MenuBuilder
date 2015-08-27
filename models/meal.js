module.exports = function(sequelize, DataTypes){
  return sequelize.define("meal", {
    mealName: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    carbohydrates: DataTypes.INTEGER,
    protein: DataTypes.INTEGER,
    totalFat: DataTypes.INTEGER
  });
}
