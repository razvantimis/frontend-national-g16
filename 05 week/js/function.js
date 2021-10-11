// 6. Function basic

// f(x) = x + 1
// f(2) = 3
// f(4) = 5

// definim functia folosind function urmat de numele ei
// iar intre paranteze punem parametri
// {} este corpul functiei
// By default o functie returneaza undefined
// "return" ne ajuta sa returnam o valoare calculata din functie
// Odata ce se executa "return" , se termina executia functie, codul de dupa nu se mai executa
function f(x) {
  console.log("inaite x=", x);
  x = x + 1;
  console.log("dupa x=", x);
  return x;
}
console.log("f(2) = ", f(2))

var result = f(10);


// afiseaza un mesaj sau erroare
// o functie ne ajuta sa refolosim codul
function log(razvanA, msg) {
  console.log("type=", razvanA);
  console.log("msg=", msg);

  switch (razvanA) {
    case "debug":
      console.log("[debug]:", msg)
      break;
    case "error":
      console.error("[error]:", msg)
  }
}

log("debug", "User a dat click pe login button")
log("error", "Nu merge logarea")
log("error", "Nu merge logarea")
log("error", "Nu merge logarea")
log("error", "Nu merge logarea")
log("error", "Nu merge logarea")
