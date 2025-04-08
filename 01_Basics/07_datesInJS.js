// Dates

let myDate = new Date();
// console.log(myDate); 2025-04-08T06:36:09.759Z
// console.log(myDate.toString()); Tue Apr 08 2025 06:36:09 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); Tue Apr 08 2025
// console.log(myDate.toISOString()); 2025-04-08T06:36:09.759Z
// console.log(myDate.toJSON()); 2025-04-08T06:36:09.759Z
// console.log(myDate.toLocaleString()); 4/8/2025, 6:36:09 AM
// console.log(typeof myDate); object

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5 ,3 )
// console.log(myCreatedDate.toLocaleString());  //1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString()); //1/14/2023, 12:00:00 AM

let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString()); //1/14/2023, 12:00:00 AM