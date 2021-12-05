console.log("Week 12 - BOM");
// BOM stands for Browser Object Model
// In javascript files we refer to it by window
// https://developer.mozilla.org/en-US/docs/Web/API/Window
// below example are some attributes, methods and events common used on window

// 'load' event will be trigger only after all the resources like html,js and css files are done loading
window.addEventListener("load", () => {
  console.log("done loading");

  $("#send").click(() => {
    window.open("http://google.com");
  });
});

// ".screen" attribute provides information about current screen in which this browser windows is display
console.log(window.screen);

// ".innerWidth" attribute provides information about current dimension of the browser tab
console.log(window.innerWidth);

// 'resize' event will be trigger continuously during resize of the browser window, very useful when needing to change layouts
window.addEventListener("resize", () => {
  console.log(window.innerWidth);
});

document.getElementById("send").addEventListener("click", () => {
  // '.open' method will open a new tab at the specified url, the url argument is optional
  window.open("http://google.com");
});

document.getElementById("close").addEventListener("click", () => {
  // '.close' methods will close the current tab but only if the current tab was open by the '.open' method
  window.close();
});
