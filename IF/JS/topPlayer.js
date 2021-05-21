$(function(){
    $('.topPlayer-table').append('<thead class=topPlayer-thead>')
    $('.topPlayer-thead').append('<tr class=topPlayer-thead-tr-button>')
    $('.topPlayer-thead-tr-button').append('<th><button value=topscorers>득점왕')
    $('.topPlayer-thead-tr-button').append('<th><button value=topassists>도움왕')
    $('.topPlayer-thead-tr-button').append('<th><button value=topredcards>수집가')
    $('.topPlayer-thead-tr-button').append('<th><button value=topyellowcards>수집가')
    $('.topPlayer-thead').append('<tr>')
    $('.topPlayer-thead').append('<th>')
    $('.topPlayer-thead').append('<th>선수명')
    $('.topPlayer-thead').append('<th>경기 수')
    $('.topPlayer-thead').append('<th>골 수')
    $('.topPlayer-table').append('<tbody class=topPlayer-tbody>')
    
    showTopPlayer(39,'topscorers')
})


// function showTopPlayer(leagueId,buttonValue){
//     const settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api-football-v1.p.rapidapi.com/v3/players/"+buttonValue+"?league="+leagueId+"&season=2020",
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "c5c22f4670msh948db228db3150fp12cd4cjsn6d9745526fcd",
//             "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
//         }
//     };

//     $.ajax(settings).done(function (response) {
//         for(let i=0; i<response.response.length; i++)
//         {   
//             $('.topPlayer-tbody').append('<tr class=topPlayer-tbody-'+[i]+'tr>')
//             $('.topPlayer-tbody-'+[i]+'tr').append('<td><img src='+response.response[i].player.photo+'>')
//             $('.topPlayer-tbody-'+[i]+'tr').append('<td>'+response.response[i].player.firstname+'&nbsp;'+response.response[i].player.lastname)
//             $('.topPlayer-tbody-'+[i]+'tr').append('<td>'+response.response[i].statistics[0].games.appearences)
//             $('.topPlayer-tbody-'+[i]+'tr').append('<td>'+response.response[i].statistics[0].goals.total)
//         }
//     });
// }