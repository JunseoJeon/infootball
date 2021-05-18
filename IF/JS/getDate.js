function getToday(){
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year+"-"+ month+"-" + day;
}
function strDateAddMinus(strDate, value) {
  var data = new Date(strDate);
  data.setDate(data.getDate() + value);
 
  var dd = data.getDate();
  if (dd < 10){
    dd = '0' + dd
  }
  var mm = data.getMonth() + 1;
  if (mm < 10){
    mm = '0' + mm
  }
  var yy = data.getFullYear();
 
  var result = yy + '-' + mm + '-' + dd;
  return result;
}
