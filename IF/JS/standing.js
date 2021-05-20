let theadArr = ["순위"," ","팀이름","경기수","승점","승","패","무","득점","실점","득실차"]

$(function(){
    $('.standing-wrap').append('<table class=39_Table>')
    for(let i=0; i<theadArr.length; i++)
    {
        $('.39_Table').append('<th>'+theadArr[i]+'</th>')
    }
    let standingSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api-football-v1.p.rapidapi.com/v3/standings?season=2020&league=39",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c5c22f4670msh948db228db3150fp12cd4cjsn6d9745526fcd",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
    };

    $.ajax(standingSettings).done(function (response) {
        for(let h=0; h<response.response[0].league.standings[0].length; h++){
            $(".39_Table").append("<tr>")
            $(".39_Table").append("<td>"+response.response[0].league.standings[0][h].rank+"</td>")
            $(".39_Table").append("<td><img src="+response.response[0].league.standings[0][h].team.logo+"></td>")
            $(".39_Table").append("<td>"+translateTeamName(response.response[0].league.standings[0][h].team.name)+"</td>")
            $(".39_Table").append("<td>"+response.response[0].league.standings[0][h].all.played+"</td>")
            $(".39_Table").append("<td>"+response.response[0].league.standings[0][h].all.win+"</td>")
            $(".39_Table").append("<td>"+response.response[0].league.standings[0][h].all.draw+"</td>")
            $(".39_Table").append("<td>"+response.response[0].league.standings[0][h].all.lose+"</td>")
            $(".39_Table").append("<td>"+response.response[0].league.standings[0][h].points+"</td>")
            $(".39_Table").append("<td>"+response.response[0].league.standings[0][h].all.goals.for+"</td>")
            $(".39_Table").append("<td>"+response.response[0].league.standings[0][h].all.goals.against+"</td>")
            $(".39_Table").append("<td>"+response.response[0].league.standings[0][h].goalsDiff+"</td>")
            $(".39_Table").append("</tr>")
        }
    });
})