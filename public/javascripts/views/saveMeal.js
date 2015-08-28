var saveMeal = {
  create: function(){
    var self = this;
    var info ={
      mealName: $('#mealName').val(),
      calories: meal.calories,
      carbohydrates: meal.carbs,
      protein: meal.protein,
      totalFat: meal.fat
    };
    self.save(info);
    $('#mealName').val('');
  },
  save: function(info){
    var url = "/meals";
    var request = $.ajax({
      url: url,
      method: "post",
      data: JSON.stringify(info),
      contentType: 'application/json'
    }).done(function(){
      $('#flash').slideDown(function() {
    setTimeout(function() {
        $('#flash').slideUp();
    }, 3000);
});
    }).fail(function(){
      console.log("Ajax Unsuccessful");
    });
    return request
  },
  clear: function(){

  }
};
