var mealView = {
  $el: $("#meal"),
  meal: [],
  appendItem: function(item){
  $("#meal").append('<div class = mealItem id = ' + item.id + ">")
  var html = $('#'+ item.id);
  html.append('<h5>' + item.itemName + '</h5>');
  
  }
}
