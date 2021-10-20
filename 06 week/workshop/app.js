// ## Rock, paper, scissors

// Avem doi jucatori si fiecare face o alegere din cele trei variante ( Rock, paper, scissors )
// Trebuie sa avem alegerile si sa afisam cine castiga

// Pasi de implementare:

// 1. Un jucator va fi PC iar celalalt noi (User)
// 2. PC: Sa facem o lista cu variantele din care PC alege random
// 3. User: va avea 3 button cu optiunile si el alege una dintre ele
// 4. Trebui sa comparam alegerile si sa afisam rezultatul, adica cine castiga
function getRandomChoice() {
  let choice = ["rock", "paper", "scissor"];
  // cum putem obtine un index random din lista de mai sus, adica 0 si 2 random
  let indexRandom = Math.floor(Math.random() * 3);
  // console.log("indexRandom", indexRandom);
  let computerChoice = choice[indexRandom];
  return computerChoice;
}

console.log(getRandomChoice());

function playGame(userChoice) {
  let computerChoice = getRandomChoice();

  console.log("computerChoice =", computerChoice);
  console.log("userChoice =", userChoice);

  let result = getWinner(userChoice, computerChoice);
  return result;
}

// Cum scapam de codul duplicat din createUserUi?

function createUserUi() {
  let resultDiv = document.createElement("div");
  document.body.append(resultDiv);

  let buttonRock = document.createElement("button");
  buttonRock.innerText = "Rock";
  document.body.append(buttonRock);
  buttonRock.addEventListener("click", function () {
    console.log("User a dat click Rock");
    const result = playGame("rock");
    resultDiv.innerText = result;
  });

  let buttonPaper = document.createElement("button");
  buttonPaper.innerText = "Paper";
  document.body.append(buttonPaper);
  buttonPaper.addEventListener("click", function () {
    console.log("User a dat click Paper");
    const result = playGame("paper");
    resultDiv.innerText = result;
  });

  let buttonScissor = document.createElement("button");
  buttonScissor.innerText = "Scissor";
  document.body.append(buttonScissor);
  buttonScissor.addEventListener("click", function () {
    console.log("User a dat click Scissor");
    const result = playGame("scissor");
    resultDiv.innerText = result;
  });
}

createUserUi();

// va returna cine a castigat
// Returnam User win | PC Win | Egal
function getWinner(userChoice, computerChoice) {
  switch (userChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return "Egal";
        case "paper":
          return "PC Win";
        case "scissor":
          return "User Win";
        default:
          console.log("Valori incomparabile");
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          return "User Win";
        case "paper":
          return "Egal";
        case "scissor":
          return "PC Win";
        default:
          console.log("Valori incomparabile");
      }
      break;
    case "scissor":
      switch (computerChoice) {
        case "rock":
          return "PC Win";
        case "paper":
          return "User Win";
        case "scissor":
          return "Egal";
        default:
          console.log("Valori incomparabile");
      }
      break;
    default:
      console.log("Valori incomparabile");
  }
}
