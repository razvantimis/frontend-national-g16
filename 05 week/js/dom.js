// DOM 
// 1. Ce este DOM? https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
// Ne ajutam sa manipulam in javascript partea de html/css

// 2. Cautarea elementelor
var toateH1 = document.getElementsByTagName('h1'); // cautare dupa html tag
// console.log(toateH1)

var paragraf2HTML = document.getElementById('paragraf2')
var paragraf2HTML2 = document.querySelector('#paragraf2')
// console.log(paragraf2HTML)

var post1Paragraf = document.querySelector(".post > p")
// console.log(post1Paragraf)

var posts = document.querySelectorAll('.post'); // selecteaza toate elementele
// console.log(posts);

const post2 = document.querySelector('article:nth-child(2)') // nu merge pentru ca este gresita sintaxa , returneaza null
// console.log(post2);

// 3. Modificare elementelor, operatii CRUD ( create, read, update, delete )

// 3.1  Create 

var titleH2 = document.createElement('h2'); // putem face orice element de html
titleH2.innerText = "My js title"; // punem continut in element

console.log(titleH2)

// ca sa afisam elementul in pagina html trebuie sa-l adaugm intr-un parinte ( <body> , <article> , <p>)
// parinte il cautam in html , cu querySelector
// parintele are o metoda append
var parentP2 = document.getElementById('paragraf2')
parentP2.append(titleH2)

// 3.1 Update
var post1Paragraf = document.querySelector(".post > p")
// innerText vs innerHTML
// innerText nu interpreteaza tagurile de html
// post1Paragraf.innerText = "<b>MY</b> javascript"
post1Paragraf.innerHTML = "<b>MY</b> javascript"

// Delete
var parentP2 = document.getElementById('paragraf2')
var titleH2 = document.querySelector('#paragraf2 > h2')

parentP2.removeChild(titleH2)

// 4. CSS manipulation

var parentP2 = document.getElementById('paragraf2')

// inline style
parentP2.style.backgroundColor = 'red';
parentP2.style.padding = '10px';
// nu merge
// parentP2.style = {
//   backgroundColor: 'red',
//   padding: "10px"
// }

// add clase
parentP2.classList.add('my-class-from-js')

// 5. Events

// orice face un user in browser este un event
// Exemple: 
// 1. user apasa o tasta de la tastatura
// 2. face scroll userul
// 3. click pe orice element 
// noi vrem sa le prindem si sa facem logica

// click pe orice element 

var btnEmail = document.querySelector("#btnEmail");
console.log(btnEmail)
// param1: type - https://developer.mozilla.org/en-US/docs/Web/Events
// param 2: functia care executa codul daca se da click
btnEmail.addEventListener("click", function(masina){ // nu conteaza numele
  console.log('test', masina)
})

// 1. user apasa o tasta de la tastatura

document.addEventListener('keydown', function(event){
  console.log('am pasat ceva', event.key)
  if(event.key == "Enter"){
    console.log('logica pentru enter key')
  }
})


// acelasi lucru
function onKeyDown(event){
  console.log('am pasat ceva', event.key)
  if(event.key == "Enter"){
    console.log('logica pentru enter key')
  }
}
document.addEventListener('keydown', onKeyDown)





