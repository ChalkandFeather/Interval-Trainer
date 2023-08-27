// script.js
let startTime;
let intervalId;

function formatCounter(milliseconds) {
  // ... (rest of the formatCounter function)
}

function startCounter() {
  startTime = Date.now(); // Store the current timestamp as the start time
  intervalId = setInterval(function () {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    console.log(formatCounter(elapsedTime));
  }, 100); // Update the counter every 100 milliseconds
}

function stopCounter() {
  clearInterval(intervalId);
}

// Get the reference to the buttons after the function definitions
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

// Add event listeners to the buttons
startButton.addEventListener("click", () => {
  startCounter();
});

stopButton.addEventListener("click", () => {
  stopCounter();
});
