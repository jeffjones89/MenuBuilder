$(document).ready(function(){
  saveMeal.clickEvent();
  $('input[type=submit]').on('click', function(){
    event.preventDefault();
    Menu.fetch().then(function(items){
      items.forEach(function(item){
        var view = new MenuView(item);
        view.render();
      })
    })
  });
});
