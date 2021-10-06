// # Shop list

// 1. Definiam o lista de cumparaturi

var item1 = {
  pret: 10,
  cantitate: 2,
  nume: 'Lapte'
}

var shopList = []; // un array gol

shopList.push(item1)

var item2 = {
  pret: 40,
  cantitate: 2,
  nume: 'Vin'
}
shopList.push(item2);

var item3 = {
  pret: 5,
  cantitate: 2,
  nume: 'Faina'
}

shopList.push(item3);

shopList.push({
  pret: 5,
  cantitate: 1,
  nume: 'Apa'
})

console.log(shopList)



// 2. Vom calcula suma totala de plata

// calculam totalul de plata pe un singur item din lista

// index=index+1 <=> index++

var totalPlata = 0;

for (var index = 0; index < shopList.length; index = index + 1) {
  var item = shopList[index]
  var total = item.pret * item.cantitate;
  console.log(total)
  totalPlata = totalPlata + total;
}

console.log("totalPlata = ", totalPlata)

/*
index 0
 item = {
  pret: 10,
  cantiate: 2,
  nume: 'Lapte'
}
total = 10 * 2

index 1
 item = {
  pret: 40,
  cantiate: 2,
  nume: 'Vin'
}
total = 40 * 2

*/
