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
    var show = self.$el.find('.itemName');


    add.on('click', function(){
      var itemObj = self.item;
      self.addToMeal(itemObj);
      meal.appendItem(itemObj);
      meal.render();
    });
  },
  itemTemplate: function(item){
    var html = $("<div>");
    html.append("<h4>" +  item.itemName + "</h4>");
    html.append("<h5 id='data'>" + 'Brand Name: ' + item.brandName + "</h5>");
    html.append("<h5 id='data'>" + 'Calories: '+ item.calories + "</h5>");
    html.append("<h5 id='data'>" + 'Protein: ' + item.protein + "</h5>");
    html.append("<h5 id='data'>"+ 'Total Fat: ' + item.totalFat + "</h5>");
    html.append("<h5 id='data'>" + 'Carbs: '+  item.carbohydrates + "</h5>");
    html.append("<button class = 'addItem' type = 'button'>Add to Meal</button>");
    return(html);
  },
  addToMeal: function(item){
    mealArr = meal.items;
    mealArr.push(item);
    return mealArr;
  }
}
