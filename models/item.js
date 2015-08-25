module.exports = function(sequelize, DataTypes){
  return sequelize.define("item", {
    calories: DataTypes.INTEGER,
    carbohydrates: DataTypes.INTEGER,
    item_name: DataTypes.STRING,
    protein: DataTypes.INTEGER,
    total_fat: DataTypes.INTEGER
  });
}
