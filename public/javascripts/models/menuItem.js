var MenuItem = function(info){
  var self = this;
  this.meal = [];
  this.brand_name = info.brand_name;
  this.item_name = info.item_name;
  this.calories = info.nf_calories;
  this.protein = info.nf_protein;
  this.total_fat = info.nf_total_fat;
  this.carbohydrates = info.nf_total_carbohydrate;
};
