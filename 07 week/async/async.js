// Thread - locul unde se executa codul
// Javascript - este single thread
// Async din javascript ne ajuta ca sa nu blocam interfaca cu utilizatorul

// Exemplu: Request catre server, stim in cat timp primim de la server raspunsul? Noi nu stim in cat timp va raspunde

console.log('1. incepe requestul')
// facem o intentie de request
// functia fetch face requestul pe un link
fetch('https://jsonplaceholder.typicode.com/todos').then(
  function (response) { // se ruleaza dupa ce vine raspunsul de la server
    // console.log(response)
    console.log('2. a venit raspunsul')
  } // functia se va executa asyncron, adica nu astepta dupa raspunsul de la server
)
console.log('3. se termina requestul')
// cod nostru

// Mod syncron - toate cele 4 se executa in ordine
// instructiune 1
// instructiune 2
// instructiune 3
// instructiune 4

// Mod asyncron - ordinea va fi 1,2,4, 3 ( nu se executa codul in ordinea care o vedem noi )
// instructiune 1
// instructiune 2
// instructiune 3 - executa async
// instructiune 4


// setTimeout - ne ajuta sa rulam cod asyncron

console.log("instructiune 1")
console.log("instructiune 2")
setTimeout(function () {
  console.log("functia async: instructiune 3")
  console.log("functia async: a=", a)
}, 0) // a doi lea paramatru este timeout, daca este zero va fi imediat
console.log("instructiune 4")
let a = 10
console.log('executa a = 10')


// Exemplu disapre dupa 5 sec

function hiddenMyDivAfter5Sec() {
  const myDiv = document.querySelector('#mydiv');

  function hiddenMyDiv() {
    myDiv.style.display = "none"
  }
  // hiddenMyDiv();
  setTimeout(hiddenMyDiv, 5 * 1000) // timeout este in milisec
}
hiddenMyDivAfter5Sec();


// Exemplu 2

console.log("instructiune 1")
setTimeout(function () {
  console.log("functia async: instructiune 3.1")
}, 100)
setTimeout(function () {
  console.log("functia async: instructiune 3.2")
}, 5)
setTimeout(function () {
  console.log("functia async: instructiune 3.3")
}, 10)
setTimeout(function () {
  console.log("functia async: instructiune 3.4")
}, 0)
console.log("instructiune 2")


// Task/Callback queue - astepta callback-urile sa fie executate