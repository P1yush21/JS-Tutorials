const score = 700 // number
// console.log(score);

const balance = new Number(100) //object
// console.log(balance);

// console.log(balance.toString().length);
//balance is a Number object with the value 100.
//balance.toString() converts it to the string "100".
// "100".length is 3.

// console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.89666
// console.log(otherNumber.toPrecision(4)); //123.9

const hundreds = 1000000
// console.log (hundreds.toLocaleString()); // 1,000,000
// console.log (hundreds.toLocaleString('en-IN')); // 10,00,000

// ++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8)); //3
// console.log(Math.max(4, 3, 6, 8)); //8

console.log(Math.random()); // number lies between 0 and 1
console.log((Math.random()*10) + 1);  // gives number greater than 0 but in decimal
console.log( Math.floor (Math.random()*10) + 1);  // gives number greater than 0 but in whole number

const min = 10
const max = 20 
console.log(Math.floor (Math.random() *(max - min +1)) + min);