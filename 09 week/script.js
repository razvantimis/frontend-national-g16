console.log('Week 9');

// render initial users

getUsers();

function renderListItem(userData) {
    const li = document.createElement('li');
    li.innerText = `${userData.last_name} ${userData.first_name}`;
    const ol = document.getElementById('entries');
    ol.appendChild(li);
}

function renderUsers(data) {
    for (const user of data) {
        console.log(user);
        renderListItem(user);
    }
}

function processRespose(response) {
    return response.json();
}

function getUsers() {
    fetch('https://contact-agenda-rest-api.herokuapp.com/users')
        .then(processRespose)
        .then(renderUsers);
}

// add new user


function getNewUserData(data) {
    console.log(data);
}

function sendNewUser() {
    const newUser = {
        first_name: 'Ion',
        last_name: 'Pop'
    };

    console.log(newUser, JSON.stringify(newUser));

    fetch('https://contact-agenda-rest-api.herokuapp.com/users', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(newUser) 
    })
        .then(processRespose)
        .then(getNewUserData)
}

document.getElementById('send').addEventListener('click', sendNewUser);