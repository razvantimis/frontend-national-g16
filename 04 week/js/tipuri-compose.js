// Array
var array = [1, 2, 4, "raasdas", true]

// accesare

console.log(array[0]) // accesam elementul de pe pozitia 0
console.log(array[4]) // => true
console.log(array[3]) // => raasdas

// atribuire

array[2] = 100; // va supra scrie valoare de pe pozitia 2 cu 100


// Object
// este format din key si valori 
var produs = {
  pret: 24,
  nume: "Lapte"
}

// var phone = {
//   color: 'red',
// }

// accesare

console.log(produs.pret) // prin . accesam cheia "pret"

// atribuire

produs.pret = 30 // am schimba valoare din 24 in 30

// adaugam cheia cantitate, nu exista cheia

produs.cantitate = 10;

// in mod dymanic accesare

var key = "newKey" // un string simplu

produs[key] = 40
