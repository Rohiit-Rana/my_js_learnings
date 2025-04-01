let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); //Return a NaN 


// "33" => 33 after conversion

// "33abc" => NaN

// true => 1..... false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// "" => false
// "anything" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
