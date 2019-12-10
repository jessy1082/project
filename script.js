var alarm; 

function showTime() {
    var time= new Date();
    var hr = time.getHours(); //0 -23
    var min = time.getMinutes(); // 0-59
    var sec = time.getSeconds(); // 0-59
    
    /*if true statemnet after ? will be executed, if not after : it's executed */
    hr= (hr<10) ? "0" + hr: hr;
    min= (min<10) ? "0" + min: min;
    sec= (sec<10) ? "0" + sec: sec;

    /*displays time*/
    var currentTime = hr + ":"+ min + ":" + sec;
   console.log('currenttime', typeof currentTime)
    /* display contents of variable currentTime on HTML file */
    document.getElementById("clock").innerHTML = currentTime;

    /*function will becalled after 1000 milliseconds=1sec*/
    setTimeout(showTime , 1000)
  }
  showTime()

//function setAlarm() {
  //  var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
    //console.log('alarmTime:' + alarmTime);
 //}
  // set the alarm to value
  //  document.getElementsById("clock").inner= "setAlarm";
 // }

    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;

    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec);
    console.log('alarmTime:' + alarmTime);

    document.getElementById('alarmhrs').disabled = true;
    document.getElementById('alarmmins').disabled = true;
    document.getElementById('alarmsecs').disabled = true;


    if (alarmTime == currentTime) {
      sound.play();
      }
  
  },1000);