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
      var itemObj = self.item;
      self.addToMeal(itemObj);
      mealView.appendItem(itemObj);
      mealView.render();
    });
  },
  itemTemplate: function(item){
    var html = $("<div>");
    html.append("<h4>" +  item.itemName + "</h6>");
    html.append("<h5>" + 'Brand Name: ' + item.brandName + "</h5>");
    html.append("<h5>" + 'Calories: '+ item.calories + "</h5>");
    html.append("<h5>" + 'Protein: ' + item.protein + "</h5>");
    html.append("<h5>"+ 'Total Fat: ' + item.totalFat + "</h5>");
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
