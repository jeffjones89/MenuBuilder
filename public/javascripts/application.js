$(document).ready(function(){
  $('#save-meal').on('click', function(event){
    event.preventDefault();
    saveMeal.create();
  });

  $('input[type=submit]').on('click', function(event){
    event.preventDefault();
    Menu.fetch().then(function(items){
      items.forEach(function(item){
        var view = new MenuView(item);
        view.render();
      })
    })
  });
});
