var ItemView = (function(item){
  this.item = item;
  this.$el = $("<div class ='item'></div>")
});

ItemView.prototype = {
  render: function(){
    var self = this;
    self.$el.html(self.itemTemplate(self.item));
    $("#box-1").append(self.$el);
  },
  itemTemplate: function(item){
    var html = $("<div>");
    html.append("<h4>" + item.calories + "</h4>");
    html.append("<h4>" + item.protein + "</h4>");
    html.append("<h4>" + item.total_fat + "</h4>");
    html.append("<h4>" + item.carbohydrates + "</h4>");
  }
}
