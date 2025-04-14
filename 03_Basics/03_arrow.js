const user = {
    username: "piyush",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);  // this is used to refer in current context or in same scope
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this); // {} empty . IN BROWSER THE GLOBAL OBJECT IS WINDOW OBJECT


// function chai(){
//     let username = "piyush"
//     console.log(this.username); // gives undefined 
// }

// chai()


// const chai = function() { 
//     let username = "piyush"
//     console.log(this.username) // inside function this always gives undefined result 
// }

const chai = () => { 
    let username = "piyush"
    console.log(this); // {}
}

// chai()


// const addTwo = (num1 , num2) => { // implicit return
//     return num1 + num2
// }

// const addTwo = (num1 , num2) =>  num1 + num2
// const addTwo = (num1 , num2) => ( num1 + num2) // implicit return

// () is used then no user of return statement
// {} is used then use of return statement


const addTwo = (num1, num2) => ({username: "piyush"})
// to return an object we have to use () and object is always in {}

console.log(addTwo(5, 3))