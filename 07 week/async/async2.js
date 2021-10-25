// setInterval

// callback-ul se va executa odata la o secunda
const intervalId = setInterval(function () {
  console.log('callback: inaite de for')
  for (let index = 0; index < 999; index++) { // de testa cu 999999999999
    console.log('for big=', index)

  }
  console.log('callback: dupa de for')

}, 1000)

// pana trec 10s, cand il oprim => callback-ul se executa de 10 ori
setTimeout(function () {
  clearInterval(intervalId); // opreste/stop la setInterval
}, 10 * 1000)
console.log('cod syncron')