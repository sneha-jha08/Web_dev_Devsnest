const body = document.querySelector('body');
const butn = document.querySelector('button');
butn.addEventListener('dblclick', () => {
    // const div = document.createElement('div');
    // div.classList.add('barrel_roll');
    // main_body.append(div);
    body.classList.add('do_a_barrel_roll');
    setTimeout(removeclass, 3000);
})

function removeclass() {

    body.classList.remove("do_a_barrel_roll");
    console.log('removed');

}