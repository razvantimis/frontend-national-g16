// 2. Expression function / anonymous function - callback

// Anonymous function
(function () {
  var age = 20;
})()

// nu putem avea acces la variabila age

// Callback

function applyOperatie(a, b, functieCallback) {
  var result = functieCallback(a, b);
  // mecanismul de callbacks ne ajuta sa refolosim codul comun
  // callback este operatie, ne ajuta sa injectam logica care se schimba 

  if (result < 10) {
    return 100;
  }
  console.log(result);
  return result;
}

applyOperatie(1, 2, function (number1, number2) {
  console.log(number1, number2)
})

applyOperatie(1, 2, function (number1, number2) {
  return number1 - number2
})

applyOperatie(1, 2, function (number1, number2) {
  return number1 * number2
})

function add(a, b) {
  return a + b;
}

applyOperatie(20, 500, add);

// Expression function

var sumFn = function (a, b) {
  console.log(a, b)
  return a + b;
}

console.log(sumFn(10,20))