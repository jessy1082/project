var myTime

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
   myTime=currentTime
    console.log('currenttime', typeof currentTime)
    /* display contents of variable currentTime on HTML file */
    document.getElementById("clock").innerHTML = currentTime;

    /*function will becalled after 1000 milliseconds=1sec*/
    setTimeout(showTime , 1000)
}
  showTime()

   var setAlarm = function setAlarm(){
    console.log('clicked')
    const alarmSet =document.getElementById("myText").value
    console.log('alarmSet:', alarmSet)

    if ( alarmSet === myTime) {
      var alarmelement = document.createElement('audio');
      alarmelement.setAttribute('id', 'alarm-sound');
      var sourceelement = document.createElement('source');
      sourceelement.setAttribute('src','bell_alarm1.mp3');
      dsourceelement.setAttribute('src', 'alarm-sound');
      alarmelement.appendchild(sourceelement);
    }
        
  }