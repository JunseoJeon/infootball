let numArr = [-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
const slides = document.querySelector('.wrapper')
const prev = document.querySelector('.leftBtn')
const next = document.querySelector('.rightBtn')
const slideWidth = 130
let currentIdx = 0;
let leagueNum = [39,140,135,78,61]
$(function(){
    for(let i=0; i<numArr.length; i++){
        $('.wrapper').append('<button class='+numArr[i]+'_date>')
        $('.'+numArr[i]+'_date').append(strDateAddMinus(getToday(),numArr[i]))
        $('.wrapper').css('transform','translateX(-1820px)')
    }
    let wrapper = document.querySelector('.wrapper');
    let slides = wrapper.childElementCount;
    $('.wrapper').css('width',slideWidth*slides+'px')
})
function moveSlide(num){
    $('.wrapper').css('left',-num*910+'px')
    currentIdx = num;
}
next.addEventListener('click',function(){
    moveSlide(currentIdx + 1);
    console.log(currentIdx)
    if(currentIdx === 3)
    {
      next.disabled = true;
    }
    else if(currentIdx > -2){
      prev.disabled = false;
    }  
})

prev.addEventListener('click',function(){
    moveSlide(currentIdx -1);
    if(currentIdx === -2){
      prev.disabled = true;
    }
    else if(currentIdx < 3){
      next.disabled = false;
    } 
})

$(function(){
/*
    for(let i=0; i<leagueNum.length; i++){
        let settings = 
        {
          "async": true,
          "crossDomain": true,
          "url": "https://api-football-v1.p.rapidapi.com/v3/fixtures?date="+getToday()+"&league="+leagueNum[i]+"&season=2020&timezone=Asia%2FSeoul",
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "c5c22f4670msh948db228db3150fp12cd4cjsn6d9745526fcd",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
              }
        };
      
        $.ajax(settings).done(function (response) {
          for(let h=0; h<response.response.length; h++)
          { 
            let date = new Date(response.response[h].fixture.timestamp*1000)
            const isoString = date.toISOString();
            let timeStringOnly = date.toTimeString();
        
            $('.fixtWrap').append('<table class='+leagueNum[i]+'_'+[h]+'_table>')
            $('.'+leagueNum[i]+'_'+[h]+'_table').append('<tr class='+leagueNum[i]+'_'+[h]+'_tr>')
            $('.'+leagueNum[i]+'_'+[h]+'_tr').append('<th>홈')
            $('.'+leagueNum[i]+'_'+[h]+'_tr').append('<th>')
            $('.'+leagueNum[i]+'_'+[h]+'_tr').append('<th>어웨이')
          }
        }) 
      }*/
   
    $('.fixtWrap').append('<table class=testtable>')
    $('.testtable').append('<tr>')
    $('.testtable').append('<th>홈')
    $('.testtable').append('<th class=noback>')
    $('.testtable').append('<th>어웨이')
    $('.testtable').append('</tr>')
    $('.testtable').append('<tr>')
    $('.testtable').append('<td><img src=https://media.api-sports.io/football/teams/66.png> <br>아스날')
    $('.testtable').append('<td> 02 : 00')
    $('.testtable').append('<td> 에버튼')
    $('.testtable').append('</tr>')
    $('.testtable').append('<tr>')
    $('.testtable').append('<td> 1')
    $('.testtable').append('<td> 경기 종료')
    $('.testtable').append('<td> 0')
    $('.testtable').append('</tr>')
    $('.testtable').append('<tr>')
    $('.testtable').append('<td colspan=3 class=ref>심판이름 ')
    $('.testtable').append('</tr> ')
})


$('.dateBtns').on('click','button',function(event){
  let innerVal = $(event.target)
  console.log(innerVal.text())
})

$('.dateBtns').on('mouseenter','button',function(e){
  $(e.target).css('background-color','red')
  return false;
})

$('.dateBtns').on('mouseleave','button',function(e){
  $(e.target).css('background-color','#aca790')
  return false;
})
let a = 10
let state = false
$('.test').click(function(){
  for(let i=0; i<7; i++)
  {
    a++
    console.log(a)
  }
  state = true;
  console.log(state)
})
