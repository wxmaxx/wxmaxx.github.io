// var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program

// Declare an array of fruits and assign it to the variable fruits
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// getFruit function calls in the fruits array, loops through the list using a for loop, logs the output
function getFruit(arr) {
 for (var k = 0; k < arr.length; k++) {
  console.log(arr[k]);
 }
}


// Output from the getFruit() function
getFruit(fruits);


// end program
