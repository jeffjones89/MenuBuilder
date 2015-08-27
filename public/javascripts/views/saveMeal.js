var saveMeal = {
  clickEvent: function(){
    var self = this;
      $('#save-meal').on('click', function(){
        event.preventDefault();
        self.create();
      });
    },
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
    var url = "http://localhost:3000/meals";
    var request = $.ajax({
      url: url,
      method: "post",
      data: JSON.stringify(info),
      contentType: 'application/json'
    }).done(function(){
      alert("Meal Saved!")
    }).fail(function(){
      console.log("Ajax Unsuccessful");
    });
    return request
  },
  
};
