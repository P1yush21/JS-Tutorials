// Immediately Invoked Function Expressions (IIFE)


(function chai(){   // named IIFE
    console.log(`DB CONNECTED`);    
}) ();

/*  IIFE 
Create a private scope so variables inside the function don't pollute the global scope.
Execute the function immediately after it's defined.

1st () is used to turns it into an expression.
2nd () is used to  invokes the function immediately.
*/


// (function aurcode(){
//     console.log(`DB CONNECTED TWO`);
// }) ()

// difference is remove function aurcode

// (() =>{
//     console.log(`DB CONNECTED TWO`);
// }) ()


((name) =>{  // un named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
}) ("piyush")

// when we use two IIFE then first IIFE must be end with terminal(;)