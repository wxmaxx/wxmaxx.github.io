// start program

/*
    Expected output:

    FirstName LastName
    Assignment 3.4
    Today's Date

    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!

    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!

*/ 

// test variables for the for loop


//function compares 2 arguments to see if they match or not; true if match, false if no match
match.arg1 = 6;
match.arg2= randomNumber();

function match(arg1, arg2) {
  if (arg1 === arg2)
    return true
  else
    return false
} 


// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}

// Test variables for the while loop



// // for loop
// console.log("-- Displaying for loop --");
// var x = randomNumber(2);

// for (var x = 0; x < 10; x++) {
//     console.log(x);
// }

// function randomNumber() {
//     return Math.floor((Math.random() * 10) + 1); 
// }


// // while loop
// console.log("\n-- Displaying while loop --");
// var index = 0;

// while (index < 10) {
//     console.log(index);
//     index++;
// }



// Reused functions from exercise-3.2.js

//function compares 2 arguments to see if they match or not; true if match, false if no match
match.arg1 = 6;
match.arg2 = 6;

function match(arg1, arg2) {
  if (arg1 === arg2)
    return true
  else
    return false
}

 console.log(match());

//function tests if arg1 and arg2 match and logs result
function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do match!");
}

//function tests if arg1 and arg2 do not match and logs result
function logMismatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do not match!");
}


// Output from the match() function... 
console.log(match("arg1", "arg2"));
console.log(match(2, 3)); 


// Conditional "if...else" statements. Include checks for all six (6) test variables 

// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}

// end program


