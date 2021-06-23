// var car = {
//     name: 'lambo',
//     get getCarPrice() {
//         console.log("price is 2 crore");


//     },
//     set setCarName(CarName) {
//         this.name = CarName;
//     },
//     drive: function(name) {

//         console.log("i will drive my ", this.name);
//     }

// }

// console.log(car.getCarPrice);
// // car.setCarName = 'Porsche';
// console.log(car.name);
// car.drive("maruti");


//object constructors
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "Blue");
const myMother = new Person("Sally", "Doe", 49, "Green");

//object.assign and spread operator

// const obj1 = { name: 'sneha', gender: 'Female' }
// const obj2 = {}
//     // Object.assign(obj2, obj1);
//     // console.log(obj2);
// oj2 = {...obj1 } //spread operator
// console.log(oj2);
const arr = [1, 2, 3, 4, 5];
arr1 = [...arr];

console.log(arr1);

//rest parameters on object and arrays

function someOfAllItems(a, b, ...c)
//gives intial arguments to parameters before ... and rest will be saved in an array that will be assigned to c
{
    console.log(a + b + "  " +
        c);
}
someOfAllItems(1, 2, 3, 45, 67, 43);


//argument Objects

function someFunction() {
    console.log(arguments); //it will return as an object

}

someFunction(1, 2, 3, 4, 5);


//practical example 
function sum(a, b, ...c) {
    const resultingSum = c.reduce((acc, item) => {
        acc = acc + item;
        return acc;
    }, 0)
    return a + b + resultingSum;

}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 10, 100, 1000));