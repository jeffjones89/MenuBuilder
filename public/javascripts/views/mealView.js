var meal = {
  items: [],
  calories: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
  appendItem: function(item){
    $("#meal").append('<div class = item id = ' + item.id + ">"); //using item id to differentiate between meal item divs;
    var html = $('#'+ item.id);
      html.append("<h5 class='data'>" + item.itemName + "</h5>");
      html.append("<h5 class='data'>" + 'Brand Name: ' + item.brandName + "</h5>");
      html.append("<h5 class='data'>" + 'Calories: '+ item.calories + "</h5>");
      html.append("<h5 class='data'>" + 'Protein: ' + item.protein + "</h5>");
      html.append("<h5 class='data'>" + 'Total Fat: ' + item.totalFat + "</h5>");
      html.append("<h5 class='data'>" + 'Carbs: '+  item.carbohydrates + "</h5>");
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
  },
  clearItems: function(){
    this.items = [];
  }
}
