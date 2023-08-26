let counter = 0; // Initialize the counter variable
let intervalId; // Initialize a variable to store the interval ID

function formatCounter(milliseconds) {
  const totalMilliseconds = Math.floor(milliseconds);
  const hours = Math.floor(totalMilliseconds / 3600000);
  const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
  const tenths = Math.floor((totalMilliseconds % 60000) / 100);
  const hundredths = totalMilliseconds % 100;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${tenths.toString().padStart(1, "0")}:${hundredths
    .toString()
    .padStart(2, "0")}`;
}

function startCounter() {
  intervalId = setInterval(function () {
    counter += 10; // Increment the counter by 10 milliseconds
    console.log(formatCounter(counter));
  }, 10); // Increment the counter every 10 milliseconds
}

function stopCounter() {
  clearInterval(intervalId);
}

// To start the counter, call the startCounter() function
startCounter();

// To stop the counter after a certain time (e.g., 5 seconds), you can use setTimeout
setTimeout(function () {
  stopCounter();
  console.log("Counter stopped");
}, 5000); // Stop the counter after 5000ms (5 seconds)
