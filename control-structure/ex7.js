const readlineSync = require("readline-sync");

//Make a program that ask the user to enter a number named n. 
//Then ask him n time to enter a new number. 
//At the end display the sum of all the numbers collected this way.
//Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.

let numbers = new Array();
let n = readlineSync.question("Enter a number N ");
for(let i = 0; i < n; i++){
    numbers[i] = readlineSync.question("Enter a new number ");
}

let sum;
for(let k = 0; k < n; k++){
    sum += numbers[k];    
}
console.log("sum = " + sum);