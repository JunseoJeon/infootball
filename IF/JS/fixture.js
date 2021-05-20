let leagueNum = [39,140,135,78,61]

// $(function(){
//   $('.date').val(getToday())
//   let todayDate = $('.date').val()
//   for(let i=0; i<leagueNum.length; i++)
//   {
//     let settings = 
//     {
//       "async": true,
//       "crossDomain": true,
//       "url": "https://api-football-v1.p.rapidapi.com/v3/fixtures?date="+todayDate+"&league="+leagueNum[i]+"&season=2020&timezone=Asia%2FSeoul",
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-key": "c5c22f4670msh948db228db3150fp12cd4cjsn6d9745526fcd",
//         "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
//           }
//     };

//     $.ajax(settings).done(function (response) {
//       for(let h=0; h<response.response.length; h++)
//       { 
//         let dates =new Date(response.response[h].fixture.timestamp*1000)
//         let timeStringOnly = dates.toTimeString();
//         $('.showFixt').append('<table class='+leagueNum[i]+'_'+[h]+'_table>')
//         $('.'+leagueNum[i]+'_'+[h]+'_table').append('<tr>')
//         $('.'+leagueNum[i]+'_'+[h]+'_table').append('<th>홈')
//         $('.'+leagueNum[i]+'_'+[h]+'_table').append('<th>'+translateLeagueName(response.response[h].league.name))
//         $('.'+leagueNum[i]+'_'+[h]+'_table').append('<th>어웨이')
//         $('.'+leagueNum[i]+'_'+[h]+'_table').append('<tr>')
//         $('.'+leagueNum[i]+'_'+[h]+'_table').append('<td><img src='+response.response[h].teams.home.logo+'><br>'+translateTeamName(response.response[h].teams.home.name))
//         $('.'+leagueNum[i]+'_'+[h]+'_table').append('<td>'+timeStringOnly.slice(0,5))
//         $('.'+leagueNum[i]+'_'+[h]+'_table').append('<td><img src='+response.response[h].teams.away.logo+'><br>'+translateTeamName(response.response[h].teams.away.name))
//         $('.'+leagueNum[i]+'_'+[h]+'_table').append('<tr>')
//         $('.'+leagueNum[i]+'_'+[h]+'_table').append('<td>'+response.response[h].goals.home)
//         $('.'+leagueNum[i]+'_'+[h]+'_table').append('<td>'+translateStatus(response.response[h].fixture.status.short))
//         $('.'+leagueNum[i]+'_'+[h]+'_table').append('<td>'+response.response[h].goals.away)
//         $('.'+leagueNum[i]+'_'+[h]+'_table').append('<tr>')
//         $('.'+leagueNum[i]+'_'+[h]+'_table').append('<td colspan=3>'+response.response[h].fixture.referee)

//       };
//     });
//   };
// });

$('.date').change(function(e){
  $('.showFixt').empty()
  let targetVal = $(e.target).val()
  for(let i=0; i<leagueNum.length; i++)
  {
    let settings = 
    {
      "async": true,
      "crossDomain": true,
      "url": "https://api-football-v1.p.rapidapi.com/v3/fixtures?date="+targetVal+"&league="+leagueNum[i]+"&season=2020&timezone=Asia%2FSeoul",
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "c5c22f4670msh948db228db3150fp12cd4cjsn6d9745526fcd",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
          }
    };

    $.ajax(settings).done(function (response) {
      for(let h=0; h<response.response.length; h++)
      { 
        let dates =new Date(response.response[h].fixture.timestamp*1000)
        let timeStringOnly = dates.toTimeString();
        $('.showFixt').append('<table class='+leagueNum[i]+'_'+[h]+'_table>')
        $('.'+leagueNum[i]+'_'+[h]+'_table').append('<tr>')
        $('.'+leagueNum[i]+'_'+[h]+'_table').append('<th>홈')
        $('.'+leagueNum[i]+'_'+[h]+'_table').append('<th>'+translateLeagueName(response.response[h].league.name))
        $('.'+leagueNum[i]+'_'+[h]+'_table').append('<th>어웨이')
        $('.'+leagueNum[i]+'_'+[h]+'_table').append('<tr>')
        $('.'+leagueNum[i]+'_'+[h]+'_table').append('<td><img src='+response.response[h].teams.home.logo+'><br>'+translateTeamName(response.response[h].teams.home.name))
        $('.'+leagueNum[i]+'_'+[h]+'_table').append('<td>'+timeStringOnly.slice(0,5))
        $('.'+leagueNum[i]+'_'+[h]+'_table').append('<td><img src='+response.response[h].teams.away.logo+'><br>'+translateTeamName(response.response[h].teams.away.name))
        $('.'+leagueNum[i]+'_'+[h]+'_table').append('<tr>')
        $('.'+leagueNum[i]+'_'+[h]+'_table').append('<td>'+response.response[h].goals.home)
        $('.'+leagueNum[i]+'_'+[h]+'_table').append('<td>'+translateStatus(response.response[h].fixture.status.short))
        $('.'+leagueNum[i]+'_'+[h]+'_table').append('<td>'+response.response[h].goals.away)
        $('.'+leagueNum[i]+'_'+[h]+'_table').append('<tr>')
        $('.'+leagueNum[i]+'_'+[h]+'_table').append('<td colspan=3>'+response.response[h].fixture.referee)

      };
    });
  };
})

$('.leagueSelect button').click(function(e){
  let value = $(e.target).val();
  console.log(value)
})

