// singleton
// Object.create

const mySym = Symbol("key1")


// object literal
const JsUser = {
    name: "Piyush",
    "full name": "Piyush Sharma",  //now we cannot access this from using JsUser.full name
    [mySym]: "myKey1", // Note: You must use bracket notation to access a symbol-keyed property. Dot notation doesn't work because the key isn't a string.
    age: 19,
    location: "Bhilwara",
    email: "piyush@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"], 
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// Dot Notation — works only with keys that are valid identifiers (no spaces or special characters)
// Bracket Notation — must be used when: (1) The key has spaces or special characters
// (2) You're using a variable as the key name

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // to access symbol use square bracket 

JsUser.email = "piyush@chatgpt.com"

// Object.freeze(JsUser) // you can't add, remove, or change any of its properties after freezing.

JsUser.email = "piyush@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());