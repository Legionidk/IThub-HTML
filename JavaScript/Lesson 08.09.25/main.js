/**
 * Some practice with Math.random().
 */

const minNumber = +prompt("Type minimum: ");
const maxNumber = +prompt("Type maximum: ");
const result = Math.round(Math.random() * (maxNumber - minNumber) + minNumber);

// TODO: Implement NaN check with if-else
// TODO: Implement check if maxNumber < minNumber

console.log(`Random number in range [${minNumber}, ${maxNumber}]: ${result}`);
