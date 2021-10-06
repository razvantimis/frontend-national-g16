
// Flow 
// if conditie then executa cod
// conditie poate fi orice expresie logica. Ex x < 10
var x = 13
if (x < 10) { // va face console.log de x doar daca x < 10
  console.log(x)
} else {
  console.log('x este mai mare')
}


// switch

var type = "women"

switch (type) {
  case "men":
    console.log('is men')
    break;
  case 'women':
    console.log('is women')
    break;
}
// sunt la fel
if (type == "men") {
  console.log('is men')
} else if (type == "women") {
  console.log('is women')
}

// For
// ne ajuta sa repetam codul
const array = [1, 2, 3, 4, 5]
// array[2]
for (var index = 0; index < array.length; index++) {
  console.log('repeta', index)
}

for (var index = 0; index < 20; index++) {
  // repetam codul din interior de 20 de ori
}

// While / do {} while()
// while conditie { executa codul }
// nu trebuie sa sti cate repetari trebuie facute
var x = 0;
while (x < 10) {
  console.log('se repeta pana x < 10 este fals')
  x = x + 1;
}

var x = 0;
do {
  console.log(x);
  x = x + 1
} while (x < 10)