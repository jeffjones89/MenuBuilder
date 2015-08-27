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
    var toggleDiv = self.$el.find('.itemInfo');
    self.hideInfoDivs();
    add.on('click', function(){
      var itemObj = self.item;
      self.addToMeal(itemObj);
      meal.appendItem(itemObj);
      meal.render();
    });

    show.on('click', function(){
      toggleDiv.slideToggle(400);
    })
  },
  itemTemplate: function(item){
    var self = this;
    var html = $("<div>");
      html.append("<h4 class = itemName>" +  item.itemName + "</h4>");
      html.append("<div class = itemInfo>");
    var itemInfo = html.find(".itemInfo");
      itemInfo.append("<h5 class='data'>" + 'Brand Name: ' + item.brandName + "</h5>");
      itemInfo.append("<h5 class='data'>" + 'Calories: '+ item.calories + "</h5>");
      itemInfo.append("<h5 class='data'>" + 'Protein: ' + item.protein + "</h5>");
      itemInfo.append("<h5 class='data'>"+ 'Total Fat: ' + item.totalFat + "</h5>");
      itemInfo.append("<h5 class='data'>" + 'Carbs: '+  item.carbohydrates + "</h5>");
      itemInfo.append("<button class = 'addItem' type = 'button'>Add to Meal</button>");
    return(html);
  },
  addToMeal: function(item){
    mealArr = meal.items;
    mealArr.push(item);
    return mealArr;
  },
  hideInfoDivs: function(){
    $('.itemInfo').hide();
  }
}
