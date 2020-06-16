console.log("wall clock exersise")

function updateClock() {
  
  let currentTime = new Date();
  
  let currentHour = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();
  
  currentHour = (currentHour > 12) ? 12 - currentHour : currentHour;
  currentHour = (currentHour == 0) ? 12 : currentHour;

  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  let timeOfDay = (currentTime < 12) ? "AM" : "PM";

  let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  //console.log(currentTimeStr);

  document.getElementById('clock').innerHTML = currentTimeStr;

}

//updateClock();


