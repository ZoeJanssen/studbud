// (learn-webdev, 2020)
// learn-webdev. (2020). Pomodoro Timer | Javascript Beginner Project Tutorial [YouTube Video]. Retrieved from https://www.youtube.com/watch?v=vAEG6OVCass&t=271s&ab_channel=learn-webdev

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

// work timer
var wm = document.getElementById('wminutes');
var ws = document.getElementById('wseconds');

// break timer 
var bm = document.getElementById('bminutes');
var bs = document.getElementById('bseconds');

// store a refrence to a timer variable 
var startTimer; 

// timer will fire every second when clicked but it is 

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})
// reset timer
reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

// stop timer
stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})






// create a function to count down
// inner html is the work text 
function timer(){
  // work timer count down
    if(ws.innerText != 0){
    // if does not equal it will go down by 1
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
    ws.innerText = 59;// we call this function each minute
        wm.innerText--;
  }

  // break timer count down
  // if work minutes and work text is 0 and if break seconds is 0 we do the same as above
 if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

  // increment counter by one if one full cycle is completed
  // checking if work minutes is at 0, work seconds is at 0 and if break minutes is at 0 and break seconds at 0
 if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}
