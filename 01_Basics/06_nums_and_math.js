const score = 700 // number
console.log(score);

const balance = new Number(100) //object
console.log(balance);

console.log(balance.toString().length);
//balance is a Number object with the value 100.
//balance.toString() converts it to the string "100".
// "100".length is 3.

console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.89666
console.log(otherNumber.toPrecision(4)); //123.9

const hundreds = 1000000
console.log (hundreds.toLocaleString()); // 1,000,000
console.log (hundreds.toLocaleString('en-IN')); // 10,00,000