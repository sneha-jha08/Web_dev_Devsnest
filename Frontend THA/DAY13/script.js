const butn = document.querySelector('button');
const input = document.querySelector('input');
const div = document.createElement('div');
const main_body = document.querySelector('.main_body');
butn.addEventListener('click', () => {
    let userid = input.value;
    if ((userid == null) || (userid == "")) {
        return
    } else {
        fetch(`https://api.github.com/users/${userid}`).then(res => (res.json())
            .then(data => {
                if (data.login == undefined) {
                    alert("This username is invalid ");
                    input.value = "";
                } else {
                    // setTimeout(removedetails(), 5000);
                    displayDetails(data);
                    console.log("User Login: " + data.login);
                    console.log("User URL: " + data.html_url);
                    console.log("UserName: " + data.name);
                    // input.value = "";

                }
            }))
    }

});

function deleteText() {
    setTimeout(removedetails(), 1000)
}

function removedetails() {
    input.value = "";
    div.innerHTML = ""
    console.log("deleted");
}

function displayDetails(data) {

    div.classList.add('details');
    div.innerHTML = '<br>' + " UserName: " + data.name + '<br>' + "User Login: " + data.login + '<br>' + "User URL : " + `<a href="${data.html_url}" target="_blank" rel="noopener noreferrer"> Github Profile </a>`;
    main_body.append(div);
}