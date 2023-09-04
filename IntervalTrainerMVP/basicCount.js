// let startTime; // To store the start time
// let intervalId; // To store the interval ID

// function formatCounter(milliseconds) {
//   const totalMilliseconds = Math.floor(milliseconds);
//   const hours = Math.floor(totalMilliseconds / 3600000);
//   const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
//   const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
//   const tenths = Math.floor((totalMilliseconds % 1000) / 100);

//   return `${hours.toString().padStart(2, "0")}:${minutes
//     .toString()
//     .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${tenths
//     .toString()
//     .padStart(2, "0")}`;
// }

// function startCounter() {
//   startTime = Date.now(); // Store the current timestamp as the start time
//   intervalId = setInterval(function () {
//     const currentTime = Date.now();
//     const elapsedTime = currentTime - startTime;
//     console.log(formatCounter(elapsedTime));
//   }, 100); // Update the counter every 100 milliseconds
// }

// function stopCounter() {
//   clearInterval(intervalId);
// }

// // To start the counter, call the startCounter() function
// startCounter();

// // To stop the counter after a certain time (e.g., 5 seconds), you can use setTimeout
// setTimeout(function () {
//   stopCounter();
//   console.log("Counter stopped");
// }, 5000); // Stop the counter after 5000ms (5 seconds)
