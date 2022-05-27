/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// ACRONYM GENERATOR CODE //////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// code inspiration from (Byron Delpinal, 2022)


// this is the input string which collects user data from the input button
// Get first letter of each Word in a String
// reusable function to get the first letter of each word in a string.
const phraseButton = document.querySelector("#phrase-button");

// this is the output 
const convertToAcronym = (phrase) => {
  if (typeof phrase !== "string") return "";


  // Split a string of the expression into characters and return the first character of each word:
  return phrase
    // an array containing the words in the string.
    .split(/-| /) 

    // iterate over the array and return the first letter of each word.
    .map((word) => word.substring(0, 1))
    
    // join the first characters together
    // join method takes a separator as a parameter
    .join("")
    
    // make the output be upper case letters 
    .toUpperCase();
};

// when clicked the event listener goes to the expression
phraseButton.addEventListener("click", () => {
  const phraseElement = document.querySelector("#phrase");
  const phrase = phraseElement.value || "";
  const acronymResultElement = document.querySelector("#acronym-result");



  // the output of the expression will go into a the p tag from html
  acronymResultElement.innerHTML = convertToAcronym(phrase);

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// COLOUR GENERATOR CODE //////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function generateRandomHexColour() {
    // Math.random()*16777215)
    // Multiply a random number (0 - 1) by 16777215 which is decimal number for ffffff (white)
    // Convert this decimal to a string with a parameter that will return a hexadecimal value
    // Use a Math.floor method to make sure we only get integers
    var randomColour = '#' + Math.floor(Math.random()*16777215).toString(16);
   
    // find this class and change the background colour the random hex value above
    document.querySelector(".random-colour").style.backgroundColor = randomColour; 
    
    // find this class and replace the content with the random hex value
    document.querySelector(".random-colour__hex-value").textContent = randomColour;
  }
  
  // on window load run the generateRandomHexColour function to ensure
  // we have a colour and text hex value to start with.
  window.onload = function() {
    generateRandomHexColour();
  };


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// POMODORO CODE //////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // (learn-webdev, 2020)
// learn-webdev. (2020). Pomodoro Timer | Javascript Beginner Project Tutorial [YouTube Video]. Retrieved from https://www.youtube.com/watch?v=vAEG6OVCass&t=271s&ab_channel=learn-webdev

var start_p = document.getElementById('start_p');
var stop_p = document.getElementById('stop_p');
var reset_p = document.getElementById('reset_p');

// work timer
var wm = document.getElementById('wminutes');
var ws = document.getElementById('wseconds');

// break timer 
var bm = document.getElementById('bminutes');
var bs = document.getElementById('bseconds');

// store a refrence to a timer variable 
var startTimer; 

// timer will fire every second when clicked but it is 

start_p.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer_p, 1000)
    } else {
        alert("Timer is already running");
    }
})
// reset timer
reset_p.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

// stop timer
stop_p.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})



// create a function to count down
// inner html is the work text 
function timer_p(){
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// STOPWATCH CODE //////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Global variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;

// Event listeners
start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

// Update the timer to add seconds each time
function timer () {
	seconds++;

	// Formating  our time
	let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds - (hrs * 3600)) / 60);
	let secs = seconds % 60;

	if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;

	time_el.innerText = `${hrs}:${mins}:${secs}`;
}

// starts the inclination of the interval 
function start() {
	if (interval) {
		return
	}

	interval = setInterval(timer, 1000);
}


// stops the timer but keeps it at the interval it was before
function stop () {
	clearInterval(interval);
	interval = null;
}


// resets the timer to be 0
function reset () {
	stop();
	seconds = 0;
	time_el.innerText = '00:00:00';
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// CHANGE BACKGROUND CODE //////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function to change the background colour when the button is pressed
// the colour the background is also is reflected with the button colour
function changeStyle(){
    document.body.style.backgroundColor = "#F0F0F0";
}
function changeStyleRed(){
    document.body.style.backgroundColor = "#f44336";
}
function changeStyleOrange(){
    document.body.style.backgroundColor = "#f6bd60";
}
function changeStyleYellow(){
    document.body.style.backgroundColor = "#fdffb6";
}
function changeStyleGreen(){
    document.body.style.backgroundColor = "#4CAF50";
}
function changeStyleBlue(){
    document.body.style.backgroundColor = "#008CBA";
}
function changeStylePurple(){
    document.body.style.backgroundColor = "#bdb2ff";
}
function changeStylePink(){
    document.body.style.backgroundColor = "#ffc6ff";
}
function changeStyleBlack(){
    document.body.style.backgroundColor = "#495057";
}

