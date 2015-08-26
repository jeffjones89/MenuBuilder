var MenuItem = function(info){
  var self = this;
  this.meal = [];
  this.id = info.item_id;
  this.brandName = info.brand_name;
  this.itemName = info.item_name;
  this.calories = info.nf_calories;
  this.protein = info.nf_protein;
  this.totalFat = info.nf_totalFat;
  this.carbohydrates = info.nf_total_carbohydrate;
};
