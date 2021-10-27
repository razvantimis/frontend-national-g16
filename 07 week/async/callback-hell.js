// Callback hell - http://callbackhell.com/

// Cum scoatem o valoare dintr-un cod async?

// prin referinta
function doWork1(obj) {
  setTimeout(function () { // avem cod async
    const result = 32;
    // ce putem aici?
    obj.result = result;
  }, 1000) // async care ruleaza dupa 1sec
}
var obj = {}
doWork1(obj)
console.log(obj); // aici avem obj.result? Nu avem, pentru inca nu sa executat
setTimeout(() => {
  console.log(obj) // aici avem obj.result? Il avem, 1s + 1 milisec
}, 1001)

// prin callback
function doWork1(callBackSucces) {
  setTimeout(function () { // avem cod async
    /// face ceva work - am facut ceva calcule complicate
    const result = 32;
    callBackSucces(result, 23);
  }, 1000) // async care ruleaza dupa 1sec
}
// Cum putem scoate result inafara doWork1?
// Solutia folosim un callback
doWork1(function (finishResult, param2) {
  console.log(finishResult, param2)
  // ce cod vream
})


// Youtube exemple
// Fiecare request depinde unul de altul
// 1. fetch dupa videos - title, id 
// 2. fetch pentru imgs - se aduce imaginea la fiecare video pe baza id de la video
// 3. fetch la un server de AI, care recunoste ce avem in imagine


function fetchVideos(callbackSucces) {
  setTimeout(function () {
    const result = [{ title: "Invata js", id: 1 }, { title: 'Cum sa manaci sanatos?', id: 2 }]
    callbackSucces(result);
    // return 10; nu se poate
  }, 2000)
}

function fetchImgs(videoIds, callbackSucces) {
  setTimeout(function () {
    // cerem la serve imgs pe baza videoIds
    console.log("fetchImgs#videoIds", videoIds);
    const result = [{ id: 1, img: 'https://picsum.photos/200' }, { id: 2, img: "https://picsum.photos/200" }]
    callbackSucces(result);
  }, 500)
}

function fetchImgAI(imgs, callbackSucces) {

  setTimeout(function () {
    // se face catre un server cu lista de imgs
    const result = [{ id: 1, find: 'cat' }, { id: 2, find: 'dog' }]
    callbackSucces(result);
  }, 5000)
}

fetchVideos(function (videos) {
  console.log("main", videos)

  fetchImgs(videos, function (resultImgs) {
    console.log('main', resultImgs)

    fetchImgAI(resultImgs, function (resultAI) {
      console.log('main', resultAI);
    })
  })
})

// putem folosi si separat fetchImgAI
fetchImgAI([{ id: 2, img: 'my-url' }], function (resultAI) {

})

// ca solutie la callback a aparut Promise
// Promisul primeste o functie executor , resolve pentru succes iar reject da fail 
function fetchVideos() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = [{ title: "Invata js", id: 1 }, { title: 'Cum sa manaci sanatos?', id: 2 }]
      resolve(result);
      // return 10; nu se poate
    }, 2000)
  });
}

function fetchImgs(videoIds) { // returneaza o promisiune ca ne da result imgs
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // cerem la serve imgs pe baza videoIds
      console.log("fetchImgs#videoIds", videoIds);
      const result = [{ id: 1, img: 'https://picsum.photos/200' }, { id: 2, img: "https://picsum.photos/200" }]
      resolve(result);
    }, 500)
  });
}

function fetchImgAI(imgs) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // se face catre un server cu lista de imgs
      const result = [{ id: 1, find: 'cat' }, { id: 2, find: 'dog' }]
      resolve(result);
    }, 5000)
  });

}

fetchVideos()
  .then(function (result) {
    console.log(result);
    return fetchImgs(result)
  })
  .then(function (resultImgs) {
    console.log(resultImgs)
    return fetchImgAI(resultImgs);
  })
  .then(function (resultAI) {
    console.log(resultAI);
  })


// es6 - async/await

// async function main() {
//   const videos = await fetchVideos()
//   const resultImgs = await fetchImgs(videos);
//   const resultAI = await fetchImgAI(resultImgs);
// }