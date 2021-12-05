console.log("Week 9");

// render initial users
getUsers();

// update list every second
// setInterval(getUsers, 1000);

// get user data from server
function getUsers() {
  // by default the fetch function will generate the server request with the method 'GET'
  fetch("https://contact-agenda-rest-api.herokuapp.com/users")
    .then(processResponse)
    .then(renderUsers);
}

function processResponse(response) {
  return response.json();
}

function renderUsers(data) {
  // before starting to render every user data we should clean up the users list container
  document.getElementById("entries").innerHTML = "";

  for (const user of data) {
    renderListItem(user);
  }
}

function renderListItem(userData) {
  const li = document.createElement("li");
  li.classList.add("list-item");
  li.innerText = `${userData.last_name} ${userData.first_name}`;
  const ol = document.getElementById("entries");
  ol.appendChild(li);

  // create a span element for the purpose of deleting the current element
  const deleteElement = document.createElement("span");
  deleteElement.innerText = " x";
  li.appendChild(deleteElement);

  // delete user event
  // we need to declare an anonymous function and pass it as the second parameter so that we have access to the 'userData'
  deleteElement.addEventListener("click", function () {
    deleteUser(userData.id);
  });
}

// delete element server call
function deleteUser(userId) {
  // in order for deletion to happened we need for the url to contain the id of the element we want to delete
  // we need to make sure that fetch is sending a server call with a server request that has the method type 'DELETE'
  fetch("https://contact-agenda-rest-api.herokuapp.com/users/" + userId, {
    method: "DELETE",
  });
}

// add new user event
document.getElementById("send").addEventListener("click", sendNewUser);

// add new user server call
function sendNewUser() {
  // before we can add a user we need to form the data that we need to store
  // we use the values in the inputs to generate the final object that will be the payload for the server call
  const newUser = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
  };

  // because we send data to a server that accepts JSON formatting we need to set the server request header attributes accordingly
  // because we want to create a new entity/user on the server data base, it is a standard to make the sever request with has the method type 'POST'
  fetch("https://contact-agenda-rest-api.herokuapp.com/users", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    // on the http protocol we can send only text
    // in order to send the javascript object 'newUser' we have to transform it into a string
    // we can use 'JSON' utility to transform from any javascript data type to a string but keeping its structure in the string format
    body: JSON.stringify(newUser),
  })
    .then(processResponse)
    .then(renderListItem);
}
