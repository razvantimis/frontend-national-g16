// # TODO list

// 1. Sa afisam o lista de TODO items
// 1.0 Reprezentare date in js
// Structura de html folosim <ul> <li>

// 1.0 lista de todos are un array in js
// un todo poate avea
// 1. text ( care descrie sarcina )
// 2. un flag care ne spune daca este todo done sau nu

// 2. deadline
// 3. participanci
// 4. prioritate
// 5. locatie
// 7. istoric cu modificari facut pe todo

var toDo1 = {
  text: "ceva",
  done: false
};

function createToDo(textValue, doneValue) {
  return {
    text: textValue,
    done: doneValue
  };
}
var toDoList = [
  toDo1,
  createToDo("drink water", true),
  createToDo("shoping", false),
  createToDo("alt ceva", false),
  createToDo("something", true)
];
console.log(toDoList);

//  1.2 Facem un todo - luam informatia din todo object si facem html

// var displayToDo = document.createElement("p");
// displayToDo.innerHTML = "text: " + toDo1.text + " done:" + toDo1.done;
// template literal
// displayToDo.innerHTML = `
//   text: ${toDo1.text}
//   <br />
//   done: ${toDo1.done}
// `;

function createHTMLToDo(itemTodo) {
  var displayToDoItem = document.createElement("li");
  displayToDoItem.innerHTML = `
  text: ${itemTodo.text}
  <br />
  done: ${itemTodo.done}
  `;

  // add delete button
  var deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", function () {
    // logica de stergere
    console.log("sterge", displayToDoItem);
    console.log("parent = ", displayToDoItem.parentElement);
    displayToDoItem.parentElement.removeChild(displayToDoItem);
  });
  displayToDoItem.appendChild(deleteBtn);
  return displayToDoItem;
}

// var todo1HTML = createHTMLToDo(toDo1);
// console.log("todo1HTML", todo1HTML);
// document.body.appendChild(todo1HTML);

// 1.1  Facem reprezentare html pentru tota lista de todos
// <ul> cu createElement + append
function createHTMLToDoList(itemTodoList) {
  var ulList = document.createElement("ul");

  // parcurgem itemTodoList ca sa luam fiecare todo
  for (var index = 0; index < itemTodoList.length; index++) {
    var toDoItem = itemTodoList[index];
    var toDoItemHTML = createHTMLToDo(toDoItem);
    ulList.appendChild(toDoItemHTML);
  }
  return ulList;
}

var listHTML = createHTMLToDoList(toDoList);
document.body.appendChild(listHTML);

//
// 2. Sa permitem adaugarea unui TODO

// 2.0 Facem ui pentru creearea unui todo - input + button de add
var inputToDo = document.getElementById("todotext");
console.log(inputToDo);

var btnAdd = document.getElementById("addbtn");
console.log(btnAdd);
btnAdd.addEventListener("click", function () {
  console.log("Valoare input: ", inputToDo.value);
  var toDo = createToDo(inputToDo.value, false);
  toDoList.push(toDo); // adaugam in lista noul todo

  console.log(toDoList);
  // adaugam todo noul creat in html
  var toDoItemHTML = createHTMLToDo(toDo);
  listHTML.appendChild(toDoItemHTML);
});

// 3. Sa stergem un TODO

// do
// ^
