// Primitive
// 7 types : Strings , Number, Boolean, null, undefined ,symbol,BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null 
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);



// Reference (Non Primitive)

// Array , Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];
let myObj={
    name: "piyush",
    age: 22,
}

const myFunction = function (){
    console.log("hello world");
}

console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) used as copy , Heap (Non-Primitive) used as reference

let myYoutubename= "piyushsharmadotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log (myYoutubename) ;
console.log (anothername) ;


let userOne = {
    email: "user@google.com",
    upi: "user@oksbi"
}

let userTwo = userOne
userTwo.email = "piyush@google.com"

console.log(userOne.email);
console.log(userTwo.email);
