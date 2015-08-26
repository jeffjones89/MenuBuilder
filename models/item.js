module.exports = function(sequelize, DataTypes){
  return sequelize.define("item", {
    calories: DataTypes.INTEGER,
    carbohydrates: DataTypes.INTEGER,
    itemName: DataTypes.STRING,
    protein: DataTypes.INTEGER,
    totalFat: DataTypes.INTEGER
  });
}
