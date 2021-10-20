# The Player

1.  Definiti un container de dimensiuni fixe ( de exemplu height: 400, width: 400) unde puteti playerul - il numim gameContainer
2.  Player sa poate misca in toate directile ( incepeti doar cu o directie )
3.  Un player nu poate iesi inafara gameContainer ( de la punctul 1)

# Tips

1. un div cu style este gameContainer
2. document.addEventListener("keydown", function(){
  // folositi position absolute
})
 <div id="gameContainer"> 
   <div id="player"></div> // folositi position absolut si schimbat top si left

</div>
3. Folositi if-uri

## Optional

1. Adaugati abstacole, puneti cateva div-uri ( dimensiuni fixe cu anumita culoare) in gameContainer, pot fi random puse in container. ( +1 activitate )
2. Player daca intalneste un obstacol, nu poate trece de el ( +1 activitate)
3. Adaugam numar de vieti la player
