let theadArr = ["순위"," ","팀이름","경기수","승점","승","패","무","득점","실점","득실차"]

$(function(){
    for(let i=0; i<theadArr.length; i++){
        $('.thead').append('<th>'+theadArr[i]+'</th>')
    }
    
})