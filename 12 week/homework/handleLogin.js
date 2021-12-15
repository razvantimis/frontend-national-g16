const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

document.getElementById("login").addEventListener("click", () => {
  const email = inputEmail.value;
  const password = inputPassword.value;

  fetch(`https://contact-agenda-rest-api.herokuapp.com/users?email=${email}`)
    .then((r) => r.json())
    .then((users) => {
      if (users.length && users.find((user) => user.password === password)) {
        localStorage.setItem("logged", JSON.stringify(true));
        window.location = "/12%20week/homework/index.html";
      } else {
        alert("wrong user or password");
      }
      inputEmail.value = "";
      inputPassword.value = "";
    });
});
