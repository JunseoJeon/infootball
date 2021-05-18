$('.leagueSelect button').click(function(e){
  let value = $(e.target).val();
  console.log(value)
})

$(function(){
  $('.date').val(getToday())
  let todayDate = $('.date').val()
})

$('.date').change(function(e){
  console.log($(e.target).val())
})