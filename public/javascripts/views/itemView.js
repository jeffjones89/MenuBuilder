var ItemView = (function(item){
  this.item = item;
  this.$el = $("<div class ='item'></div>")
});

ItemView.prototype = {
  render: function(){
    var self = this;
    self.$el.html(self.itemTemplate(self.item));
    $(".item").append(self.$el);
  },
  itemTemplate: function(item){
    var html = $("<div class='item'>");
    html.append("<h6>" +  item.item_name + "</h6>")
    html.append("<h5>" + 'Calories: '+ item.calories + "</h5>");
    html.append("<h5>" + 'Protein: ' + item.protein + "</h5>");
    html.append("<h5>"+ 'Total Fat: ' + item.total_fat + "</h5>");
    html.append("<h5>" + 'Carbs: '+  item.carbohydrates + "</h5>");
    html.append("<button id = 'add_to_meal' type = 'button'>Add to Meal</button>");
    return(html)
  },
  addToMeal: function(){
    // var self = this;
    //
    // if()
  }
}
