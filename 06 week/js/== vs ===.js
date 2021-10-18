// == vs ===

console.log(typeof 20) // 'number'
console.log(typeof "20") // 'string'
console.log(typeof "8test") // 'string'
console.log(typeof true) // 'boolean'

// cu tipuri simple number, string, boolean
// === verifica atat valoare cat si tipul de data
const age = 20;

console.log(age == '20') // true 
console.log(age === '20') // false , ( age == 20) && ( typeof age == typeof '20')

// array /object
// == verifica daca sunt egale referintele
var array1 = [1,2,3] // 1gb 
var array2 = [1,2,3]
var array3 = array1;

console.log(array1 == array1) // true
console.log(array1 == array2) // false
console.log(array1 == array3) // true

// === => ce face == + verifica tipul

console.log(array1 === array1) // true
console.log(array1 === array2) // false
console.log(array1 === array3) // true