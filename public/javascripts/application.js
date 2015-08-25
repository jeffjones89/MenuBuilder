$(document).ready(function(){
  var submit = $('input[type=submit]');
  submit.on('click', function(){
    event.preventDefault();
    Item.fetch().then(function(items){
      items.forEach(function(item){
        var view = new ItemView(item);
        view.render();
      })
    })
  });
});
