// The fuck is == and ===
// == is trying to 'parse' variables and then say, is they equal or not
// === will not parse variables
const number = 5
const string = "5"
const second_string = "6"

console.log(number == string) // true
console.log(number == second_string) // false
console.log(number === string) // false



// Int
const five = 5
let six = 6

six += 1 // now six is seven
six += five // now six is twelve

console.log(five)
console.log(six)



// String
const hello = "Hello" // const crating variable, that you cannot change
const world = "world!"
let tmp = "" // let creating variable, that you can change
let undefined_var // undefined variable is result of creating variable that not used yet, but will be in future

tmp = `${hello} ${world}` // backticks is like f-strings in Python

console.log(hello+world)
console.log(tmp)
console.log(undefined_var)


