// const tinderUser = new Object()  // empty object (singleton object)
const tinderUser = {}  // empty object {non singleton object}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Piyush",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6: "b"}

// Object.assign() works to combine (or merge) objects.

// const obj3 = { ...obj1, ...obj2 };
const obj3 = Object.assign({},obj1, obj2, obj4)
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    }
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));  // Object.keys = Returns array of property names (keys) here keys are id , name , isLoggedIn
console.log(Object.values(tinderUser)); // gives 123abc , sammy, false in an array
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // check it has isLoggedIn property exist or not
