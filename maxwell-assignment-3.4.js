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
var testFor1 = 6;
var testFor2 = 4;
var testFor3 = 7;
var testFor4 = 4;
var testFor5 = 8;
var testFor6 = 9;
var testFor7 = 7;
var testFor8 = 6;
var testFor9 = 3;

// Test variables for the while loop



// for loop
console.log("-- Displaying for loop --");




// while loop
console.log("\n-- Displaying while loop --"); 




// Reused functions from exercise-3.2.js

// functions

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

//the second if statement checks the third and fourth variables
if (match(testVar3, testVar4)) {
    logMatch(testVar3, testVar4);
} else {
    logMismatch(testVar3, testVar4);
}

//the third if statement checks the fifth and sixth variables
if (match(testVar5, testVar6)) {
    logMatch(testVar5, testVar6);
} else {
    logMismatch(testVar5, testVar6);
}




