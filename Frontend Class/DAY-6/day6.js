// this file is about arrays in javascript



a1 = [10, 1, 12, 30, 46, 30, 30, 30, 30];

b1 = [6, 7, 8, 9];

c1 = [1, , 1, 1, 1];



//accessing the elements

console.log(a1[4]);

console.log(a1.concat(b1)); // returns a new array aftr concenation

console.log(a1.join('')); //returns a string after joining the elements with the string between the () 

console.log(a1.slice(1, 3)); //returns new array between that range

console.log(a1.indexOf(30)); // returns the index of  the number between the ()

console.log(a1.lastIndexOf(3)); // returns the last index of  the number between the () in case there is repitition in the array. 



// iteration



a1.forEach((item, index) => {

    console.log(item, index);

});



for (let item of a1) {
    console.log(item);

}

for (let index in a1) {

    console.log(index, a1[index]);
}



for (let i = 0; i < array.length; i++) {

    console.log(i, a1[i]);

}



console.log(a1.some(item => item === 10)); //will return true if even a single element holds true for the condition

console.log(c1.every(item => item === 1)); //will return true if every element holds true for the condition

console.log(a1.filter(item => item === 2)); //it'll filter the value present in the () and will return a new array after filtering the element,btu wont change the original array



console.log(a1.map(item => item = 20)); //it'll return a new array after assigning the statement present after =>, to each element in the array   





const reduceFn = a1.reduce((acc, item) => {

        acc = acc + item;

        return acc; // acc= accumlator, this function will return a single value either sum/difference/max/min according to the condtion in the {} 

    }, 0) // over here 0 tells the compiler of the initial value of acc

console.log(reduceFn);



//mutating list


console.log(b1.pop()); //returns the last element and removes it as well from the array  

console.log(b1.push(12)); //Appends new elements to the end of an array, and returns the new length of the array.

console.log(b1.reverse()); //Reverses the elements in an array in place. // changes original array



list = ['a', 'c', 'b', 'z', 'n', 'x']

list1 = [1, 11, 2]



console.log(list.sort()); //Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

console.log(list1.sort((a, b) => a - b)); //returns in ascending order 

console.log(list1.sort((a, b) => b - a)); //returns in descending order 

//General Methods

console.log(a1.unshift(40)); //Inserts new elements at the start of an array, and returns the new length of the array.

console.log(a1.shift()); //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log(a1.isArray()); //tells us if the argument is an array

e1 = ['this is an array'];

console.log(e1.isArray())