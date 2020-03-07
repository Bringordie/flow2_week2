import 'bootstrap/dist/css/bootstrap.css'
let url = "http://localhost:3333/api/users";
let allusers;
let content = document.querySelector("#userTableInfo");


document.getElementById("showAll").addEventListener("click", (event) => {
    event.preventDefault();

    function loadUsersPage() {
        //Show all user
        fetch(url)
                .then(res => res.json())
                .then(data => {
                    allusers = data;
                    content.innerHTML = allUsers(data);
                });
    }
});

function allUsers(users) {
    let tableInfo = users.map(user => `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.age}</td><td>${user.gender}</td><td>${user.email}</td></tr>`);
    return tableInfo.join('');
}

document.getElementById("searchID").addEventListener("click", (event) => {
    event.preventDefault();
    let input = document.getElementById('searchByID').value;
     let getUser = allusers.filter(function (data) {
                return data.id === input;
            });
    allUsers(getUser);
    });
    
document.getElementById("DeleteID").addEventListener("click", (event) => {
    event.preventDefault();
    let input = document.getElementById('DeleteByID').value;
    let deleteuser = makeOptions('DELETE', { "id": input });
    
    fetch(url + input, deleteuser)
        .then(response => {
            return response.json();
        })
        .then(function (data) {
            if (data.status) {
                console.error('Error:', data);
                document.getElementById("addResponse").innerHTML = data.msg;
            } else {
                console.log('Success:', data);
                document.getElementById("addResponse").innerHTML = "ID: " + input + " was deleted";
            }
        });
    
    });
    
    
document.getElementById("addUser").addEventListener("click", (event) => {
    event.preventDefault();
    let name = document.getElementById('userName').value;
    let age = document.getElementById('userAge').value;
    let gender = document.getElementById('userGender').value;
    let email = document.getElementById('userEmail').value;
    let user = { "age": age, "name": name, "gender": gender, "email": email };
    
    let adduser = makeOptions('POST', user);
    fetch(url, adduser)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.status) {
                console.error('Error:', data);
                document.getElementById("deleteResponse").innerHTML = data.msg;
            } else {
                console.log('Success:', data);
                document.getElementById("deleteResponse").innerHTML = name + " was given ID: " + data.id;
            }
        });
    
    });