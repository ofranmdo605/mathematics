const math = require('mathjs');

// Create a new array with random numbers
const arr = Array(5).fill().map(() => math.random());

// Calculate the mean of the array
const mean = math.mean(arr);

// Calculate the standard deviation of the array
const stddev = math.std(arr, {unbiased: true});

console.log({mean, stddev});
