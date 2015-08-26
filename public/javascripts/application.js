$(document).ready(function(){;
  $('input[type=submit]').on('click', function(){
    event.preventDefault();
    Item.fetch().then(function(items){
      items.forEach(function(item){
        var view = new ItemView(item);
        view.render();
      })
    })
  });
});
