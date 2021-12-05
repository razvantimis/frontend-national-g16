console.log("JavaScript - Cookies");

// Cookies are persistent data that are stored on the client browser
// You can access the data in the cookies from one refresh to another
// The data that can be stored in document.cookie is text but its format is of key - value

// A general use case for cookies is storing user credentials for login functionality

console.log(document.cookie);

// if we have nothing stored in the cookie we redirect to login page
// check "handleLogin.js" for how cookies are set when user enters the credentials
if (!document.cookie) {
  window.location = "/12%20week/Login/login.html";
}

// if we have something in the cookies we need to check if we have the correct keys
if (document.cookie) {
  // because the "document.cookie" is a long string, in other to process it we need to split it into elements
  const cookiesElements = document.cookie.split("; ");
  console.log(cookiesElements);
  const cookieObj = {};

  // for every element in the cookie, we have a key and value separated by "="
  for (const element of cookiesElements) {
    const [key, value] = element.split("=");
    cookieObj[key] = value;
    console.log(key, value);
  }
  console.log(cookieObj);

  // after find out the keys existed in the cookie we need to check if name or password is missing
  if (!cookieObj.name || !cookieObj.password) {
    window.location = "/12%20week/Login/login.html";
  }
}

// to logout a user we need to remove the name and password cookies
// a cookie is removed when it is expired, by setting an expiration date in the past we will remove a cookie
document.getElementById("logout").addEventListener("click", () => {
  document.cookie = "password=123; ; Expires=Thu, 31 Oct 1990 07:28:00 GMT;";
  document.cookie = "name=123; ; Expires=Thu, 31 Oct 1990 07:28:00 GMT;";

  // after logout we can refresh the page
  window.location = "/12%20week/Login/index.html";
});
