var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

// start program
// create an array and assign it to the variable x
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// functions
// getValue function uses for loop to get array values the uses if statement to compare values
function getValue(states, val) {
 for (var i = 0; i < states.length; i++) {
   if (states[i] === val)
     console.log(states[i]);
 }

}


// Output
// display the original unsorted array by looping through the array and logging the output
console.log("--DISPLAYING ORIGINAL UNSORTED ARRAY--");
for (var k = 0; k < states.length; k++)
console.log(states[k]);

// new line
console.log("");

// display the sorted array using the filter() method
var sortedList = sorted;
.filter(getValue(states, val)) {
  return sorted.lastIndexOf(states) === index;
 console.log(sorted);
})





// end program
