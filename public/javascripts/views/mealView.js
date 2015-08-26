var mealView = {
  $el: $("#meal"),
  meal: [],
  appendItem: function(item){
  $("#meal").append('<div class = mealItem id = ' + item.id + ">")
  var html = $('#'+ item.id);
  html.append('<h5>' + item.itemName + '</h5>');
  html.append("<h5>" + 'Calories: '+ item.calories + "</h5>");
  html.append("<h5>" + 'Protein: ' + item.protein + "</h5>");
  html.append("<h5>"+ 'Total Fat: ' + item.totalFat + "</h5>");
  html.append("<h5>" + 'Carbs: '+  item.carbohydrates + "</h5>");

  }
}
