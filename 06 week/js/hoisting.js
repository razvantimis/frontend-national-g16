// Hoisting  // https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
// var/function
// Hoisting - duce declaratile de variabile pe prima linie
// Ca si rezultat, putem folosi variabila oriunde in scopul ei, indiferet ca am definito la final


console.log(myName) // undefined

var myName = "Marius";

console.log(myName); // Marius

show();

function show(){
  console.log(age) // undefined
  age = 10;
   
  console.log(age) // age = 



  var age = 13;
  console.log(age) // age = 13

}
