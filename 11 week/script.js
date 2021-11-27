console.log("11 Week - Promises");
// Task requirements
// Make sure step2 is called after step1 is finished and step3 is called after step2 is finished, regardless of the delay we choose in the setTimeout
// documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

function step1(callback) {
  console.log("start step 1");
  setTimeout(function () {
    console.log("finish step 1");
    callback();
  }, 1000);
}

function step2(callback) {
  console.log("start step 2");
  setTimeout(function () {
    console.log("finish step 2");
    callback();
  }, 500);
}

function step3() {
  console.log("start step 3");
  setTimeout(function () {
    console.log("finish step 3");
  }, 2000);
}

// We can see that if we were to expand on the idea we will have a series of callback one in another
// This is called a callback hell
step1(function () {
  step2(function () {
    step3();
  });
});

// Promises to the rescue
// They were invented for the purpose of dealing with asynchronous code that is chained in a serious of steps
// One thing to note about a promise, it can only be resolved once

function step1Promise(shouldRejectStep2) {
  // to create a promise you need to instantiate from the 'Promise' class and provide to the constructor a function that contains you async code
  return new Promise(function (resolve, reject) {
    console.log("start step 1 promise");
    setTimeout(function () {
      console.log("finish step 1 promise");
      // calling 'resolve' you will make sure that at this point the promise will move to the next point in the chain of async code
      // 'resolve' can be called in a callback function like this
      // 'resolve' can pass data to the next step in the promise chain
      resolve(shouldRejectStep2);
    }, 1000);
  });
}

function step2Promise(shouldReject) {
  return new Promise(function (resolve, reject) {
    console.log("start step 2 promise");
    if (shouldReject) {
      // reject will stop the promise chain
      // you can pass data in reject and will be used in the catch method of the promise chain
      reject("reject in step 2");
    }
    setTimeout(function () {
      console.log("finish step 2 promise");
      resolve();
    }, 500);
  });
}

function step3Promise() {
  return new Promise(function (resolve, reject) {
    console.log("start step 3 promise");
    setTimeout(function () {
      console.log("finish step 3 promise");
      resolve();
    }, 2000);
  });
}

// depending on the parameter of 'step1Promise' we will go through all the steps of we will reject at "step1Promise"
step1Promise(false)
  .then(step2Promise)
  .then(step3Promise)
  // the callback function passed to the 'catch' method will be called if any of the chained promises will reject
  .catch(function (error) {
    console.log(error);
  });
