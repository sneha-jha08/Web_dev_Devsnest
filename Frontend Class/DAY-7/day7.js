//objects
//har cheez object hi hoti h

// objects can have properties and usage

//person bhi ek object h
//person ka properties kya kya h:::
//first name , last name, age, profession, working or not,studying or not

//person ke usage(methods)::can walk,sleep,study,talk, take bath

//car is also an object
//properties::name, brand, model, colors
//methods:: drive,acceleration,stay at rest

//creating objects with methods and functions

const person = {
    firstName: 'Sneha', //properties
    lastName: 'Jha', //properties
    gender: 'Female', //properties
    city: 'faridabad', //properties
    country: 'india', //properties
    working: { company: 'abc', basedIn: 'mumbai' },
    talk: function() { //method
        console.log('I am speaking something in JS class');
    },
    walk: function() { //method
        console.log('I love walking around parks and at around peaceful areas');
    },
    teaching: function() { //method
        console.log('I can teach frontend Concepts very well');
    }


}

// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person['city']);
// console.log(person.talk());


//create properties on the go
person.isStudy = false;

//multiple ways to create objects


const person1 = new Object({
    name: 'kirandeep',
    isStudy: true
});
// console.log(person1);
const anotherPerson = person;

anotherPerson['firstName'] = 'jyoti';
// console.log(person);

//for in loop-- for objects specifically
// for (const item in person) {
//     console.log(item, '--', person[item]);
// }


//use of object in object look in line24


// console.log(person.working.basedIn);
// console.log(Object.keys(person)); //returns all the keys in an object in the form of an array
// console.log(Object.values(person)); //Returns an array of values of the properties of an object
Object.freeze(person) //now we cant make any changes in the properties of this object

person.city = 'karnal'; // this didnt change the value from faridabad to karnal

// console.log(person.city) //prints faridabad

console.log(Object.getOwnPropertyNames(person)); //same as keys method

//