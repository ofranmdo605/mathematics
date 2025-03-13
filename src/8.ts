const math = require('mathjs');

// Define a function to calculate the area of a circle
function circleArea(radius) {
  return math.pi * radius ** 2;
}

// Use the function to calculate the area of a circle with a radius of 5
console.log(circleArea(5));
