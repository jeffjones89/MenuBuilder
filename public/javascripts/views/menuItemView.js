var MenuView = (function(item){
  this.item = item;
  this.$el = $("<div class ='item'></div>")
});

MenuView.prototype = {
  render: function(){
    var self = this;
    self.$el.html(self.itemTemplate(self.item));
    $(".items").append(self.$el);

    var add = self.$el.find('.addItem');
    add.on('click', function(){
      console.log(self);
      var itemObj = self.item;
      self.addToMeal(itemObj);
      mealView.appendItem(itemObj);
    });
  },
  itemTemplate: function(item){
    var html = $("<div>");
    html.append("<h4>" + item.brand_name + "</h4>")
    html.append("<h6>" +  item.item_name + "</h6>");
    html.append("<h5>" + 'Calories: '+ item.calories + "</h5>");
    html.append("<h5>" + 'Protein: ' + item.protein + "</h5>");
    html.append("<h5>"+ 'Total Fat: ' + item.total_fat + "</h5>");
    html.append("<h5>" + 'Carbs: '+  item.carbohydrates + "</h5>");
    html.append("<button class = 'addItem' type = 'button'>Add to Meal</button>");
    return(html);
  },
  addToMeal: function(item){
    mealArr = mealView.meal;
    mealArr.push(item);
    console.log(mealArr);
    return mealArr;
  }
}
