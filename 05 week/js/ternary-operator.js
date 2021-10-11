// Expression - ternary operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// cu if simplu
var age = 23;

var type;
if (age < 18) {
  type = 'minor'
} else {
  type = 'adult'
}

// ternary operator 

// conditie ? valoare1 : valoare2
// daca este true conditie atunci valoare1 altfel valoare2
var type = (age < 18) ? 'minor' + 'test' : 'adult'

var type = (age < 18) ? (age < 10 ? 'copil' : 'minor') : 'adult'
