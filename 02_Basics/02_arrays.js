const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// concat = Merges elements into new flat array
// push = 	Adds entire array as 1 element (nested array)

const all_new_heros = [...marvel_heros, ...dc_heros] // (...)spread operator = works same as concat but it is modern and clean way to expand elements of an array   
// console.log(all_new_heros);

const another_array = [1, 2, 3,[4, 5, 6,], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// .flat = It flattens a nested array by one level by default.



console.log(Array.isArray("PIYUSH"))
// isArray = 	Check if it's an array
console.log(Array.from("PIYUSH"))
console.log(Array.from({name : "Piyush"})) // gives empty array [] {************************}
// .from = Convert string to char array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// Array()	= Can behave oddly with numbers (creates holes)
// Array.of()=	Always returns a proper array with values