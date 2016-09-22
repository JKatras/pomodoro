var play = false;
var breakLength = document.getElementsByClassName('break-length')[0];
var sessionLength = document.getElementsByClassName('session-length')[0];
var currentMin = document.getElementsByClassName('current-min')[0];
var currentSec = document.getElementsByClassName('current-sec')[0];
var playBtn = document.getElementsByClassName('play-btn')[0];
var secondCount;
var sec = 60;

//currentMin.innerHTML = 25;
//currentSec.innerHTML = '00';

breakLength.innerHTML = '5';
sessionLength.innerHTML = '25';

function startCount(){
  secondCount = setInterval(countDown, 1000);
}
function countDown(){
  sec -= 1;
  currentSec.innerHTML = sec;
}
playBtn.addEventListener("click",function(){
  console.log('started');
  startCount();
});