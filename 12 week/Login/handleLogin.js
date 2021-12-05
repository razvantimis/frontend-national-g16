console.log(document.cookie);

const inputName = document.getElementById("name");
const inputPassword = document.getElementById("password");

const PASSWORD_CHECK = "123";

document.getElementById("login").addEventListener("click", () => {
  const name = inputName.value;
  const password = inputPassword.value;

  if (name && password === PASSWORD_CHECK) {
    // for every new key in the cookie we need to use "document.cookie"
    // we can't set more then a cookie at a time
    document.cookie = `name=${name}`;
    document.cookie = `password=${password}`;

    // after successful login we can redirect the user to the home page
    window.location = "/12%20week/Login/index.html";
  }
});
