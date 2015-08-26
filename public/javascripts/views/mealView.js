var mealView = {
  $el: $("#meal"),
  meal: [],
  calories: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
  appendItem: function(item){
    $("#meal").append('<div class = mealItem id = ' + item.id + ">");
    var html = $('#'+ item.id);
      html.append('<h5>' + item.itemName + '</h5>');
      html.append("<h5>" + 'Brand Name: ' + item.brandName + "</h5>");
      html.append("<h5>" + 'Calories: '+ item.calories + "</h5>");
      html.append("<h5>" + 'Protein: ' + item.protein + "</h5>");
      html.append("<h5>"+ 'Total Fat: ' + item.totalFat + "</h5>");
      html.append("<h5>" + 'Carbs: '+  item.carbohydrates + "</h5>");
  },
  total: function(){
    this.clearTotal();
    this.meal.forEach(function(item){
      this.calories += item.calories;
      this.protein += item.protein;
      this.carbs += item.carbohydrates;
      this.fat += item.totalFat;
    }.bind(this));
  },
  view: function(){
    $('#calories').html('Total Calories: ' + this.calories);
    $('#protein').html('Total Protein: ' + this.protein);
    $('#carbs').html('Total Carbs: ' + this.carbs);
    $('#fat').html('Total Fat: ' + this.fat);
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
  }
}
