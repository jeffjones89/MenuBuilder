//model for our front end item view, using the AJAX return objects to define our KVPS. The underscore notation is a nutritionix convention
var MenuItem = function(info){
  var self = this;
  this.meal = [];
  this.id = info.item_id;
  this.brandName = info.brand_name;
  this.itemName = info.item_name;
  this.calories = info.nf_calories;
  this.protein = info.nf_protein;
  this.totalFat = info.nf_total_fat;
  this.carbohydrates = info.nf_total_carbohydrate;
};
