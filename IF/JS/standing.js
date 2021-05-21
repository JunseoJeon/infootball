let theadArr = ["순위"," ","팀이름","경기수","승점","승","패","무","득점","실점","득실차"]

$(function(){
    $('.standing-wrap').append('<table class=standing-table>')
    $('.standing-table').append('<thead class=standing-thead>')
    $('.standing-table').append('<tbody class=standing-tbody>')
    for(let i=0; i<theadArr.length; i++)
    {
        $('.standing-thead').append('<th>'+theadArr[i]+'</th>')
    }
    showStanding(39)
})

// $('.leagueSelect button').click(function(e){
//     $('.standing-tbody').empty();
//     showStanding($(e.target).val());
// });


// function showStanding(leagueId){
//     let standingSettings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api-football-v1.p.rapidapi.com/v3/standings?season=2020&league="+leagueId,
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "c5c22f4670msh948db228db3150fp12cd4cjsn6d9745526fcd",
//             "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
//         }
//     };
//     $.ajax(standingSettings).done(function (response) {
//         for(let h=0; h<response.response[0].league.standings[0].length; h++){
//             $(".standing-tbody").append("<tr>")
//             $(".standing-tbody").append("<td>"+response.response[0].league.standings[0][h].rank+"</td>")
//             $(".standing-tbody").append("<td><img src="+response.response[0].league.standings[0][h].team.logo+"></td>")
//             $(".standing-tbody").append("<td>"+translateTeamName(response.response[0].league.standings[0][h].team.name)+"</td>")
//             $(".standing-tbody").append("<td>"+response.response[0].league.standings[0][h].all.played+"</td>")
//             $(".standing-tbody").append("<td>"+response.response[0].league.standings[0][h].all.win+"</td>")
//             $(".standing-tbody").append("<td>"+response.response[0].league.standings[0][h].all.draw+"</td>")
//             $(".standing-tbody").append("<td>"+response.response[0].league.standings[0][h].all.lose+"</td>")
//             $(".standing-tbody").append("<td>"+response.response[0].league.standings[0][h].points+"</td>")
//             $(".standing-tbody").append("<td>"+response.response[0].league.standings[0][h].all.goals.for+"</td>")
//             $(".standing-tbody").append("<td>"+response.response[0].league.standings[0][h].all.goals.against+"</td>")
//             $(".standing-tbody").append("<td>"+response.response[0].league.standings[0][h].goalsDiff+"</td>")
//             $(".standing-tbody").append("</tr>")
//         }
//     });
// }