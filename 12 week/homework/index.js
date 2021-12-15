const isLogged = localStorage.getItem("logged");
if (!isLogged) {
  window.location = "/12%20week/homework/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  // after logout we can refresh the page
  localStorage.removeItem("logged");
  window.location = "/12%20week/homework/index.html";
});
