var saveMeal = {
  //the create function packages the info object that we need to pass to the backend by taking a snapshot of the page.
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
  // ajax call to the backend to save meals to the database, eventually want to add User ID to each meal/associate with user model
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
        $('#flash').slideUp(); //flash message to confirm ajax success for the user. Hidden div shows up for 3 seconds.
    }, 3000);
});
    }).fail(function(){
      console.log("Ajax Unsuccessful");
    });
    return request;
  },
  clear: function(){

  }
};
