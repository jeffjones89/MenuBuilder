//this object handles the meal view, which pulls data from the items array below, a collection of item objects
var meal = {
  items: [],
  calories: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
  appendItem: function(item){
    $("#meal").append('<div class = item id = ' + item.id + ">"); //using item id to differentiate between meal item divs;
    var html = $('#'+ item.id);
      html.append("<h5 class=data>" + item.itemName + "</h5>");
  },
  total: function(){
    this.clearTotal();
    this.items.forEach(function(item){
      this.calories += item.calories;
      this.protein += item.protein;
      this.carbs += item.carbohydrates;
      this.fat += item.totalFat;
    }.bind(this));
  },
  view: function(){
    $('#calories').html('Total Calories: ' + this.calories);
    $('#protein').html('Total Protein: ' +  this.protein +'g');
    $('#carbs').html('Total Carbs: ' + this.carbs +'g');
    $('#fat').html('Total Fat: ' + this.fat +'g');
  },
  render: function(){
    this.total();
    this.view();
  },
  clearTotal: function(){
    this.calories = 0;
    this.protein = 0;
    this.fat = 0;
    this.carbs = 0;
  },
  clearItems: function(){
    this.items = [];
  },
  clearDiv: function(){
    $('#meal').html('<p id = "mealHeader">My Meal</p>');
  }
};
