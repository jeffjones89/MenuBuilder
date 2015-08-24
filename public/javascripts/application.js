$(document).ready(function(){
  var submit = $('input[type=submit]');
  submit.on('click', function(){
    event.preventDefault();
    var restaurant = $('#menu-search');
    var url = "https://api.nutritionix.com/v1_1/search/" + restaurant.val() + "?results=0%3A20&cal_min=400&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=32443fbb&appKey=37587913d9144f31f691efdf130a12ab"
    $('menu-search').val('');
    $.getJSON(url).
    then(function(response){
      $('#menu-search').val('');
      var itemsArr = response.hits;
      console.log(itemsArr[0].fields.item_id)
      var items = [];
      for(var i = 0; i < itemsArr.length; i++){
        items.push(itemsArr[i].fields.item_id)  // THIS IS WHERE YOU CAN PULL PARAMATERS FROM OBJECT
        $.getJSON();
      }
      return items;
    }).then(function(items){
      console.log(items);
    });
 });
});
