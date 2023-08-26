let counter = 0; // Initialize the counter variable
let intervalId; // Initialize a variable to store the interval ID

function startCounter() {
  intervalId = setInterval(function () {
    counter++;
    console.log(counter);
  }, 1000); // Increment the counter every 1000ms (1 second)
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
