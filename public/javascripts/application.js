$(document).ready(function(){
  var submit = $('input[type=submit]');
  submit.on('click', function(){
    event.preventDefault();
    var restaurant = $('#menu-search').val();
    var url = "https://api.nutritionix.com/v1_1/search/" + restaurant + "?results=0%3A20&cal_min=400&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=32443fbb&appKey=37587913d9144f31f691efdf130a12ab"
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      console.log(response.hits);
    });
 });
});
