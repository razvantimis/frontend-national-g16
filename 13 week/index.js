import { getCurrentDate, getCurrentDateWithFormat } from "./utils/date";

console.log("Web Pack Test");

const sendButton = document.getElementById("get-date");
const sendButtonFormat = document.getElementById("get-date-format");
const text = document.getElementById("date");

sendButton.addEventListener("click", () => {
  text.innerText = getCurrentDate();
});

sendButtonFormat.addEventListener("click", () => {
  text.innerText = getCurrentDateWithFormat();
});
