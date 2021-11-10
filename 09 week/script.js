console.log('Week 9');

// render initial users
getUsers();

// update list every second
setInterval(getUsers, 1000);

function renderListItem(userData) {
    const li = document.createElement('li');
    li.innerText = `${userData.last_name} ${userData.first_name}`;
    const ol = document.getElementById('entries');
    ol.appendChild(li);

    const deleteElement = document.createElement('span');
    deleteElement.innerText = ' x';
    li.appendChild(deleteElement);

    // delete user

    deleteElement.addEventListener('click', function() {
        deleteUser(userData.id);
    });
}

function renderUsers(data) {
    document.getElementById('entries').innerHTML = '';

    for (const user of data) {
        // console.log(user);
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

function sendNewUser() {
    const newUser = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value
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
        .then(renderListItem)
}

document.getElementById('send').addEventListener('click', sendNewUser);

// delete element server call

function deleteUser(userId) {
    console.log(userId);
    fetch('https://contact-agenda-rest-api.herokuapp.com/users/' + userId, {
        method: "DELETE",
    }); 
}