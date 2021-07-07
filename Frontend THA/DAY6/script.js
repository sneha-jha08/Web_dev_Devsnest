//answer1::

var input1 = ['w3resource'];
var input2 = [1, 2, 4, 0];
console.log(Array.isArray(input1));
console.log(Array.isArray(input2));

//answer2

var input3 = [1, 2, 4, 0];
var input4 = [1, 2, [4, 0]];



var c = input3.reverse();
var d = input4.reverse();
console.log(c.reverse());
console.log(d.reverse());

array_Clone([1, 2, 4, 0]);
array_Clone([1, 2, [4, 0]]);


// //answer3::

// function first(arr[], n) {
//     console.log(arr.slice(0, n));

// }

a = [];
console.log(a.slice(0, 3));
b = [7, 9, 0, -2];
console.log(b.slice(0, 3));
c = [7, 9, 0, -2];
console.log(c.slice(0, 6));
d = [7, 9, 0, -2];
console.log(d.slice(0, -3));


// // //answer4::

// // function answer4(arr[]) {
// // }

answer4 = ["Red", "Green", "White", "Black"];
console.log(answer4.join(','));
console.log(answer4.join(' '));
console.log(answer4.join('+'));


// //answer5

arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 'b', 'b', 'b', 'a'];
b1 = arr1.sort(); //sorted array
console.log(b1); //printed array
Fre_num = []; //declared an empty array to store the individual numbers in sorted manner

var count = 1; //frequency counter
frequency_counter = []; //array for frequency counter
for (let i = 0; i < b1.length; i++) {

    if (b1[i] == b1[i + 1]) //if number== next number
    {
        count = count + 1; // increase count by 1


    } else if (b1[i] != b1[i + 1]) //if not equal then  
    {
        frequency_counter.push(count) //push count to frequency_counter
        Fre_num.push(b1[i]); //push last number to frequency number
        count = 1 //reset count to 1 

    }
}
console.log(Fre_num); //print array containing the individual elements
console.log(frequency_counter);

original_fre_count = frequency_counter.map(item => item * 1) //copies Frequency counter array
    // console.log(original_fre_count);
a = frequency_counter.sort((a, b) => b - a); // sorting frequency counter array to know the max
console.log(a);
original_fre_count.indexOf(a[0]); //gives the element with max frequency 
console.log(Fre_num[original_fre_count.indexOf(a[0])] + ' ' + a[0] + '(times)');