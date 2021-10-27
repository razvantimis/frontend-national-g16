// ## Digital Timer
// Mai multe timere care merg independent in acelasi timp
// Fara variabile globale


function createDigitalTimer(startSeconds) {
  // initializare
  const timerHTML = document.createElement('div');
  updateTimeHtml(timerHTML, 0, 0, 0) // face update la innerText cu 00:00:00

  // pornim timer-ul
  let timerValues = { // este folosita intre executile de la setInterval
    seconds: startSeconds,
    minutes: 59,
    hours: 0,
  }
  setInterval(function () {
    const newTimerValues = timeLogic(timerValues.seconds, timerValues.minutes, timerValues.hours);
    timerValues = newTimerValues // facem update la time

    updateTimeHtml(timerHTML, timerValues.seconds, timerValues.minutes, timerValues.hours);
  }, 1000);



  return timerHTML;
}

for (let index = 0; index < 20; index++) {
  const timer1 = createDigitalTimer(index * 10 % 60);
  document.body.append(timer1)
}


/**
 * Face update pe div timeHTML conform valorilor din parametru
 * @param {number} seconds
 * @param {number} minutes
 * @param {number} hours
 * @param {HTMLElemt} timeHTML unde face update
 */
function updateTimeHtml(timeHTML, seconds, minutes, hours) {
  timeHTML.innerText = `${formatTime(hours)}:${formatTime(
    minutes
  )}:${formatTime(seconds)}`;
}

/**
 * @param {number} value - numbarul de sec/min/hr
 * @returns {string} adauga 0 daca value este mai mic de 10
 */
function formatTime(value) {
  // console.log(seconds); // putem avem acces aici
  // seconds = 0
  if (value < 10) {
    return "0" + value;
  } else {
    return value;
  }
}

function timeLogic(seconds, minutes, hours) {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes === 60) {
    hours++;
    minutes = 0;
  }

  return {
    seconds: seconds,
    minutes: minutes,
    hours: hours,
  }
}


