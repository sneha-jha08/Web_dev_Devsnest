// // function sum(a, b )  
// // {
// //     // console.log(a + b);
// //     return a + b;
// // }
// // // const sum = function sumOfTwoNumbers(a, b) {
// // //         // console.log(a + b);
// // //         return a + b;
// // //     } //this is function expression

// // // arrow function

// // const sum = (a, b) => {
// //     console.log("I am an arrow function");
// //     return a + b
// // }
// console.log(sum(10));
// console.log(sum(100, 249));
// // console.log(sum(30, 40));
// // console.log(sum(70, 80));

// // function way1() { console.log(this) } //isme execution context alag se ban jaata h
// // // way1();

// // const obj = { mymethod: way1 }
// // console.log('Inside an Object', obj.mymethod());
// // const way2 = () => { console.log(this) }; //alag se execution context create nhi krta
// // // way2();


// // default parameter

// function sum(a, b = 20) //over here b has a default value of 20//agar koi value mention nhi kiya toh default value use krega varna normal arguments hi use krega 
// {
//     // console.log(a + b);
//     return a + b;
// }
// console.log(sum(10));
// console.log(sum(100, 249));


// //callback function


// function outer(a, callback) {
//     const c = callback();
//     // console.log("I am outer function");
//     return a + c;
// }

// function inner() {
//     // console.log("I am inner function");
//     const b = 30;
// }
// outer(20, inner);


// setTimeout(() => {
//     console.log("i am in settimeout")
// }, 3000); //this will run after 3 secs

//koi task karvana h but pehle kisi aur task ke complete hone ka wait krte ho

//yahan pehle inner function execeute hoga and then outer function
function greet(name) {
    console.log("hello world!");
}

function sayName(name) { console.log('hello' + ' ' + name) }
setTimeout(
    greet, 3000);
sayName("kiran");