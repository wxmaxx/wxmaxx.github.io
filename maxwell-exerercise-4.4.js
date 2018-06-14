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
 for (var k = 0; k < arr.length; k++) {
   if (states[k] === val)
     console.log(states[k]);
 }

}


// Output
// display the original unsorted array by looping through the array and logging the output
console.log("--DISPLAYING ORIGINAL UNSORTED ARRAY--");
for (var y = 0; y < states.length; y++)
console.log(states[y]);

// new line
console.log("");

//




// end program
