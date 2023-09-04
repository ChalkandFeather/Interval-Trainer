// script.js (combined)

let startTime;
let intervalId;

function formatCounter(milliseconds) {
  const totalMilliseconds = Math.floor(milliseconds);
  const hours = Math.floor(totalMilliseconds / 3600000);
  const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
  const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
  const tenths = Math.floor((totalMilliseconds % 1000) / 100);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${tenths
    .toString()
    .padStart(2, "0")}`;
}

function startCounter() {
  startTime = Date.now(); // Store the current timestamp as the start time
  intervalId = setInterval(function () {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatCounter(elapsedTime);

    // Update the timer display element
    document.getElementById("timerDisplay").textContent = formattedTime;
  }, 100); // Update the counter every 100 milliseconds
}

function stopCounter() {
  clearInterval(intervalId);
}

// Event listeners for the "Start" and "Stop" buttons
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

startButton.addEventListener("click", () => {
  startCounter();
});

stopButton.addEventListener("click", () => {
  stopCounter();
});
