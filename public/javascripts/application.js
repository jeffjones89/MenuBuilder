$(document).ready(function(){

  //setting up click events on clear button, search and save. Search click event fires API call, and creates array of Items
  var clear = $('#clear-meal');
  var save = $('#save-meal');
  var search = $('input[type=submit]');

  clear.on('click', function(event){
    meal.clearDiv();
    meal.clearItems();
    meal.render();
  });

  save.on('click', function(event){
    event.preventDefault();
    saveMeal.create();
  });

  search.on('click', function(event){
    event.preventDefault();
    Menu.fetch().then(function(items){
      items.forEach(function(item){
        var view = new MenuView(item);
        view.render();
      });
    });
  });
});
