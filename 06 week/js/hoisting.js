// Hoisting  // https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
// var/function
// Hoisting - duce declaratile de variabile pe prima linie
// Ca si rezultat, putem folosi variabila oriunde in scopul ei, indiferet ca am definito la final

console.log(myName) // undefined

var myName = "Marius1";
var myName = "Marius2";
var myName = "Marius3";
var myName = "Marius4";
var myName = "Marius5";

console.log(myName); // Marius 5

show();

function show() { // var are scope function / local scope
  // var age ( face el automat )
  console.log(age) // undefined
  console.log(myName) // undefined
  age = 10;
  console.log(age) // age = 10

  var age = 13;
  console.log(age) // age = 13

  if (age < 18) { // for, while
    var myName;
  }

  if (age < 11) {
    var myName;
  }
}
