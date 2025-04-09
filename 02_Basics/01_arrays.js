const myArr = [0 , 1, 2, 3, 4, 5]
const myHeros = ["shaktiman" , "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// ARRAY METHOD


// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //[9, 0, 1, 2, 3, 4, 5] add starting element in array at index i=0
    
// myArr.shift()  //[ 1, 2, 3, 4, 5 ] remove starting element from array

// console.log(myArr.includes(9)); // check the element is present in an array or not if present gives true otherwise false
// console.log(myArr.indexOf(3));  // give the index of asked element 

// const newArr = myArr.join()

// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); // 0,1,2,3,4,5  it binds and convert it into string
// console.log(typeof newArr); // string
// console.log(typeof myArr); // object

// slice and Splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // includes element at index 1 and 2 not include 3

// slice = includes element at index 1 and 2 not include 3 and Doesn't modify the original array

console.log(myn1);
console.log("B ",myArr);

// splice = includes element at index 1 from 3 and modify the original array

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);