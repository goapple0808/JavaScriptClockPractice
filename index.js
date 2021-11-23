getCurrentTime();
setInterval(function(){
  getCurrentTime();
}, 1000);

function setSecondFormat(sec){
  if (sec < 10){
    return "0" + sec;
  }
  else{
    return sec;
  }
}

function getCurrentTime(){
  let currentTime = new Date();
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let second = currentTime.getSeconds();
  let half = "";
  let timeText = "";
  if(hour === 12){
    half = "PM";
  }
  else if(hour === 0){
    half = "AM";
    hour = 12;
  }
  else if(hour > 12){
    half = "PM";
    hour = hour - 12;
  }
  else{
    half = "AM";
  }
  second = setSecondFormat(second);
  minute = setSecondFormat(minute);
  hour = setSecondFormat(hour);
  $(".time").text(hour + ":" + minute + ":" + second + " " + half);
}
