// operatii logice

// Comparati intre valori/variabile
// == - operator de egalitate

var x = 2;

console.log(x == 3); // rezultatul va fi true sau false

// <=, >=,
// != - diferit
console.log(x != 3);

// and , or
console.log(x == 3 && x == 2); // and
console.log(x == 3 || x == 2); // or

// -- falsy (means if statement will interpret as false)
// empty string -> ""
// zero number -> 0
// undefined
// null
// NaN

// truthy
// every thing else like
// "abc"
// " "
// 1
// 1234346542
// {} empty object
// {a: '1} object with keys and values
// [] empty array
// [1] array with values
// () => {} a function is a truthy value

// if (() => {}) {
// }
// -- is like --
// if(true) {
// }
