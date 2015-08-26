var ItemView = (function(item){
  this.item = item;
  this.$el = $("<div class ='item'></div>")
});

ItemView.prototype = {
  render: function(){
    var self = this;
    self.$el.html(self.itemTemplate(self.item));
    $(".items").append(self.$el);
  },
  itemTemplate: function(item){
    var html = $("<div>");
    html.append("<h6>" +  item.item_name + "</h6>")
    html.append("<h5>" + 'Calories: '+ item.calories + "</h5>");
    html.append("<h5>" + 'Protein: ' + item.protein + "</h5>");
    html.append("<h5>"+ 'Total Fat: ' + item.total_fat + "</h5>");
    html.append("<h5>" + 'Carbs: '+  item.carbohydrates + "</h5>");
    return(html)
  }
}
