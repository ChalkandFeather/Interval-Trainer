// script.js (combined)

let startTime;
let intervalId;
let pausedTime = 0;
let isPaused = false;

function formatCounter(milliseconds) {
  const totalMilliseconds = Math.floor(milliseconds);
  const hours = Math.floor(totalMilliseconds / 3600000);
  const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
  const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
  const tenths = Math.floor((totalMilliseconds % 1000) / 100);

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${tenths
    .toString()
    .padStart(2, "0")}`;

  // Debugging: Log the formatted time
  // console.log("Formatted Time:", formattedTime);

  // return formattedTime;
}

function startCounter() {
  if (!isPaused) {
    startTime = Date.now() - pausedTime; // Adjust start time if not paused
  }
  intervalId = setInterval(function () {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatCounter(elapsedTime);

    // Debugging: Log the formatted time being set
    console.log("Setting Timer Display:", formattedTime);

    // Update the timer display element
    const timerDisplayElement = document.getElementById("timerDisplay");
    if (timerDisplayElement) {
      timerDisplayElement.textContent = formattedTime;
    }
  }, 100); // Update the counter every 100 milliseconds
  isPaused = false;
}

function pauseCounter() {
  clearInterval(intervalId);
  pausedTime = Date.now() - startTime;
  isPaused = true;
}

function stopCounter() {
  clearInterval(intervalId);
  pausedTime = 0;
  isPaused = false;
}

// Event listeners for the "Start" and "Stop" buttons
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const stopButton = document.getElementById("stopButton");

startButton.addEventListener("click", () => {
  startCounter();
});

pauseButton.addEventListener("click", () => {
  pauseCounter();
});

stopButton.addEventListener("click", () => {
  stopCounter();
});
