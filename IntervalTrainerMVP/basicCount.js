let counter = 0; // Initialize the counter variable
let intervalId; // Initialize a variable to store the interval ID

function startCounter() {
  intervalId = setInterval(function () {
    counter += 0.001;
    console.log(counter.toFixed(6));
  }, 1); // Increment the counter every 1 millisecond
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
