var MenuView = (function(item){
  this.item = item;
  this.$el = $("<div class ='item'></div>");
});

MenuView.prototype = {
  render: function(){
    var self = this;
    self.$el.html(self.itemTemplate(self.item));
    $(".items").append(self.$el);
    //defining click event buttons within each item view
    var add = self.$el.find('.addItem');
    var show = self.$el.find('.itemName');
    var toggleItemInfo = self.$el.find('.itemInfo');
    var save = $('#save-meal');
    //starting the nutriional information hidden
    self.hideInfoDivs();
    //adding items to meal div
    add.on('click', function(){
      var itemObj = self.item;
      self.addToMeal(itemObj);
      meal.appendItem(itemObj);
      meal.render();
    });
    //toggle function for nutritional information
    show.on('click', function(){
      toggleItemInfo.slideToggle(400);
    });
  },
  //below is the view for each Item
  itemTemplate: function(item){
    var self = this;
    var html = $("<div>");
      html.append("<h4 class = itemName>" +  item.itemName + "</h4>");
      html.append("<div class = itemInfo>");
    //appending the itemInfo div to toggle nutritional information
    var itemInfo = html.find(".itemInfo");
      itemInfo.append("<h5 class='data'>" + 'Brand Name: ' + item.brandName + "</h5>");
      itemInfo.append("<h5 class='data'>" + 'Calories: '+ item.calories + "</h5>");
      itemInfo.append("<h5 class='data'>" + 'Protein: ' + item.protein + 'g' + "</h5>");
      itemInfo.append("<h5 class='data'>"+ 'Total Fat: ' + item.totalFat + 'g' + "</h5>");
      itemInfo.append("<h5 class='data'>" + 'Carbs: '+  item.carbohydrates + 'g' + "</h5>");
      itemInfo.append("<button class = 'addItem' type = 'button'>Add to Meal</button>");
    return(html);
  },
  addToMeal: function(item){
    //this adds items to the Meal.Items array for the Meal View. Probably don't need to abstract meal.items, but need to check other areas of code.
    var self = this;
    var addItem = self.$el.find('.addItem');
    mealArr = meal.items;
    mealArr.push(item);
    self.hideOneDiv();
    addItem.on('click', function(){
      hideOneDiv();
    });
    return mealArr;
  },
  hideInfoDivs: function(){
    $('.itemInfo').hide();
  },
  hideOneDiv: function(){
    var self = this;
    var itemDiv = self.$el.find('.itemInfo');
    itemDiv.fadeOut(400);
  }
};
