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
//Declaring variables
var testVar1 = 6;
var testVar2 = randomNumber();

//Functions:
//function compares 2 arguments to see if they match or not; true if match, false if no match

function match(arg1, arg2) {
  if (arg1 === arg2)
    return true
  else
    return false
} 

//function tests if arg1 and arg2 match and logs result
function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do match!");
}

//function tests if arg1 and arg2 do not match and logs result
function logMismatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do not match!");
}

function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}


// Output from the match() function... 
console.log(match("A", "B"));
console.log(match(2, 2)); 


// Conditional "if...else" statements. Include checks for all six (6) test variables 
//the first if statement checks the first two variables
if (match(testVar1, testVar2)) {
    logMatch(testVar1, testVar2);
} else {
    logMismatch(testVar1, testVar2);
}

// test variable




// for loop
var testVar2 = i;
for (var i = 1; i < 10; i++){
if (match(testVar1, testVar2)) {
    logMatch(testVar1, testVar2);
} else {
    logMismatch(testVar1, testVar2);
}
} 
console.log(i);




// while loop
console.log("\n-- Displaying while loop --"); 




// Reused functions from exercise-3.2.js








// end program 


// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}

