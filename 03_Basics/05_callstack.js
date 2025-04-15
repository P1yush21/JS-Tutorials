function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}
one()
two()
three()


/*
LIFO: Last In, First Out


Call Stack Breakdown:

{Step 1: one() is called

Call Stack:  // code 
[one]

console.log("one") runs → prints one
Calls two() → pushed to stack

Call Stack:  // code 
[one, two]

console.log("two") → prints two
Calls three() → pushed to stack

Call Stack:   // code 
[one, two, three]

console.log("three") → prints three
three() finishes → pop
two() finishes → pop
one() finishes → pop

Output so far:
one
two
three
}
++++++++++++++++++ Step 2: two() is called again+++++++++++++++
{

Call Stack:  // code
[two]

console.log("two") → prints two
Calls three() → pushed to stack

Call Stack:  // code
[two, three]

console.log("three") → prints three
three() finishes → pop
two() finishes → pop

Output now:
two
three
}


+++++++++++++++++  Step 3: three() is called directly ++++++++++++++++++++++
{
Call Stack:  // code
[three]

console.log("three") → prints three
three() finishes → pop

Final Output:
three
}


{
Total Console Output:
one
two
three
two
three
three
}
*/