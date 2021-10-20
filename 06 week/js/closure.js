// 4. Closure


//Cum putem face o functie ca sa fie apela asa sum(1)(3) ?

// O functie care returneaza o alta functie

function sum(number1) {

  function level1Sum(number2) {
    function level2Sum(number3) {
      return number1 + number2 + number3;
    }
    return level2Sum;
  }

  return level1Sum;
}
// sum(10) returneaza o functie - level1Sum
// sum(10)(20) - se apeleaza level1Sum cu valoare 20 si va returna level2Sum
// sum(10)(20)(30) - va apela level2Sum cu valoare 30
console.log(sum(10)(20)(30))

// Cum facem sa functioneze in ambele varinte sum(10)(20) === sum(10, 20) ?

function sum(number1, number2) {
  return number1 + number2;
}

// number1 = 1, number2 = undefined
console.log(sum(1)) // daca nu dam valori, in parametru primim undefined

function sum(number1, number2) {

  if (number2 === undefined) {
    function innerSum(number2) {
      return number1 + number2
    }
    return innerSum;
  }

  return number1 + number2;
}

// daca apelam sum(10) , el va returna functia innerSum
// sum(10)(20) => innerSum(20)  
console.log(sum(10)(20) === sum(10, 20))

// Closure
// doar la functii apare
function sum(number1) {
  const number3 = 30;
  var number4 = 20; // pe acesta variabila nu se face closure
  function level1Sum(number2) { // functie din interior isi face closure pe ce foloseste de mai sus
    // Closure apare cand returnam o functie care foloseste variabile din scopul de mai sus
    // adica se face closure pe number3, number1
    return number1 + number2 + number3;
  }
  console.log(number4)
  // level1Sum(10) -- apare si daca nu returnam
  return level1Sum;
}
const sum2 = sum(10); // va returna functia level1Sum
// ce se intampla cu number1 si number3
// dupa apelul sum(10), javascript-ul ar curata paramentrul number1 dar si variabila number3
console.log(sum2(20)) // 10 + 20 + 30