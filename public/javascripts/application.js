$(document).ready(function(){
  var submit = $('input[type=submit]');
  submit.on('click', function(){
  event.preventDefault();
    Item.fetch().then(function(items){
      console.log(items);
    })
  });
});
