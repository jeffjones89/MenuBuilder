var mealView = {
  $el: $("#meal"),
  meal: [],
  appendItem: function(item){
  $("#meal").append("<div class = 'menu'>" + item.item_name + "</div>")

  console.log(this)
  }
}
