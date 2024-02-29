var id = "unassigned id";

// get references to buttons and add event listeners
var toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", toggleTimer);

var snoozeButton = document.getElementById("snoozeButton");
snoozeButton.addEventListener("click", snoozeTimer);

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetTimer);

var closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", closePopup);

var timerRunning = false;
var timeRemaining = document.getElementById("timeRemaining");
var timerDone = "Your timer is done!";
var isStopped = true;

// function to switch the button between 'Start' and 'Stop'
function toggleTimer() {
    console.log("Toggle")
    // if timer is not running, display start button. otherwise, stop button
    if (!timerRunning) {
        startTimer();
        toggleButton.innerHTML = "Stop";
    } else {
        stopTimer();
        toggleButton.innerHTML = "Start";
    }
    // toggle the timerRunning variable
    timerRunning = !timerRunning;
}

// function to format time in seconds to hh:mm:ss format
function formatTime(seconds) {
    var hr = Math.floor(seconds / 3600);
    var min = Math.floor((seconds % 3600) / 60);
    var sec = seconds % 60;

    // return time formatted in hh:mm:ss format
    return hr.toString().padStart(2, '0') + ":" + min.toString().padStart(2, '0') + ":" + sec.toString().padStart(2, '0');
}

// function to convert formatted time to seconds
function timeToSeconds(timeString) {
    var parts = timeString.split(":");
    var hours = parseInt(parts[0]);
    var minutes = parseInt(parts[1]);
    var seconds = parseInt(parts[2]);
    // return total number of seconds
    return hours * 3600 + minutes * 60 + seconds;
}

// function to start timer
function startTimer() {
    console.log("start pressed");
    isStopped = false;
    console.log("start timer");
    //Display elements that are initially
    timeRemaining.style.visibility = "visible";
    document.getElementById("currentTime").style.visibility = "visible";

    // clear "timer is done" message
    let currentText = document.getElementById("timerUp").innerHTML;
    if (currentText == timerDone) { // don't clear snooze message
        document.getElementById("timerUp").innerHTML = "";
    }
    if (id == "") { // Conditional determines whether to count down from textbox or paused value
        updateClock(timeToSeconds(document.getElementById("currentTime").innerHTML));
    } else {
        updateClock(startTime.value); // Calls only when the clock is starting from textbox/not paused
    }
}

// Recursive function to count down the clock every second
function updateClock(currentCount) {
    if (currentCount > 0) {
        // update display time
        document.getElementById("currentTime").innerHTML = formatTime(currentCount);
        currentCount--;
        id = setTimeout(updateClock, 1000, currentCount); // Update timeout id, call method again until timer is up
    } else if (currentCount == 0) { // time is done
        // display snooze button and show time is done
        snoozeButton.style.visibility = "visible";
        document.getElementById("currentTime").innerHTML = currentCount;
        timerUp();
    }
}

// function to stop the timer
function stopTimer() {
    isStopped = true;
    console.log("stop timer");
    clearTimeout(id); // ends timer
    id = ""; // when counter is stopped, clear the counter's id (indicates to startTimer the clock is paused)

}

// function to reset the timer
function resetTimer() {
    // toggle button should display 'Start'
    if(!isStopped){
        toggleTimer();
    }

    // hide all timer related elements and reset id
    timeRemaining.style.visibility = "hidden";
    document.getElementById("currentTime").style.visibility = "hidden";
    snoozeButton.style.visibility = "hidden";
    clearTimeout(id);
    id = "unassigned id";
    document.getElementById("timerUp").style.visibility = "hidden";
    document.getElementById("startTime").value = "";
}

// function to snooze the timer
function snoozeTimer() {
    document.getElementById("timerUp").style.visibility = "visible";
    // change category for next time
    switch (currentInsultCategory) {
        case "category1":
            currentInsultCategory = "category2";
            break;
        case "category2":
            currentInsultCategory = "category3";
            break;
        case "category3":
            currentInsultCategory = "category1";
            break;
        default:
            currentInsultCategory = "category1";
    }

    // output an insult
    const insult = getRandomInsult(currentInsultCategory);
    document.getElementById("timerUp").innerHTML = insult;

    // stop and restart timer
    stopTimer();
    updateClock(startTime.value);
    snoozeButton.style.visibility = "hidden";
}

// function to play timer sound
function playTimerSound() {
    var audio = document.getElementById("timerSound");
    audio.play();
}

// list of insult
let insults = [];
fetchInsults();
async function fetchInsults() {
    const response = await fetch('insults.json');
    insults = await response.json();
}

let currentInsultCategory = "category1"; // default insult category

// function to get a random insult from the specified category
function getRandomInsult(category) {
    const insultsArray = insults[category];
    const randomIndex = Math.floor(Math.random() * insultsArray.length); // generate a random index to pick insult
    return insultsArray[randomIndex];
}

// function to stop the timer
function timerUp() {
    document.getElementById("timerUp").innerHTML = timerDone;
    stopTimer();
    playTimerSound();
}

// close the popup
function closePopup() {
    window.close();
}
