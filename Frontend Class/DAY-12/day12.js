// function a() {

//     console.log("a");
// }

// function b() {

//     console.log("b");
// }
// a();
// b();
var i = 0;

setInterval(() => {
    while (i < 1000) {
        console.log(i);
    }
    i++;
}, 100)