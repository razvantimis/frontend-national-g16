// let/const - A venit in es6 ( 2015 ) , ca alternativa mai buna pentru declararea de variabile
// inlocuieste var

console.log(myName); // Uncaught ReferenceError: myName is not defined
// NU avem hosting pe let/const
let myName = "Razvan";

// Sa adaugat block scope pe let/const
function show() {
  let myName = "Alex"; // local in functie

  if (true) { // block scope, 
    let myName = "Marius"; // myName este vizibila doar in if

    console.log(myName); // Marius
  }
  console.log(myName); // Alex
}
console.log(myName); // myName


function exForWithVar(){
  // var index - se aplica hosting 
  console.log(index) // undefined
  index = 10;
  for (var index = 0; index <= 5; index++) {
    console.log(index)    
  }

  console.log(index) // 6
}

function exForWithLet(){
  // let index - nu are hosting 
  console.log(index) // Uncaught ReferenceError: index is not defined
  for (let index = 0; index <= 5; index++) {
    console.log(index)    
    // index are scopul doar in for
    // const array = [1,2,3]

  }

  console.log(index) // Uncaught ReferenceError: index is not defined
}

// let vs const
// pe variabile definite cu const nu se poate face reatribuire
// nu le lasa sa redefinesti - Identifier 'age' has already been declared
let age = 10;

const age2 = 10;

age = 12;
age2 = 13 // nu putem face reatribuire Uncaught TypeError: Assignment to constant variable.


const array = [1,2,3]; // nu poti schimba referinta

array = [] // Uncaught TypeError: Assignment to constant variable.