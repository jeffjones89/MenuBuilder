var ItemView = (function(item){
  this.item = item;
  this.$el = $("<div class ='item'></div>")
});

ItemView.prototype = {
  render: function(){
    var self = this;
    self.$el.html(self.itemTemplate(self.item));
    $("#box1").append(self.$el);
  },
  itemTemplate: function(item){
    var html = $("<div>");
    html.append("<h3>" +  item.item_name + "</h3>")
    html.append("<h4>" + 'Calories: '+ item.calories + "</h4>");
    html.append("<h4>" + 'Protein: ' + item.protein + "</h4>");
    html.append("<h4>"+ 'Total Fat: ' + item.total_fat + "</h4>");
    html.append("<h4>" + 'Carbs: '+  item.carbohydrates + "</h4>");
    return(html)
  }
}
