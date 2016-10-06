// reference for time alternative http://jsfiddle.net/wr1ua0db/17/

var play = false;
var currentTime = document.getElementsByClassName('current-time')[0];
var breakLength = document.getElementsByClassName('break-length')[0];
var sessionLength = document.getElementsByClassName('session-length')[0];
// var currentMin = document.getElementsByClassName('current-min')[0];
// var currentSec = document.getElementsByClassName('current-sec')[0];
var playBtn = document.getElementsByClassName('play-btn')[0];
var resetBtn =  document.getElementsByClassName('reset-btn')[0];
// var sec = 60;
var incrementBtn = document.getElementsByClassName('increment-btn');
var defaultTime = 25 * 60;
var secondCount, 
    min, 
    sec; 

document.addEventListener('DOMContentLoaded', reset, false);

for(var i = 0; i < incrementBtn.length; i++){
    incrementBtn[i].addEventListener("click", changeLength);
}

breakLength.innerHTML = '5';
sessionLength.innerHTML = '25';

function startCount(){
  if(play === false){
   clearInterval(secondCount);
  }else{
    secondCount = setInterval(countDown, 1000);
  }  
}

function countDown(){
   sec --;
  // if(sec === -1){
  //   sec = 59;
  // }
  // if(sec < 10 && sec >= 0){
  //   sec = "0"+sec;
  // }  
  // currentSec.innerHTML = sec;
  currentTime.innerHTML = min + ":" + sec;
  
}
playBtn.addEventListener("click", function(){
  play = !play;
  startCount();
});

resetBtn.addEventListener("click", reset);


function reset(){
  min = parseInt(defaultTime / 60, 10);
  sec = parseInt(defaultTime % 60, 10);
  sec = sec < 10 ? "0" + sec : sec;
  currentTime.innerHTML = min + ":" + sec;
  // currentMin.innerHTML = '25';
  // currentSec.innerHTML = '00';
  sessionLength.innerHTML = '25';
  breakLength.innerHTML = '5';
  stop();
}

function changeLength(){
  var minInterval;
  var currentLength = this.parentNode.children[1];  
  if (this.innerHTML === '+'){
    minInterval = 1;
  }else{
    minInterval = -1;
  }
  if(parseInt(currentLength.innerHTML, 10) >= 2 || minInterval === 1){
    currentLength.innerHTML = parseInt(currentLength.innerHTML,10)+minInterval;
    if(this.classList.contains('session')){
      stop();
      // currentMin.innerHTML = parseInt(currentMin.innerHTML, 10)+min;
      // currentSec.innerHTML = '00';
      currentTime.innerHTML = parseInt(min+minInterval,10)+":"+00;
    }
  }  
}
function stop(){
  clearInterval(secondCount);
  play = false;
 // sec = parseInt(defaultTime % 60, 10);
 //  sec = sec < 10 ? "0" + sec : sec;
}