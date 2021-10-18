// 1. Function
//     1. Paramater by reference / by value

// tipuri simple

var age = 23;
var razvanAge = age;

razvanAge = 11;


// La Array si object avem referinta
// Daca modific razvanArray se va modifica si array1
var array1 = [1, 2, 3, 4, 5, 6, 0, 0] // un array foarte mare ca are 1gb memorie

var razvanArray = array1; // daca ar fi fara referinta atunci ar rezulta duplicarea informatiei din array1

razvanArray[0] = 10;

// 1. Function
//     1. Paramater by reference / by value

// Exemplu Paramater by reference
// myArray se trimite prin referinta
function sumArray(array) {
  var sum = 0;

  for (var index = 0; index < array.length; index++) {
    var element = array[index];
    sum = sum + element;
  }
  array[0] = 10; // daca modificam valoare de pe pozitia zero, va afecta myArray din exterior

  return sum;

}

var myArray = [1, 2, 3, 4, 5, 6, 0, 0];
var total = sumArray(myArray)
console.log(total)
console.log(myArray);

// caz cu object
function addNewKey(object) {
  object.razvanKey = 10;
  object.key1 = 12;
}

var obj1 = {
  key1: 'test'
}
console.log(obj1) // { key1: 'test' }
addNewKey(obj1); // doarece se trimite prin referinta putem modifica obj1
console.log(obj1) // { key1: 12, razvanKey: 10 }


// Paramater by value

function show(value) {
  value = 13
  console.log(value)
}

var age = 12;
console.log(age) // 12
show(age)
console.log(age) // 12