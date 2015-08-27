var saveMeal = {
  save: function(){
    var self = this;
      $('#save-meal').on('click', function(){
        event.preventDefault();
        self.create();
      });
    },
  create: function(){
    var info ={
      mealName: $('#mealName').val(),
      calories: meal.calories,
      carbohydrates: meal.carbs,
      protein: meal.protein,
      totalFat: meal.fat
    }
    console.log(info)
    $('#mealName').val('');
  }
};
