// 3. Recursive functions

// https://ro.wikipedia.org/wiki/Num%C4%83r_Fibonacci
// f(0) = 0 - insemna ca f(0) returneaza 0 
// f(1) = 1
// f(2) = f(1) + f(0) = 0 + 1 = 1
// f(3) = f(2) + f(1) = 1 + 1 = 2
// f(4) = f(3) + f(2) = 1 + 2 = 3
// f(5) = f(4) + f(3) = 3 + 2 = 5
// ...............
// f(n) = f(n-1) + f(n-2)

// Recursivitate - daca o functie se apeleaza pe ea insasi
function fib(n) {
  // sa avem conditie de oprire
  // fara oprire primim: Maximum call stack size exceeded
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);

}
// fib(5) => fib(4) + fib(3) => (fib(3) + fib(2)) + (fib(2) + fib(1)) ....

console.log("fib(0) =", fib(0))
console.log("fib(1) =", fib(1))

console.log("fib(5) =", fib(5))