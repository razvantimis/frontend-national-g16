// 2. Scopes ( var vs let/const )

// Scope
// Scopul defineste unde putem accesa variabila si unde nu

// Orice varibila definita mai sus poate fi folosita in cod ( mai jos )
var myName = "Razvan" // scope global, pentru ca este la nivel de fisiere
// variabile globale se pun pe window

console.log(" scope global ", myName);

function show(param1) {
  var myName = "Alex"; // scope local, doar in interiorul functiei
  var myAge = 10;
  // window.myName va fi "Razvan" , cea globala
  console.log("scope local", myName + " Hello")

  function log() { // cauta myName in scopul de la log
    console.log("log() ", myName)

    function fn1() {
      console.log("fn1() ", myName) // cel mai jos nivel
      console.log(param1)

    }
  }
  log();

  console.log(myAge) // myAge exista doar in interiorul functie
  // dupa terminare executie functie, toti parametru si variabilele declarate vor fi sterse
}
console.log(myAge) // nu exista myAge
show(10);
console.log(" scope global ", myName);


