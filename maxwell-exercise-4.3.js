// var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.3
 Today's Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus

 */

// start program

// create an array of vehicles and assign it to the variable vehicles
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"]; 

// function
function getValue(arr, val) {
 for (var i = 0; i < arr.length; i++){
   if (arr[i] === val)
    console.log(arr[i]);
 }
 }
 
// Output
console.log("----- DISPLAYING ARRAY ITEMS -----");
for (var x = 0; x < vehicles.length; x++) {
 console.log(vehicles[x]);
}

// new line
console.log("");

console.log("--- SELECTED VALUE ---");
getValue(vehicles, "Motorcycle");

// new line
console.log("");

console.log("--- SELECTED VALUE ---")
getValue(vehicles, "Bus");


// end program
