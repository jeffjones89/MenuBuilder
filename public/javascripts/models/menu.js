//the Menu object handles the initial fetch and creation of items from the API, and the reset and clear functionality clears the page when another API request fires
var Menu = {
fetch: function(){
  this.reset();
  var restaurant = $('#menu-search').val();
  var url = "https://api.nutritionix.com/v1_1/search/"+ restaurant +"?results=0%3A20&cal_min=450&cal_max=1500&fields=*&appId=32443fbb&appKey=37587913d9144f31f691efdf130a12ab";
  var request = $.getJSON(url).then(function(response){
    $('#menu-search').val('');
    var itemsRes = response.hits; //.hits is an array in the object that the nutritionix API returns
    var items = [];
    for (var i = 0; i < itemsRes.length; i++){
      items.push(new MenuItem(itemsRes[i].fields));
    }
    return items;
  }).fail(function(response){
    console.log("js failed to load");
  });
  return request;
},
  clearDiv: function(){
    $('#menu').html('<p id = "menuHeader">Menu Items</p>');
  },
  reset: function(){
    this.clearDiv();
    meal.clearDiv();
    meal.clearItems();
    meal.render();
  }
};
