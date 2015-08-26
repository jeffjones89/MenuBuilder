var Item = function(info){
  var self = this;
  this.meal = [];
  this.brand_name = info.brand_name;
  this.item_name = info.item_name;
  this.calories = info.nf_calories;
  this.protein = info.nf_protein;
  this.total_fat = info.nf_total_fat;
  this.carbohydrates = info.nf_total_carbohydrate;
};

Item.fetch = function(){
  var restaurant = $('#menu-search').val();
  var url = "https://api.nutritionix.com/v1_1/search/"+ restaurant +"?results=0%3A20&cal_min=450&cal_max=1500&fields=*&appId=32443fbb&appKey=37587913d9144f31f691efdf130a12ab";
  var request = $.getJSON(url).then(function(response){
    $('#menu-search').val('');
    var itemsRes = response.hits;
    var items = [];
    for (var i = 0; i < itemsRes.length; i++){
      items.push(new Item(itemsRes[i].fields))
    }
    return items;
  }).fail(function(response){
    console.log("js failed to load");
  })
  return request;
};
