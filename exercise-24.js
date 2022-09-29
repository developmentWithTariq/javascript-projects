let car = 'subaru';
let bike1 = "honda";
let bike2 = "unique";
let aircraft1 = "airbus321";
let aircraft2 = "airbus320";
let aircraft3 = "boing777";

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

console.log("Is car == 'suzuki'? I predict False.")
console.log(car == 'suzuki')

//lower case function
let Name = 'JOHN';

console.log("Is Name == 'JOHN'? I predict True.")
console.log(Name == 'JOHN')

console.log("Is Name == 'john'? I predict False.")
console.log(Name == Name.toLowerCase())



let marks = 30;

console.log("Is marks == 30 ? I predict True.")
console.log(marks === 30)

console.log("Is marks > 20 '? I predict True.")
console.log(marks > 20)

console.log("Is marks < 30? I predict False.")
console.log(marks < 30)

console.log("Is marks >= 30 '? I predict True.")
console.log(marks >= 30)


console.log("Is marks <= 20? I predict False.")
console.log(marks <= 20)

// * Tests using "and" and "or" operators

console.log("Is marks > 30 and a = 40 '? I predict False.")
console.log(marks > 30 && marks === 40)

console.log("Is marks = 30 and a > 10 '? I predict True.")
console.log(marks === 30 && marks > 10)


console.log("Is marks > 30 and a = 40 '? I predict False.")
console.log(marks > 30 || marks === 40)

console.log("Is marks = 30 and a > 30 '? I predict True.")
console.log(marks === 30 || marks > 30)

// • Test whether an item is in a array

let items = new Array(2,3,5);

console.log("Is 3 in items ? I predict True.")
console.log(items.includes(3))

console.log("Is 6 in items ? I predict False.")
console.log(items.includes(6))

// • Test whether an item is not in a array

console.log("Is 9 not in items ? I predict True.")
console.log(!items.includes(9))

console.log("Is 3 not in items ? I predict False.")
console.log(!items.includes(3))

