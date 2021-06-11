// // to print we use console.log()

// // typeof is used to tell the type of the data that we're using

// console.log(typeof 42.44);

// console.log(typeof 'hello there');

// console.log(typeof undefined);

// console.log(typeof null); // bug in javascript

// // it shoudldnt have any type

// console.log(typeof true);

// console.log(typeof { name: 'javascript' });

// console.log(typeof false);

// console.log(typeof [1, 2, 3]);

// const x = 10;
// if (x > 5) {
//     console.log('number is greater')
// } else console.log('number is less than 10');

// const arr = [1, 2, 3, 4, 5];
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//     console.log(arr[i], i);
//     console.log(sum);
// }

// for (let item of arr) {
//     console.log(item);
// }

// arr.forEach((item, index) => {
//     console.log(item, index)
// })

//corercion from string to number
// // we can either use parseInt, Number(), unary operator +
// var x = '10';
// var y = 10;
// console.log(Number(x) + y); //typecast string to number
// // console.log(typeof x);
// // x = 'hello';
// // console.log(typeof x);
// console.log((+x) + y);

//coercion to boolean - either by using Boolean() or unary operator !!

// var x = 0;
// console.log(Boolean(x));
// console.log(!!(x));

//coercion to string- toString(), simple concatenation with empty string

// var x = 10;
// console.log(x.toString());
// console.log(x + '');

//comparison of 2 variables

// var x = 10;
// var y = 10;
// console.log(x == y);
// console.log(x === y); // over here the types of the variable is also checked

// //scope
// types of scope::
//     -global scope:: jo global scope mein h usko kahin se bhi access kar skte h 
//     -lexical scope::
//     -functional scope::
//     -block scope::

var x = 10; //global scope

function otherFunction() {
    var x = 20; //lexical scope means that the compiler will find the value out of its function
    console.log(x);
    let question = 'about html'; // this is an example of block scope where the scope of the variable 'question' is in the otherFunction(), and we cant access it  out of this function

    console.log(question);
}

otherFunction();

// difference between var and const


// we can change the value of var

var a = 10;
a = 20;
console.log(a);
// we cant change the value of const

const b = 100;
//b = 20; // this will throw an error


// to declare a variable we can use var or let
// var provides global scope 
//while let provides block scope