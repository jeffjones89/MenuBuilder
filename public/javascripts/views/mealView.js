var mealView = {
  $el: $("#meal"),
  meal: [],
  appendItem: function(item){
  $("#meal").append('<div class = mealItem id = ' + item.id + ">")

  }
}
