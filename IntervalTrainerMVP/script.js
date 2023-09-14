let startTime; // This line initializes a variable called "startTime" to keep track of when the timer started.
let intervalId; // This variable will store the ID of the interval timer that updates the display.It will retain this ID until one of the following actions is taken Reset. effectively cancelling the timer. Afterwards, intervalId will be cleared, and the timer will no longer update until you start it again.
let pausedTime = 0; // This variable keeps track of the time when the timer was paused.
let isPaused = false; // This variable tells us whether the timer is currently paused or not.

// This function formats the time in milliseconds into a readable format.
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

  return formattedTime;
}
// This function starts or resumes the timer.
function startCounter() {
  // Check if the timer is not paused.
  if (!isPaused) {
    // Calculate the time when the timer starts or resumes.
    startTime = Date.now() - pausedTime; // Adjust start time if not paused
  }
  // Set up an interval timer to update the display every 100 milliseconds.
  intervalId = setInterval(function () {
    // Calculate the elapsed time since the timer started or resumed.
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatCounter(elapsedTime);

    const timerDisplayElement = document.getElementById("timerDisplay");
    if (timerDisplayElement) {
      timerDisplayElement.textContent = formattedTime;
    }
  }, 100); // Update the counter every 100 milliseconds
  // The timer is not paused anymore.
  isPaused = false;
}

function pauseCounter() {
  // Step 1: Clear the interval timer associated with intervalId.
  clearInterval(intervalId);
  // Step 2: Calculate how much time has passed since the timer started.
  // `Date.now()` gives the current time in milliseconds, and `startTime` is when the timer started.
  pausedTime = Date.now() - startTime;
  // Step 3: Set isPaused to true.
  // This indicates that the timer is now paused.
  isPaused = true;
} //no need to update timerDisplayElement as this is unchanged whilst paused

function stopCounter() {
  clearInterval(intervalId);
  const timerDisplayElement = document.getElementById("timerDisplay");
  if (timerDisplayElement) {
    timerDisplayElement.textContent = formatCounter(pausedTime);
  }
  isPaused = false;
}

function resetCounter() {
  clearInterval(intervalId);
  pausedTime = 0;
  isPaused = false;
  const timerDisplayElement = document.getElementById("timerDisplay");
  if (timerDisplayElement) {
    timerDisplayElement.textContent = "00:00:00:00";
  }
}

// Event listeners for the buttons
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

startButton.addEventListener("click", () => {
  startCounter();
});

pauseButton.addEventListener("click", () => {
  pauseCounter();
});

stopButton.addEventListener("click", () => {
  stopCounter();
});

resetButton.addEventListener("click", () => {
  resetCounter();
});
