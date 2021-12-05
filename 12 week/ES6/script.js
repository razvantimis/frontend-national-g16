console.log("Week 12 - ES6");

// Code Block Scope vs Function Scope for let and var

// --- global scope ---
// let & const are code block scoped
let a = "a";
// var is function scope
var x = "x";

//code block scope
if (true) {
  // because variable 'a' is code block scoped the below declaration will create a new 'a' variable
  // this 'a' variable in this block is different then the one in the global scope
  // because 'a' is a different variable the attributions below will not affect 'a' from the global scope
  // this 'a' variable will exist as long as we are in this code block
  // when the program exist this code block (from line 12 to 21) 'a' will be destroyed
  let a = "b";
  a = "c";

  // because variable 'x' is function scoped the below declaration will refer to the global variable 'x'
  // even if we use the 'var' key word 'x' will not be different then the one in the global scope
  // the attribution above will affect the global scoped 'x'
  var x = "y";
}

console.log(a);
console.log(x);

// we call the function below to demonstrate function scope of the 'var' declared variables
reatributionOfX();

// we can see that the global scoped 'x' is not affected by the attributions in the function above
console.log(x);

//function scope
function reatributionOfX() {
  // because variable 'z' is function scoped the below declaration will create a new 'x' variable
  var x;
  x = "z";
}

// --- Arrow Function ---
// below you can see different forms of the arrow function
// the arrow function is a anonymous function
// because is a anonymous function it needs to be stored in a const/let or provided as argument to be used
// below an arrow function is by being stored in a const
const add = (a, b) => {
  console.log("param1 is", a);
  console.log("param2 is", b);

  return a + b;
};

const sum = add(1, 2);
console.log(sum);

const addNoFunctionBody = (a, b) => a + b;
const sum2 = addNoFunctionBody(1, 2);
console.log(sum2);

const isEven = (num) => num % 2 === 0;
console.log(isEven(3));

// below the arrow function is used as an argument to the filter method
const onlyUnevenNumber = [1, 6, 5, 22, 44, 13, 17].filter((e) => e % 2 === 1);
// const onlyUnevenNumber = [1, 6, 5, 22, 44, 13, 17].filter(function(e) { return e % 2 === 1; });
console.log(onlyUnevenNumber);

//--- Arrow Function and 'this' object ---

// 'this' can change its value based on the context in which it is used
console.log(this);

function testThisFunction() {
  console.log(this);
}

testThisFunction();

// The difference in using an arrow function vs a function is that an arrow function will not change the context of this
// For example when we provide a classic function callback to an addEventListener this will refer to the html object inside the callback
// In case we provide a arrow function as callback to the addEventListener this will refer to the actual current object
const testThisObject = {
  testAttribute: "test",
  testThisMethod: testThisFunction,
  setPrintClickOnWindow: function () {
    document.addEventListener("click", function () {
      console.log("on click", this);
      console.log("on click", this.testAttribute);
    });
  },
  setPrintClickOnWindowWithArrow: () => {
    document.addEventListener("click", () => {
      console.log("on click", this);
      console.log("on click", this.testAttribute);
    });
  },
};

testThisObject.testThisMethod();
testThisObject.setPrintClickOnWindow();
testThisObject.setPrintClickOnWindowWithArrow();

// Classes ES6 vs defining a class like before ES6

// -- ES6 style --
class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  printNameAndAddress() {
    console.log(this.name, this.address);
  }
}

const person1 = new Person("Stefan", "Cluj");
person1.printNameAndAddress();
console.log(person1);
// -- --

// -- Old style --
function PersonOld(name, address) {
  this.name = name;
  this.address = address;
}

PersonOld.prototype.printNameAndAddress = function () {
  console.log(this.name, this.address);
};

const person2 = new PersonOld("Corina", "Gherla");
person2.printNameAndAddress();
console.log(person2);
// -- --
