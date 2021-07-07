const butn = document.querySelector('button');
const input = document.querySelector('input');
const div = document.createElement('div');
const main_body = document.querySelector('.main_body');
butn.addEventListener('click', () => {
    let userid = input.value;
    if ((userid == null) || (userid == "")) {
        setTimeout(removedetails, 30000);
        return;
    } else {
        fetch(`https://api.github.com/users/${userid}`).then(res => (res.json())
            .then(data => {
                if (data.login == undefined) {
                    alert("This username is invalid ");
                    input.value = "";
                } else {

                    setTimeout(removedetails, 30000);
                    displayDetails(data);
                    console.log("User Login: " + data);



                }
            }))
    }

});

// function deleteText() {
//     setTimeout(removedetails(), 10000)
// }

function removedetails() {
    input.value = "";
    div.remove();
    console.log("deleted");
}

function displayDetails(data) {

    div.classList.add('details');
    div.innerHTML = '<br>' + " UserName: " + data.name + '<br>' + "User Login: " + data.login + '<br>' + "User URL : " + `<a href="${data.html_url}" target="_blank" rel="noopener noreferrer"> Github Profile </a>`;
    main_body.append(div);

}