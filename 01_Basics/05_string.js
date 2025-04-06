const name = "piyush"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('hitesh-hc')

// console.log(gameName[4]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('h'));

// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "   piyush   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://piyush.com/hitesh%20sharma"

console.log(url.replace('%20','-')); // replace %20 with -

console.log(url.includes('hitesh'));  //finds hitesh in const url if found ans is true and if not then ans is false

console.log(gameName.split('-'));